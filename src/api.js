// src/api.js

const BASE_URL = "http://127.0.0.1:8000";  // change if your backend is hosted somewhere else

export async function transcribeAudio(audioBlob) {
  const form = new FormData();
  form.append("file", audioBlob, "speech.webm");
  const response = await fetch(`${BASE_URL}/transcribe`, {
    method: "POST",
    body: form,
  });
  if (!response.ok) {
    throw new Error("Transcription failed");
  }
  return response.json(); // expects { transcript: "..." }
}

export async function correctGrammar(text) {
  const form = new FormData();
  form.append("text", text);
  const response = await fetch(`${BASE_URL}/grammar`, {
    method: "POST",
    body: form,
  });
  if (!response.ok) {
    throw new Error("Grammar check failed");
  }
  return response.json(); // expects { corrected: "..." }
}

export async function sendChat(message) {
  const form = new FormData();
  form.append("message", message);
  const response = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    body: form,
  });
  if (!response.ok) {
    throw new Error("Chat API failed");
  }
  return response.json(); // expects { reply: "..." }
}

export async function getSpeechBlob(text) {
  const form = new FormData();
  form.append("text", text);
  const response = await fetch(`${BASE_URL}/speak`, {
    method: "POST",
    body: form,
  });
  if (!response.ok) {
    throw new Error("TTS failed");
  }
  return response.blob(); // return audio blob
}
