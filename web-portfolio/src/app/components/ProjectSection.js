export default function ProjectSection(props){
    return(
        <>
            <div className='text-center p-5 m-1'>
                <h2 className='text-2xl font-semibold'>{props.title}</h2>
            </div>
            <div className='text-center m-1'>
                <img src="images/pl-images/challenge-1-clone-page.png" />
            </div>
            <div className='flex flex-col h-full justify-between '>

                <div className='m-1 text-xs'>
                    <p className="float-right">{props.date}</p>
                </div>

                <div className="flex flex-col text-sm ">
                    <div className='m-1'>
                        <p>{props.description}</p>
                    </div>

                    <div className='m-1'>
                        <p>{props.part1}</p>
                    </div>
                    
                    <div className='m-1'>
                        <p>{props.part2}</p>
                    </div>
                    
                    <div className='m-1'>
                        <p>{props.part3}</p>
                    </div>
                    <div className='m-1'>
                        <p>{props.part4}</p>
                    </div>
                </div>
            </div>
      </>
    )
}