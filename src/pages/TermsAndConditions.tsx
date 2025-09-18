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
    <div className="pt-[120px] sm:pt-[180px] max-w-5xl mx-auto font-lexend leading-relaxed 
                    pb-[100px] px-5 xl:px-0 select-none">
    <h2 className="text-black-color text-3xl font-marcellus">Terms and Conditions</h2>

    <div className="border-b border-red-200 mb-10"></div>
    <div className="font-notosans leading-relaxed text-sm text-black-color [&_*]:text-black-color font-[400]">
      <ReactMarkdown
        components={{
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside space-y-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside space-y-4" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-2" {...props} />
          ),
        }}
      >
        {terms}
      </ReactMarkdown>
      </div>
      <p className="text-sm text-red-500 tracking-[0.05rem] mt-10">
        ဤ Terms & Conditions များသည် တဦးတယောက်အတွက် သတ်မှတ်ထားခြင်း မဟုတ်ဘဲ လုပ်ငန်း Process အတိုင်း သတ်မှတ်ထားသော စည်းမျဉ်းများဖြစ်ပါသည်။  
        ဝယ်ယူမှုအခါ အထက်ပါ အချက်အလက်များကို ဖတ်ရှု့ပြီး သဘောတူညီသည်ဟုယူဆပါသည်။
      </p>

      
    </div>
  );
}
