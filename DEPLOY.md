# GitHub Pages 部署說明

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
- `.github/workflows/deploy.yml` - GitHub Actions部署配置

## 部署到 GitHub Pages

### 步驟 1：啟用 GitHub Pages

1. 進入您的GitHub儲存庫：https://github.com/eqwgeryfgbdf/roylung-personal
2. 點擊 "Settings" 標籤
3. 在左側選單中找到 "Pages"
4. 在 "Source" 部分選擇 "Deploy from a branch"
5. 在 "Branch" 下拉選單中選擇 "gh-pages"
6. 點擊 "Save"

### 步驟 2：自動部署

專案已配置GitHub Actions，每次推送到 `main` 分支時會自動部署：

1. 推送程式碼到 `main` 分支
2. GitHub Actions自動觸發部署流程
3. 部署到 `gh-pages` 分支
4. 網站自動更新

### 步驟 3：手動部署（可選）

如果您想手動部署：

1. 在儲存庫設定 → Pages
2. Source選擇 "Deploy from a branch"
3. Branch選擇 "main" 分支
4. 點擊 "Save"

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
- **自動化部署**：GitHub Actions 自動部署

## 網站網址

部署完成後，您的網站將可透過以下網址訪問：
**https://eqwgeryfgbdf.github.io/roylung-personal/**

## 注意事項

1. **個人資料更新**：如需更新個人資料，請編輯對應的 HTML 檔案
2. **證書檔案**：確保 `data/` 資料夾中的證書檔案路徑正確
3. **網域設定**：部署後記得更新網域相關設定
4. **備份**：建議保留原始專案的備份
5. **自動部署**：每次推送到 `main` 分支都會觸發自動部署

## 故障排除

### 如果網站沒有顯示
1. 檢查 GitHub Pages 是否已啟用
2. 確認 `gh-pages` 分支是否存在
3. 檢查 Actions 標籤中的部署狀態

### 如果部署失敗
1. 檢查 Actions 標籤中的錯誤訊息
2. 確認 `.github/workflows/deploy.yml` 檔案存在
3. 檢查儲存庫設定中的 Pages 配置

---

部署完成後，您的個人網站就可以透過 GitHub Pages 的網址訪問了！
