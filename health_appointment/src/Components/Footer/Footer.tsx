import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm">© 2025 Your Company. All Rights Reserved.</p>
        </div>

        <div className="mt-4 sm:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-400"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-400"
                aria-label="Terms of Service"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-400"
                aria-label="Contact Us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="mt-4 sm:mt-0">
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495v-9.293H9.64v-3.622h3.181V8.413c0-3.142 1.916-4.857 4.718-4.857 1.344 0 2.497.1 2.834.145v3.283h-1.944c-1.523 0-1.817.724-1.817 1.785v2.34h3.631l-.474 3.622h-3.157V24h6.184c.73 0 1.325-.594 1.325-1.326V1.326C24 .594 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.824 9.824 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.86 9.86 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.945 13.945 0 011.671 3.149 4.916 4.916 0 003.18 9.72a4.903 4.903 0 01-2.228-.616v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.869 9.869 0 010 21.542a13.924 13.924 0 007.548 2.213c9.055 0 14.002-7.502 14.002-14.002 0-.213-.004-.426-.013-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-400"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.257 2.242 1.319 3.608.058 1.266.07 1.646.07 4.849 0 3.204-.012 3.584-.07 4.85-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.319-1.266.058-1.646.07-4.849.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.257-2.242-1.319-3.608-.058-1.266-.07-1.646-.07-4.849 0-3.204.012-3.584.07-4.85.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.319C8.416 2.175 8.796 2.163 12 2.163M12 0C8.74 0 8.332.015 7.052.073c-1.312.062-2.597.336-3.6 1.34C2.148 2.377 1.873 3.662 1.811 4.973.753 7.66.755 11.95 1.811 14.636c.062 1.311.336 2.597 1.34 3.6 1.004 1.004 2.288 1.277 3.6 1.34 1.28.058 1.688.073 4.948.073s3.668-.015 4.948-.073c1.312-.063 2.597-.336 3.6-1.34 1.004-1.004 1.277-2.288 1.34-3.6.058-1.28.073-1.688.073-4.948s-.015-3.668-.073-4.948c-.063-1.311-.336-2.597-1.34-3.6-1.003-1.004-2.288-1.277-3.6-1.34C15.668.015 15.26 0 12 0z" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
