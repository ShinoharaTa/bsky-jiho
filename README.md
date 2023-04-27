# bsky-jiho bot

Blueskyのタイムラインに時報を流します。  
時報の発報タイミングは0～360,000ms内（6分間）の間でランダムに設定され、その時のサーバー時刻を投稿します。  
エラー処理・ログ出力はしていません。  

## 実行手順

実行にあたっては`.env.example`を書き換えてください。  
以下の手順でデプロイします

```bash
cp .env.example .env
npm install
node index.js
```

## docker環境

https://github.com/ShinoharaTa/node-docker

使用方法はリポジトリの説明を読んで下さい
