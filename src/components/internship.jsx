import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

function internship() {
  return (
        <div className='bg-black text-white max-w-screen-2xl container mx-auto px-4 md:px-20 py-20' id='Internship' >
            <div className="flex flex-col items-center justify-center space-y-4 py-10" name="Skills">
                <div className="text-4xl font-bold">Internship</div>
            </div>

            <div className='flex items-center justify-center'>
             <Card sx={{ maxWidth: 345, margin: "20px auto", backgroundColor: '#181818',color:'white',
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(255, 255, 255, 0.2)",
              },}}>
                <CardContent>
                
                  <Typography variant="h5" color="white">
                    Prodigy Infotech
                  </Typography>
                    <Typography  component="div" sx={{ fontWeight: "bold" }}>
                    Full Stack Web Development
                  </Typography>
                  <Typography variant="body2" color="white" sx={{ margin: "10px 0" }}>
                    <p className="text-justify">
                    Worked on developing and deploying web applications using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.
                    Completed 3 projects including an employee management system and authentication systems and BusyBuy.
                    </p>
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Skills: Node.js, Express, MongoDB, JavaScript, HTML, CSS, Bootstrap
                  </Typography>
                   <Typography variant="body2" sx={{ fontWeight: "bold" ,margin: "10px 0" }}>
                   July 2024 to August 2024
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="success" href="https://github.com/Shakshi94" target="blank">
                    View Project
                  </Button>
                </CardActions>
              </Card>


              <Card sx={{ maxWidth: 345, margin: "20px auto", backgroundColor: '#181818',color:'white',
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(255, 255, 255, 0.2)",
              },}}>
                <CardContent>
                
                  <Typography variant="h5" color="white">
                    Summer Internship
                  </Typography>
                    <Typography  component="div" sx={{ fontWeight: "bold" }}>
                    Bytexl Parul University
                  </Typography>
                  <Typography variant="body2" color="white" sx={{ margin: "10px 0" }}>
                  <p className="text-justify">
                  Gained hands-on experience in Git, version control, and cloud platforms like AWS and Azure.
                  Learned and implemented web development using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                  Worked on collaborative projects, enhancing both development and deployment skills on cloud platforms.
                  </p>  
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Skills: Node.js, Express, MongoDB, JavaScript, Bootstrap,Git,AWS
                  </Typography>
                   <Typography variant="body2" sx={{ fontWeight: "bold" ,margin: "10px 0" }}>
                    May 2024 to June 2024
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="success" href="https://github.com/Shakshi94">
                    <a href="https://drive.google.com/file/d/1G0NJWhoTkTn5F-7xUoZKoqeeK9KdVCIY/view?usp=sharing" target="blank">View Certificate</a>
                  </Button>
                </CardActions>
              </Card>
          </div>  
        </div>
    );
}

export default internship