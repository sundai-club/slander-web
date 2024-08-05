import { createRef } from "react";
import { create } from "zustand";
interface AudioStore {
  returnedId: string | null;
  isRecording: boolean;
  audioURL: string;
  audioBlob: Blob | null;
  audioRef: HTMLAudioElement | null;
  highlights: object[];
  isProccessing: boolean;
  setReturnedId: (returnedId: string | null) => void;
  setHighlights: (highlights: object[]) => void;
  setIsRecording: (isRecording: boolean) => void;
  setIsProccessing: (isProccessing: boolean) => void;
  setAudioURL: (url: string) => void;
  setAudioBlob: (blob: Blob | null) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  returnedId: null,
  isProccessing: false,
  isRecording: false,
  audioURL: "",
  audioBlob: null,
  audioRef: null,
  highlights: [],
  audioContainerRef: createRef() as MutableRefObject<HTMLDivElement>,
  setaudioContainerRef: (element: HTMLDivElement | null) => {
    if (!element) {
      return;
    }
    const newRef = createRef() as MutableRefObject<HTMLDivElement>;
    newRef.current = element;
    set({ audioContainerRef: newRef });
  },
  setHighlights: (highlights) => set({ highlights }),
  setReturnedId: (returnedId) => set({ returnedId }),
  // setAudioRef: (ref) => set({ audioRef: ref }),
  setIsRecording: (isRecording) => set({ isRecording }),
  setAudioURL: (audioURL) => set({ audioURL }),
  setAudioBlob: (audioBlob) => set({ audioBlob }),
  setIsProccessing: (isProccessing) => set({ isProccessing }),
}));
