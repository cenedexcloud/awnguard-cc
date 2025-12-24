"use client";

import { useState, useEffect } from "react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(100);
  const [contrast, setContrast] = useState("normal");
  const [readableFont, setReadableFont] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [cursorSize, setCursorSize] = useState("normal");

  // Load saved preferences
  useEffect(() => {
    const savedPrefs = localStorage.getItem("accessibility-prefs");
    if (savedPrefs) {
      const prefs = JSON.parse(savedPrefs);
      setTextSize(prefs.textSize || 100);
      setContrast(prefs.contrast || "normal");
      setReadableFont(prefs.readableFont || false);
      setHighlightLinks(prefs.highlightLinks || false);
      setCursorSize(prefs.cursorSize || "normal");
      applySettings(prefs);
    }
  }, []);

  // Save preferences
  const savePreferences = (prefs: {
    textSize: number;
    contrast: string;
    readableFont: boolean;
    highlightLinks: boolean;
    cursorSize: string;
  }) => {
    localStorage.setItem("accessibility-prefs", JSON.stringify(prefs));
  };

  // Apply settings to the document
  const applySettings = (prefs: {
    textSize: number;
    contrast: string;
    readableFont: boolean;
    highlightLinks: boolean;
    cursorSize: string;
  }) => {
    const root = document.documentElement;

    // Text size
    root.style.fontSize = `${prefs.textSize}%`;

    // Contrast
    root.classList.remove("high-contrast", "dark-contrast", "light-contrast");
    if (prefs.contrast !== "normal") {
      root.classList.add(`${prefs.contrast}-contrast`);
    }

    // Readable font
    if (prefs.readableFont) {
      root.classList.add("readable-font");
    } else {
      root.classList.remove("readable-font");
    }

    // Highlight links
    if (prefs.highlightLinks) {
      root.classList.add("highlight-links");
    } else {
      root.classList.remove("highlight-links");
    }

    // Cursor size
    root.classList.remove("cursor-large", "cursor-extra-large");
    if (prefs.cursorSize !== "normal") {
      root.classList.add(`cursor-${prefs.cursorSize}`);
    }
  };

  const updateSettings = (newSettings: {
    textSize?: number;
    contrast?: string;
    readableFont?: boolean;
    highlightLinks?: boolean;
    cursorSize?: string;
  }) => {
    const prefs = {
      textSize,
      contrast,
      readableFont,
      highlightLinks,
      cursorSize,
      ...newSettings,
    };

    if (newSettings.textSize !== undefined) setTextSize(newSettings.textSize);
    if (newSettings.contrast !== undefined) setContrast(newSettings.contrast);
    if (newSettings.readableFont !== undefined) setReadableFont(newSettings.readableFont);
    if (newSettings.highlightLinks !== undefined) setHighlightLinks(newSettings.highlightLinks);
    if (newSettings.cursorSize !== undefined) setCursorSize(newSettings.cursorSize);

    applySettings(prefs);
    savePreferences(prefs);
  };

  const resetSettings = () => {
    const defaultPrefs = {
      textSize: 100,
      contrast: "normal",
      readableFont: false,
      highlightLinks: false,
      cursorSize: "normal",
    };
    setTextSize(100);
    setContrast("normal");
    setReadableFont(false);
    setHighlightLinks(false);
    setCursorSize("normal");
    applySettings(defaultPrefs);
    savePreferences(defaultPrefs);
  };

  return (
    <>
      {/* Floating accessibility button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-black hover:bg-gray-800 text-white p-3 rounded-r-lg shadow-lg transition-all duration-300 group"
        aria-label="Accessibility Options"
        title="Accessibility Options"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="7" r="1.3" fill="currentColor" />
          <line x1="7" y1="10.5" x2="17" y2="10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="10.5" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="14" x2="9.5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="14" x2="14.5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Accessibility panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-white rounded-r-2xl shadow-2xl w-80 max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="12" cy="7" r="1.3" fill="currentColor" />
                    <line x1="7" y1="10.5" x2="17" y2="10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="12" y1="10.5" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="12" y1="14" x2="9.5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="12" y1="14" x2="14.5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Text Size */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Text Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateSettings({ textSize: Math.max(80, textSize - 10) })}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="Decrease text size"
                  >
                    A-
                  </button>
                  <span className="flex-1 text-center font-medium">{textSize}%</span>
                  <button
                    onClick={() => updateSettings({ textSize: Math.min(150, textSize + 10) })}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="Increase text size"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Contrast */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Contrast
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => updateSettings({ contrast: "normal" })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      contrast === "normal"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => updateSettings({ contrast: "high" })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      contrast === "high"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    High
                  </button>
                  <button
                    onClick={() => updateSettings({ contrast: "dark" })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      contrast === "dark"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => updateSettings({ contrast: "light" })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      contrast === "light"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Light
                  </button>
                </div>
              </div>

              {/* Cursor Size */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Cursor Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => updateSettings({ cursorSize: "normal" })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      cursorSize === "normal"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => updateSettings({ cursorSize: "large" })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      cursorSize === "large"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Large
                  </button>
                  <button
                    onClick={() => updateSettings({ cursorSize: "extra-large" })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      cursorSize === "extra-large"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    XL
                  </button>
                </div>
              </div>

              {/* Toggle options */}
              <div className="space-y-3">
                <button
                  onClick={() => updateSettings({ readableFont: !readableFont })}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all flex items-center justify-between ${
                    readableFont
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span>Readable Font</span>
                  <span>{readableFont ? "✓" : ""}</span>
                </button>

                <button
                  onClick={() => updateSettings({ highlightLinks: !highlightLinks })}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all flex items-center justify-between ${
                    highlightLinks
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span>Highlight Links</span>
                  <span>{highlightLinks ? "✓" : ""}</span>
                </button>
              </div>

              {/* Reset button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
