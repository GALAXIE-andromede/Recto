module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Méthode non autorisée' });
  }

  var body = req.body || {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ ok: false, error: 'Requête JSON invalide' });
    }
  }

  var question = String(body.question || body.prompt || '').trim();
  if (!question) {
    return res.status(400).json({ ok: false, error: 'Veuillez poser une question.' });
  }

  var apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      ok: false,
      error: 'Variable GEMINI_API_KEY absente sur Vercel. Ajoutez-la puis redéployez.'
    });
  }

  var contexte = [body.sectionName, body.courseName].filter(Boolean).join(' — ');
  var systemInstructionText =
    "Tu es le tuteur pédagogique de l'application Recto pour les élèves préparant l'Examen d'État (Exétat) en RDC. " +
    (contexte ? "Matière active : " + contexte + ". " : "") +
    "Réponds de manière claire, structurée, concise et encourageante en français.";

  var contents = [];
  if (Array.isArray(body.history)) {
    body.history.slice(-4).forEach(function (item) {
      if (item && item.q && item.a && item.q !== question) {
        contents.push({ role: 'user', parts: [{ text: String(item.q) }] });
        contents.push({ role: 'model', parts: [{ text: String(item.a) }] });
      }
    });
  }
  contents.push({ role: 'user', parts: [{ text: question }] });

  try {
    var response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemInstructionText }]
          },
          contents: contents
        })
      }
    );

    var data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        error: (data && data.error && data.error.message) || 'Erreur retournée par l’API Gemini'
      });
    }

    var candidates = (data && data.candidates) || [];
    var parts = (candidates[0] && candidates[0].content && candidates[0].content.parts) || [];
    var answer = parts
      .map(function (p) { return p && p.text ? p.text : ''; })
      .join('\n')
      .trim();

    if (!answer) {
      answer = 'Aucune réponse générée pour cette question.';
    }

    return res.status(200).json({ ok: true, answer: answer });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: 'Erreur de connexion au service Gemini'
    });
  }
};
