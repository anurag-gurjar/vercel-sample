# 🚀 Vercel Sample Website & Deployment Guide

Welcome! This is a modern, responsive sample website built to help you learn how to deploy on **Vercel** in under 2 minutes.

---

## 📁 Project Structure

```text
vercel-sample-site/
├── index.html        # Main HTML layout & interactive elements
├── style.css         # Modern glassmorphism & responsive CSS styling
├── script.js         # Interactive buttons, animations & Vercel tips
├── vercel.json       # Optional Vercel configuration (clean URLs, headers)
├── package.json      # Project metadata & local dev scripts
└── README.md         # Step-by-step deployment guide (this file)
```

---

## ⚡ How to Deploy on Vercel (3 Easy Methods)

### 🌟 Method 1: Deploy via GitHub & Vercel Dashboard (Industry Standard)

This is how most developers and companies use Vercel. Every time you push code to GitHub, Vercel automatically builds and deploys it.

1. **Initialize Git and commit your files**:
   Open PowerShell in this folder and run:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of Vercel sample site"
   ```

2. **Push to GitHub**:
   - Go to [github.com](https://github.com) and click **New Repository**.
   - Name it `vercel-sample-site` and keep it public or private.
   - Follow the GitHub instructions to push your local code:
     ```powershell
     git remote add origin https://github.com/YOUR_USERNAME/vercel-sample-site.git
     git branch -M main
     git push -u origin main
     ```

3. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your **GitHub** account.
   - Click the **"Add New..."** button (top right) &rarr; **"Project"**.
   - You will see your `vercel-sample-site` repository listed. Click **"Import"**.
   - Leave the default settings as they are and click **"Deploy"**.
   - 🎉 Within 15–30 seconds, you will get a live URL (e.g., `https://vercel-sample-site-xyz.vercel.app`) with free automatic SSL!

---

### 💻 Method 2: Deploy via Vercel CLI (Fastest via Terminal)

You can deploy directly from your command line without even pushing to GitHub:

1. Open PowerShell inside this folder (`vercel-sample-site`).
2. Run:
   ```powershell
   npx vercel
   ```
3. Follow the interactive prompts:
   - **Log in to Vercel**: It will open your browser to log in or authorize.
   - **Set up and deploy?**: Type `y` and press Enter.
   - **Which scope?**: Select your personal account.
   - **Link to existing project?**: Type `n`.
   - **What's your project's name?**: Press Enter to accept `vercel-sample-site`.
   - **In which directory is your code located?**: Press Enter (`./`).
   - **Want to modify settings?**: Type `n`.
4. It will immediately deploy and print your live preview URL!
5. To promote to production, run:
   ```powershell
   npx vercel --prod
   ```

---

### 🖱️ Method 3: Drag & Drop (Zero Commands Needed)

1. Go to [vercel.com/deploy](https://vercel.com/deploy) or your Vercel Dashboard.
2. In the Projects dashboard, you can drag and drop your `vercel-sample-site` folder directly into the browser window.
3. Vercel automatically uploads all files and produces your live website URL in seconds!

---

## 🔍 How to Test Locally Before Deploying

You have two easy ways to view this site on your own computer:

- **Double-click `index.html`** in Windows File Explorer to view it directly in Chrome/Edge/Firefox.
- Or run a local dev server with Node.js:
  ```powershell
  npx serve .
  ```
  Then open `http://localhost:3000`.
