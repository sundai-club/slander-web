import { createRef } from "react";
import { create } from "zustand";
import { type MutableRefObject } from "react";

interface AudioStore {
  returnedId: string | null;
  isRecording: boolean;
  audioURL: string;
  audioBlob: Blob | null;
  audioRef: HTMLAudioElement | null;
  highlights: object[];
  strategy: string[];
  isProccessing: boolean;
  selectedStrategy: string;
  setSelectedStrategy: (selectedStrategy: string) => void;
  setStrategy: (strategy: string[]) => void;
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
  strategy: [],
  isRecording: false,
  audioURL: "",
  audioBlob: null,
  audioRef: null,
  highlights: [],
  selectedStrategy: "",
  audioContainerRef: createRef() as MutableRefObject<HTMLDivElement>,
  setSelectedStrategy: (selectedStrategy) => set({ selectedStrategy }),
  setStrategy: (strategy) =>
    set({
      strategy,
    }),
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
  setIsRecording: (isRecording) => set({ isRecording }),
  setAudioURL: (audioURL) => set({ audioURL }),
  setAudioBlob: (audioBlob) => set({ audioBlob }),
  setIsProccessing: (isProccessing) => set({ isProccessing }),
}));
