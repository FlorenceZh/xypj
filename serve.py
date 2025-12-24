#!/usr/bin/env python3
"""
简单的本地HTTP服务器脚本，用于测试H5页面
"""

import http.server
import socketserver
import argparse
import os
import webbrowser
import threading
import time

PORT = 8080

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server():
    handler = MyHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), handler)
    print("本地服务器已启动")
    print(f"📍 访问地址: http://localhost:{PORT}")
    print(f"🌐 局域网访问: http://{get_local_ip()}:{PORT}")
    print(f"\n✨ 正在浏览器中打开...")

    # 3秒后自动打开浏览器
    def open_browser():
        time.sleep(3)
        webbrowser.open(f'http://localhost:{PORT}')

    threading.Thread(target=open_browser).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.shutdown()
        print("\n👋 服务器已关闭")

def get_local_ip():
    import socket
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(('8.8.8.8', 80))
            local_ip = s.getsockname()[0]
            return local_ip
    except Exception:
        return "127.0.0.1"

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='启动本地HTTP服务器')
    parser.add_argument('--port', '-p', type=int, default=PORT, help='端口号 (默认: 8080)')
    args = parser.parse_args()
    PORT = args.port
    start_server()