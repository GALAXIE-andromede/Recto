export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Méthode non autorisée' });
  }

  const body = req.body || {};
  const question = String(body.question || body.prompt || '').trim();
  if (!question) {
    return res.status(400).json({ ok: false, error: 'Question manquante' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      ok: false,
      error: 'Clé GEMINI_API_KEY non détectée sur Vercel. Redéployez le projet après l’avoir enregistrée.'
    });
  }

  const contexteCours = [body.sectionName, body.courseName].filter(Boolean).join(' — ');
  const systemText =
    "Tu es le tuteur pédagogique de l'application Recto pour les élèves préparant l'Examen d'État (Exétat) en RDC. " +
    (contexteCours ? `Matière actuelle : ${contexteCours}. ` : '') +
    "Réponds de manière claire, structurée, concise et encourageante en français.";

  const contents = [];
  if (Array.isArray(body.history)) {
    body.history.slice(-4).forEach((item) => {
      if (item && item.q && item.a && item.q !== question) {
        contents.push({ role: 'user', parts: [{ text: String(item.q) }] });
        contents.push({ role: 'model', parts: [{ text: String(item.a) }] });
      }
    });
  }
  contents.push({ role: 'user', parts: [{ text: question }] });

  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemText }] },
          contents
        })
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        error: data.error?.message || 'Erreur API Gemini'
      });
    }

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Aucune réponse générée.';
    return res.status(200).json({ ok: true, answer });
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'Erreur de connexion à Gemini' });
  }
}
