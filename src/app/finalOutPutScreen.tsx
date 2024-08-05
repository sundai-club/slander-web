import { useAudioStore } from "./AudioStore";
// Add this declaration at the top of your file
declare global {
  interface Window {
    highlightTimeout?: NodeJS.Timeout;
  }
}

const PlayerComponent = () => {
  const {
    setAudioURL,
    setAudioBlob,
    highlights,
    audioContainerRef,
    isProccessing,
  } = useAudioStore();
  const setToHighlightTime = async (highlight) => {
    audioContainerRef.current?.pause();
    const start = Number(highlight.startSec);
    console.log(highlight);
    if (window.highlightTimeout) {
      clearTimeout(window.highlightTimeout);
    }
    window.highlightTimeout = setTimeout(async () => {
      audioContainerRef.current.currentTime = start;
      audioContainerRef.current?.play();
      setTimeout(
        () => {
          audioContainerRef.current?.pause();
        },
        Number(highlight.durationSec) * 1000,
      );
    }, 0);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 flex items-center space-x-4">
        <input
          type="file"
          name="file"
          accept=".mp3"
          onChange={async (e) => {
            if (e.target.files && e.target.files[0]) {
              setAudioURL(URL.createObjectURL(e.target.files[0])); // Set the audio URL
              setAudioBlob(e.target.files[0]); // Set the audio blob
            } else {
              alert("Upload failed");
            }
          }}
        />
      </div>

      {!isProccessing ? (
        <div className="flex flex-wrap justify-center gap-2 p-20">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-wrap justify-center">
              <button
                onClick={() => setToHighlightTime(highlight)}
                className="flex max-w-[30vw] items-center rounded-3xl bg-[#A9DAAE] font-normal shadow-md ring-1 ring-black ring-opacity-5 hover:bg-green-400"
              >
                <p className="max-w-[30vw] p-9 text-center text-xs text-black sm:text-lg md:text-xl">
                  {highlight.text.split(" ").map((word, index) => (
                    <span key={index}>{word} </span>
                  ))}
                </p>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3x m-10 flex flex-wrap items-center justify-center gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="gap-2 rounded-3xl bg-[#A9DAAE] p-20 font-normal shadow-md ring-1 ring-black ring-opacity-5"
            >
              <Spinner />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayerComponent;
const Spinner = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="mr-2 h-8 w-8 animate-spin fill-[#A9DAAE] text-gray-200"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
