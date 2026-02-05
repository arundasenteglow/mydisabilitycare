import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
    title: "My Disability Care - You Choose, We Deliver!",
    description: "Providing compassionate and professional disability care services.",
    keywords: ["disability care", "NDIS", "care services", "home care"],
    openGraph: {
        title: "My Disability Care - You Choose, We Deliver!",
        description: "Providing compassionate and professional disability care services.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
