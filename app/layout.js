import "./globals.css";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Ramé Delaireaux Art",
  description:
    "Web3 art gallery by Ramé Delaireaux—explore Cosmic, Crypto, Dataverse, Dimensional Continuum, Energy, Immutable, Mind Collective, and Nature series.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
