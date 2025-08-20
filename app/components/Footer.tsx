import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Ayna Rifdah</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-stack developer and ML enthusiast dedicated to turning ideas into meaningful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/aynarifdah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/aynarifdah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:aynadwirifdahs@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
                             <li>
                 <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                   Project
                 </Link>
               </li>
              
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300">
                  aynadwirifdahs@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Location:</span>
                <span>Depok, Indonesia</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Available for:</span>
                <span>Freelance & Full-time</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
             Ayna Dwi Rifdah. All rights reserved. 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
