import React from 'react'
import {motion} from 'framer-motion'

const coursedata =[
    {
        name : "Html",
        img : "/img/skill/html.png",
        description : "HTML is the standard markup language for Web pages."
    },
    {
        name : "Css",
        img : "/img/skill/css.png",
        description : "CSS is the language we use to style an HTML document."
    },
    {
        name : "Javascript",
        img : "/img/skill/javacript.png",
        description : "JavaScript is the programming language of the Web."
    },
    {
        name : "React.js",
        img : "/img/skill/reactjs.png",
        description : "The React.js framework is an open-source JavaScript framework and library developed by Facebook."
    },
    {
        name : "Node.js",
        img : "/img/skill/nodejs.png",
        description : "Node.js is an open-source, cross-platform JavaScript runtime environment."
    },
    {
        name : "Express.js",
        img : "/img/skill/express.png",
        description : 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
    },
    {
        name : "MongoDB",
        img : "/img/skill/mongodb.png",
        description : "MongoDB is a document database used to build highly available and scalable internet applications."
    },
    {
        name : "Github",
        img : "/img/skill/github.png",
        description : "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere."
    },
    {
        name : "Netlify",
        img : "/img/skill/netlify.png",
        description : "Netlify CLI is used to configure and deploy a website straight from the Development Server on a local machine."
    },
    {
        name : "Firebase",
        img : "/img/skill/firebase.png",
        description : "Firebase is Google's platform that helps you quickly develop high-quality apps and grow your business."
    },
    {
        name : "Heroku",
        img : "/img/skill/heroku.png",
        description : "Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to go from idea to URL"
    },
    {
        name : "Vs code",
        img : "/img/skill/vscode.png",
        description : "Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control."
    }
]

const CourseCard = ({name, img, ds}) => {
    return(
        <div className='bg-white p-10 rounded-sm border-2 shadow-md hover:border-primarymain ease-in-out duration-500'>
            <div className='relative h-40 w-full'>
               <img src={img} className='w-full object-contain h-full' />
            </div>
            <div className='mt-5'>
                <h1 className='text-center text-3xl'>{name}</h1>
                <p className='mt-5 text-sm text-gray-500 text-center'>{ds}</p>
            </div>
        </div>
    )
}

function CourseDetails() {
    const parentVariants = {
        hidden : {
            opacity : 0,
            y: -250,
        },
        visible : {
            opacity : 1,
            y: 0,
            transition : {
                duration : 1,
                delay : 0.25
            }
        }
    }
    return (
        <motion.div variants={parentVariants} initial="hidden" animate="visible" className='container pt-10 px-5 xl:px-0 xl:max-w-screen-lg mx-auto' >
            <h1 className='text-center text-3xl font-bold '>What will you learn from this course</h1>
            <div className='pt-10 xl:pt-28 lg:grid grid-cols-3 gap-6'>
              {
                coursedata.map(mp => <CourseCard name={mp.name} img={mp.img} ds={mp.description} />)
              }
            </div>
        </motion.div>
    )
}

export default CourseDetails