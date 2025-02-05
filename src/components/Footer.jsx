import { motion } from "motion/react";
import { Link } from "react-router-dom";

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <section
      id="contactUs"
      className="bg-primary-500 px-4 py-8 md:px-6 lg:px-5 lg:py-24"
    >
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <motion.div
          className="col-span-12 md:col-span-6 lg:col-span-5"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-5 font-sans text-lg font-medium text-secondary-500 lg:text-lg">
            Contact Us
          </h3>
          <div className="flex flex-col gap-5 text-sm text-white">
            <p className="bg-[url('/images/icons/phone.svg')] bg-contain bg-left bg-no-repeat pl-9 font-sans text-sm text-white md:text-base lg:text-base">
              +971 55 49 39 145 / +971 50 435 6145
            </p>
            <p className="bg-[url('/images/icons/mail.svg')] bg-contain bg-left bg-no-repeat pl-9 font-sans text-sm text-white md:text-base lg:text-base">
              info@blueleaf.ae
            </p>
            <p className="bg-[url('/images/icons/map.svg')] bg-contain bg-left bg-no-repeat pl-9 font-sans text-sm text-white md:text-base lg:text-base">
              Dubai, United Arab Emirate
            </p>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-3 lg:col-span-5"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-5 text-left font-sans text-base font-medium text-secondary-500 lg:text-lg">
            Our Services
          </h3>
          <div className="grid grid-cols-2 gap-4 text-left text-sm text-white md:grid-cols-1 lg:grid-cols-2 lg:text-base">
            <Link
              className="transition-all duration-300 ease-in hover:text-secondary-400"
              to="indoor-outdoor-signs"
            >
              Indoor & Outdoor Signs
            </Link>
            <Link
              className="transition-all duration-300 ease-in hover:text-secondary-400"
              to="paper-bags-boxes"
            >
              Paper Bags & Boxes
            </Link>
            <Link
              className="transition-all duration-300 ease-in hover:text-secondary-400"
              to="flags-banners"
            >
              Flags & Banners
            </Link>
            <Link
              className="transition-all duration-300 ease-in hover:text-secondary-400"
              to="gifts-promotions"
            >
              Corporate Gifts & Promotions
            </Link>
            <Link
              className="transition-all duration-300 ease-in hover:text-secondary-400"
              to="office-stationary"
            >
              Office Stationary
            </Link>
            <Link
              className="transition-all duration-300 ease-in hover:text-secondary-400"
              to="restaurants-needs"
            >
              Restaurants Needs
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-3 lg:col-span-2"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-5 font-sans text-lg font-medium text-secondary-500 lg:text-lg">
            Follow us on
          </h3>
          <div className="flex flex-wrap gap-3 text-sm lg:flex-col lg:gap-5 lg:text-base">
            <a
              className="flex items-center gap-2 transition-all duration-300 ease-in hover:scale-105"
              href="https://www.facebook.com/blueleaf.ae"
              target="_blank"
            >
              <img className="w-6" src="/images/icons/fb.svg" alt="Facebook" />
              Facebook
            </a>
            <a
              className="flex items-center gap-2 transition-all duration-300 ease-in hover:scale-105"
              href="https://www.instagram.com/blueleaf.ae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <img
                className="w-6"
                src="/images/icons/insta.svg"
                alt="Instagram"
              />
              Instagram
            </a>
            <a
              className="flex items-center gap-2 transition-all duration-300 ease-in hover:scale-105"
              href="#"
            >
              <img
                className="w-6"
                src="/images/icons/linkedin.svg"
                alt="LinkedIn"
              />
              LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="border-t border-primary-700 pt-6 text-center text-sm leading-loose text-white lg:pt-10 lg:text-base">
            © 2024 Blueleaf. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
