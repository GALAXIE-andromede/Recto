export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Question manquante' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Clé GEMINI_API_KEY non configurée sur Vercel' });
  }

  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: "Tu es le tuteur pédagogique de l'application Recto pour les élèves préparant l'Exetat en RDC. Réponds de manière claire, concise et encourageante en français."
              }
            ]
          },
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Erreur API Gemini' });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Aucune réponse générée.';
    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: 'Erreur de connexion au serveur IA' });
  }
}
