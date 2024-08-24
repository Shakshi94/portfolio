import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Certificate() {
  const [hoveredAccordion, setHoveredAccordion] = useState(null);

  const handleMouseEnter = (panel) => {
    setHoveredAccordion(panel);
  };

  const handleMouseLeave = () => {
    setHoveredAccordion(null);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-black text-white" id='Achievements'>
      <h1 className="text-4xl mb-5 text-center font-bold">Achievements</h1>
      <Accordion
        expanded={hoveredAccordion === 'panel1'}
        onMouseEnter={() => handleMouseEnter('panel1')}
        onMouseLeave={handleMouseLeave}
        className={`border-3 p-2 m-2 ${hoveredAccordion === 'panel1' ? 'hover-accordion' : 'accordion'}`}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          MERN Full Stack Development (Apna College)
        </AccordionSummary>
        <AccordionDetails>
          I did Full stack development from apna college.
          Where I learnt MongoDb, Express, React, Nodejs and also HTML CSS
          <div className='mt-4'><a href="https://drive.google.com/file/d/1dCc5dcXLz-0AovjunN4fHHuzx_3D3MCY/view" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white bg-green-700 font-medium rounded-md text-sm px-2 py-2 me-2 mb-2 ">Show Credential</button>
          </a></div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={hoveredAccordion === 'panel2'}
        onMouseEnter={() => handleMouseEnter('panel2')}
        onMouseLeave={handleMouseLeave}
        className={`border-3 border-black p-2 m-2 ${hoveredAccordion === 'panel2' ? 'hover-accordion' : 'accordion'}`}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Data Structure in C++ (Coding Ninja)
        </AccordionSummary>
        <AccordionDetails>
          In this course, I had learnt Data Structure and Algorithms such as Array, LinkedList, Stack and Queue, Searching Algorithm, Sorting Algorithm, DP, Graph and many more. While learning this Course I Solved 300+ questions
          <div className='mt-4'><a href="https://certificate.codingninjas.com/view/35c2d511db598d81" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white bg-green-700  font-medium rounded-md text-sm px-2 py-2 me-2 mb-2 ">Show Credential</button>
          </a></div>
        </AccordionDetails>
      </Accordion>

       <Accordion
        expanded={hoveredAccordion === 'panel3'}
        onMouseEnter={() => handleMouseEnter('panel3')}
        onMouseLeave={handleMouseLeave}
        className={`border-2 p-2 m-2 ${hoveredAccordion === 'panel3' ? 'hover-accordion' : 'accordion'}`}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Basic Azure (Coursera)
        </AccordionSummary>
        <AccordionDetails>
          In this course,I had learnt Cloud Computing and their services like Azure Virtual Machine, Azure Storage, Azure App Services.And also how to create all these servies.
          <div className='mt-4'><a href="https://www.coursera.org/account/accomplishments/verify/A3R9SK2UXLRG" target="_blank" rel="noopener noreferrer">
            <button type="button" className=" text-white bg-green-700  font-medium rounded-md text-sm px-2 py-2 me-2 mb-2  ">Show Credential</button>
          </a></div>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
