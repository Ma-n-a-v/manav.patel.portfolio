'use client';
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "front-end",
        title: "Dragon Repeller Game",
        description: "Monster's Lair Adventure is an action-adventure game developed using JavaScript, where players collect food, coins, and avoid poison, impacting their health, wealth, and upgrades. The game features dynamic mechanics such as real-time health updates, weapon upgrades, and randomly spawning items. Through this project, I demonstrated my ability to implement interactive game elements, manage game states, and create engaging gameplay mechanics, showcasing my strong JavaScript skills, including handling dynamic updates and efficient event-driven programming.",
        stack: [{ name: 'HTML 5'}, { name: 'CSS 3' }, { name: 'JavaScript' }],
        href: "https://github.com/Ma-n-a-v/dragon_repeller",
        image: '/assets/work/dragon_repeller.png',
        live: '',
    },
    {
        num: "02",
        category: "front-end + back-end",
        title: "Cineverse Movie App",
        description: "Cineverse is an interactive Movie App that allows users to explore movies, view details, and submit reviews. Built using JavaScript, it integrates MongoDB for storing reviews, ensuring data persistence. Key features include a search function to find movies by title, displaying movie details, submitting ratings and reviews, and saving those reviews in a database. The app also utilizes Node.js for backend functionality, the TMDB API for real-time movie data, and the Fetch API for communication between the front-end and backend. This project showcases my ability to design dynamic, responsive applications while applying backend integration, data handling, and interactive features using JavaScript.",
        stack: [{ name: 'HTML 5'}, { name: 'CSS 3' }, { name: 'JavaScript' }, { name: 'MongoDB' }, { name: 'Node JS' }],
        href: "https://github.com/Ma-n-a-v/movie_app",
        image: '/assets/work/movie_app.png',
        live: '',
    },
    {
        num: "03",
        category: "Game Dev",
        title: "2D Game Portfolio",
        description: "The 2D Game Portfolio brings my developer journey to life in an interactive and engaging way, showcasing my skills and experiences in a creative 2D environment. Built using JavaScript and Kaboom.js, the game allows users to explore a virtual workspace, control the character with arrow keys or touch controls, and interact with dialogue boxes to learn about my projects and skills. Key features include clickable objects that link to my resume and GitHub profile, a responsive design for both desktop and mobile, and dynamic functionality powered by JavaScript. This project highlights my ability to blend game development, interactivity, and portfolio presentation, while utilizing tools like Vite for development and Tiled for map design.",
        stack: [{ name: 'HTML 5'}, { name: 'CSS 3' }, { name: 'JavaScript' }, { name: 'Kaboom.js'}, { name: 'Vite'}, { name: 'Tiled' }],
        href: "https://github.com/Ma-n-a-v/my-2d-game-portfolio",
        image: '/assets/work/2d_game_portfolio.png',
        live: '',
    },
    {
        num: "04",
        category: "React",
        title: "Tic-Tac-Toe",
        description: "The Tic-Tac-Toe Game is a hands-on interactive project built with React, designed to demonstrate core React concepts like components, state management, and props. Players can engage in a classic two-player game, with dynamic state tracking that updates the UI and detects winners or draws. One of the standout features is the 'time travel' functionality, allowing players to review the game history and jump back to any previous move. Using React for component-based architecture and CSS for styling, this project highlights my proficiency in React's state management and user interface development.",
        stack: [{ name: 'React' }],
        href: "https://github.com/Ma-n-a-v/Tic-Tac-Toe",
        image: '/assets/work/react.png',
        live: '',
    },
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4 ">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* with below logic I removed the last comma */}
                                            {index !== project.stack.length - 1 && ','}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                 {/* source code project button */}
                                 <Link href={project.href}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Source Code</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
