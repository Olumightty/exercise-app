import { Footer, NavBar } from "@/components";
import "./globals.css";


export const metadata = {
  title: "Work-Out King",
  description: "Reach your fitness goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
