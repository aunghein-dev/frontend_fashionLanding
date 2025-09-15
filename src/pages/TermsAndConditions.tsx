"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function TermsAndConditionsPage() {
  const [terms, setTerms] = useState<string>("");

  useEffect(() => {
    fetch("/terms.md")
      .then((res) => res.text())
      .then((text) => setTerms(text))
      .catch((err) => console.error("Failed to load terms.md:", err));
  }, []);

  return (
    <div className="pt-[180px] max-w-5xl mx-auto font-lexend leading-relaxed pb-[100px] text-gray-900 px-4 sm:px-0">

      <div className="prose prose-sm sm:prose-base">
        <ReactMarkdown>{terms}</ReactMarkdown>
      </div>
    </div>
  );
}
