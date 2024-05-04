import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper";

type SlideProps = {
  title: string;
  image: string;
};

export default function Slide(props: {
  slides: SlideProps[];
  className?: string;
}) {
  const { slides, className } = props;
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides
      autoplay={{
        delay: 5000,
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
            <p className="mx-[10%] text-center text-white">
              <span className="text-lg font-bold text-white">
                {index + 1}.{" "}
              </span>
              {slide.title}
            </p>
            <div className="mx-auto my-5 flex w-64 justify-center">
              <img src={slide.image} alt={slide.title} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
