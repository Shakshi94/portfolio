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
import Internship from './components/internship.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detailprojects from './components/Detailprojects.jsx';

function App() {
    const { scrollYProgress } = useScroll();

    return (
        <Router>
             <motion.div className="fixed top-0 left-0 right-0 h-1 " style={{ scaleX: scrollYProgress }} />
            <Routes>
                {/* Main Layout Route */}
                <Route 
                    path="/" 
                    element={
                        <div className="w-full min-h-screen overflow-x-hidden">
                            <Navbar />
                            <main className="w-full">
                                <Home />
                                <About />
                                <Skills />
                                <Projects />
                                <Internship />
                                <Education />
                                <Certificate />
                                <Contact />
                            </main>
                            <Footer />
                        </div>
                    } 
                />
                
                {/* Detail Projects Route */}
                <Route 
                    path="/detail-projects" 
                    element={<Detailprojects />} 
                />
            </Routes>
        </Router>
    );
}

export default App;

