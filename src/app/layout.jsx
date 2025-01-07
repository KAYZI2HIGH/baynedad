import "./globals.css";

// const inter = Inter({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Baynedad Prooperties managers",
  description:
    "Baynedad Property Managers - Reliable property and facility management solutions. Your property, our priority!",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
    >
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
