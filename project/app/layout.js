import Footer from '@/components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import './globals.css';
 import ContactForm from '@/components/contact/ContactForm';
 
export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
            <div className="min-h-screen bg-gray-100 py-12">
      <ContactForm />
    </div>
       <Footer/>
      </body>
    </html>
  );
}