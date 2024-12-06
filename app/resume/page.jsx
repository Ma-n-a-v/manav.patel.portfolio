'use client';

import { 
    FaHtml5, 
    FaCss3,  
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs, 
    FaJava, 
    FaPython, 
    FaServer,
    FaProjectDiagram,
    FaRobot
} from "react-icons/fa";

import { TbBinaryTree } from "react-icons/tb";

import {
    SiTailwindcss,
    SiNextdotjs
} from "react-icons/si";

//about data 
const about = {
    title: 'About Me',
    description: "My name is Manav B. Patel, a 3rd-year Computer Science undergraduate at the University of Winnipeg. I am passionate about crafting innovative solutions, from software designing to interactive user interfaces, that make technology more accessible and engaging. My experience as a cashier at Walmart and sales associate at H&M honed my ability to understand user needs, manage multiple responsibilities, and work collaboratively in fast-paced environments. I am deeply interested in software development and artificial intelligence, aiming to contribute to cutting-edge technologies that transform industries. When I'm not coding or exploring new frameworks, I enjoy solving challenging problems on LeetCode, experimenting with creative projects in Three.js, or exploring new cafes in Winnipeg. I believe that every problem is an opportunity to learn and grow, which keeps me motivated to push boundaries and improve. If you're interested in collaborating on a project or just want to chat about technology as a whole, feel free to get in touch. I'm always excited to connect with like-minded individuals and learn from new perspectives!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Manav Patel"
        },
        {
            fieldName: "Profession",
            fieldValue: "Computer Science Undergraduate"
        },
        {
            fieldName: "Phone",
            fieldValue: "+1(431)374-9030"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Gujarati"
        },
        {
            fieldName: "Email",
            fieldValue: "manav.patel.professional@gmail.com"
        },
    ]
};

//achievement data
const achievements = {
    title: 'My Achievements',
    description: "My achievements reflect my dedication to continuous learning, innovation, and problem-solving. From participating in the 49th Gujarat Science Project Competition, where I developed an innovative heart attack awareness project using Arduino and chemical reactions to simulate medical scenarios, to contributing to the SSIP Policy and Innovative Ideas Competition by enhancing the BRTS system with UPI payment integration and QR code-activated tickets, I have consistently sought impactful solutions. Additionally, leading a campus navigation system project during a hackathon showcased my technical expertise and leadership skills in delivering an efficient solution. These accomplishments highlight my creativity, teamwork, and drive to make a meaningful impact through technology.",
    items: [
        {
            name: '49th Gujarat State Level Science Project Competition',
            description: 'Designed a live heart attack simulation using Arduino and chemical reactions to raise awareness and demonstrate remedies at the 49th Gujarat Science Project Competition.',
            date: 'January 2019',
        },
        {
            name: 'UWACSSA (University of Winnipeg Applied Computer Science Student Association) Hackathon 2023',
            description: 'Led the development of a campus navigation system during a hackathon, focusing on design and analysis, securing second place for the team.',
            date: 'February 2023',
        },
        {
            name: 'Student Start-up and Innovation Policy (SSIP) Competition 2021',
            description: "Collaborated on a project enhancing Ahmedabad's BRTS services by integrating UPI payments and QR code-based ticket validation. The solution improved payment efficiency and passenger convenience, benefiting the municipal corporation and state government.",
            date: 'February 2021 '
        }
    ],
};

//experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "My professional journey includes roles such as a UI/UX Analyst Intern at LINK, Jaipur, where I developed a keen eye for user-centric design and improved the usability of digital platforms. Additionally, as a Web Developer Intern at Baroda Rayon Corporation, Surat, I honed my technical skills by building and optimizing web applications. I also showcased my leadership and problem-solving abilities during a hackathon by leading the development of a campus navigation system, delivering an innovative and efficient solution. Now, I am eager to leverage my expertise in software development and business analysis to tackle new challenges and drive impactful results.",
    items: [
        {
            company: 'shirty.in (online e-commerce startup)',
            position: 'Product Manager',
            duration: 'April 2021 - November 2021',
        },
        {
            company: 'LINK, Jaipur, India',
            position: 'UI/UX Analyst Intern',
            duration: 'January 2021 - May 2021',
        },
        {
            company: 'Baroda Rayon Corporation, Surat, India',
            position: 'Web Developer Intern',
            duration: 'January 2023 - April 2024',
        },
    ],
};

//education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: "My education has equipped me with a solid foundation in computer science and software development. Currently, I am pursuing my Bachelor's degree in Applied Computer Science at the University of Winnipeg, where I am gaining hands-on experience in programming, data analysis, and system design. Through various projects and courses, I've been able to apply theoretical knowledge to real-world scenarios, preparing me for a successful career in tech and business analysis.",
    items: [
        {
            institution: 'The University of Winnipeg',
            course: 'Applied Computer Science Degree',
            duration: '2022-2025',
        },
        {
            institution: 'Meta Certification',
            course: "Introduction to Front-end Development",
            duration: 'July 2024 - August 2024',
        },
    ],
};

//skills 
const skills = {
    title: 'My Skills',
    description: "My skills are a blend of technical expertise and problem-solving abilities. With proficiency in software development, business analysis, and various programming languages, I am equipped to handle diverse challenges. From developing user-friendly applications to analyzing complex systems, I strive to stay ahead in an ever-evolving tech landscape. My hands-on experience with frameworks, tools, and methodologies further strengthens my capability to deliver innovative solutions and drive results.",
    skillList: [
        {
            icon: <FaJava />,
            name: 'Java',
        },
        {
            icon: <FaPython />,
            name: 'Python',
        },
        {
            icon: <FaServer />,
            name: 'Database Management (PostgreSQL & MongoDB)',
        },
        {
            icon: <FaProjectDiagram />,
            name: 'System Design and Analysis',
        },
        {
            icon: <FaFigma />,
            name: 'Software Designing and Computer Interaction (Figma)',
        },
        {
            icon: <FaHtml5 />,
            name: 'HTML 5',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS 3',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
        {
            icon: <FaNodeJs />,
            name: 'NodeJS and ExpressJS',
        },
        {
            icon: <TbBinaryTree />,
            name: 'Data Structures and Algorithms',
        },
        {
            icon: <FaReact />,
            name: 'React',
        },
        {
            icon: <FaRobot />,
            name: 'Machine Learning (Numpy, pandas, SciKit)'
        },
        {
            icon: <SiNextdotjs />,
            name: 'NextJS',
        },
        {
            icon: <SiTailwindcss />,
            name: 'TailwindCSS',
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {
    Tooltip, 
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="achievements">Achievements</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    {/* contents */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience content */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] py-6 px-10 flex flex-col justify-center items-start gap-4 rounded-none"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-full text-left">{item.position}</h3>
                                                    <div className="flex items-start gap-3">
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* education content */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 flex flex-col justidy-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.course}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* achievements content */}
                        <TabsContent value="achievements" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{achievements.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{achievements.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {achievements.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-auto py-6 px-10 flex flex-col justify-center items-start gap-4"
                                                >
                                                    <span className="text-accent">{item.date}</span>
                                                    <h3 className="text-xl max-w-full min-h-[60px] text-left">
                                                        {item.name}
                                                    </h3>
                                                    <div className="flex items-center gap-3 flex-wrap">
                                                        <p className="text-white/60">{item.description}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills content */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={50}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about me content */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;