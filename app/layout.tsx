import type { Metadata } from 'next';
import './globals.css';
import App from './app';

export const metadata: Metadata = {
  title: 'DefiWrapped',
  description: 'Your yearly Defi Wrapped',
  keywords: ['defiWrapped', 'defi', 'wrapped', 'spotify'],
  applicationName: 'DefiWrapped',
  openGraph: {
    title: 'DefiWrapped',
    description: 'Your yearly Defi Wrapped',
    url: 'https://www.defiwrapped.xyz',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/djzeufu4j/image/upload/v1734437953/wrapped_u6t5gh.jpg',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'defiwrapped.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://www.defiwrapped.xyz',
    title: 'DefiWrapped',
    description: 'Your yearly Defi Wrapped',
    images: [
      {
        url: 'https://res.cloudinary.com/djzeufu4j/image/upload/v1734438072/wrapped_ani_aqudre.gif',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="fc:frame"
          content='{
            "version": "next",
            "imageUrl": "https://defiwrapped.xyz/images/embed.png",
            "button":{
              "title": "See Yours",
              "action": {
                "type": "launch_frame",
                "name": "DeFi Wrapped",
                "url": "https://defiwrapped.xyz",
                "splashImageUrl": "https://defiwrapped.xyz/images/loading.gif",
                "splashBackgroundColor": "#edf4ff"
              }
            }
          }'
        />
      </head>
      <body className={`font-Aeonik`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
