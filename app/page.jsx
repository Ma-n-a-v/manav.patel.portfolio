import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt8 xl:pb-24'>
          {/* text should be here */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer | System Designer | UI/UX Designer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Manav Patel</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a passionate tech enthusiast and Computer Science student at the University of Winnipeg, diving deep into AI and full-stack development. 
              Driven by innovation, I'm constantly building the next big thing — crafting clean code and intuitive designs to shape the future of technology.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                varient="outline" 
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span><a href="https://drive.google.com/file/d/11vSEroFc4GxxAne6TUS3WZyoil67nY4x/view?usp=sharing" target="_blank">Download CV</a></span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex 
                justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all 
                duration-500" />
              </div>
            </div>
          </div>
          {/* photo should be here */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;