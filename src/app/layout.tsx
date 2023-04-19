import "../styles/globals.css";
import Headers from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="border-4 border-red-400 p-2 w-full">
        <Headers />
        {children}
      </body>
    </html>
  );
}