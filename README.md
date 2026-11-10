# Prephrase

LSAT practice app: drills by question type, adaptive drills, timed sections and full practice tests,
blind review, flashcards, a question-type guide, and argumentative-writing practice.
All 248 questions are original, written in LSAT style.

Live at https://levent-batakci.github.io/prephrase/

## How progress is saved

Progress always saves on the device first, so the app works offline. With an account, it also syncs
to Supabase (`config.js` holds the project URL and the publishable key, which is meant to be public).
Each account can only read and write its own row in `public.progress` (row-level security).

On iPhone: open the site in Safari, tap Share, then **Add to Home Screen** to use it like an app.
