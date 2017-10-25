import http.server
import socketserver
import webbrowser

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler
agent = webbrowser

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    agent.open_new_tab('http://localhost:8000/');
    httpd.serve_forever()
