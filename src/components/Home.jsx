import { ReactTyped } from "react-typed";
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Home(){
    return(
        <>
        <div className={` bg-no-repeat bg-cover bg-center bg-local bg-[url('/public/backgroundimage.jpg')] max-w-screen-2xl container mx-auto px-4 md:px-20 bg-black text-white min-h-screen py-20`} id="Home">


            <div className="home flex flex-row flex-cols mx-4 ">
            <div className='mt-5 md:mt-24 space-y-4'>
                <h1 className='leading-10 text-4xl font-bold mb-4'>Hello<span className="wave">👋</span>, I&apos;m</h1>
                <h1 className="text-5xl leading-10 font-extrabold  mb-4">Shakshi Vishwakarma</h1>
                <ReactTyped
                    className='leading-10 text-green-600 font-bold text-4xl space-y-6' 
                    strings={[
                        "Coder",
                        "(MERN) Full Stack Developer",
                        "Programmer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                    >
                </ReactTyped>

                <div className="flex flex-col justify-between space-y-6 md:space-y-0">
                    <div className="space-y-2 font-semibold ">
                         <h1 className="font-bold text-2xl mb-4">Avaliable on</h1> 
                         <ul className="flex flex-wrap space-x-5 mb-4">
                            <li><a href="https://www.linkedin.com/in/shakshi-vishwakarma-21050421b/" target="blank">
                                <div className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact mr-4">
                                    <LinkedInIcon/> 
                                </div>
                              </a>
                             </li>
                            <li> 
                                 <a href="https://github.com/Shakshi94" target="blank">
                                 <div className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact mr-4">
                                    <GitHubIcon/>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/imshakshivishwakarma/?next=%2F" target="blank">
                                 <div className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact mr-4">
                                <InstagramIcon/>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/Shakshivish" target="blank">
                                 <div className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact mr-4">
                                <XIcon/>
                                </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                 <a href="https://drive.google.com/file/d/1yFd9NxIV8mZVtHs91hFNS8rx50fWHVKn/view?usp=sharing" className="flex" target="blank"><Button variant="contained" size="large" color="success" className=' hover:bg-black'>Get Resume</Button></a>
                </div>
            </div>
           
        </div>
        </>
    );
}


export default Home;

