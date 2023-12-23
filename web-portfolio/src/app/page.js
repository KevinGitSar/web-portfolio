import Image from 'next/image';
import NavigationBar from './components/NavigationBar';
import ProjectButton from './components/ProjectButton';

export default function Home() {
  return (
    <main>
      <NavigationBar></NavigationBar>

      {/* Landing Page */}
      <div id='home' className='h-screen flex flex-col justify-center border-[5px] border-[#1D2233]'>
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
      <div id='about' className='h-screen flex flex-col justify-center border-[5px] border-[#1D2233] bg-[#1D2233]'>
        <div className='text-center p-5 mx-1 bg-[#0A0F22] border-[10px] border-[#1D2233]'>
          <h2 className='text-2xl font-semibold'>About me.</h2>
        </div>
        <div className='px-5 py-5 mx-1 bg-[#0A0F22] border-[10px] border-[#1D2233]'>
          <p className='font-semibold'>I'm a full-stack developer with a good history of coming up with new ideas and making successful projects with a team. For example, in the Team Business Innovation Challenge, I noticed problems with how small businesses handle delivery apps and created SwiftServer, which worked really well. In another school project about a dating app, I fixed issues with team communication by figuring out better meeting times, making the project successful. I'm always learning new things and improving my technical skills through projects. Right now, I'm looking for chances to use my full stack development skills on important projects, and you can check out my portfolio to see what I can do. I'd be happy to talk about how I can help your team and organization.</p>
        </div>
      </div>

      {/* Projects Section */}
      <div id='projects' className='h-screen flex flex-col justify-center border-[5px] border-[#1D2233] bg-[#1D2233]'>

        <div className='text-center p-5 m-1 border-[10px] border-[#1D2233]'>
          <h2 className='text-2xl font-semibold'>My Projects</h2>
        </div>

        <ProjectButton title={'PreprLabs Web Dev Challenges'} link={'#pl-project'} mainImage={'/images/pl-images/challenge-1-clone-page.png'} image1={'/icons/react-logo.png'} image2={'/icons/mongodb-logo.png'} image3={'/icons/redux-logo.png'} image4={'/icons/tailwind-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#379683'}></ProjectButton>

        <ProjectButton title={'Rate My Cut'} link={'#rmc-project'} mainImage={'/images/rmc-images/rmc-main.png'} image1={'/icons/vue-logo.png'} image2={'/icons/laravel-logo.png'} image3={'/icons/digitalocean-logo.png'} image4={'/icons/mysql-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#379683'}></ProjectButton>
        
        <ProjectButton title={'Meapp'} link={'#ma-project'} mainImage={'/images/ma-images/meapp-landing-page-2.png'} image1={'/icons/java-logo.png'} image2={'/icons/android-logo.png'} image3={'/icons/stream-logo.png'} image4={'/icons/sqlite-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#379683'}></ProjectButton>

        <ProjectButton title={'Prime Time Gaming'} link={'#ptg-project'} mainImage={'/images/ptg-images/prime-time-gaming-main-page.png'} image1={'/icons/react-logo.png'} image2={'/icons/bootstrap-logo.png'} image3={'/icons/javascript-logo.png'} image4={'/icons/netlify-logo.png'} borderColor={'#1D2233'} bgColor={'#0A0F22'} hover={'#379683'}></ProjectButton>

      </div>

    </main>
  )
}
