import LetterGlitch from "./LetterGlitch/LetterGlitch";
import { useState, useEffect } from "react";
import CountUp from "./CountUp/CountUp";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [countDone, setCountDone] = useState(false);
  const [fadeText, setFadeText] = useState(false);
  const [fadeScreen, setFadeScreen] = useState(false);

  useEffect(() => {
    if (countDone) {
      // Fade teks
      const fadeTextTimer = setTimeout(() => setFadeText(true), 3000);

      // Fade seluruh screen
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 2000);

      // Unmount preloader setelah animasi fade selesai
      const hideTimer = setTimeout(() => setLoading(false), 3000);

      return () => {
        clearTimeout(fadeTextTimer);
        clearTimeout(fadeScreenTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [countDone]);

  return (
    loading && (
      <div
        className={`fixed z-[10000] flex h-screen w-screen items-center justify-center overflow-hidden bg-black transition-opacity duration-1000 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
        <div
          className={`absolute text-6xl font-bold text-white transition-all duration-1000 ${
            fadeText ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
            onEnd={() => setCountDone(true)}
          />
        </div>
      </div>
    )
  );
};

export default PreLoader;
