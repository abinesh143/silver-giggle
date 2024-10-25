export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let bodyObject = req.body;

      const headersList = await req.headers;

      const origin = headersList.origin;

      if (
        origin === "http://localhost:3000" ||
        origin === "https://www.freeappmaker.pro"
      ) {
        const requestHeaders = {
          "x-rapidapi-key":
            "2cb14ccb8bmsh812b2bb327af25dp1768eejsn66326b9649eb",
          "Content-Type": "application/json",
        };

        const response = await fetch(
          "https://mojipop.p.rapidapi.com/api/Render/Gif",
          {
            method: "POST",
            body: bodyObject,
            headers: { ...requestHeaders },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error from API:", errorData);
          return res.status(response.status).json({ error: errorData });
        }

        const responseData = await response.json();

        return res.status(200).json({ message: "Success", data: responseData });
      } else {
        return res.status(401).json({ error: "UnAuthorised" });
      }
    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
