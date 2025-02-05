import Banner from "../components/Banner";
import { motion } from "motion/react";
import { useEffect } from "react";

const scalevariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const flipVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0 },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Banner />
      <section
        className="custom_bg px-4 py-8 md:px-6 lg:px-5 lg:py-28"
        id="ourStory"
      >
        <div className="container mx-auto grid grid-cols-12 items-center">
          <motion.div
            className="col-span-12 pl-0 lg:col-span-8 lg:pl-24"
            variants={scalevariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center text-xl font-semibold text-secondary-500 lg:mb-7 lg:text-left lg:text-3xl">
              About Blueleaf
            </h2>
            <p className="text-sm leading-relaxed text-white lg:text-base lg:leading-loose">
              Since 2012, we have been experts in printing and branding, proudly
              serving hundreds of satisfied customers. Our commitment to timely
              delivery and exceptional service has earned us the trust of our
              clients. We take great pride in supporting our customers on their
              successful journeys and look forward to continuing this
              partnership.
              <br />
              We offer a wide range of printing services, including hoarding
              graphics, wall graphics, offset and digital printing, as well as
              high-quality printed packaging. Our expertise extends to
              placemats, coffee cups, and other custom printing products for
              restaurants and offices. Additionally, we provide banners,
              displays, large-format fabric banners, and flags. Our goal is to
              deliver outstanding service and meet the diverse needs of our
              customers.
            </p>
            <div className="text-center lg:text-left">
              <a
                href="blueleaf_brochure.pdf"
                target="_blank"
                className="mx-auto mt-7 inline-flex items-center justify-center rounded-full border-2 border-secondary-500 bg-transparent px-3 py-2 font-sans text-sm font-medium text-secondary-500 transition-all duration-300 ease-in hover:bg-secondary-500 hover:text-primary-500 lg:mx-0 lg:px-7 lg:py-4 lg:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-download"
                  width="25"
                  height="25"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span className="ml-2">Download Brochure</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flext col-span-12 hidden justify-center lg:col-span-4 lg:flex"
            variants={flipVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            style={{ perspective: "1000px" }}
            viewport={{ once: true }}
          >
            <img src="/images/logo_secondary.svg" className="w-2/3" alt="" />
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-100 px-4 py-8 md:px-6 md:py-0 lg:px-5 lg:py-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 py-0 md:grid-cols-12 md:py-10 lg:py-20">
            <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-6 lg:col-span-5">
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/signboards/01.webp"
                  alt="about1"
                />
              </motion.div>
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mt-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/signboards/02.webp"
                  alt="about2"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mb-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/signboards/03.webp"
                  alt="about3"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/signboards/04.webp"
                  alt="about4"
                />
              </motion.div>
            </div>
            <div className="col-span-12 flex items-center md:col-span-6 lg:col-span-7">
              <motion.div
                className="mx-auto w-full pl-0 md:pl-10 lg:pl-28"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="mt-7 text-center font-sans text-xl font-extrabold text-primary-500 md:text-left md:text-xl lg:mt-0 lg:text-4xl">
                  Indoor & Outdoor Signs
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black lg:mt-5 lg:text-base lg:leading-loose">
                  We offer a comprehensive range of indoor and outdoor signage
                  solutions, tailored to elevate your business’s branding. From
                  office reception signs that create a welcoming atmosphere to
                  signage for malls, retail stores, warehouses, and buildings,
                  we provide standout, high-quality designs. Our services cater
                  to cafes, shops, and other establishments, ensuring visually
                  appealing signage that communicates your brand message.
                  Whether you need eye-catching outdoor signs or refined indoor
                  displays, our team delivers durable, custom-made solutions for
                  any environment.
                </p>
                <a
                  href="indoor-outdoor-signs"
                  className="mx-auto mt-5 table items-center justify-center rounded-full bg-primary-500 px-4 py-2 font-sans text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary-600 md:inline-flex lg:mt-7 lg:inline-flex lg:px-6 lg:py-3 lg:text-base"
                >
                  Know More
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-8 md:px-6 md:py-0 lg:px-5 lg:py-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 py-0 md:grid-cols-12 md:py-10 lg:py-20">
            <div className="col-span-12 flex items-center md:col-span-6 lg:col-span-7">
              <motion.div
                className="mx-auto w-full pr-0 md:pr-10 lg:pr-28"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-center font-sans text-xl font-extrabold text-primary-500 md:text-left md:text-xl lg:text-4xl">
                  Paper Bags & Boxes
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black lg:mt-7 lg:text-base lg:leading-loose">
                  We offer a variety of eco-friendly and custom-designed paper
                  bags and boxes, perfect for packaging and promotional needs.
                  Whether you are looking for luxury gift boxes, branded paper
                  bags, or sturdy packaging solutions, our products are tailored
                  to fit your business requirements. From retail stores to
                  corporate giveaways, our paper bags and boxes come in various
                  sizes, designs, and finishes, ensuring a premium feel while
                  being environmentally conscious.
                </p>
                <a
                  href="paper-bags-boxes"
                  className="mx-auto mt-5 table items-center justify-center rounded-full bg-primary-500 px-4 py-2 font-sans text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary-600 md:inline-flex lg:mt-7 lg:inline-flex lg:px-6 lg:py-3 lg:text-base"
                >
                  Know More
                </a>
              </motion.div>
            </div>
            <div className="col-span-12 mt-7 grid grid-cols-2 gap-3 md:col-span-6 md:mt-0 lg:col-span-5 lg:mt-0">
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/paper_boxes/01.webp"
                  alt="about1"
                />
              </motion.div>
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mt-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/paper_boxes/2.jpg"
                  alt="about2"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mb-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/paper_boxes/04.webp"
                  alt="about3"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/paper_boxes/03.webp"
                  alt="about4"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-4 py-8 md:px-6 md:py-0 lg:px-5 lg:py-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 py-0 md:grid-cols-12 md:py-10 lg:py-20">
            <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-6 lg:col-span-5">
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/flags_banners/01.webp"
                  alt="about1"
                />
              </motion.div>
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mt-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/flags_banners/03.webp"
                  alt="about2"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mb-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/flags_banners/04.webp"
                  alt="about3"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/flags_banners/02.webp"
                  alt="about4"
                />
              </motion.div>
            </div>
            <div className="col-span-12 flex items-center md:col-span-6 lg:col-span-7">
              <motion.div
                className="mx-auto w-full pl-0 md:pl-10 lg:pl-28"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="mt-7 text-center font-sans text-xl font-extrabold text-primary-500 md:text-left md:text-xl lg:mt-0 lg:text-4xl">
                  Flags & Banners
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black lg:mt-5 lg:text-base lg:leading-loose">
                  We offer a diverse range of flags and banners to meet your
                  promotional and branding needs. Our selection includes curved
                  top flags, L banner flags, and flying banner flags, perfect
                  for outdoor and indoor displays. We also specialize in banner
                  stands, pop-up banners, flag printing, and custom flag banners
                  for various events. Whether you need backdrop banners, sports
                  banners, hanging banners, or bunting flags, our high-quality
                  products ensure maximum visibility. For easy setup, we provide
                  pull-up and roller banners, as well as cloth banners that are
                  ideal for both commercial and personal use.
                </p>
                <a
                  href="flags-banners"
                  className="mx-auto mt-5 table items-center justify-center rounded-full bg-primary-500 px-4 py-2 font-sans text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary-600 md:inline-flex lg:mt-7 lg:inline-flex lg:px-6 lg:py-3 lg:text-base"
                >
                  Know More
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-8 md:px-6 md:py-0 lg:px-5 lg:py-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 py-0 md:grid-cols-12 md:py-10 lg:py-20">
            <div className="col-span-12 flex items-center md:col-span-6 lg:col-span-7">
              <motion.div
                className="mx-auto w-full pr-0 md:pr-10 lg:pr-28"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-center font-sans text-xl font-extrabold text-primary-500 md:text-left md:text-xl lg:text-4xl">
                  Corporate Gifts & Promotions
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black lg:mt-7 lg:text-base lg:leading-loose">
                  Elevate your brand with our range of customized corporate and
                  promotional gifts. From USB flash drives, mug printing, and
                  keychains to diary printing and debossing, we offer
                  personalized products that make a lasting impression. Our
                  collection includes leather bags, water bottles, pens, power
                  banks, business card holders, backpacks, travel bags, stress
                  balls, and T-shirt and cap printing. We also provide premium
                  items like leather wallets, wireless chargers, Bluetooth
                  speakers, wristbands, and beach bags. Whether for events or
                  giveaways, our gifts help you promote your brand effectively.
                </p>
                <a
                  href="gifts-promotions"
                  className="mx-auto mt-5 table items-center justify-center rounded-full bg-primary-500 px-4 py-2 font-sans text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary-600 md:inline-flex lg:mt-7 lg:inline-flex lg:px-6 lg:py-3 lg:text-base"
                >
                  Know More
                </a>
              </motion.div>
            </div>
            <div className="col-span-12 mt-7 grid grid-cols-2 gap-3 md:col-span-6 md:mt-0 lg:col-span-5 lg:mt-0">
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/corporate_gifts/02.webp"
                  alt="about1"
                />
              </motion.div>
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mt-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/corporate_gifts/01.webp"
                  alt="about2"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mb-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/corporate_gifts/04.webp"
                  alt="about3"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/corporate_gifts/03.webp"
                  alt="about4"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-4 py-8 md:px-6 md:py-0 lg:px-5 lg:py-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 py-0 md:grid-cols-12 md:py-10 lg:py-20">
            <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-6 lg:col-span-5">
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/office_stationary/01.webp"
                  alt="about1"
                />
              </motion.div>
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mt-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/office_stationary/02.webp"
                  alt="about2"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mb-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/office_stationary/03.webp"
                  alt="about3"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/office_stationary/04.webp"
                  alt="about4"
                />
              </motion.div>
            </div>
            <div className="col-span-12 flex items-center md:col-span-6 lg:col-span-7">
              <motion.div
                className="mx-auto w-full pl-0 md:pl-10 lg:pl-28"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="mt-7 text-center font-sans text-xl font-extrabold text-primary-500 md:text-left md:text-xl lg:mt-0 lg:text-4xl">
                  Office Stationary
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black lg:mt-5 lg:text-base lg:leading-loose">
                  Our Offset and Digital Printing division offers comprehensive
                  solutions for all your office printing needs. From business
                  cards, letterheads, and envelopes to brochures, invoices,
                  computer forms, flyers, and leaflets, we cover it all. We also
                  specialize in booklets, paper bags, pens, posters, notepads,
                  notebooks, receipt vouchers, delivery notes, calendars,
                  certificates, coupons, folders, ID cards, lanyards, invitation
                  cards, name badges, nameplates, and more. Whatever your
                  printing requirements, we deliver quality and precision.
                </p>
                <a
                  href="office-stationary"
                  className="mx-auto mt-5 table items-center justify-center rounded-full bg-primary-500 px-4 py-2 font-sans text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary-600 md:inline-flex lg:mt-7 lg:inline-flex lg:px-6 lg:py-3 lg:text-base"
                >
                  Know More
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-8 md:px-6 md:py-0 lg:px-5 lg:py-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 py-0 md:grid-cols-12 md:py-10 lg:py-20">
            <div className="col-span-12 flex items-center md:col-span-6 lg:col-span-7">
              <motion.div
                className="mx-auto w-full pr-0 md:pr-10 lg:pr-28"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-center font-sans text-xl font-extrabold text-primary-500 md:text-left md:text-xl lg:text-4xl">
                  Restaurants Needs
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black lg:mt-7 lg:text-base lg:leading-loose">
                  We offer a wide range of customized printing solutions,
                  including menus, delivery menus (paper stickers), tent cards,
                  comment cards, light boxes, table mats, vouchers, labels, and
                  bags. Our expertise extends to name badges, sandwich boxes,
                  sandwich paper, burger boxes, door hanger menus, takeaway
                  menus, paper cups, mugs, tea coasters, caps, uniforms, towels,
                  table talkers, placemats, delivery cartons, delivery bags,
                  acrylic trays, and plastic bags. Whatever your branding or
                  packaging needs, we have got you covered!
                </p>
                <a
                  href="restaurants-needs"
                  className="mx-auto mt-5 table items-center justify-center rounded-full bg-primary-500 px-4 py-2 font-sans text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary-600 md:inline-flex lg:mt-7 lg:inline-flex lg:px-6 lg:py-3 lg:text-base"
                >
                  Know More
                </a>
              </motion.div>
            </div>
            <div className="col-span-12 mt-7 grid grid-cols-2 gap-3 md:col-span-6 md:mt-0 lg:col-span-5 lg:mt-0">
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/restaurant_needs/04.webp"
                  alt="about1"
                />
              </motion.div>
              <motion.div
                className="flex justify-start"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mt-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/restaurant_needs/01.webp"
                  alt="about2"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="mb-16 w-3/4 transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/restaurant_needs/02.webp"
                  alt="about3"
                />
              </motion.div>
              <motion.div
                className="flex justify-end"
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                style={{ perspective: "1000px" }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transform rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src="/images/restaurant_needs/03.webp"
                  alt="about4"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
