import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" ">
      <div
        className="w-full px-4 py-10 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold" style={{ Color: "#171717" }}>
              Get notified with the Latest Updates
            </h2>
            <p className=" text-sm font-regular" style={{ Color: "#525252" }}>
              Stay up to date with the latest news, announcements, and articles.
            </p>
          </div>

          <form className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="py-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="w-full flex flex-col items-center text-center mb-6 md:mb-0">
            <img src={Logo} alt="Kabira Mobility Logo" className="h-35 mb-2" />
          </div>
          <div className="md:col-span-3">
            <div className="flex flex-col md:flex-row md:justify-end md:space-x-16">
              <div>
                <h3 className="font-semibold mb-3 text-gray-700">Product</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-green-600 ">
                      KM5000
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      KM4000
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      KM3000
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      KM2000
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Hermes 75
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Intercity 350
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Company</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-green-600 ">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Test Rides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Legal</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-green-600 ">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Warranty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 ">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t ">
        <div
          className="w-full mt-2 mb-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
          style={{ Color: "#737373" }}
        >
          <p>©Kabira Mobility Private Limited. All Rights Reserved, 2024.</p>
          <div className="flex gap-4">
            <Linkedin
              size={20}
              className="cursor-pointer hover:text-green-600"
            />
            <Facebook
              size={20}
              className="cursor-pointer hover:text-green-600"
            />
            <Instagram
              size={20}
              className="cursor-pointer hover:text-green-600"
            />
            <Youtube
              size={20}
              className="cursor-pointer hover:text-green-600"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
