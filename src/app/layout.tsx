import Header from "./(AppComponents)/Header";
import "../styles/globals.css";

export const metadata = {
  title: "Chaination",
  description: "블록체인 기반 기부 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
