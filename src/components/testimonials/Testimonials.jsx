import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Importa Swiper y SwiperSlide desde react
import { Swiper, SwiperSlide } from "swiper/react";

// Importa los módulos necesarios desde swiper/modules
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const data = [
  { avatar: AVTR1, name: "Ernest Achiever", review: "Lorem ipsum dolor sit amet consectetur..." },
  { avatar: AVTR2, name: "Ernest Achiever", review: "Lorem ipsum dolor sit amet consecteturex..." },
  { avatar: AVTR3, name: "Ernest Achiever", review: "Lorem ipsum dolor sit amet consectetur..." },
  { avatar: AVTR4, name: "Ernest Achiever", review: "Lorem ipsum dolor sit amet consectetur..." }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
