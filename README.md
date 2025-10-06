# 🚀 AI Paraphraser (Next.js + MUI + React Query)

A small but smart app that paraphrases your text using multiple AI providers.  
If one model dies or takes too long — another one jumps in instantly ⚡

---

## 🧠 Features
- 🔁 **Fallback logic:** OpenAI → Gemini and others (first to respond wins)
- 💬 **Clean UI:** built with MUI and a custom theme
- 🧹 **Hidden scrollbars:** sleek and minimal UX
- ⚙️ **React Query:** handles request states, caching, and error recovery
- 🔔 **Notifications:** success, timeout, and fallback messages

---

## 🧩 Requirements

- **Node.js** ≥ 18
- **npm**, **pnpm**, or **yarn**
- API keys for AI providers:
    - `GEMINI_KEY`
    - `OPENAI_KEY`

---

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/Bron-dev/test-task-paraphrasing.git
cd test-task-paraphrasing

# 2. Install dependencies
npm install

# 3. Create your local env file in a root of a project
.env

# 4. Fill it in
NEXT_PUBLIC_GEMINI_KEY={you know where to find it, right?;)}
NEXT_PUBLIC_OPENAI_KEY={you know where to find it, right?;)}

# 5. npm run dev , go to http://localhost:3000 and enjoy

(
 Psss,
 it`s already deployed over here https://test-paraphraser-ai.netlify.app/ 
 just don`t tell anyone, let it be a secret
)


MIT © 2025 — made with ❤️ and TypeScript.