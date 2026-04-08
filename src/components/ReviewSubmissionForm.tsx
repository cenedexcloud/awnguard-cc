"use client";

import { CheckCircle, Loader2, Send, Star } from "lucide-react";
import { useState } from "react";

interface ReviewFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  rating: number;
  review: string;
}

export default function ReviewSubmissionForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    rating: 5,
    review: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.review.trim()) {
      newErrors.review = "Please share your experience with us";
    } else if (formData.review.trim().length < 20) {
      newErrors.review = "Please provide at least 20 characters";
    }

    if (formData.rating === 0) {
      newErrors.rating = "Please select a rating";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "review",
          formData: {
            name: formData.name,
            email: formData.email,
            company: formData.company || "Not specified",
            role: formData.role || "Customer",
            rating: formData.rating,
            review: formData.review,
          },
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          rating: 5,
          review: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors((prev) => ({ ...prev, rating: "" }));
    }
  };

  if (status === "success") {
    return (
      <div className="bg-gradient-to-br from-[#1e4d7b]/5 to-[#ab772c]/5 p-8 md:p-12 rounded-2xl border border-[#1e4d7b]/10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-[#1e4d7b] mb-4">
            Thank You for Your Review!
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            We truly appreciate you taking the time to share your experience
            with AwnGuard. Your feedback helps us continue providing excellent
            service.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center px-6 py-3 bg-[#1e4d7b] text-white rounded-lg hover:bg-[#163d62] transition-colors"
          >
            Submit Another Review
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#1e4d7b]/5 to-[#ab772c]/5 p-8 md:p-12 rounded-2xl border border-[#1e4d7b]/10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          <span className="text-[#1e4d7b]">Share Your</span>{" "}
          <span className="text-[#ab772c]">Experience</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Had a great experience with AwnGuard? We&apos;d love to hear about it!
          Your review helps other customers and motivates our team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Rating Selection */}
        <div className="text-center">
          <label className="block text-sm font-medium text-[#1e4d7b] mb-3">
            How would you rate your experience?
          </label>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(null)}
                className="focus:outline-none focus:ring-2 focus:ring-[#ab772c] focus:ring-offset-2 rounded-full p-1 transition-transform hover:scale-110"
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  className={`w-10 h-10 transition-colors ${
                    star <= (hoveredRating ?? formData.rating)
                      ? "fill-[#ab772c] text-[#ab772c]"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
          {errors.rating && (
            <p className="text-sm text-red-500 mt-2">{errors.rating}</p>
          )}
        </div>

        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="review-name"
              className="block text-sm font-medium text-[#1e4d7b] mb-2"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="review-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-[#1e4d7b] focus:ring-2 focus:ring-[#1e4d7b]/20 outline-none transition-all bg-white`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="review-email"
              className="block text-sm font-medium text-[#1e4d7b] mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="review-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-[#1e4d7b] focus:ring-2 focus:ring-[#1e4d7b]/20 outline-none transition-all bg-white`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Company and Role Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="review-company"
              className="block text-sm font-medium text-[#1e4d7b] mb-2"
            >
              Company/Business{" "}
              <span className="text-gray-400 text-xs">(optional)</span>
            </label>
            <input
              type="text"
              id="review-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="ABC Properties"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e4d7b] focus:ring-2 focus:ring-[#1e4d7b]/20 outline-none transition-all bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="review-role"
              className="block text-sm font-medium text-[#1e4d7b] mb-2"
            >
              Your Role{" "}
              <span className="text-gray-400 text-xs">(optional)</span>
            </label>
            <input
              type="text"
              id="review-role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Property Manager"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1e4d7b] focus:ring-2 focus:ring-[#1e4d7b]/20 outline-none transition-all bg-white"
            />
          </div>
        </div>

        {/* Review Text */}
        <div>
          <label
            htmlFor="review-text"
            className="block text-sm font-medium text-[#1e4d7b] mb-2"
          >
            Your Review <span className="text-red-500">*</span>
          </label>
          <textarea
            id="review-text"
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your experience with AwnGuard. What services did you use? How was the quality of work? Would you recommend us?"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.review ? "border-red-500" : "border-gray-300"
            } focus:border-[#1e4d7b] focus:ring-2 focus:ring-[#1e4d7b]/20 outline-none transition-all bg-white resize-none`}
          />
          {errors.review && (
            <p className="text-sm text-red-500 mt-1">{errors.review}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            {formData.review.length}/500 characters
          </p>
        </div>

        {/* Error Message */}
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ab772c] text-white rounded-lg font-medium hover:bg-[#8f6324] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Your Review
              </>
            )}
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          By submitting this form, you agree that your review may be displayed
          on our website and marketing materials. We respect your privacy and
          will never share your email address.
        </p>
      </form>
    </div>
  );
}
