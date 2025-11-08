export default async function handler(req, res) {
  const targetUrl = req.query.url;
 const host = req.query.host;
  if (!targetUrl) {
    return res.status(400).json({ error: "Missing 'url' query parameter" });
  }

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'X-Rapidapi-Key': '26d6bc2669msh34bc749da31f3a5p10fb9ajsnbbbf46a26c5d',
        'X-Rapidapi-Host': host,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
