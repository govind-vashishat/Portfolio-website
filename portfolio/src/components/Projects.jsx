import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import synwave from "../assets/synwave.png";
import Visioncraft from "../assets/Visioncraft.png";
import AuthJs from "../assets/AuthJs.png";
import { FaGithub } from "react-icons/fa";

const syncDemo = "https://sync-wave-zeta.vercel.app/";
const syncCode = "https://github.com/91Siddharth/sync-Wave";
const visionDemo = "https://vision-front-eight.vercel.app/";
const visionCode = "https://github.com/govind-vashishat/vision-craft";
const AuthCode = "https://github.com/govind-vashishat/AuthJs";

const Projects = () => {
  const handleClick = (url) => {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.opener = null;  // Prevent tabnabbing
      }
  }  

  return (
    <div className='mt-20 lg:mt-10'>
        <div className='flex flex-col gap-10'>    
        <h1 className='font-logo text-4xl lg:text-5xl text-center mt-5'>My <span className='text-blue-500'>Projects</span></h1> 
        <div className='flex flex-wrap justify-between items-center p-10 pl-20 md:p-5'>
        <Card className='w-80 border border-neutral-700 bg-gradient-to-r from-black to-gray-900 cursor-pointer my-5'>
            <CardMedia 
            component={'img'}
            height="140"
            image={synwave}
            alt="synwave"
             />
            <CardContent className='text-neutral-300 font-logo'>
                <Typography gutterBottom varient="h5" component="div" className='text-blue-500'>
                    SyncWave
                </Typography>
                <Typography variant='body2'>
                A video conferencing application built with Nextjs. Features include real-time video chat, screen sharing, and messaging.
                </Typography>
            </CardContent> 
            <CardActions className='flex justify-between items-center'>
                <Button size='small' color='primary' onClick={() => handleClick(syncDemo)}>Demo</Button>
                <Button size='small' color='primary' onClick={() => handleClick(syncCode)} ><FaGithub/></Button>
            </CardActions>
        </Card>

        <Card className='w-80 border border-neutral-700 bg-gradient-to-r from-black to-gray-900 cursor-pointer my-5'>
            <CardMedia 
            component={'img'}
            height="140"
            image={Visioncraft}
            alt="Visioncraft"
             />
            <CardContent className='text-neutral-300 font-logo'>
                <Typography gutterBottom varient="h5" component="div" className='text-blue-500'>
                    VisionCraft
                </Typography>
                <Typography variant='body2'>
                This is a MERN stack application that leverages the OpenAI DALL-E 3 API to generate images based on textual descriptions. The app provides an intuitive interface for users to input descriptions and receive AI-generated images in return.
                </Typography>
            </CardContent> 
            <CardActions className='flex justify-between items-center'>
                <Button size='small' color='primary' onClick={() => handleClick(visionDemo)}>Demo</Button>
                <Button size='small' color='primary' onClick={() => handleClick(visionCode)} ><FaGithub/></Button>
            </CardActions>
        </Card>

        <Card className='w-80 border border-neutral-700 bg-gradient-to-r from-black to-gray-900 cursor-pointer my-5'>
            <CardMedia 
            component={'img'}
            height="140"
            image={AuthJs}
            alt="AuthJs"
             />
            <CardContent className='text-neutral-300 font-logo'>
                <Typography gutterBottom varient="h5" component="div" className='text-blue-500'>
                    AuthJs
                </Typography>
                <Typography variant='body2'>
                This is a comprehensive MERN stack application that implements user authentication using JSON Web Tokens (JWT).
                </Typography>
            </CardContent> 
            <CardActions className='flex justify-center items-center'>
                <Button size='small' color='primary' onClick={() => handleClick(AuthCode)} ><FaGithub/></Button>
            </CardActions>
        </Card>
        </div>
        </div>
    </div>
  )
}

export default Projects