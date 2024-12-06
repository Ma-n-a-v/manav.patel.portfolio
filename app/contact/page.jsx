'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+1(431)374-9030",
        link: 'tel:+14313749030'
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "manav.patel.professional@gmail.com",
        link: 'mailto:manav.patel.professional@gmail.com?subject=Hello%20Manav&body=Hi%20Manav,%20I%20would%20like%20to%20connect!'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Based",
        description: "Winnipeg, Manitoba, Canada",
        link: 'https://www.google.com/maps/place/Winnipeg,+MB/'
    },
];

import { motion } from "framer-motion";

const contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_wv2zois", // Replace with your EmailJS service ID
                "template_c78twvv", // Replace with your EmailJS template ID
                form.current,
                "th78_EEP9u1-zr9XG" // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Message sent successfully:", result.text);
                    alert("Your message has been sent!");
                    e.target.reset();
                },
                (error) => {
                    console.log("Message failed to send:", error.text);
                    alert("Failed to send your message. Please try again.");
                }
            );
    };

    return (
        <motion.section 
            initial={{opacity: 0}}
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">Drop your details below, and let&apos;s create something extraordinary together!</p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="First Name" name="first_name" required/>
                                <Input type="text" placeholder="Last Name" name="last_name" required/>
                                <Input type="email" placeholder="Email Address" name="email" required/>
                                <Input type="tel" placeholder="Phone Number" name="phone" required/>
                            </div>
                            {/* select */}
                            {/* text area */}
                            <Textarea 
                                className="h-[200px]"
                                placeholder="Type your message here."
                                name="message"
                                required
                            />
                            {/* button */}
                            <Button size='md' className='max-w-40' type="submit">Send message</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition-colors">{item.description}</a>
                                    </div>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default contact;