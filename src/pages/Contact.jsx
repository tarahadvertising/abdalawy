import { useEffect } from "react";
import { motion } from "motion/react";

const scalevariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const flipVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0 },
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="flex h-[550px] overflow-hidden bg-primary-500 md:h-[300px] lg:h-[550px] 2xl:h-[750px]">
        <div className="bg-right-center flex h-full w-full items-end bg-[url('/images/banners/contact.webp')] bg-cover bg-center bg-no-repeat px-5 py-0 lg:py-24 2xl:px-5"></div>
      </section>
      <section className="bg-white px-4 py-6 md:px-5 md:py-7 lg:px-5 lg:py-28 2xl:px-5">
        <div className="container mx-auto grid grid-cols-12">
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-6"
            variants={scalevariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary-500 md:text-xl lg:text-3xl 2xl:text-4xl">
              Blueleaf Ads
            </h3>
            <p className="mb-8 mt-4 w-full text-sm !leading-relaxed text-black md:w-full md:text-base lg:mt-6 lg:w-3/4 lg:text-base">
              We offer custom designs and strategic advertising solutions to
              elevate your brand. From promotional gifts and printing services
              to bespoke advertising strategies, our team is ready to support
              your needs. Contact us via phone, email, or visit our Dubai office
              for a personalized consultation. Let’s collaborate to bring your
              advertising vision to life!
            </p>
            <p className="my-4 bg-[url('/images/icons/phone.svg')] bg-contain bg-left bg-no-repeat pl-9 text-sm font-medium text-black md:text-base lg:text-base">
              Tel : 04 379 4618, Mob : +971 55 763 7146
            </p>
            <p className="my-4 bg-[url('/images/icons/mail.svg')] bg-contain bg-left bg-no-repeat pl-9 text-sm font-medium text-black md:text-base lg:text-base">
              info@blueleaf.ae
            </p>
            <p className="my-4 bg-[url('/images/icons/map.svg')] bg-contain bg-left bg-no-repeat pl-9 text-sm font-medium text-black md:text-base lg:text-base">
              Al Asher Office Building, Dubai, U.A.E
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 mt-4 pl-0 md:col-span-6 md:pl-3 lg:col-span-6 lg:mt-0 lg:pl-0"
            variants={flipVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            style={{ perspective: "1000px" }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5183.300168321855!2d55.431535795829895!3d25.286440843851555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f73b42e3551%3A0xaa00a9e4a0f5ad19!2seffor%20advertising!5e1!3m2!1sen!2sae!4v1727441842153!5m2!1sen!2sae"
              style={{ border: 0 }}
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
