"use client"; // Add this for client-side features like useState if needed

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Envichem Speciality Chemicals & Polymers Pvt Ltd</h3>
            <p className="text-green-100 leading-relaxed">
              We are dedicated to providing the best service and creating meaningful connections with our customers.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://facebook.com" className="text-green-200 hover:text-white transition duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" className="text-green-200 hover:text-white transition duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="text-green-200 hover:text-white transition duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition duration-200 flex items-center">
                  <span className="mr-2">›</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="text-green-200 mt-1">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-green-100 text-sm">
                  4, Sai Shree Industrial Estate,<br /> Plot No.8, Survey No.82/1,<br />MIDC Area, Nashik - 422 010.
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-green-200">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-green-100 text-sm">+91 89759 35200</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-green-200">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-green-100 text-sm">envichem.in@gmail.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-green-200">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-green-100 text-sm">Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-green-500">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-green-100 mb-6">
              Stay updated with our latest news and exclusive offers!
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle newsletter signup
                console.log("Newsletter signup");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-green-500 bg-opacity-20 border border-green-400 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition duration-200 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-700 bg-opacity-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-green-200">
            <p>&copy; {currentYear} Envichem Speciality Chemicals & Polymers Pvt Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 sm:mt-0">
              <Link href="/privacy" className="hover:text-white transition duration-200">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition duration-200">Terms</Link>
              <Link href="/cookies" className="hover:text-white transition duration-200">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}