"use client";
import SubmitButton from "./SubmitButton";
import AudioRecorder from "./AudioRecorder";
import PlayerComponent from "./finalOutPutScreen";
import localFont from "next/font/local";
import Image from "next/image";
import StrategyInput from "./StrategyInput";
const myFont = localFont({
  src: "../../public/fonts/DM_Sans/DMSans-Italic-VariableFont_opsz,wght.ttf",
  variable: "--font-woff",
});

export default function HomePage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-gradient-to-b from-[#D1EDE0] to-[#7ABF8C] text-white ${myFont.variable}`}
    >
      <Image
        className="mt-2"
        src="/images/chucklebox.webp"
        alt="logo"
        width={400}
        height={100}
      />
      <div className="mt-20 flex min-h-screen flex-col items-center">
        <AudioRecorder />
        <PlayerComponent />
        <StrategyInput />
        <SubmitButton audioId={false} />
      </div>
    </main>
  );
}
