import { create } from "zustand";

interface AudioStore {
  isRecording: boolean;
  audioURL: string;
  audioBlob: Blob | null;
  setIsRecording: (isRecording: boolean) => void;
  setAudioURL: (url: string) => void;
  setAudioBlob: (blob: Blob | null) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  isRecording: false,
  audioURL: "",
  audioBlob: null,
  setIsRecording: (isRecording) => set({ isRecording }),
  setAudioURL: (audioURL) => set({ audioURL }),
  setAudioBlob: (audioBlob) => set({ audioBlob }),
}));
