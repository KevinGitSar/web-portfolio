import Image from 'next/image'
import NavigationBar from './components/NavigationBar'

export default function Home() {
  return (
    <main className="">

      <NavigationBar></NavigationBar>

      {/* Landing Page */}
      <div className='h-screen flex flex-col justify-center'>
        <div className='w-full h-1/2 bg-[#2f9259] flex flex-col justify-center'>
          <img src='/images/KevinSar.jpg' alt='Main Profile Image' title='Kevin Sar' className='p-10' />
        </div>

        <div className='text-center h-1/2 flex flex-col justify-center border-2 border-[#2f9259]'>
          <h1 className='text-3xl'>Hi, my name is <span className='font-semibold text-[#2f9259]'>Kevin Sar</span></h1>
          <h1 className='text-xl mt-5'>and I'm a <span className='font-semibold text-[#2f9259]'>Full Stack Developer</span>.</h1>

          <div className='flex justify-between w-1/2 mx-auto py-5'>
            <div className='bg-[#151414] p-2 rounded transition ease-in-out delay-100 hover:scale-125'>
              <a href='https://github.com/KevinGitSar'>
                <img src='/icons/github-icon.png' alt="Kevin's Github" title="Kevin's Github Link" className='w-[60px]'/>
              </a>
            </div>
            <div className='bg-[#151414] p-2 rounded transition ease-in-out delay-100 hover:scale-125'>
              <a href='https://www.linkedin.com/in/kevin-sar-249b09131/'>
                <img src='/icons/linkedin-icon.png' alt="Kevin's LinkedIn" title="Kevin's LinkedIn Link" className='w-[60px]'/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Page */}
      <div className='h-screen flex flex-col justify-center bg-[#8b5ed4]'>
        <div className='px-5 py-12 mx-1  bg-[#ebeaea]'>
          <p className='font-semibold'>I'm a full-stack developer with a good history of coming up with new ideas and making successful projects with a team. For example, in the Team Business Innovation Challenge, I noticed problems with how small businesses handle delivery apps and created SwiftServer, which worked really well. In another school project about a dating app, I fixed issues with team communication by figuring out better meeting times, making the project successful. I'm always learning new things and improving my technical skills through projects. Right now, I'm looking for chances to use my full stack development skills on important projects, and you can check out my portfolio to see what I can do. I'd be happy to talk about how I can help your team and organization.</p>
        </div>
      </div>

    </main>
  )
}
