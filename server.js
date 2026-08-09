const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `You are Eaden, a helpful voice study assistant. Reply briefly and clearly. User said: ${message}` }]
          }]
        })
      }
    );
    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't think of a reply.";
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ reply: "Something went wrong talking to Gemini." });
  }
});

app.listen(3000, () => console.log('Eaden server running'));
