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
      <h1 className="text-4xl mb-5 text-center font-bold ">Achievements</h1>
      
      <Accordion
        expanded={hoveredAccordion === 'panel1'}
        onMouseEnter={() => handleMouseEnter('panel1')}
        onMouseLeave={handleMouseLeave}
        className={`border-2 p-2 m-2 transition-all duration-200 ease-in-out ${hoveredAccordion === 'panel1' ? 'border-gray-700' : 'border-black'}`}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-black" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span className="text-xl font-semibold text-black">MERN Full Stack Development (Apna College)</span>
        </AccordionSummary>
        <AccordionDetails className="text-gray-700">
          I did Full stack development from Apna College. I learned MongoDB, Express, React, Node.js, and also HTML & CSS.
          <div className='mt-4'>
            <a href="https://drive.google.com/file/d/1dCc5dcXLz-0AovjunN4fHHuzx_3D3MCY/view" target="_blank" rel="noopener noreferrer">
              <button type="button" className="text-white bg-green-700 hover:bg-green-600 font-medium rounded-md text-sm px-4 py-2">Show Credential</button>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={hoveredAccordion === 'panel2'}
        onMouseEnter={() => handleMouseEnter('panel2')}
        onMouseLeave={handleMouseLeave}
        className={`border-2 p-2 m-2 transition-all duration-200 ease-in-out ${hoveredAccordion === 'panel2' ? 'border-gray-700' : 'border-black'}`}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-black" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span className="text-xl font-semibold text-black">Data Structure in C++ (Coding Ninja)</span>
        </AccordionSummary>
        <AccordionDetails className="text-gray-700">
          In this course, I learned Data Structures and Algorithms such as Arrays, Linked Lists, Stacks, Queues, Searching & Sorting Algorithms, Dynamic Programming, Graphs, and more. Solved 300+ questions.
          <div className='mt-4'>
            <a href="https://certificate.codingninjas.com/view/35c2d511db598d81" target="_blank" rel="noopener noreferrer">
              <button type="button" className="text-white bg-green-700 hover:bg-green-600 font-medium rounded-md text-sm px-4 py-2">Show Credential</button>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={hoveredAccordion === 'panel3'}
        onMouseEnter={() => handleMouseEnter('panel3')}
        onMouseLeave={handleMouseLeave}
        className={`border-2 p-2 m-2 transition-all duration-200 ease-in-out ${hoveredAccordion === 'panel3' ? 'border-gray-700' : 'border-black'}`}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-black" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <span className="text-xl font-semibold text-black">Basic Azure (Coursera)</span>
        </AccordionSummary>
        <AccordionDetails className="text-gray-700">
          In this course, I learned Cloud Computing and services like Azure Virtual Machines, Azure Storage, Azure App Services, and how to create them.
          <div className='mt-4'>
            <a href="https://www.coursera.org/account/accomplishments/verify/A3R9SK2UXLRG" target="_blank" rel="noopener noreferrer">
              <button type="button" className="text-white bg-green-700 hover:bg-green-600 font-medium rounded-md text-sm px-4 py-2">Show Credential</button>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
