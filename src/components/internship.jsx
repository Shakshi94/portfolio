import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

function internship() {
  return (
        <div className='bg-black text-white max-w-screen-2xl container mx-auto px-4 md:px-20 py-20'  >
            <div className="flex flex-col items-center justify-center space-y-4 py-10" name="Skills">
                <div className="text-4xl font-bold">Internship</div>
            </div>

            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-12 flex-wrap justify-center py-5"
            >
            </motion.div>
        </div>
    );
}

export default internship