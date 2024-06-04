import { Footer, NavBar } from "@/components";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";


export const metadata = {
  title: "Work-Out Library",
  description: "Reach your fitness goals",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className='bg-black'>
          <NavBar/>
          {children}
          <Footer/>
        </body>
      </html>
    </StoreProvider>
    
  );
}
