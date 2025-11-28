# GitHub User Search Application

A React + Vite application that allows users to search GitHub profiles by username or advanced filters (location, minimum repositories). Includes pagination for better navigation and is deployed on Vercel.

---

## 🚀 Features
- Search by **username** or **advanced criteria** (location, min repos).
- Displays **user details** (avatar, location, repo count, profile link).
- **Pagination** for multi-user results with numbered page buttons.
- Responsive design using **Tailwind CSS**.
- Secure API calls using **GitHub Personal Access Token**.

---

## 🛠 Tech Stack
- **React + Vite**
- **Tailwind CSS**
- **GitHub REST API**
- **Vercel** for deployment

---

## ✅ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/github-user-search.git
cd github-user-search
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root:
```
VITE_GITHUB_TOKEN=your_personal_github_token
```
> **Important:** Add `.env` to `.gitignore` to keep your token secure.

### 4. Run Locally
```bash
npm run dev
```

---

## ✅ Build for Production
```bash
npm run build
npm run preview
```

---

## ✅ Deployment on Vercel

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Set Up Vercel
- Go to [Vercel](https://vercel.com/).
- Create a new project and **import your GitHub repo**.
- Confirm these settings:
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
  - **Install Command**: `npm install`

### 3. Configure Environment Variables
In Vercel dashboard → **Settings → Environment Variables**:
```
Key: VITE_GITHUB_TOKEN
Value: your_personal_github_token
```
> You can also use **Import .env** button to add variables automatically.

### 4. Deploy
- Vercel will build and deploy automatically.
- Monitor logs for errors.

### 5. Verify Live App
- Visit your Vercel URL (e.g., `https://your-app.vercel.app`).
- Test search, pagination, and responsiveness.

---

## ✅ Live Demo
[View App on Vercel](https://your-app.vercel.app) *(replace with your actual URL)*

---

## 🔍 Troubleshooting
- **Token is undefined?** Ensure `.env` file exists, variable starts with `VITE_`, and restart dev server.
- **Build fails on Vercel?** Check that `Build Command` is `npm run build` and `Output Directory` is `dist`.
- **Search not working?** Confirm GitHub token is valid and has correct scopes.

---

## ✅ License
MIT License
