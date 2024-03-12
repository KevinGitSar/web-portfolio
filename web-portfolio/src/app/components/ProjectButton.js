import Reveal from './Reveal';

export default function ProjectButton(props){
    
    return(
        <>
        <a href={props.link} className={`w-11/12 mx-auto sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 transition ease-in-out delay-100 hover:scale-105 m-1 border-[3px] border-[${props.borderColor}] hover:border-[3px] hover:border-[#3FAA95] rounded-lg`}>
        <Reveal>
            <div className={`w-full flex justify-between m-1 bg-[${props.bgColor}]`}>
                <div className={`w-1/3 m-2 border-2 border-[${props.borderColor}] rounded`}>
                    <img src={props.mainImage} alt={props.mainImage} className='w-full h-[100px] object-contain' />
                </div>

                <div className='w-1/3 flex flex-col justify-center text-center'>
                    <h3 className='font-semibold'>{props.title}</h3>
                </div>

                <div className={`w-1/3 m-2 border-2 border-[${props.borderColor}] bg-[#f0f4f8] rounded`}>
                    <div className='flex flex-col'>
                        <div className='flex'>
                        <img src={props.image1} alt={props.image1} className='w-1/2 h-[50px] object-contain' />
                        <img src={props.image2} alt={props.image2} className='w-1/2 h-[50px] object-contain' />
                        </div>
                        <div className='flex'>
                        <img src={props.image3} alt={props.image3} className='w-1/2 h-[50px] object-contain' />
                        <img src={props.image4} alt={props.image4} className='w-1/2 h-[50px] object-contain' />
                        </div>
                    </div>
                </div>
            </div>    
        </Reveal>
        </a>
        </>
    )
}


