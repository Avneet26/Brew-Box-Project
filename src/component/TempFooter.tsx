"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#cdb7a1] text-[#3e3e3e] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2">
            <li><Link href="#">Our Company</Link></li>
            <li><Link href="#">Our Coffee</Link></li>
            <li><Link href="#">Stories</Link></li>
            <li><Link href="#">Investor Relations</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Careers</h3>
          <ul className="space-y-2">
            <li><Link href="#">Culture & Values</Link></li>
            <li><Link href="#">Inclusion</Link></li>
            <li><Link href="#">Corporate Jobs</Link></li>
            <li><Link href="#">Retail Jobs</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Social Impact</h3>
          <ul className="space-y-2">
            <li><Link href="#">Overview</Link></li>
            <li><Link href="#">People</Link></li>
            <li><Link href="#">Planet</Link></li>
            <li><Link href="#">Reports</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">Business</h3>
          <ul className="space-y-2">
            <li><Link href="#">Landlord Center</Link></li>
            <li><Link href="#">Gift Cards</Link></li>
            <li><Link href="#">Branded Solutions</Link></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-semibold mb-3">Order & Pickup</h3>
          <ul className="space-y-2">
            <li><Link href="#">Order on App</Link></li>
            <li><Link href="#">Order on Web</Link></li>
            <li><Link href="#">Delivery</Link></li>
            <li><Link href="#">Pickup Options</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-10 pt-6">
        {/* Social + Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <Link href="https://facebook.com"><FaFacebook /></Link>
            <Link href="https://instagram.com"><FaInstagram /></Link>
            <Link href="https://x.com"><FaXTwitter /></Link>
          </div>

          {/* Legal Links */}
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-600">
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
            <li><Link href="#">Accessibility</Link></li>
            <li><Link href="#">Do Not Sell Info</Link></li>
          </ul>
        </div>

        {/* Copyright & Language */}
        <div className="mt-4 text-center text-gray-500 text-xs">
          <p>© 2025 BrewBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
