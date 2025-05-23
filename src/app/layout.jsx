import "@styles/globals.css";
import vazirFont from "@constants/localFont";
import Header from "../components/Header";
import { ToastBar, Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "manage blog and comments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <Header />
        <div className="container xl:max-w-screen-xl ">{children}</div>
      </body>
    </html>
  );
}
