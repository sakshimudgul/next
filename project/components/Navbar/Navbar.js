import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets';
export default function Navbar() {
  return (
    <nav className="bg-green-100 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
       <Image src={logo} alt="Logo" width={150} height={50} />

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/capabilities" className="hover:text-gray-300">
            Capabilities
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}