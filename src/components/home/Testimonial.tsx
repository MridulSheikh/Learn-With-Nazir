import { data } from "../../fakedata/TESTIMONIAL_FAKE_DATA"
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard";
import axios from "axios";

export function Testimonial() {

  const [feedback, setFeedback] = useState([])

  // fetch data

  useEffect(()=>{
    axios.get("http://localhost:5000/api/v1/feedback")
    .then(res =>{
      setFeedback(res.data.body)
    })
  },[])


  // handle carusel responsiveness
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
  else if (windowDimension.winWidth < 670) {
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
              feedback?.map(dt =>
                <SwiperSlide>
                  <TestimonialCard
                    // @ts-ignore
                    key={dt?.id}
                    // @ts-ignore
                    name={dt?.user?.name}
                    // @ts-ignore
                    email={dt?.user?.email}
                    // @ts-ignore
                    sex={dt?.user?.gender}
                    // @ts-ignore
                    body={dt?.body} />
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}