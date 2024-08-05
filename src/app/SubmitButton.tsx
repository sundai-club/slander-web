import { Button } from "~/components/ui/button";
import { useAudioStore } from "./AudioStore"; // Ensure you have this hook properly imported

const SubmitButton = () => {
  const { audioBlob } = useAudioStore(); // Destructuring only what is necessary

  const uploadAudio = async () => {
    if (!audioBlob) {
      console.error("No audio to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", audioBlob, "recording.mp3");

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data", // This should not be set when using FormData
        },
        body: formData,
        // mode: "no-cors", // Remove this line, as it can cause issues with the request
      });

      if (!response.ok) {
        throw new Error("Failed to upload audio");
      }

      console.log("Audio uploaded successfully");
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  return (
    <>
      <Button onClick={uploadAudio}>Submit</Button>
    </>
  );
};

export default SubmitButton;
