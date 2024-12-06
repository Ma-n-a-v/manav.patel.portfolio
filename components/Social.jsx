import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials =[
    {icon: <FaGithub />, path: 'https://github.com/Ma-n-a-v'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/manav-patel-719577183/'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/simple.manav/'},
    {icon: <FaTwitter />, path: ''},
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                {item.icon}
            </Link>
        })}
    </div>;
};

export default Social;