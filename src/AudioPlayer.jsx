// src/AudioPlayer.jsx
import React, { useEffect, useState } from "react";
import { getSpeechBlob } from "./api";

export default function AudioPlayer({ text }) {
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!text) {
      setAudioUrl(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const blob = await getSpeechBlob(text);
        if (!cancelled) {
          const url = URL.createObjectURL(blob);
          setAudioUrl(url);
        }
      } catch (err) {
        console.error("AudioPlayer error:", err);
        if (!cancelled) setError("Audio load failed");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [text]);

  if (loading) {
    return <span>Loading audio...</span>;
  }
  if (error) {
    return <span style={{ color: "red" }}>{error}</span>;
  }
  if (!audioUrl) {
    return null;
  }
  return <audio controls src={audioUrl} />;
}
