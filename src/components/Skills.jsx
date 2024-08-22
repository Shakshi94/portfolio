import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

function Skills() {
    return (
        <div className='bg-black text-white max-w-screen-2xl container mx-auto px-4 md:px-20 py-20'  >
            <div className="flex flex-col items-center justify-center space-y-4 py-10" name="Skills">
                <div className="text-4xl font-bold">Skills</div>
            </div>

            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-12 flex-wrap justify-center py-5"
            >
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105">
                    <div className="flex h-full justify-center items-center">
                        <FaReact style={{ color: "blue" }} className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105">
                    <div className="flex h-full justify-center items-center">
                        <SiExpress style={{ color: "black" }} className='size-20 sm-size-10' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <SiMongodb style={{ color: "green" }} className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <FaNodeJs style={{ color: "lightGreen" }} className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <FaHtml5 style={{ color: "red" }} className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <FaCss3Alt style={{ color: "blue" }} className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <DiJavascript style={{ color: "Yellow" }} className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <RiTailwindCssFill style={{ color: "skyBlue" }} className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <TbBrandRedux style={{ color: "Blue" }} className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <img src="/dist/icons8-git-48.png" alt="git" className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <img src="/dist/icons8-c-50.png" alt="C++" className='size-20' />
                    </div>
                </div>
                <div className="transform rounded-lg h-30 w-30 sm:h-36 sm:w-36 bg-white shadow-xl transition duration-300 hover:scale-105 border-green-600">
                    <div className="flex h-full justify-center items-center">
                        <TbBrandMysql style={{ color: "#00758f" }} className='size-20' />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Skills;
