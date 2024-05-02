## Deploy
- в next.config.js повинно бути basePath = password-generator 
- npm run build
- скопіювати папку out в папку ~/hutulia.com/password-generator/ на продакшені


## Як пофіксити `Known security vulnerabilities detected` в листі `[GitHub] Your Dependabot alerts for the week`
- npm audit
- побачити
- npm update
- npm run dev (http://localhost:3000) - перевірити
- commit, push
- Залити (див Deploy)
