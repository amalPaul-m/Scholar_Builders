import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Scholar Builders — Construction & Approval Consultancy, Perumbavoor Kerala',
  description:
    'Scholar Builders offers professional construction, industrial building, town planning approvals, fire NOC, pollution control, and interior works in Perumbavoor, Ernakulam, Kerala.',
  keywords: [
    'Construction Company Perumbavoor',
    'Building Consultants Ernakulam',
    'Industrial Approval Services Kerala',
    'Town Planning Kerala',
    'Fire NOC Kerala',
    'KSPCB Approval Kerala',
  ],
  openGraph: {
    title: 'Scholar Builders — Construction & Approval Consultancy',
    description: 'Expert construction and government approval services in Kerala.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <div className="pt-16 lg:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
