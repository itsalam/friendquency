import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    // <SessionProvider session={session} refetchInterval={5 * 60}>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html >
    // </SessionProvider>

  )
}

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCHOYknGSsVGWgGQg2rm-cyjiQJeKfeaFM",
//   authDomain: "friendquency-66ce6.firebaseapp.com",
//   projectId: "friendquency-66ce6",
//   storageBucket: "friendquency-66ce6.appspot.com",
//   messagingSenderId: "744515610276",
//   appId: "1:744515610276:web:c30f49a34914ebb3abe831",
//   measurementId: "G-G8GPYEX7ZH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);