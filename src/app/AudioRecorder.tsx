import { Mic, Square } from "lucide-react";
import React, { useCallback, useRef } from "react";
import { Button } from "../components/ui/button";
import { useAudioStore } from "./AudioStore";

const AudioRecorder: React.FC = () => {
  const { isRecording, audioURL, setIsRecording, setAudioURL, setAudioBlob } =
    useAudioStore();
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable,
      );
      mediaRecorderRef.current.addEventListener("stop", handleStop);
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  }, [setIsRecording]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }, [isRecording, setIsRecording]);

  const handleDataAvailable = useCallback((event: BlobEvent) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  }, []);

  const handleStop = useCallback(() => {
    const blob = new Blob(chunksRef.current, { type: "audio/webm" });
    const url = URL.createObjectURL(blob);
    setAudioURL(url);
    setAudioBlob(blob);
    chunksRef.current = [];
  }, [setAudioURL, setAudioBlob]);

  return (
    <div className="flex flex-col items-center gap-2 space-y-4">
      <div className="flex space-x-2">
        <Button
          onClick={isRecording ? stopRecording : startRecording}
          variant={isRecording ? "destructive" : "default"}
        >
          {isRecording ? (
            <Square className="mr-2 h-4 w-4" />
          ) : (
            <Mic className="mr-2 h-4 w-4" />
          )}
          {isRecording ? "Stop Recording" : "Start Recording"}
        </Button>
      </div>
      {audioURL && (
        <audio controls src={audioURL}>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default AudioRecorder;
