import { create } from "zustand";

interface AudioStore {
  returnedId: String | null;
  isRecording: boolean;
  audioURL: string;
  audioBlob: Blob | null;
  highlights: any[];
  setReturnedId: (returnedId: String | null) => void;
  setHighlights: (highlights: any[]) => void;
  setIsRecording: (isRecording: boolean) => void;
  setAudioURL: (url: string) => void;
  setAudioBlob: (blob: Blob | null) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  returnedId: null,
  isRecording: false,
  audioURL: "",
  audioBlob: null,
  audioRef: null,
  highlights: [],
  setHighlights: (highlights) => set({ highlights }),
  setReturnedId: (returnedId) => set({ returnedId }),
  // setAudioRef: (ref) => set({ audioRef: ref }),
  setIsRecording: (isRecording) => set({ isRecording }),
  setAudioURL: (audioURL) => set({ audioURL }),
  setAudioBlob: (audioBlob) => set({ audioBlob }),
}));
