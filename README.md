# 微觀偵探所｜醫療影像觀察練習室

一個以抽象病理切片示意圖製作的互動式教學網站。使用者可以調整「顯微鏡焦距」、閱讀觀察提示，再揭曉每個任務的重點與限制。

> 本網站只用於課堂與介面設計示範，不提供診斷，也不使用真實病人資料。

## 連結

- GitHub Repository：<https://github.com/JohnnyFu987/micro-detective-lab>
- 線上網站：<https://johnnyfu987.github.io/micro-detective-lab/>

## 網頁功能

- 互動式焦距滑桿
- 三個資料驅動的觀察任務
- 提示、答案與偏誤提醒
- 響應式版面與鍵盤操作
- 無框架、無套件，可直接部署到 GitHub Pages

## 專案特色

`AGENTS.md` 不只介紹專案，而是規定案例資料格式、命名方式、視覺語言、醫療內容界線、AI 工作順序與完成標準。未來新增任務時，只要在 `assets/js/cases.js` 加入一筆符合 schema 的資料及對應圖片，頁面便會自動產生新卡片。

## 本機預覽

```bash
python3 -m http.server 8000
```

瀏覽 `http://localhost:8000/`。

## GitHub Pages

1. 將 repository 上傳至 GitHub。
2. 進入 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**。
4. 選擇 `main` 分支與 `/ (root)`，儲存後等待發布。

## 檔案結構

```text
.
├── AGENTS.md
├── README.md
├── index.html
└── assets/
    ├── css/styles.css
    ├── images/case-001.svg ...
    └── js/
        ├── cases.js
        └── app.js
```

## 授權與素材

程式碼可用於課堂學習。網站中的切片圖形為本專案自行繪製的抽象 SVG，不代表真實組織或病例。

