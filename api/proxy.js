export default async function handler(req, res) {
  const { url, host, ...params } = req.query;

  if (!url || !host) {
    return res.status(400).json({ error: "Missing 'url' or 'host' query parameter" });
  }

  // ساخت query string از بقیه پارامترها
  const queryString = new URLSearchParams(params).toString();
  const targetUrl = `${url}?${queryString}`;

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'X-Rapidapi-Key': 'e02952a494msh109bdfd6e212e51p10efdfjsn89f4dd0e5542',
        'X-Rapidapi-Host': host,
      },
    });

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      res.status(response.status).json(data);
    } else {
      const text = await response.text();
      res.status(response.status).send(text);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
