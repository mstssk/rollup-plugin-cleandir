# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code (claude.ai/code) へのガイダンスを提供します。

## 共通コマンド

### ビルドと開発
- `npm run build` - TypeScriptソースをJavaScriptにコンパイルし、型定義を生成
- `npm run prebuild` - 既存のビルド成果物を削除 (index.js, index.d.ts)
- `npm test` - テストスイートを実行 (現在はビルドをテストとして実行)

### コード品質
- `npm run lint` - Prettierでコードフォーマットをチェック
- `npm run fmt` - Prettierでコードをフォーマット

### 公開
- `npm run prepublishOnly` - 公開前にindex.jsが存在することを検証

## アーキテクチャ

これはディレクトリクリーニング機能を提供するRollupプラグインです。アーキテクチャは分かりやすいものです：

### コア構造
- **index.ts** - メインプラグイン実装、`cleandir`関数をエクスポート
- **package.json** - ビルドスクリプトと依存関係を定義
- **example/** - rollup.config.mjsを使用した使用例を含む

### プラグイン実装
プラグインは`@mstssk/cleandir`ライブラリをラップし、Rollupのビルドプロセスに統合します：

- 厳密な型チェックを持つTypeScriptを使用
- ES2022をターゲットとしてCommonJSモジュール出力
- JavaScriptとTypeScript宣言ファイルの両方を生成
- Rollupのビルドライフサイクルにフック（デフォルト: `buildStart`フック）
- 設定可能なフックと実行順序をサポート

### 主要な依存関係
- `@mstssk/cleandir` - コアディレクトリクリーニング機能
- `rollup` >=4.0.0のピア依存関係
- 開発と型生成用のTypeScript

### ビルドプロセス
1. TypeScriptコンパイルは最初に古い成果物を削除（`prebuild`）
2. TypeScriptを型宣言付きCommonJSにコンパイル
3. 出力ファイル: `index.js`と`index.d.ts`

プラグインは軽量で単一責任に集中するよう設計されています：Rollupビルド中の出力ディレクトリのクリーニング。
