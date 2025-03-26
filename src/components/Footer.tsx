
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-brand font-bold text-2xl">
                lean<span className="text-brand">IT</span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Providing customized AI/IT solutions and cutting-edge education to empower your business transformation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-brand transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  AI Training Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  Tech Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Innovation Street, Seoul, South Korea
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">+82 10 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">contact@leanit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} leanIT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-brand transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-brand transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
