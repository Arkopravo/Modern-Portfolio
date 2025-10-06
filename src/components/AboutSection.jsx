import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='#about' className='py-24 px-4 relative'>
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl'>Passionate Web Developer & Travel Enthusiast</h3>

            <p className='text-muted-foreground'>
              A developer who loves crafting beautiful and functional Applications. When I'm not coding, you'll find me exploring new places and cultures. I believe in continuous learning and am always excited to take on new challenges in the tech world.
            </p>

            <p className='text-muted-foreground'>
              In my free time, I enjoy hiking, photography, and immersing myself in different cultures. I believe that travel inspires creativity and brings new perspectives to my work.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                {" "}
                Get In Touch
              </a>

              <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                Download CV
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary'/>
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>
                    {" "}
                    Building responsive and dynamic web applications using modern technologies like React, Node.js, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary'/>
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>UI/UX & Design</h4>
                  <p className='text-muted-foreground'>
                    {" "}
                    Designing intuitive and visually appealing interfaces with attention to detail, accessibility, and user-centered design principles to enhance engagement and usability.
                  </p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary'/>
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Full-Stack Development</h4>
                  <p className='text-muted-foreground'>
                    {" "}
                    Building end-to-end solutions including scalable backend APIs, robust databases, and cloud-integrated deployments using Node.js, Express, MongoDB, and serverless technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection