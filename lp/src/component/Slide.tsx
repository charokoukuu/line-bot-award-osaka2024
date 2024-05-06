import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper";
import useIntersectionObServer from "../hooks/useIntersectionObServer";
import { useRef } from "react";

type SlideProps = {
  title: string;
  image: string;
  disc: string;
};

export default function Slide(props: {
  slides: SlideProps[];
  className?: string;
}) {
  const { slides, className } = props;
  const slide = useRef(null);
  const observerPay = useIntersectionObServer({
    target: slide,
    rootMargin: "0px",
    threshold: [0.5],
  });
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      rewind
      pagination={{
        clickable: true,
      }}
      keyboard
      modules={[Autoplay, Pagination, Keyboard]}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className={className}>
            <div className="mx-auto my-5">
              <img src={slide.image} alt={slide.title} className="h-96" />
            </div>
            <div className="mb-8 flex flex-col items-center justify-center">
              <p
                className="heading my-3 text-center text-3xl text-white"
                style={{
                  backgroundImage: `linear-gradient(45deg,rgb(37, 47, 255) ${
                    0 - observerPay.intersectionRatio
                  }%,rgb(124, 192, 226) ${
                    100 - observerPay.intersectionRatio
                  }%,rgb(37, 47, 255) ${200 - observerPay.intersectionRatio}%)`,
                }}
              >
                <span className="text-4xl font-bold text-white">
                  {index + 1}.{" "}
                </span>
                {slide.title}
              </p>
              <p className="text-center text-white">{slide.disc}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
