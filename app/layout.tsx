import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Health Metric Correlation Finder",
  description: "Find correlations in your health tracking data"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ba840b68-8116-4a5f-a139-5168748cd766"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
