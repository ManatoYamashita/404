# manapuraza.com - 404 Page not found and Bananas

![OGP Image](./public/ogp.jpg)

[https://manapuraza.com/404](https://manapuraza.com/404)

## 概要

このプロジェクトは、`https://manapuraza.com`の404エラーページとバナナに関する情報を提供するウェブサイトです。ページが見つからない場合に、バナナについて学ぶことができます。

## 使用技術

- Next.js(v14)
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
   git clone https://github.com/yourusername/manapuraza.git
   ```

2. 依存関係をインストールします。

   ```bash
   cd manapuraza
   npm install
   ```

3. 開発サーバーを起動します。

   ```bash
   npm run dev
   ```

4. ブラウザで `http://localhost:3000` を開きます。

## デプロイ

このプロジェクトは静的エクスポートを使用してデプロイされます。以下のコマンドを実行してビルドします。
