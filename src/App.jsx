import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { motion, useScroll } from 'framer-motion';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Contact from './components/Contactform';
import Footer from './components/Footer';

function App() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 " style={{ scaleX: scrollYProgress }} />
            <div className="w-full min-h-screen overflow-x-hidden">
                <Navbar />
                <main className="w-full">
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Education />
                    <Certificate />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
