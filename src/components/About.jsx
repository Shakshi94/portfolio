import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
    return (
        <div className="max-w-screen-2xl container mx-auto py-20 px-4 md:px-20 bg-white text-black" name="About">
            <div className="flex flex-col items-center space-y-4">
                <div className="text-4xl font-bold ">About me</div>
            </div>

            <div className="space-y-10 flex flex-col md:flex-row">
                <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="w-full md:w-1/2 flex justify-center md:space-y-8 mt-5">
                    <img className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer border-2 border-black" src="/public/images/shakshiphoto.png" alt="image description" />
                </motion.div>

                <motion.div 
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="md:space-y-8 font-semi-bold text-lg w-full md:w-1/2 p-4 md:p-0 md:ml-10 mt-5">
                    <p>
                       <div>Hello! I&apos;m  <span className="text-green-600 font-bold">Shakshi Vishwakarma,</span></div> 
                       a dedicated Full Stack Developer with a keen interest in creating efficient and dynamic web applications. 
                       Currently, I&apos;m in 4<sup>th</sup> year pursuing a B.Tech in Computer Science Engineering at Parul University, 
                       where I maintain a CGPA of 7.91. My journey in tech has been driven by a passion for coding, 
                       problem-solving, and continuous learning.

                       <div>
                       With a strong foundation in programming languages like <b className="text-green-600">C++, JavaScript, HTML, CSS, Node.js, Express,</b> and <b className="text-green-600"> MYSQL,</b> along with frameworks such as React, 
                       I am well-equipped to handle both front-end and back-end development tasks. 
                       My hands-on experience with databases like MySQL and MongoDB further complements my skill set, 
                       allowing me to build robust and scalable applications.
                       </div> 
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
