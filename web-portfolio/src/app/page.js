import Image from 'next/image';
import NavigationBar from './components/NavigationBar';
import ProjectButton from './components/ProjectButton';
import ProjectSection from './components/ProjectSection';

export default function Home() {
  return (
    <main>
      <NavigationBar></NavigationBar>

      {/* Landing Page */}
      <div id='home' className='min-h-screen flex flex-col justify-center border-[5px] border-[#1D2233]'>
        <div className='text-center h-1/2 flex flex-col justify-center'>
          <h1 className='text-3xl'>Hi, my name is <span className='font-semibold text-[#379683]'>Kevin Sar</span></h1>
          <h1 className='text-xl mt-5'>and I'm a <span className='font-semibold text-[#379683]'>Full Stack Developer</span>.</h1>

          <div className='flex justify-between w-1/2 mx-auto py-5'>
            <div className='p-2 rounded transition ease-in-out delay-100 hover:scale-125'>
              <a href='https://github.com/KevinGitSar'>
                <img src='/icons/github-icon.png' alt="Kevin's Github" title="Kevin's Github Link" className='w-[60px]'/>
              </a>
            </div>
            <div className='p-2 rounded transition ease-in-out delay-100 hover:scale-125'>
              <a href='https://www.linkedin.com/in/kevin-sar-249b09131/'>
                <img src='/icons/linkedin-icon.png' alt="Kevin's LinkedIn" title="Kevin's LinkedIn Link" className='w-[60px]'/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Page */}
      <div id='about' className='min-h-screen flex flex-col justify-center border-[5px] border-[#1D2233] bg-[#1D2233]'>
        <div className='text-center p-5 mx-1 bg-[#0A0F22] border-[5px] border-[#1D2233]'>
          <h2 className='text-2xl font-semibold'>About me.</h2>
        </div>
        <div className='px-5 py-5 mx-1 bg-[#0A0F22] border-[5px] border-[#1D2233]'>
          <p className='font-semibold'>I'm a full-stack developer with a good history of coming up with new ideas and making successful projects with a team. For example, in the Team Business Innovation Challenge, I noticed problems with how small businesses handle delivery apps and created SwiftServer, which worked really well. In another school project about a dating app, I fixed issues with team communication by figuring out better meeting times, making the project successful. I'm always learning new things and improving my technical skills through projects. Right now, I'm looking for chances to use my full stack development skills on important projects, and you can check out my portfolio to see what I can do. I'd be happy to talk about how I can help your team and organization.</p>
        </div>
      </div>

      {/* Project Buttons */}
      <div id='projects' className='min-h-screen flex flex-col justify-center border-[5px] border-[#1D2233] bg-[#1D2233]'>

        <div className='text-center p-5 m-1 border-[10px] border-[#1D2233]'>
          <h2 className='text-2xl font-semibold'>My Projects</h2>
        </div>
        
        <ProjectButton title={'PreprLabs Web Dev Challenges'} link={'#project-pl'} mainImage={'/images/pl-images/challenge-1-clone-page.png'} image1={'/icons/react-logo.png'} image2={'/icons/mongodb-logo.png'} image3={'/icons/redux-logo.png'} image4={'/icons/tailwind-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#379683'}></ProjectButton>

        <ProjectButton title={'Rate My Cut'} link={'#project-rmc'} mainImage={'/images/rmc-images/rmc-main.png'} image1={'/icons/vue-logo.png'} image2={'/icons/laravel-logo.png'} image3={'/icons/digitalocean-logo.png'} image4={'/icons/mysql-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#379683'}></ProjectButton>
        
        <ProjectButton title={'Meapp'} link={'#project-ma'} mainImage={'/images/ma-images/meapp-landing-page-2.png'} image1={'/icons/java-logo.png'} image2={'/icons/android-logo.png'} image3={'/icons/stream-logo.png'} image4={'/icons/sqlite-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#379683'}></ProjectButton>

        <ProjectButton title={'Prime Time Gaming'} link={'#project-ptg'} mainImage={'/images/ptg-images/prime-time-gaming-main-page.png'} image1={'/icons/react-logo.png'} image2={'/icons/bootstrap-logo.png'} image3={'/icons/javascript-logo.png'} image4={'/icons/netlify-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#379683'}></ProjectButton>

      </div>

      {/* PreprLabs Project Section */}
      <div id='project-pl' className='min-h-screen flex flex-col justify-center border-[5px] border-[#1D2233]'>
        <div className='text-center p-5 m-1'>
            <h2 className='text-2xl font-semibold'>PreprLabs Web Dev Challenges</h2>
        </div>
        <div className='text-center m-1'>
            <img src="images/pl-images/challenge-1-clone-page.png" />
        </div>
        <div className='flex flex-col justify-between '>

            <div className='m-1 text-xs'>
                <p className="float-right">December 2023</p>
            </div>

            <div className='m-1'>
                <p>Project PreprLabs Web Dev Challenges is a 4 part challenge for the PreprLabs Flexible Upskilling Network (F.U.N.) Program.</p>
            </div>

            <div className='m-1'>
                <p>Part 1: Clone the design of PreprLab's Explore Page.</p>
                <ul className='list-disc pl-5'>
                  <li>JavaScript, HTML/CSS was used to clone the design of PreprLab's Explore page.</li>
                  <li>Frameworks and Tools used are React and TailwindCSS.</li>
                </ul>
            </div>
            
            <div className='m-1'>
                <p>Part 2: Implement account creation and login system.</p>
                <ul className='list-disc pl-5'>
                  <li>JSON Web Token was used in the process of account creation and login authorization.</li>
                  <li>Node Express was used to create the back-end server.</li>
                  <li>MongoDB was used to store account data.</li>
                </ul>
            </div>
            
            <div className='m-1'>
                <p>Part 3: Clone dashboard page.</p>
                <ul className='list-disc pl-5'>
                  <li>Create 'add a project' page.</li>
                  <li>'Add a project' simulated using Redux and Redux-Persist.</li>
                </ul>
            </div>
            <div className='m-1'>
                <p>Part 4: Incorporate the Accessibility Button.</p>
                <ul className='list-disc pl-5'>
                  <li>Accessibility Button created as a react component.</li>
                  <li>Used react-hooks to implement accessibility features.</li>
                </ul>
            </div>
        </div>
      </div>

      {/* Rate My Cut Project Section */}
      <div id='project-rmc' className='min-h-screen flex flex-col justify-center border-[5px] border-[#1D2233]'>
        <div className='text-center p-5 m-1'>
            <h2 className='text-2xl font-semibold'>Rate My Cut</h2>
        </div>
        <div className='text-center m-1'>
            <img src="images/rmc-images/rmc-main.png" />
        </div>
        <div className='flex flex-col justify-between '>

            <div className='m-1 text-xs'>
                <p className="float-right">October 2023</p>
            </div>

            <div className='m-1'>
                <p>Rate My Cut is a haircut catalogue that allows users to post their haircut to share and help others find what kind of hairstyles they want.</p>
            </div>

            <div className='m-1'>
                <p>Frontend:</p>
                <ul className='list-disc pl-5'>
                  <li>Figma was used to create the designs of web pages.</li>
                  <li>Header, Navbar, and Footers created as Vue Components.</li>
                  <li>JavaScript, HTML/CSS, and TailwindCSS used to design web pages.</li>
                </ul>
            </div>
            
            <div className='m-1'>
                <p>Backend:</p>
                <ul className='list-disc pl-5'>
                  <li>Laravel used to create models, controllers, and schemas for database migration and api calls.</li>
                  <li>User authentication and authorization.</li>
                </ul>
            </div>
            
            <div className='m-1'>
                <p>Database:</p>
                <ul className='list-disc pl-5'>
                  <li>MySQL used to store structured data.</li>
                </ul>
            </div>
            <div className='m-1'>
                <p>Deployment:</p>
                <ul className='list-disc pl-5'>
                  <li>Application Server set-up with Linux OS.</li>
                  <li>HTTPS/SSL/DNS Configuration.</li>
                  <li>Hosted and Deployed with Digital Ocean.</li>
                  <li>Check it out on <a href='https://kevinsar.ca/' target='_blank' className='transition ease-in-out delay-100 hover:text-[#379683]'>kevinsar.ca</a>.</li>
                </ul>
            </div>
        </div>
      </div>

      {/* MeApp Project Section */}
      <div id='project-ma' className='min-h-screen flex flex-col justify-center border-[5px] border-[#1D2233]'>
        <div className='text-center p-5 m-1'>
            <h2 className='text-2xl font-semibold'>MeApp</h2>
        </div>
        <div className='text-center m-1'>
            <img src="images/ma-images/meapp-home-page.png" className='object-contain max-h-[300px] mx-auto'/>
        </div>
        <div className='flex flex-col justify-between '>

            <div className='m-1 text-xs'>
                <p className="float-right">April 2022</p>
            </div>

            <div className='m-1'>
                <p>The software engineer project is where I and 3 other students work together and establish full collaboration and proper communication with a real client. MeApp is a dating application with the benefit teaching users mental wellness, self-discovery, and emphasis on a safety approach to online dating.</p>
            </div>

            <div className='m-1'>
                <ul className='list-disc pl-5'>
                  <li>Assumed the role of team lead to delegate tasks and ensure their timely completion.</li>
                  <li>Maintained regular and effective communication with the client.</li>
                  <li>Developed the chat feature using Stream's chat API for real-time messaging.</li>
                  <li>Involved with merging features produced by other team members together.</li>
                  <li>Produced a prototype of the application with all requested features.</li>
                  <li>Java, Android SDK, SQLite, and Stream API was used to produce the prototype.</li>
                </ul>
            </div>
        </div>
      </div>

      {/* Prime Time Gaming Project Section */}
      <div id='project-ptg' className='min-h-screen flex flex-col justify-center border-[5px] border-[#1D2233]'>
        <div className='text-center p-5 m-1'>
            <h2 className='text-2xl font-semibold'>Prime Time Gaming</h2>
        </div>
        <div className='text-center m-1'>
            <img src="images/ptg-images/prime-time-gaming-main-page.png" className='object-contain max-h-[300px] mx-auto'/>
        </div>
        <div className='flex flex-col justify-between '>

            <div className='m-1 text-xs'>
                <p className="float-right">May 2021</p>
            </div>

            <div className='m-1'>
                <p>Prime Time Gaming is a prime numbers game created using React, JavaScript, and Bootstrap. It is also my first ever completed personal project.</p>
            </div>

            <div className='m-1'>
                <ul className='list-disc pl-5'>
                  <li>It's a web application with a Model-View implementation.</li>
                  <li>State Management was used to keep track of the game state.</li>
                  <li>React Hooks used to implement timer-countdown feature.</li>
                  <li>Teaches users about prime numbers especially why 1 is not a prime number and why 2 is a prime number.</li>
                  <li>Netlify was used to deploy the project.</li>
                  <li>Check it out on <a href='https://prime-time-gaming.netlify.app/' className='transition ease-in-out delay-100 hover:text-[#379683]'>prime-time-gaming.netlify.app</a>.</li>
                </ul>
            </div>
        </div>
      </div>

    </main>
  )
}
