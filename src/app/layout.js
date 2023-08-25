import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "Ольга Терехова",
  description: "Сайт-визитка про одного фронтенд-разработчика",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
