# Daily 10 — PCM practice

A small site for daily JEE / MHT-CET / BITSAT practice: 10 mixed Physics, Chemistry and Maths questions a day, a timer on each, solutions after answering, a mistake notebook that brings wrong answers back after 3 days, and a Progress page showing scores, weak chapters, time per question, flagged doubts and login times (IST).

Live at **https://atharvanilkanth.github.io/daily10/**

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole site (HTML, CSS, JS) |
| `questions.json` | Starter bank of 142 questions written in the pattern of previous-year papers |
| `config.js` | Firebase settings and the owner's email |
| `firestore.rules` | Database access rules: each student reads/writes only their own data, the owner reads everyone's |

## One-time Firebase setup (about 10 minutes, free tier)

1. Go to https://console.firebase.google.com → **Add project** (Google Analytics not needed).
2. **Build → Authentication → Get started → Sign-in method → Google → Enable → Save.**
3. **Authentication → Settings → Authorized domains → Add domain:** `atharvanilkanth.github.io`
4. **Build → Firestore Database → Create database** → pick a location close to India (e.g. `asia-south1`) → start in **production mode**.
5. **Firestore → Rules:** paste the contents of `firestore.rules`, replace `paste_your_email@gmail.com` with your Gmail (lowercase), **Publish**.
6. **Project settings (gear) → General → Your apps → Web (`</>`)** → register an app (no hosting needed) → copy `apiKey`, `authDomain`, `projectId`, `appId` into `config.js`, and put your Gmail in `ownerEmails`.
7. Commit `config.js`. GitHub Pages updates within a minute or two.

## Adding questions

Sign in with the owner email, open **Progress → Add questions**, and paste JSON:

```json
[
  {"s":"P","ch":"Kinematics","type":"mcq","q":"…","o":["A","B","C","D"],"a":0,"sol":"…"},
  {"s":"M","ch":"Binomial Theorem","type":"int","q":"…","a":15,"sol":"…"}
]
```

`s` is `P`, `C` or `M`. For `mcq`, `a` is the index of the right option (0 = A). For `int`, `a` is the number. Use `$…$` for maths.
