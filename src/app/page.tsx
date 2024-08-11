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
      className={`flex flex-col items-center justify-center text-white ${myFont.variable} flex-grow`}
      style={{
        backgroundImage: `url('/images/chucklebackground.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
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
