import Slider from "react-animated-slider";

const slides = [
  {
    title: (
      <>
        Brand Your Space
        <br />
        <span className="text-secondary-500">Inside and Out!</span>
      </>
    ),
    description:
      "Elevate your brand presence with dynamic indoor and outdoor solutions that engage and attract your audience effectively.",
    button: "Contact Us",
    image: "/images/banners/branding.webp",
  },
  {
    title: (
      <>
        Signs That Speak
        <br />
        <span className="text-secondary-500">Volumes!</span>
      </>
    ),
    description:
      "Boost your brand visibility with effective indoor and outdoor signs that engage your audience and clearly communicate your message.",
    button: "Contact Us",
    image: "/images/banners/signage.webp",
  },
  {
    title: (
      <>
        Create Impact
        <br />
        <span className="text-secondary-500">with Every Wall!</span>
      </>
    ),
    description:
      "Transform your space with eye-catching wall graphics that enhance branding and creativity. Our designs turn ordinary walls into impactful visual statements.",
    button: "Contact Us",
    image: "/images/banners/graphics.webp",
  },
  {
    title: (
      <>
        Pack it Right
        <br />
        <span className="text-secondary-500">Make it Bright!</span>
      </>
    ),
    description:
      "Explore eco-friendly paper bags, boxes, and cups that blend style and sustainability, perfect for enhancing your brand while caring for the planet.",
    button: "Contact Us",
    image: "/images/banners/paper_bags.webp",
  },
  {
    title: (
      <>
        Flags that Wave
        <br />
        <span className="text-secondary-500">Your Brand!</span>
      </>
    ),
    description:
      "Boost your visibility with our vibrant flags and banners, perfect for promoting your brand and making a memorable impression at any event.",
    button: "Contact Us",
    image: "/images/banners/flags.webp",
  },
  {
    title: (
      <>
        Print Your Passion
        <br />
        <span className="text-secondary-500">on Every Tee!</span>
      </>
    ),
    description:
      "Create custom t-shirts that reflect your unique style and message. With vibrant prints and a variety of designs, we bring your ideas to life on high-quality fabric.",
    button: "Contact Us",
    image: "/images/banners/tshirt.webp",
  },
];

const Banner = () => {
  return (
    <Slider autoplay={2000} touchDisabled={true}>
      {slides.map((item, index) => (
        <div
          key={index}
          className="sliderContent"
          style={{
            background: `url('${item.image}') no-repeat center center`,
          }}
        >
          <div className="inner">
            <h1 className="ease mx-auto max-w-full translate-y-[-20px] transform text-3xl font-extrabold !leading-[1.5] text-white opacity-0 transition-all duration-300 md:max-w-[840px] md:text-4xl md:!leading-snug lg:text-7xl lg:!leading-[1.2]">
              {item.title}
            </h1>
            <p className="ease mx-auto my-[20px] mb-[30px] max-w-[760px] translate-y-[20px] transform text-base leading-[1.5] text-white opacity-0 transition-all duration-300 md:text-lg lg:text-xl">
              {item.description}
            </p>
            <button
              onClick={() =>
                window.open(
                  "//api.whatsapp.com/send?phone=971554939145&text=Hello, I’d like to learn more about the services you offer.",
                  "_blank",
                )
              }
              className="ease mx-auto flex translate-y-[20px] transform items-center space-x-2 rounded-full bg-secondary-500 px-5 py-3 text-base font-medium text-white opacity-0 transition-all duration-300 md:px-5 md:py-2 md:text-base lg:px-8 lg:py-4 lg:text-lg"
            >
              <img
                src="/images/icons/whatsapp-white.svg"
                alt="WhatsApp Icon"
                className="mr-2 h-7 w-7"
              />
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
