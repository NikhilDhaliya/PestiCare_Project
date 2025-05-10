import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MainContent = () => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleDetectDisease = async () => {
    if (!selectedFile) {
      alert("Please upload an image first.");
      return;
    }
    setLoading(true);
    setResult(null);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setResult(data);
      } else {
        setResult({ error: data.error || "Prediction failed." });
      }
    } catch {
      setResult({ error: "Server error. Please try again." });
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 blur-md z-0]"
      ></video>
      <main className="flex flex-col items-center w-full px-4 mb-20">
        <h1 className="z-9 text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-2 tracking-tight">
          {t("title") || "AI Plant Disease Detection"}
        </h1>
        <p className="z-9 text-lg md:text-xl text-gray-800 mt-2 text-center mb-8">
          {t("subtitle") ||
            "Upload a leaf image to detect plant diseases instantly."}
        </p>
        <section className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-8 w-full max-w-md flex flex-col items-center border border-green-100">
          <label
            htmlFor="leaf-upload"
            className="w-full flex flex-col items-center justify-center border-2 border-dashed border-green-400 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-green-50 hover:border-green-600 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
            <span className="text-green-700 font-semibold">
              {preview ? "Change Image" : "Click to Upload or Open Camera"}
            </span>
            <input
              id="leaf-upload"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {preview && (
            <div className="mt-2 mb-4">
              <img
                src={preview}
                alt="Uploaded Preview"
                className="w-40 h-40 object-cover rounded-lg shadow-md border border-green-200"
              />
            </div>
          )}

          <button
            onClick={handleDetectDisease}
            className="mt-2 bg-green-600 text-white rounded-lg px-8 py-2 text-base font-semibold shadow-md transition-all duration-300 hover:bg-green-700 hover:scale-105 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Detecting..." : t("detect") || "Detect Disease"}
          </button>

          {/* Show prediction result */}
          {result && (
            <div className="mt-6 w-full text-center">
              {result && (
                <div
                  className={`mt-6 w-full text-center rounded-xl p-4 shadow-lg ${
                    result.simple_name?.toLowerCase().includes("healthy")
                      ? "bg-green-50 border border-green-200"
                      : "bg-yellow-50 border border-yellow-200"
                  }`}
                >
                  {result.error ? (
                    <div className="text-red-600 font-semibold">
                      {result.error}
                    </div>
                  ) : (
                    <div>
                      <div className="flex flex-col items-center justify-center gap-2">
                        <span className="text-4xl">
                          {result.simple_name?.toLowerCase().includes("healthy")
                            ? "✅"
                            : "⚠️"}
                        </span>
                        <div
                          className={`font-bold text-lg ${
                            result.simple_name
                              ?.toLowerCase()
                              .includes("healthy")
                              ? "text-green-700"
                              : "text-yellow-700"
                          }`}
                        >
                          {result.simple_name}
                        </div>
                      </div>
                      <div className="text-gray-700 mb-2 text-base">
                        Confidence: {(result.confidence * 100).toFixed(2)}%
                      </div>
                      <div className="text-green-800 font-medium text-base mt-2">
                        <span className="font-semibold block mb-1">
                          What to do:
                        </span>
                        {result.advice}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default MainContent;
