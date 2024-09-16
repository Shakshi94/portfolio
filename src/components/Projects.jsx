import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import nestify from '../../public/nestify.jpg'
import simon from '../../public/simon.jpg'
import weather from '../../public/weather.jpg'

function Projects() {
  return (
      <div className="max-w-screen-2xl container mx-auto  md:px-10  bg-white text-black py-20" id='Projects'>
        <div className="flex flex-col items-center space-y-4">
          <div className="text-4xl font-bold" >Projects</div>
        
        </div>

        <div className="flex justify-center space-x-4 mt-2 py-4">
          <div className="w-5 h-5 bg-red-400 rounded-full bounce" style={{ animationDelay: '0' }}></div>
          <div className="w-5 h-5 bg-yellow-400 rounded-full bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-5 h-5 bg-green-400 rounded-full bounce" style={{ animationDelay: '0.6s' }}></div>
        </div>

        <div className="project1">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-1/2 flex justify-center py-2">
              <img
                src={nestify}
                alt="Nestify"
                className="h-auto max-w-full rounded-lg border-2 border-black"
              />
            </div>
            <div className="font-bold text-lg md:text-xl w-full md:w-1/2 px-4 md:px-8 py-4">
              <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Nestify</span>
              </h1>
              <p className="text-base md:text-lg font-normal text-black dark:text-gray-400 text-justify">
                &ldquo;Nestify&ldquo; is a platform like Airbnb, designed for exploring renowned tourist destinations. It features authentication for secure access and utilizes the Map box API to provide interactive maps. Additionally, users can contribute by adding new tourist spots for others to discover. This website follows the MVC model.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="project2">
          <div className="flex justify-center space-x-4 py-4">
            <div className="w-5 h-5 bg-red-400 rounded-full bounce" style={{ animationDelay: '0' }}></div>
            <div className="w-5 h-5 bg-yellow-400 rounded-full bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-5 h-5 bg-green-400 rounded-full bounce" style={{ animationDelay: '0.6s' }}></div>
          </div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col md:flex-row items-center py-5"
          >
            <div className="font-bold text-lg md:text-xl w-full md:w-1/2 px-4 md:px-8">
              <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Simon Says Game</span>
              </h1>
              <p className="text-base md:text-lg font-normal text-black dark:text-gray-400  text-justify">
                Welcome to Simon Says, a classic memory game where you have to remember and repeat a sequence of colors! Test your memory skills and see how far you can go.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center py-2">
              <img
                src={simon}
                alt="Simon Says Game"
                className="h-auto max-w-full rounded-lg border-2 border-white"
              />
            </div>
          </motion.div>
        </div>

        <div className="project3">
          <div className="flex justify-center space-x-4 py-4">
            <div className="w-5 h-5 bg-red-400 rounded-full bounce" style={{ animationDelay: '0' }}></div>
            <div className="w-5 h-5 bg-yellow-400 rounded-full bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-5 h-5 bg-green-400 rounded-full bounce" style={{ animationDelay: '0.6s' }}></div>
          </div>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col md:flex-row items-center py-4"
          >
            <div className="w-full md:w-1/2 flex justify-center py-2">
              <img
                src={weather}
                alt="Weather App"
                className="h-auto max-w-full rounded-lg border-2 border-black"
              />
            </div>
            <div className="font-bold text-lg md:text-xl w-full md:w-1/2 px-4 md:px-8">
              <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Weather App</span>
              </h1>
              <p className="text-base md:text-lg font-normal text-black dark:text-gray-400  text-justify">
                Developed a weather application using JavaScript and React for the user interface, leveraging the OpenWeatherMap API to fetch and display weather reports for searched cities.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('top', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center mt-8"
        >

          <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg bg-green-600 text-white hover:bg-black">
            Show more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
   


        </motion.div>
      </div>
  );
}

export default Projects;
