# 部署說明

## 專案瘦身完成

此專案已經完成瘦身，移除了所有不必要的檔案和依賴：

### 已移除的檔案
- ✅ `package.json` - Node.js 依賴配置
- ✅ `package-lock.json` - 依賴鎖定檔案
- ✅ `webpack.*.js` - Webpack 配置檔案
- ✅ `js/` - JavaScript 檔案夾
- ✅ `css/` - CSS 檔案夾
- ✅ `node_modules/` - Node.js 依賴
- ✅ `img/` - 空的圖片資料夾

### 保留的核心檔案
- `index.html` - 首頁
- `profile.html` - 個人檔案頁面
- `awards.html` - 獎狀與證書頁面
- `404.html` - 404錯誤頁面
- `data/` - 個人資料和證書檔案
- `robots.txt` - 搜尋引擎設定
- `sitemap.xml` - 網站地圖
- `README.md` - 專案說明

## 部署到 Cloudflare Pages

### 步驟 1：準備檔案
確保以下檔案存在且完整：
- `index.html`
- `profile.html`
- `awards.html`
- `404.html`
- `data/` 資料夾（包含所有個人資料）

### 步驟 2：上傳到 Cloudflare
1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 選擇你的域名
3. 點擊 "Pages"
4. 點擊 "Create a project"
5. 選擇 "Direct Upload"
6. 上傳整個專案資料夾內容
7. 設定專案名稱（例如：portfolio）
8. 點擊 "Deploy site"

### 步驟 3：自訂設定
部署完成後，記得更新：
- `robots.txt` 中的網域
- `sitemap.xml` 中的網域
- 個人資料（如需要）

## 檔案大小優化

### 優化前
- 包含 Node.js 依賴和建置工具
- 檔案大小：約 50-100MB

### 優化後
- 純靜態 HTML 檔案
- 檔案大小：約 5-10MB
- 載入速度：顯著提升

## 技術特點

- **無外部依賴**：所有 CSS 和 JavaScript 都已內聯
- **響應式設計**：支援各種裝置尺寸
- **SEO 優化**：包含 robots.txt 和 sitemap.xml
- **快速載入**：靜態檔案，無需伺服器處理

## 注意事項

1. **個人資料更新**：如需更新個人資料，請編輯對應的 HTML 檔案
2. **證書檔案**：確保 `data/` 資料夾中的證書檔案路徑正確
3. **網域設定**：部署後記得更新網域相關設定
4. **備份**：建議保留原始專案的備份

---

部署完成後，你的個人網站就可以透過 Cloudflare Pages 的網址訪問了！
