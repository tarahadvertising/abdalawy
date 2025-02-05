import { motion } from "motion/react";
import { Link } from "react-router-dom";

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="bg-white px-4 py-8 lg:py-28" id="ourExpertise">
      <h2 className="mb-4 text-center text-xl font-extrabold text-primary-500 lg:mb-6 lg:text-5xl">
        Blueleaf Specialties
      </h2>
      <p className="mx-auto mb-8 w-full text-center text-sm leading-relaxed text-black lg:mb-14 lg:w-2/4 lg:text-lg">
        Blueleaf offers innovative and high-quality solutions to elevate your
        brand visibility, strengthen your identity, and meet your business
        needs. From custom signage and promotional gifts to stylish office
        essentials, our solutions are designed to help your business stand out
        and succeed.
      </p>
      <div className="container mx-auto">
        <div className="mx-auto grid w-full grid-cols-2 gap-3 md:w-4/5 md:grid-cols-3 lg:w-3/4 lg:grid-cols-3 lg:gap-8">
          <Link to="/indoor-outdoor-signs" className="group">
            <motion.div
              className="overflow-hidden"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/service-12.png"
                className="h-40 w-full rounded-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 lg:h-72"
              />
            </motion.div>
            <p className="mt-3 text-center font-serif text-lg text-primary-500 group-hover:text-secondary-600 lg:text-2xl">
              Indoor & Outdoor Signs
            </p>
          </Link>
          <Link
            to="/paper-bags-boxes"
            className="group"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="overflow-hidden"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/service-9.jpg"
                className="h-40 w-full rounded-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 lg:h-72"
              />
            </motion.div>
            <p className="mt-3 text-center font-serif text-lg text-primary-500 group-hover:text-secondary-600 lg:text-2xl">
              Paper Bags & Boxes
            </p>
          </Link>
          <Link
            to="/flags-banners"
            className="group"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="overflow-hidden"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/service-11.png"
                className="h-40 w-full rounded-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 lg:h-72"
              />
            </motion.div>
            <p className="mt-3 text-center font-serif text-lg text-primary-500 group-hover:text-secondary-600 lg:text-2xl">
              Flags & Banners
            </p>
          </Link>
          <Link
            to="/gifts-promotions"
            className="group"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="overflow-hidden"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/service-10.png"
                className="h-40 w-full rounded-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 lg:h-72"
              />
            </motion.div>
            <p className="mt-3 text-center font-serif text-lg text-primary-500 group-hover:text-secondary-600 lg:text-2xl">
              Corporate Gifts & Promotions
            </p>
          </Link>
          <Link
            to="/office-stationary"
            className="group"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="overflow-hidden"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/service-7.jpg"
                className="h-40 w-full rounded-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 lg:h-72"
              />
            </motion.div>
            <p className="mt-3 text-center font-serif text-lg text-primary-500 group-hover:text-secondary-600 lg:text-2xl">
              Office Stationary
            </p>
          </Link>
          <Link
            to="/restaurants-needs"
            className="group"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="overflow-hidden"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/service-8.jpg"
                className="h-40 w-full rounded-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 lg:h-72"
              />
            </motion.div>
            <p className="mt-3 text-center font-serif text-lg text-primary-500 group-hover:text-secondary-600 lg:text-2xl">
              Restaurants Needs
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
