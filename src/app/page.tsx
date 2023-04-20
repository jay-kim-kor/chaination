// tailwind를 적용하려면 아래를 import해야 함
// 관련 설정은  tailwind.config.js와 https://beta.nextjs.org/docs/styling/tailwind-css 글 참고
import "../styles/globals.css";

import Header from "./Header";

export default function Page() {
  return (
    <>
      <Header />
      <h1>Test Page</h1>
    </>
  );
}
