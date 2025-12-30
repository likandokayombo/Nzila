import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full  center border-t border-black bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        {/* Left */}
        <p>
          © {new Date().getFullYear()} All rights reserved
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <a
            href="/terms-of-service"
            className="hover:text-gray-900 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="/refund-policy"
            className="hover:text-gray-900 transition-colors"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
