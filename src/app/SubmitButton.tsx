import { Button } from "~/components/ui/button";
import { useAudioStore } from "./AudioStore"; // Ensure you have this hook properly imported
import { useEffect } from "react";

const SubmitButton = () => {
  const { audioBlob, returnedId, setHighlights, setReturnedId } =
    useAudioStore(); // Destructuring only what is necessary

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
      });
      const postjsonRes = await response.json();
      console.log(postjsonRes);
      setReturnedId(postjsonRes.id);

      if (!response.ok) {
        throw new Error("Failed to upload audio");
      }

      console.log("Audio uploaded successfully");
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };
  useEffect(() => {
    if (!returnedId) return;
    function checkProcessStatus() {
      const intervalId = setInterval(async () => {
        try {
          const response = await fetch(`/api/status/${returnedId}`, {
            method: "POST",
          });
          const data = await response.json();
          console.log(data);

          if (data.status != "processing") {
            clearInterval(intervalId);
            setHighlights(data.data.highlights);
            console.log(`Process ${returnedId} ${data.status}`);
          }
        } catch (error) {
          console.error("Error checking process status:", error);
          clearInterval(intervalId);
        }
      }, 5000);
    }

    // Usage
    checkProcessStatus();
  }, [returnedId]);
  return (
    <>
      <Button onClick={uploadAudio}>Submit</Button>
    </>
  );
};

export default SubmitButton;
