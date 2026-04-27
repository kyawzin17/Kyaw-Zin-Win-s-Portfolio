import React, { useRef } from 'react';
import { gsap } from 'gsap';
// ၁။ TextPlugin ကို import လုပ်ပါ
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

// ၂။ Plugin ကို Register လုပ်ပါ (ဒါမှ GSAP က "text" property ကို နားလည်မှာပါ)
gsap.registerPlugin(TextPlugin, useGSAP);

interface TypingHeaderProps {
  textToType: string;
}

const TypingHeader: React.FC<TypingHeaderProps> = ({ textToType }) => {
  // ၃။ h2 element ကို လှမ်းကိုင်ဖို့ ref ဆောက်ပါ
  const headerRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ၄။ Animation ဖန်တီးပါ
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        delay: 2,
        duration: 2, // Animation ကြာချိန် (စက္ကန့်)
        text: {
          value: textToType, // ရိုက်ပြရမယ့် စာသား
          //delimiter: " " // တကယ်လို့ စာလုံးတစ်လုံးချင်းစီ (word-by-word) ပြချင်ရင် သုံးနိုင်ပါတယ်
        },
        ease: "none", 
        yoyo: true, // Animation ပြန်လည်လုပ်ရန်
        repeat: -1 // အဆုံးမဲ့ ပြန်လုပ်ရန်
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      <h6 ref={headerRef} className="text-main white-space-nowrap font-md font-mono">
      </h6>
    </div>
  );
};

export default TypingHeader;