# Eaden Mic Test

A minimal browser-based mic test page using the Web Speech API. Tap the button to speak — it transcribes what you say and reads it back using the browser's speech synthesis.

## Stack

- Pure HTML/JS — no build step, no dependencies
- Web Speech API (`SpeechRecognition`, `SpeechSynthesisUtterance`)

## Running

```
python3 -m http.server 5000
```

Then open `http://localhost:5000` in a browser. The workflow **Start application** handles this automatically in Replit.

## Notes

- Microphone permission is required in the browser
- Works best in Chrome/Chromium (Web Speech API support varies by browser)
