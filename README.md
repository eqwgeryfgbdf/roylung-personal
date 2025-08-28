# 龍禹丞的個人網站

這是一個靜態個人網站，展示個人經歷、技能、專案和成就。

## 專案特色

- 🎨 現代化設計風格
- 📱 完全響應式設計
- ⚡ 靜態HTML，載入速度快
- 🔍 SEO優化
- 🌐 部署在GitHub Pages

## 檔案結構

```
lung-portfolio/
├── index.html          # 首頁
├── profile.html        # 個人檔案頁面
├── awards.html         # 獎狀與證書頁面
├── 404.html           # 404錯誤頁面
├── robots.txt         # 搜尋引擎爬蟲設定
├── sitemap.xml        # 網站地圖
├── .github/workflows/ # GitHub Actions配置
├── data/              # 資料檔案夾
│   ├── photos/        # 個人照片
│   ├── certificates/  # 證書檔案
│   └── competition_certificates/ # 競賽獎狀
└── README.md          # 專案說明
```

## 部署到GitHub Pages

### 自動部署（推薦）

1. 確保您的GitHub儲存庫已啟用GitHub Pages
2. 進入儲存庫設定 → Pages
3. Source選擇 "Deploy from a branch"
4. Branch選擇 "gh-pages" 分支
5. 每次推送到 `main` 分支時，GitHub Actions會自動部署

### 手動部署

1. 將專案推送到GitHub
2. 進入儲存庫設定 → Pages
3. Source選擇 "Deploy from a branch"
4. Branch選擇 "main" 分支
5. 點擊 "Save"

## 自訂設定

### 更新個人資料

編輯 `profile.html` 檔案中的 `profileData` 物件來更新個人資料。

### 更新獎狀與證書

編輯 `awards.html` 檔案中的 `awardsData` 和 `certsData` 陣列。

### 更新網域

更新 `robots.txt` 和 `sitemap.xml` 中的網域為您的GitHub Pages網址。

## 技術特點

- **純HTML/CSS/JavaScript**：無外部依賴
- **內聯樣式**：減少HTTP請求
- **響應式設計**：支援各種裝置尺寸
- **語義化HTML**：提升SEO和可訪問性
- **現代CSS**：使用Flexbox和Grid佈局
- **GitHub Actions**：自動化部署

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 授權

此專案採用 MIT 授權條款。

## 聯絡資訊

- 姓名：龍禹丞
- 電子郵件：lungyuchengroy@gmail.com
- GitHub：https://github.com/eqwgeryfgbdf

---

**注意**：部署前請記得更新網域設定和個人資料。網站將自動部署到 `https://eqwgeryfgbdf.github.io/roylung-personal/`