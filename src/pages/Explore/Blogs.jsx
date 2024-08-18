import React from 'react'
import BlogForm from '../../components/Blogs/BlogForm'
import BlogList from '../../components/Blogs/BlogList'
import { LampDesign } from '../../components/LampDesign'

const Blogs = () => {
    return (
        <>
            <div className="min-h-screen  bg-slate-100 dark:bg-gray-950 flex flex-col justify-center items-center">
                <LampDesign title1={'Join The Conversation'} title2={'Share The Solutions !'} />

                <h1 className="md:text-7xl text-3xl my-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    Unleash Your Thoughts
                </h1>
                <div className="flex justify-between items-center md:flex-row flex-col">
                    <div className='max-w-2xl'> <BlogForm /></div>
                    <div><img src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1723804731/codesaarthi/cover-2580138b-1920w-removebg-preview_ggqneq.png"
                        alt="blog hero" className='w-2xl' loading='lazy' /></div>
                </div>

                <h1 className='text-4xl my-6 text-black dark:text-white'>Discover Diverse Perspectives: Dive into Our Collection of Insightful Blog Posts</h1>

                <p className='text-2xl text-black dark:text-white'>Dive into a curated collection of thought-provoking articles where diverse perspectives meet innovative insights. <br/> Each post invites you to discover new angles and enrich your understanding, sparking curiosity and conversation.</p>
                <div className="max-w-3xl ">
                    <BlogList />
                </div>
            </div>
        </>
    )
}

export default Blogs