## フロントエンド開発のセットアップ

---

### 動作環境
- macOS Big Sur version 11.3.1
- vscode 1.61.0
- node v12.21.0

---

### npmの設定
```
# package.jsonの作成
npm init -y

# eslintの設定
# eslintのインストール
npm install eslint
# eslintの設定ファイル
npx eslint --init
# 設定は適宜

# prettierの設定
# prettierのインストール
npm install prettier
# prettierの設定ファイル
touch .prettierrc.js
# 設定内容は適宜

# jestの設定
# jestのインストール
npm install jest
# jestの設定ファイル
npx jest --init
# 設定は適宜
```
---

### VSCode側の設定

#### 連携するもの
- ESlint
- Prettier

##### 拡張機能でeslintとprettierをインストールする
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint&ssr=false#review-details
- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode


#### それ以外
- EditorConfig

##### 拡張機能でEditorConfigをインストールする
- https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
- ワークスペース直下に.editorconfigファイルを作成する
    - 設定は適宜

---

### 参考文献
