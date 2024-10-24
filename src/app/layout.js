import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavbarWrapper from "./_components/navbarWrapper";
import FooterWrapper from "./_components/footerWrapper";
import VoiceControl from "./_components/VoiceControl";
import ScrollToTopButton from "./_components/scrollToTopButton";


export const metadata = {
  title: "tasbiya news",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body>
          <NavbarWrapper />
          <VoiceControl/>
        <div className="main-content">
        <ScrollToTopButton/>
          {children}
        </div>
        <FooterWrapper/>
      </body>
    </html>
  );
}
