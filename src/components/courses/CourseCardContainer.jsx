import React from 'react'
import { dummyCourses } from '../../constants/constants'
import CourseCard from './CourseCard'

function CourseCardContainer() {
  return (
    <>
    <div className='w-full h-auto bg-transparent flex p-10 justify-between flex-wrap gap-2'>
      {
        dummyCourses.map((course)=>{
            return <CourseCard {...course}></CourseCard>
        })
      }

    </div>
    </>
  )
}

export default CourseCardContainer