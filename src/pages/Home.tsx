import React from 'react'
import CourseDetails from '../components/home/CourseDetails'
import {Testimonial} from '../components/home/Testimonial'
import HomeBanner from '../components/home/HomeBanner'
import Layout from '../components/shared/Layout'
import FequendlyAskQuistion from '../components/home/FequendlyAskQuistion'
import CourseInstructor from '../components/home/CourseInstructor'

function Home() {
  return (
    <Layout>
      <div>
        <HomeBanner />
        <CourseDetails />
        <Testimonial />
        <FequendlyAskQuistion />
        <CourseInstructor />
      </div>
    </Layout>
  )
}

export default Home