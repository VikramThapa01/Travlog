import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export const metadata = {
  title: "TravLog",
  description: "Traveling blog Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
