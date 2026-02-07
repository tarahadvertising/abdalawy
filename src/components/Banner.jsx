import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const flipVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0 },
};

const slides = [
  {
    title: (
      <>
        Discover Your Next
        <br />
        <span className="text-secondary-500">Adventure Awaits!</span>
      </>
    ),
    description:
      "Embark on extraordinary journeys with our premium travel and tourism services. From exotic destinations to cultural experiences, we craft unforgettable adventures tailored to your dreams.",
    button: "Start Your Journey",
    video: "/images/videos/video1.mp4",
    fallback: "/images/banners/tourism.webp",
    service: "Travel and Tourism Services",
    features: [
      "✈️ Global Destinations",
      "🏨 Luxury Accommodations",
      "🗺️ Expert Guides",
      "🎯 Custom Itineraries",
    ],
  },
  {
    title: (
      <>
        Build Your Future
        <br />
        <span className="text-secondary-500">Beyond Borders!</span>
      </>
    ),
    description:
      "Elevate your global journey with trusted immigration solutions that guide, support, and open new opportunities worldwide.",
    button: "Contact Us",
    video: "/images/videos/video2.mp4",
    fallback: "/images/banners/emmigration.webp",
    service: "Emmigration Services",
  },
  {
    title: (
      <>
        Enjoy Every Escape
        <br />
        <span className="text-secondary-500">Near and Far!</span>
      </>
    ),
    description:
      "Upgrade your holiday moments with thoughtfully planned travel services that relax, inspire, and leave lasting memories.",
    button: "Contact Us",
    video: "/images/videos/video3.mp4",
    fallback: "/images/banners/holidays.webp",
    service: "Holiday Packages",
  },
  {
    title: (
      <>
        Simplify Every Process
        <br />
        <span className="text-secondary-500">Start to Finish!</span>
      </>
    ),
    description:
      "Streamline your approvals with reliable document clearing services that save time, reduce effort, and ensure compliance.",
    button: "Contact Us",
    video: "/images/videos/video4.mp4",
    fallback: "/images/banners/document_clearing.webp",
    service: "Document Clearing Services",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="h-full w-full"
      style={{
        background: "black",
      }}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index} className="sliderContent">
          {/* Video Background */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={item.fallback}
          >
            <source src={item.video} type="video/mp4" />
          </video>

          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="inner container relative z-10 mx-auto !p-4 sm:!p-6 md:!p-0">
            <motion.h1
              className="ease max-w-full translate-y-[-20px] transform text-left text-2xl font-extrabold !leading-[1.3] text-white opacity-0 transition-all duration-300 sm:text-3xl md:max-w-[840px] md:text-4xl md:!leading-snug lg:text-7xl lg:!leading-[1.2]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {item.title}
            </motion.h1>
            <motion.p
              className="ease my-[15px] mb-[25px] max-w-[760px] translate-y-[20px] transform text-left text-sm leading-[1.5] text-white opacity-0 transition-all duration-300 sm:text-base md:text-lg lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {item.description}
            </motion.p>

            {/* Features Display */}
            {item.features && (
              <motion.div
                className="ease my-4 translate-y-[20px] transform opacity-0 transition-all duration-300 sm:my-6 md:my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:gap-4">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="rounded-lg bg-white/10 px-2 py-1.5 text-center text-xs font-medium text-white backdrop-blur-sm sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 md:text-base"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.2)",
                      }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.button
              onClick={() =>
                window.open(
                  "//api.whatsapp.com/send?phone=971557167147&text=Hello, I'd like to learn more about your travel and tourism services.",
                  "_blank",
                )
              }
              className="ease flex translate-y-[20px] transform items-center space-x-2 rounded-full bg-secondary-500 px-4 py-2.5 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:scale-105 hover:bg-secondary-600 hover:shadow-lg sm:px-5 sm:py-3 sm:text-base md:px-5 md:py-2 md:text-base lg:px-8 lg:py-4 lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/images/icons/whatsapp-white.svg"
                alt="WhatsApp Icon"
                className="mr-2 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
              />
              {item.button}
            </motion.button>
            <motion.span
              className="absolute -bottom-20 right-0 rounded-md bg-gradient-to-r from-white/80 to-white/60 px-3 py-2 text-xs font-semibold text-black shadow-lg backdrop-blur-sm sm:px-4 sm:py-2.5 sm:text-sm md:-bottom-28 md:px-6 md:py-3 md:text-sm lg:text-xl"
              variants={flipVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              style={{ perspective: "1000px" }}
              whileHover={{ scale: 1.05 }}
            >
              {item.service}
            </motion.span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
