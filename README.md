# 龍禹丞的個人網站

這是一個靜態個人網站，展示個人經歷、技能、專案和成就。

## 專案特色

- 🎨 現代化設計風格
- 📱 完全響應式設計
- ⚡ 靜態HTML，載入速度快
- 🔍 SEO優化
- 🌐 適合部署到Cloudflare Pages

## 檔案結構

```
lung-portfolio/
├── index.html          # 首頁
├── profile.html        # 個人檔案頁面
├── awards.html         # 獎狀與證書頁面
├── 404.html           # 404錯誤頁面
├── robots.txt         # 搜尋引擎爬蟲設定
├── sitemap.xml        # 網站地圖
├── data/              # 資料檔案夾
│   ├── photos/        # 個人照片
│   ├── certificates/  # 證書檔案
│   └── competition_certificates/ # 競賽獎狀
└── README.md          # 專案說明
```

## 部署到Cloudflare Pages

### 方法1：直接上傳

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 選擇你的域名
3. 進入 "Pages" 選項
4. 點擊 "Create a project"
5. 選擇 "Direct Upload"
6. 上傳專案資料夾內容
7. 設定建置設定（不需要建置命令）
8. 部署完成

### 方法2：GitHub整合

1. 將專案推送到GitHub
2. 在Cloudflare Pages中選擇 "Connect to Git"
3. 選擇你的GitHub儲存庫
4. 設定建置設定：
   - Build command: 留空
   - Build output directory: 留空
   - Root directory: 留空
5. 部署完成

## 自訂設定

### 更新個人資料

編輯 `profile.html` 檔案中的 `profileData` 物件來更新個人資料。

### 更新獎狀與證書

編輯 `awards.html` 檔案中的 `awardsData` 和 `certsData` 陣列。

### 更新網域

更新 `robots.txt` 和 `sitemap.xml` 中的 `your-domain.com` 為你的實際網域。

## 技術特點

- **純HTML/CSS/JavaScript**：無外部依賴
- **內聯樣式**：減少HTTP請求
- **響應式設計**：支援各種裝置尺寸
- **語義化HTML**：提升SEO和可訪問性
- **現代CSS**：使用Flexbox和Grid佈局

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

**注意**：部署前請記得更新網域設定和個人資料。