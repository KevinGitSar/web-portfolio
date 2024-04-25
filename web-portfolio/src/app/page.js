'use client';

import Image from 'next/image';
import NavigationBar from './components/NavigationBar';
import ProjectButton from './components/ProjectButton';
import Cursor from './components/Cursor';
import Reveal from './components/Reveal';
import PDFViewer from './components/PDFViewer';

import { useState } from 'react';

export default function Home() {

  // const [togglePDF, setTogglePDF] = useState(false);
  const [experience, setExperience] = useState('tech');

  return (
    <main>
      <NavigationBar></NavigationBar>
      {/* Landing Page */}
      <div id='home' className='min-h-screen flex flex-col justify-center border-[5px] border-[#1D2233]'>
        <div className='relative text-center h-1/2 flex flex-col justify-center'>
          <div className='mx-auto'>
              <h1 className='text-3xl'>
            <Reveal>Hi, my name is <span className='font-semibold text-[#3FAA95]'>Kevin Sar</span></Reveal></h1>
              <h1 className='text-xl mt-5'>
            <Reveal>I'm a <span className='font-semibold text-[#3FAA95]'>Full Stack Developer</span> and I am looking to join <span className='font-semibold text-[#3FAA95]'>your team</span>!</Reveal></h1>
          </div>

          <div className='flex justify-between w-1/2 mx-auto py-5'>
            <div className='p-2 rounded transition ease-in-out delay-100 hover:scale-125'>
              <a href='https://github.com/KevinGitSar' target='_blank'>
                <img src='/icons/github-icon.png' alt="Kevin's Github" title="Kevin's Github Link" className='w-[60px]'/>
              </a>
            </div>
            <div className='p-2 rounded transition ease-in-out delay-100 hover:scale-125'>
              <a href='https://www.linkedin.com/in/kevin-sar-249b09131/' target='_blank'>
                <img src='/icons/linkedin-icon.png' alt="Kevin's LinkedIn" title="Kevin's LinkedIn Link" className='w-[60px]'/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Page */}
      <div id='about' className='min-h-screen flex flex-col justify-center border-[5px] border-[#0A0F22] bg-[#1D2233]'>
        <div className='sm:mx-auto sm:w-10/12 md:w-7/12 lg:w-1/2 text-center p-5 mx-1 bg-[#1D2233] border-[5px] border-[#1D2233]'>
          <h2 className='text-5xl font-semibold flex justify-center'>About Me</h2>
        </div>
        <div className='sm:mx-auto sm:w-10/12 md:w-7/12 lg:w-1/2 px-5 py-5 mx-1 bg-[#1D2233] border-[5px] border-[#1D2233]'>
        <Reveal>
          <p className='text-2xl text-center'>
          I am a <span className='font-semibold text-[#3FAA95]'>Software Engineering</span> graduate from Mohawk College currently looking for work. I enjoy working on full-stack <span className='font-semibold text-[#3FAA95]'>web-based</span> projects. I have a high interest in <span className='font-semibold text-[#3FAA95]'>mobile</span> and <span className='font-semibold text-[#3FAA95]'>game development</span>, but I am always open to learn and explore new things.
          </p>
        </Reveal>
        </div>
      </div>

      {/* Project Buttons */}
      <div id='projects' className='min-h-screen flex flex-col justify-center border-[5px] border-[#0A0F22] bg-[#1D2233]'>

        <div className='w-11/12 mx-auto sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 text-center p-5 mx-1'>
          <h2 className='text-5xl font-semibold'>My Projects</h2>
        </div>
        
        <ProjectButton title={'PreprLabs Web Dev Challenges'} link={'#project-pl'} mainImage={'/images/pl-images/challenge-1-clone-page.png'} image1={'/icons/react-logo.png'} image2={'/icons/mongodb-logo.png'} image3={'/icons/redux-logo.png'} image4={'/icons/tailwind-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#3FAA95'}></ProjectButton>

        <ProjectButton title={'Rate My Cut'} link={'#project-rmc'} mainImage={'/images/rmc-images/rmc-main.png'} image1={'/icons/vue-logo.png'} image2={'/icons/laravel-logo.png'} image3={'/icons/digitalocean-logo.png'} image4={'/icons/mysql-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#3FAA95'}></ProjectButton>
        
        <ProjectButton title={'Meapp'} link={'#project-ma'} mainImage={'/images/ma-images/meapp-landing-page-2.png'} image1={'/icons/java-logo.png'} image2={'/icons/android-logo.png'} image3={'/icons/stream-logo.png'} image4={'/icons/sqlite-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#3FAA95'}></ProjectButton>

        <ProjectButton title={'Prime Time Gaming'} link={'#project-ptg'} mainImage={'/images/ptg-images/prime-time-gaming-main-page.png'} image1={'/icons/react-logo.png'} image2={'/icons/bootstrap-logo.png'} image3={'/icons/javascript-logo.png'} image4={'/icons/netlify-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#3FAA95'}></ProjectButton>

      </div>

      {/* PreprLabs Project Section */}
      <div id='project-pl' className='min-h-screen flex flex-col justify-evenly border-[5px] border-[#1D2233]'>
        <div className='text-center p-5 m-1'>
            <h2 className='text-5xl font-semibold'>PreprLabs Web Dev Challenges</h2>
        </div>
        <div className='text-center m-1 sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
            <Reveal><img src="images/pl-images/challenge-1-clone-page.png" /></Reveal>
        </div>
        <div className='flex flex-col justify-between sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>

            <div className='m-1 text-xs flex justify-between'>
              <span className='transform transition hover:scale-105 '><Reveal><p className='text-[#3FAA95]'><a href='https://github.com/KevinGitSar/FrontendDev-Challenge-1' target='_blank'>https://github.com/KevinGitSar/FrontendDev-Challenge-1</a></p></Reveal></span>
              <Reveal><p>December 2023</p></Reveal>
            </div>

            <div className='m-1'>
              <Reveal><p>Project PreprLabs Web Dev Challenges is a 4 part challenge for the PreprLabs Flexible Upskilling Network (F.U.N.) Program.</p></Reveal>
            </div>

            <div className='m-1'>
              <Reveal><p>Part 1: Clone the design of PreprLab's Explore Page.</p></Reveal>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>JavaScript, HTML/CSS was used to clone the design of PreprLab's Explore page.</li>
                  <li>Frameworks and Tools used are React and TailwindCSS.</li>
                </ul>
              </Reveal>
            </div>
            
            <div className='m-1'>
              <Reveal><p>Part 2: Implement account creation and login system.</p></Reveal>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>JSON Web Token was used in the process of account creation and login authorization.</li>
                  <li>Node Express was used to create the back-end server.</li>
                  <li>MongoDB was used to store account data.</li>
                </ul>
                </Reveal>
            </div>
            
            <div className='m-1'>
              <Reveal><p>Part 3: Clone dashboard page.</p></Reveal>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>Create 'add a project' page.</li>
                  <li>'Add a project' simulated using Redux and Redux-Persist.</li>
                </ul>
              </Reveal>
            </div>
            <div className='m-1'>
              <Reveal><p>Part 4: Incorporate the Accessibility Button.</p></Reveal>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>Accessibility Button created as a react component.</li>
                  <li>Used react-hooks to implement accessibility features.</li>
                </ul>
              </Reveal>
            </div>
        </div>
      </div>

      {/* Rate My Cut Project Section */}
      <div id='project-rmc' className='min-h-screen flex flex-col justify-evenly border-[5px] border-[#1D2233]'>
        <div className='text-center p-5 m-1'>
            <h2 className='text-5xl font-semibold'>Rate My Cut</h2>
        </div>
        <div className='text-center m-1 sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
            <Reveal><img src="images/rmc-images/rmc-main.png" /></Reveal>
        </div>
        <div className='flex flex-col justify-between sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>

            <div className='m-1 text-xs flex justify-between'>
              <span className='transform transition hover:scale-105 '><Reveal><p className='text-[#3FAA95]'><a href='https://github.com/KevinGitSar/Rate-My-Cut' target='_blank'>https://github.com/KevinGitSar/Rate-My-Cut</a></p></Reveal></span>
              <Reveal><p className="float-right">October 2023</p></Reveal>
            </div>

            <div className='m-1'>
              <Reveal><p>Rate My Cut is a haircut catalogue that allows users to post their haircut to share and help others find what kind of hairstyles they want.</p></Reveal>
            </div>

            <div className='m-1'>
              <Reveal><p>Frontend:</p></Reveal>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>Figma was used to create the designs of web pages.</li>
                  <li>Header, Navbar, and Footers created as Vue Components.</li>
                  <li>JavaScript, HTML/CSS, and TailwindCSS used to design web pages.</li>
                </ul>
              </Reveal>
            </div>
            
            <div className='m-1'>
              <Reveal><p>Backend:</p></Reveal>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>Laravel used to create models, controllers, and schemas for database migration and api calls.</li>
                  <li>User authentication and authorization.</li>
                </ul>
              </Reveal>
            </div>
            
            <div className='m-1'>
              <Reveal><p>Database:</p></Reveal>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>MySQL used to store structured data.</li>
                </ul>
              </Reveal>
            </div>
            <div className='m-1'>
              <Reveal><p>Deployment:</p></Reveal>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>Application Server set-up with Linux OS.</li>
                  <li>HTTPS/SSL/DNS Configuration.</li>
                  <li>Hosted and Deployed with Digital Ocean.</li>
                  <li>Check it out on &#8594; <a href='https://kevinsar.ca/' target='_blank' className='font-semibold transition ease-in-out delay-100 hover:text-[#3FAA95]'>kevinsar.ca</a> &#8592; </li>
                </ul>
              </Reveal>
            </div>
        </div>
      </div>

      {/* MeApp Project Section */}
      <div id='project-ma' className='min-h-screen flex flex-col justify-evenly border-[5px] border-[#1D2233]'>
        <div className='text-center p-5 m-1 flex justify-center'>
          <h2 className='text-5xl font-semibold'>MeApp</h2>
        </div>
        <div className='text-center m-1 sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 flex justify-center'>
          <Reveal><img src="images/ma-images/meapp-home-page.png" className='object-contain max-h-[300px] mx-auto'/></Reveal>
        </div>
        <div className='flex flex-col justify-between sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>

            <div className='m-1 text-xs flex justify-between'>
              <span className='transform transition hover:scale-105 '><Reveal><p className='text-[#3FAA95]'><a href='https://github.com/ZackFreeman12/MeApp' target='_blank'>https://github.com/ZackFreeman12/MeApp</a></p></Reveal></span>
              <Reveal><p className="float-right">April 2022</p></Reveal>
            </div>

            <div className='m-1'>
              <Reveal><p>The software engineering project is where I and 3 other students work together and establish full collaboration and proper communication with a real client. MeApp is a dating application with the benefit of teaching users mental wellness, self-discovery, and emphasis on a safety approach to online dating.</p></Reveal>
            </div>

            <div className='m-1'>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>Assumed the role of team lead to delegate tasks and ensure their timely completion.</li>
                  <li>Maintained regular and effective communication with the client.</li>
                  <li>Developed the chat feature using Stream's chat API for real-time messaging.</li>
                  <li>Involved with merging features produced by other team members together.</li>
                  <li>Produced a prototype of the application with all requested features.</li>
                  <li>Java, Android SDK, SQLite, and Stream API was used to produce the prototype.</li>
                </ul>
              </Reveal>
            </div>
        </div>
      </div>

      {/* Prime Time Gaming Project Section */}
      <div id='project-ptg' className='min-h-screen flex flex-col justify-evenly border-[5px] border-[#1D2233]'>
        <div className='text-center p-5 m-1 flex justify-center'>
          <h2 className='text-5xl font-semibold'>Prime Time Gaming</h2>
        </div>
        <div className='text-center m-1 sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
          <Reveal><img src="images/ptg-images/prime-time-gaming-main-page.png"/></Reveal>
        </div>
        <div className='flex flex-col justify-between sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>

            <div className='m-1 text-xs flex justify-between'>
              <span className='transform transition hover:scale-105 '><Reveal><p className='text-[#3FAA95]'><a href='https://github.com/KevinGitSar/primegame' target='_blank'>https://github.com/KevinGitSar/primegame</a></p></Reveal></span>
            <Reveal><p className="float-right">May 2021</p></Reveal>
            </div>

            <div className='m-1'>
            <Reveal><p>Prime Time Gaming is a prime numbers game created using React, JavaScript, and Bootstrap. It is also my first ever completed personal project.</p></Reveal>
            </div>

            <div className='m-1'>
              <Reveal>
                <ul className='list-disc pl-5'>
                  <li>It's a web application with a Model-View implementation.</li>
                  <li>State Management was used to keep track of the game state.</li>
                  <li>React Hooks used to implement timer-countdown feature.</li>
                  <li>Teaches users about prime numbers especially why 1 is not a prime number and why 2 is a prime number.</li>
                  <li>Netlify was used to deploy the project.</li>
                  <li>Check it out on &#8594; <a href='https://prime-time-gaming.netlify.app/' className='font-semibold transition ease-in-out delay-100 hover:text-[#3FAA95]'>prime-time-gaming.netlify.app</a> &#8592; </li>
                </ul>
              </Reveal>
            </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id='skills' className='min-h-screen flex flex-col justify-center border-[5px] border-[#0A0F22] bg-[#1D2233]'>

        <div className='text-center p-5 mx-1 sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
          <h2 className='text-5xl font-semibold'>My Skills</h2>
        </div>
        
        <div className='mx-1 sm:mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12'>

          <div className='flex'>
            <div className='w-1/2 text-center p-5 bg-[#0A0F22] border-[5px] border-[#1D2233]'>
              <h3 className='text-xl font-semibold'><span className='flex justify-center'><Reveal>Frontend</Reveal></span></h3>
              <ul className='text-start mt-4'>
                <Reveal><li>JavaScript</li></Reveal>
                <Reveal><li>HTML & CSS</li></Reveal>
                <Reveal><li>React</li></Reveal>
                <Reveal><li>Vue</li></Reveal>
                <Reveal><li>TailwindCSS</li></Reveal>
                <Reveal><li>Bootstrap</li></Reveal>
                <Reveal><li>AlpineJS</li></Reveal>
              </ul>
            </div>

            <div className='w-1/2 text-center p-5 bg-[#0A0F22] border-[5px] border-[#1D2233]'>
              <h3 className='text-xl font-semibold'><span className='flex justify-center'><Reveal>Backend</Reveal></span></h3>
              <ul className='text-start mt-4'>
                <Reveal><li>Django/Python</li></Reveal>
                <Reveal><li>Laravel/PHP</li></Reveal>
                <Reveal><li>MySQL</li></Reveal>
                <Reveal><li>MongoDB</li></Reveal>
                <Reveal><li>Redis</li></Reveal>
                <Reveal><li>NodeJS</li></Reveal>
                <Reveal><li>ExpressJS</li></Reveal>
              </ul>
            </div>
          </div>

          <div className='flex justify-evenly'>
            <div className='w-1/2 text-center p-5 bg-[#0A0F22] border-[5px] border-[#1D2233]'>
              <h3 className='text-xl font-semibold'><span className='flex justify-center'><Reveal>Tools</Reveal></span></h3>
              <ul className='text-start mt-4'>
                <Reveal><li>Docker</li></Reveal>
                <Reveal><li>Github</li></Reveal>
                <Reveal><li>Git</li></Reveal>
                <Reveal><li>VS Code</li></Reveal>
                <Reveal><li>Android Studio</li></Reveal>
                <Reveal><li>IntelliJ</li></Reveal>
              </ul>
            </div>

            <div className='w-1/2 text-center p-5 bg-[#0A0F22] border-[5px] border-[#1D2233]'>
              <h3 className='text-xl font-semibold'><span className='flex justify-center'><Reveal>Exploring</Reveal></span></h3>
              <ul className='text-start mt-4'>
                <Reveal><li>Flutter</li></Reveal>
                <Reveal><li>Java</li></Reveal>
                <Reveal><li>C#</li></Reveal>
                <Reveal><li>ASP.NET</li></Reveal>
                <Reveal><li>Unreal Engine</li></Reveal>
                <Reveal><li>Unity</li></Reveal>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id='experience' className='min-h-screen flex flex-col border-[5px] border-[#0A0F22] bg-[#0A0F22]'>

        <div className='text-center p-5 mx-1 bg-[#0A0F22]'>
          <h2 className='text-5xl font-semibold'>My Experience</h2>
        </div>

        <div className='flex flex-col sm:flex-row justify-center my-4'>
          <div className='text-center my-2 sm:my-0'>
            <a href='/downloads/Kevin_Sar_-_Resume_2024.pdf' download>
            <button className='px-5 py-2 w-[220px] rounded-lg bg-[#1D2233] border-2 border-[#0A0F22] transition ease-in-out delay-100 hover:text-[#3faa95] hover:border-[#3faa95] hover:bg-[#0A0F22]'>Resume PDF Download</button>
            </a>
          </div>
        </div>

        <div className='w-full mx-auto my-10 sm:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-1/2'>
          <div className='flex'>
            <button className={experience == 'all' ? 'px-5 py-2 w-[220px] text-[#3faa95] rounded-lg bg-[#0A0F22] border-2 border-[#3faa95]' : 'px-5 py-2 w-[220px] rounded-lg bg-[#1D2233] border-2 border-[#0A0F22] transition ease-in-out delay-100 hover:text-[#3faa95] hover:border-[#3faa95] hover:bg-[#0A0F22]' } onClick={()=>{setExperience('all')}}>All</button>
            
            <button className={experience == 'tech' ? 'px-5 py-2 w-[220px] text-[#3faa95] rounded-lg bg-[#0A0F22] border-2 border-[#3faa95]' : 'px-5 py-2 w-[220px] rounded-lg bg-[#1D2233] border-2 border-[#0A0F22] transition ease-in-out delay-100 hover:text-[#3faa95] hover:border-[#3faa95] hover:bg-[#0A0F22]' } onClick={()=>{setExperience('tech')}}>Tech - related</button>
            
            <button className={experience == 'general' ? 'px-5 py-2 w-[220px] text-[#3faa95] rounded-lg bg-[#0A0F22] border-2 border-[#3faa95]' : 'px-5 py-2 w-[220px] rounded-lg bg-[#1D2233] border-2 border-[#0A0F22] transition ease-in-out delay-100 hover:text-[#3faa95] hover:border-[#3faa95] hover:bg-[#0A0F22]' } onClick={()=>{setExperience('general')}}>General</button>
          </div>

          <h1 className='text-3xl ml-5 mt-10 my-4'>Employment</h1>

          <div className={experience == 'all' || experience == 'general' ? 'm-1 mx-auto bg-[#1D2233] p-4 w-full' : 'hidden' }>
            {/* LPG Inventory Solutions */}
            <p className='sm:hidden text-sm my-1'>April 2024 - Present</p>
            <div className='flex justify-between'>
              <h2 className='text-xl text-[#3FAA95] font-semibold my-1'>General Labourer</h2>
              <p className='hidden sm:block my-auto text-sm'>April 2024 - Present</p>
            </div>
            <h3 className='text-lg my-1'>LPG Inventory Solutions - Hamilton, ON, CA</h3>
            <ul className='list-inside list-disc my-1'>
              <li className='my-1'>Collecting and organizing 20+ transaction orders daily.</li>
              <li className='my-1'>Packing and packaging medical orders.</li>
              <li className='my-1'>Locating missing medical products.</li>
              <li className='my-1'>Organizing, categorizing, and shelving medical products.</li>
            </ul>
          </div>

          <div className={experience == 'all' || experience == 'tech' ? 'm-1 mx-auto bg-[#1D2233] p-4 w-full' : 'hidden' }>
            {/* Marlin Industrial Products Inc. */}
            <p className='sm:hidden text-sm my-1'>January 2024 - April 2024</p>
            <div className='flex justify-between'>
              <h2 className='text-xl text-[#3FAA95] font-semibold my-1'>Full Stack Developer - Intern</h2>
              <p className='hidden sm:block my-auto text-sm'>January 2024 - April 2024</p>
            </div>
            <h3 className='text-lg my-1'>Marlin Industrial Products Inc. - North York, ON, CA</h3>
            <ul className='list-inside list-disc my-1'>
              <li className='my-1'>Participated in team activities including system design planning and code reviews.</li>
              <li className='my-1'>Writing, maintaining, and updating application code in Django.</li>
              <li className='my-1'>Provided support and input for improving work processes for the team.</li>
              <li className='my-1'>Conducted development unit testing using Django's built-in automated tests.</li>
              <li className='my-1'>Developed new project features and enhanced existing functionalities.</li>
              <li className='my-1'>Escalates issues to Senior Developer and/or Managers when required.</li>
            </ul>
          </div>

          <div className={experience == 'all' || experience == 'tech' ? 'm-1 mx-auto bg-[#1D2233] p-4 w-full' : 'hidden' }>
            {/* Evenica */}
            <p className='sm:hidden text-sm my-1'>September 2021 - January 2022</p>
            <div className='flex justify-between'>
              <h2 className='text-xl text-[#3FAA95] font-semibold my-1'>Junior Developer - Co-op Position</h2>
              <p className='hidden sm:block my-auto text-sm'>September 2021 - January 2022</p>
            </div>
            <h3 className='text-lg my-1'>Evenica - Burlington, ON, CA</h3>
            <ul className='list-inside list-disc my-1'>
              <li className='my-1'>Collaborated with a team to develop e-commerce websites.</li>
              <li className='my-1'>Tracked and organized product development with Confluence, Jira, and GIT.</li>
              <li className='my-1'>Participated in team reviews and training by receiving and providing valuable feedback.</li>
              <li className='my-1'>Familiar with agile methodologies as an active scrum team member.</li>
            </ul>
          </div>

          <div className={experience == 'all' || experience == 'general' ? 'm-1 mx-auto bg-[#1D2233] p-4 w-full' : 'hidden' }>

            {/* Tiercon */}
            <p className='sm:hidden text-sm my-1'>May 2017 - January 2019</p>
            <div className='flex justify-between'>
              <h2 className='text-xl text-[#3FAA95] font-semibold my-1'>Assembler</h2>
              <p className='hidden sm:block my-auto text-sm'>May 2017 - January 2019</p>
            </div>
            <h3 className='text-lg my-1'>Tiercon Corp. - Stoney Creek, ON, CA</h3>
            <ul className='list-inside list-disc my-1'>
              <li className='my-1'>Contributed to the assembly line by loading/unloading manufacturer parts.</li>
              <li className='my-1'>Proficient with organizing racks, boxes, products, and car parts.</li>
              <li className='my-1'>Conducted thorough inspections of manufacturer products to ensure it is up to specifications.</li>
              <li className='my-1'>Supported managers by assisting with planning and coordinating work orders and tasks.</li>
            </ul>
          </div>

          <div className={experience == 'all' || experience == 'general' ? 'm-1 mx-auto bg-[#1D2233] p-4 w-full' : 'hidden' }>

            {/* Fox 40 */}
            <p className='sm:hidden text-sm my-1'>February 2016 - August 2016</p>
            <div className='flex justify-between'>
              <h2 className='text-xl text-[#3FAA95] font-semibold my-1'>General Labourer</h2>
              <p className='hidden sm:block my-auto text-sm'>February 2016 - August 2016</p>
            </div>
            <h3 className='text-lg my-1'>Fox 40 International Inc. - Hamilton, ON, CA</h3>
            <ul className='list-inside list-disc my-1'>
              <li className='my-1'>Produced, arranged, and managed multiple work orders.</li>
              <li className='my-1'>Contributed to loading and unloading parcels, packages, inventory, and products.</li>
              <li className='my-1'>Proficient with boxing, taping, and packaging goods, products, and international orders.</li>
              <li className='my-1'>Collaborated effectively to prepare and package large orders under tight deadlines.</li>
            </ul>
          </div>

          
          <h1 className='text-3xl ml-5 mt-10 my-4'>Education</h1>

          <div className={experience == 'all' || experience == 'tech' ? 'm-1 mx-auto bg-[#1D2233] p-4 w-full' : 'hidden'}>
            {/* Mohawk College */}
            <p className='sm:hidden text-sm my-1'>September 2019 - April 2023</p>
            <div className='flex justify-between'>
              <h2 className='text-xl text-[#3FAA95] font-semibold my-1'>Software Development <span className='hidden lg:inline-block'>- Computer Systems Technology</span></h2>
              <p className='hidden sm:block my-auto text-sm'>September 2019 - April 2023</p>
            </div>
            <h3 className='text-lg my-1'>Mohawk College - Hamilton, ON, CA</h3>
          </div>

          <div className={experience == 'all' || experience == 'general' ? 'm-1 mx-auto bg-[#1D2233] p-4 w-full' : 'hidden'}>
            {/* Sheridan College */}
            <p className='sm:hidden text-sm my-1'>September 2016 - April 2017</p>
            <div className='flex justify-between'>
              <h2 className='text-xl text-[#3FAA95] font-semibold my-1'>Tool and Die Pre-Apprenticeship</h2>
              <p className='hidden sm:block my-auto text-sm'>September 2016 - April 2017</p>
            </div>
            <h3 className='text-lg my-1'>Sheridan College - Oakville, ON, CA</h3>
          </div>
        </div>
      </div>

      {/* Contact/Socials Section */}
      <div id='contact' className='min-h-screen flex flex-col justify-center border-[5px] border-[#0A0F22] bg-[#1D2233]'>

        <div className='md:grid md:grid-cols-8'>
          <div className='md:col-span-4 lg:col-start-2 lg:col-span-3 xl:col-start-2 xl:col-span-3  md:w-full'>
            <div className='flex-none text-center p-5 mx-1 bg-[#0A0F22] border-[5px] border-[#1D2233] sm:mx-auto sm:w-6/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
              <h2 className='text-2xl font-semibold'>Contact Me</h2>
            </div>

            <div className='p-2 m-1 sm:mx-auto  sm:mx-auto sm:w-6/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
              <ul>
                <Reveal>
                <li className='my-4 transition ease-in-out delay-100 hover:text-[#3faa95] hover:bg-[#0A0F22]'><a href='mailto:KevinSar.97@gmail.com' title='KevinSar.97@gmail.com' className='flex items-center'><img src='icons/mail-icon.png' className='w-[50px] h-[50px] bg-[#f0f4f8] p-2 rounded-lg' /><p className='pl-5'>KevinSar.97@gmail.com</p></a></li>
                </Reveal>
                <Reveal>
                <li className='my-4 transition ease-in-out delay-100 hover:text-[#3faa95] hover:bg-[#0A0F22]'><a href='tel:+1-905-962-7402' title='+1 (905) 962-7402' className='flex items-center'><img src='icons/phone-icon.png' className='w-[50px] h-[50px] bg-[#f0f4f8] p-2 rounded-lg' /><p className='pl-5'>(905) 962-7402</p></a></li>
                </Reveal>
                <Reveal>
                <li className='my-4 transition ease-in-out delay-100 hover:text-[#3faa95] hover:bg-[#0A0F22]'><a href='https://discordapp.com/users/225430076114731008' target="_blank" className='flex items-center'><img src='icons/discord-icon.png' className='w-[50px] h-[50px]' /><p className='pl-5'>kevinsar</p></a></li>
                </Reveal>
                <Reveal>
                <li className='my-4 transition ease-in-out delay-100 hover:text-[#3faa95] hover:bg-[#0A0F22]'><a href='https://www.linkedin.com/in/kevin-sar-249b09131/' target='_blank' className='flex items-center'><img src='icons/linkedin-icon.png' className='w-[50px] h-[50px]' /><p className='pl-5'>LinkedIn</p></a></li>
                </Reveal>
              </ul>
            </div>
          </div>

          <div className='md:col-span-4 lg:col-start-5 lg:col-span-3 xl:col-start-5 xl:col-span-3  md:w-full'>
            <div className='flex-none text-center p-5 mx-1 bg-[#0A0F22] border-[5px] border-[#1D2233] sm:mx-auto  sm:mx-auto sm:w-6/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
              <h2 className='text-2xl font-semibold'>My Socials</h2>
            </div>

            <div className='p-2 m-1 sm:mx-auto  sm:mx-auto sm:w-6/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
              <ul>
                <Reveal>
                <li className='my-4 transition ease-in-out delay-100 hover:text-[#3faa95] hover:bg-[#0A0F22]'><a href='https://github.com/KevinGitSar' target='_blank' className='flex items-center'><img src='icons/github-icon.png' className='w-[50px] h-[50px] rounded-lg' /><p className='pl-5'>Github</p></a></li>
                </Reveal>
                <Reveal>
                <li className='my-4 transition ease-in-out delay-100 hover:text-[#3faa95] hover:bg-[#0A0F22]'><a href='https://preprlabs.org/profile/KevinS' target='_blank' className='flex items-center'><img src='icons/preprlabs-icon.png' className='w-[50px] h-[50px] bg-[#f0f4f8] p-2 rounded-lg' /><p className='pl-5'>PreprLabs</p></a></li>
                </Reveal>
                <Reveal>
                <li className='my-4 transition ease-in-out delay-100 hover:text-[#3faa95] hover:bg-[#0A0F22]'><a href='https://www.instagram.com/ksarx22/' target='_blank' className='flex items-center'><img src='icons/instagram-icon.png' className='w-[50px] h-[50px] bg-[#0A0F22] rounded-lg' /><p className='pl-5'>Instagram</p></a></li>
                </Reveal>
                <Reveal>
                <li className='my-4 transition ease-in-out delay-100 hover:text-[#3faa95] hover:bg-[#0A0F22]'><a href='https://www.facebook.com/kevin.sar.77/' target='_blank' className='flex items-center'><img src='icons/facebook-icon.png' className='w-[50px] h-[50px] bg-[#0A0F22] rounded-lg' /><p className='pl-5'>Facebook</p></a></li>
                </Reveal>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Cursor></Cursor>
    </main>
  )
}
