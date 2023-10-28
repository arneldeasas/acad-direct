"use client";

import "react-toastify/dist/ReactToastify.css";
import "../globals.css";
import Sidebar from "./components/Sidebar";
import { Rubik } from "next/font/google";
import { ToastContainer } from "react-toastify";
const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={rubik.className}>
            
            <div className="flex h-screen w-full">
            <ToastContainer
               position="bottom-left"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               className={`${rubik.className}`}
            >
              
            </ToastContainer>
               <Sidebar />
               <div className="grow bg-white  max-h-full ">{children}</div>
            </div>
         </body>
      </html>
   );
}
