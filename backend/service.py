"""Small stdlib HTTP bridge used before the full agent service is introduced."""
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import os

HOST = "127.0.0.1"
PORT = int(os.getenv("LIZAED_BACKEND_PORT", "8765"))

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path != "/health":
            self.send_error(404)
            return
        payload = {"ok": True, "service": "lizaed-python", "mode": "offline-ready"}
        encoded = json.dumps(payload).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def log_message(self, _format, *_args):
        return


def main():
    server = HTTPServer((HOST, PORT), Handler)
    print(f"LIZAED backend listening on http://{HOST}:{PORT}")
    server.serve_forever()

if __name__ == "__main__":
    main()
