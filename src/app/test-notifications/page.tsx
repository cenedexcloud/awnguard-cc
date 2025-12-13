'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

interface TestResult {
  status: number | string;
  statusText: string;
  data: {
    success?: boolean;
    emailId?: string;
    smsId?: string;
    error?: string;
    message?: string;
  };
  timestamp: string;
}

export default function TestNotificationsPage() {
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const testNotifications = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          formData: {
            name: 'Test User',
            email: 'test@example.com',
            phone: '(555) 123-4567',
            service: 'Awning Cleaning',
            message: 'This is a test notification from the diagnostic page'
          }
        })
      });

      const data = await response.json();
      setResult({
        status: response.status,
        statusText: response.ok ? 'Success' : 'Error',
        data: data,
        timestamp: new Date().toLocaleString()
      });
    } catch (error) {
      const err = error as Error;
      setResult({
        status: 'Error',
        statusText: 'Network Error',
        data: { error: err.message },
        timestamp: new Date().toLocaleString()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Notification System Test
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Current Configuration</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> morrisonmicheal606@gmail.com</p>
            <p><strong>SMS:</strong> (310) 893-9219 (Google Fi)</p>
            <p><strong>SMS Gateway:</strong> 3108939219@msg.fi.google.com</p>
            <p className="text-sm text-amber-600 mt-2">⚠️ Note: Google Fi email-to-SMS can be unreliable</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Send Test Notification</h2>
          <p className="text-gray-600 mb-4">
            Click the button below to send a test email and SMS notification.
            This will help diagnose if the system is working correctly.
          </p>

          <button
            onClick={testNotifications}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Test Notification'}
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Result</h2>

            <div className={`p-4 rounded-lg mb-4 ${
              result.status === 200 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <p className="font-semibold">
                Status: <span className={result.status === 200 ? 'text-green-700' : 'text-red-700'}>
                  {result.statusText} ({result.status})
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-1">Time: {result.timestamp}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">Response Data:</p>
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            </div>

            {result.data.emailId && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">✓ Email Sent Successfully</p>
                <p className="text-sm text-blue-700">Email ID: {result.data.emailId}</p>
                <p className="text-sm text-blue-700 mt-2">
                  Check your inbox at <strong>morrisonmicheal606@gmail.com</strong>
                  <br />
                  <em>(Check spam folder if not in inbox)</em>
                </p>
              </div>
            )}

            {result.data.smsId && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">✓ SMS Sent Successfully</p>
                <p className="text-sm text-green-700">SMS ID: {result.data.smsId}</p>
                <p className="text-sm text-green-700 mt-2">
                  Check your phone at <strong>(310) 893-9219</strong>
                  <br />
                  <em>(SMS may take 1-5 minutes to arrive)</em>
                </p>
              </div>
            )}

            {result.data.error && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="font-semibold text-red-900 mb-2">❌ Error Occurred</p>
                <p className="text-sm text-red-700">{result.data.error}</p>
              </div>
            )}
          </div>
        )}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
          <h3 className="font-semibold text-yellow-900 mb-2">Troubleshooting Steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-yellow-800 text-sm">
            <li>Check Resend dashboard: <a href="https://resend.com/emails" target="_blank" rel="noopener noreferrer" className="underline">https://resend.com/emails</a></li>
            <li>Check Gmail spam/junk folder</li>
            <li>Wait 5-10 minutes for SMS (Google Fi can be delayed)</li>
            <li>Try sending manual test email to: 3108939219@msg.fi.google.com</li>
            <li>If SMS doesn't work, consider using Twilio instead</li>
            <li>Check server terminal for log messages</li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
