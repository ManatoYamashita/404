# manapuraza.com - 404 Page not found and Bananas

![manapuraza-404](https://github.com/user-attachments/assets/6250b42e-c2dd-4087-9e7d-4245b6282d06)

[https://manapuraza.com/404](https://manapuraza.com/404)

## 概要

このプロジェクトは、`https://manapuraza.com`の404エラーページとバナナに関する情報を提供するウェブサイトです。ページが見つからない場合に、バナナについて学ぶことができます。

### デザイン

レスポンシブデザインにも対応しています。

<img src="https://github.com/user-attachments/assets/65340e52-5543-42a3-a88d-37a895a9205b" alt="mnprz-404_preview-pc" height="300" /> <img src="https://github.com/user-attachments/assets/f040323b-d9a0-4c57-8525-1a831d04e598" alt="mnprz-404_preview-mobile" height="300" />

## 使用技術

- Next.js(v15)
- TypeScript
- SCSS
- GSAP
- ESLint

## ディレクトリ構成

- `app/`: アプリケーションの主要なコンポーネントとページ
  - `components/`: 再利用可能なReactコンポーネント
  - `page.tsx`: メインページのコンポーネント
  - `layout.tsx`: レイアウトコンポーネント
- `next.config.ts`: Next.jsの設定ファイル
- `.next/`: ビルド出力ディレクトリ

## インストールとセットアップ

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/ManatoYamashita/404.git
   ```

2. 依存関係をインストールします。

   ```bash
   cd 404
   npm install
   ```

3. 開発サーバーを起動します。

   ```bash
   npm run dev
   ```

4. ブラウザで `http://localhost:3000` を開きます。

## デプロイ

このプロジェクトは静的エクスポートを使用してデプロイされます。以下のコマンドを実行してビルドします。
