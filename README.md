This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## The Branch for Saelma's Development 

//// Saelma의 Branch, 기존의 'develop'는 오로지 버튼들을 추가하고, 디자인이 적용되지 않았으나,
2023/04/19부터 01:30경 기준 웹 디자인 적용된 브랜치에 스테이킹과 언스테이킹 버튼을 추가했습니다
각 캠페인카드마다 각기다른 수혜자주소에게 스테이킹과 언스테이킹이 되도록 하였습니다 
브랜치 하나 더 박은 이유는, 새로 박은 웹디자인이 설치할게 너무 많아서 이주절차를 제대로 밟고 왔습니다 

## ** Main.tsx에서 보면 현재 수혜자 주소가 제 PC의 가나슈 기준 주소로 설정되어 있으니 자신의 가나슈 주소에 맞게 변경하시기 바랍니다

## 프로그램 설치 및 실행을 위한 절차 
```bash
1. npm install

2. truffle migrate --reset (한번만 )

3. npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
