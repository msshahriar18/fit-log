import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FitLogProvider from "@/context/FitLogContext";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "FitLog",
  description: "A dark, no-nonsense gym companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <FitLogProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </FitLogProvider>
      </body>
    </html>
  );
}