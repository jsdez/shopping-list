import type { Metadata } from "next";
import { Hammersmith_One } from 'next/font/google'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import "./globals.css";

const hammersmithOne = Hammersmith_One({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: "NeoShopping App",
  description: "Neo shopping app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hammersmithOne.className}>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex-1 p-4">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
