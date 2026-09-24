import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"MRK Daily Post Auto-Pilot",description:"AI-powered daily social publishing dashboard for MRK"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}