const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    // Collect the data
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // When the request is fully received
    req.on("end", () => {
      console.log("Received webhook data:", body);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Webhook received\n");
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Only POST requests are accepted\n");
  }
});

// Start the server on port 8000
server.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
