import { data } from "../../fakedata/TESTIMONIAL_FAKE_DATA"
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard";

export function Testimonial() {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])
  // const size = windowDimension.winWidth > 1280 ? 3 : 2 || windowDimension.winWidth > 481 && 1  
  let size = 3
  if (windowDimension.winWidth < 769 && windowDimension.winWidth > 481 ) {
    size = 2
  }
  else if (windowDimension.winWidth < 481) {
    size = 1
  }
  return (
    <div>
      <div className='container pt-10 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
        <h1 className='text-center text-3xl font-bold mt-28'>Student Feedback</h1>
        <div className="pt-20">
          <Swiper
            slidesPerView={size}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              data.map(dt =>
                <SwiperSlide>
                  <TestimonialCard
                    key={dt.id}
                    name={dt.name}
                    email={dt.email}
                    sex={dt.sex}
                    body={dt.body} />
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}