import * as React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

function internship() {
  return (
        <div className='bg-black text-white max-w-screen-2xl container mx-auto px-4 md:px-20 py-20' id='Internship' >
            <div className="flex flex-col items-center justify-center space-y-4 py-10" name="Skills">
                <div className="text-4xl font-bold">Internship</div>
            </div>

            <div className='flex align-items-center justify-center'>
             <Card sx={{ maxWidth: 345, margin: "20px auto", backgroundColor: '#181818',color:'white',
              "&:hover": {
              backgroundColor: "#43A047",
              color: 'black',
            },
            '&:hover Button': {
              color: 'black'
            }}}>
                <CardContent>
                
                  <Typography variant="h5">
                    Prodigy Infotech
                  </Typography>
                    <Typography  component="div" sx={{ fontWeight: "bold" }}>
                    Full Stack Web Development
                  </Typography>
                  <Typography variant="body2" sx={{ margin: "10px 0" }}>
                    Worked on developing and deploying web applications using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.
                    Completed 3 projects including an employee management system and authentication systems and BusyBuy.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Skills: Node.js, Express, MongoDB, JavaScript, HTML, CSS, Bootstrap
                  </Typography>
                   <Typography variant="body2" sx={{ fontWeight: "bold" ,margin: "10px 0" }}>
                    1 July to 1 August
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color='success'>View Projects</Button>
                </CardActions>
              </Card>
          </div>  
        </div>
    );
}

export default internship