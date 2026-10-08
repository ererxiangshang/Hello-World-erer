const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const now = new Date();
  const timeString = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World - 我的第一个网站</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: white;
        }
        .container {
          text-align: center;
          padding: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .time {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-top: 30px;
          padding: 15px 30px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          display: inline-block;
        }
        .subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello World!</h1>
        <p class="subtitle">我是【你的名字】，我的第一个AI开发的网站</p>
        <div class="time">
          🕐 当前服务器时间：${timeString}
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`服务器已启动！访问地址：http://localhost:${PORT}`);
});
