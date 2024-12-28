const express = require("express");
const app = express();
const cors = require("cors");

// ミドルウェア設定
app.use(cors());
app.use(express.json());

// サインイン用のエンドポイント（POSTリクエストの場合）
app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  // サインイン処理（例えば、ユーザー認証）
  if (email === "example@example.com" && password === "password123") {
    res.status(200).json({ message: "サインイン成功", token: "your-token" });
  } else {
    res.status(401).json({ message: "認証失敗" });
  }
});

// サーバーを指定ポートで起動
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
