import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Srivardhan Vasudevan. I am a Front End developer.',
        line2:'Aspiring to contribute as a mature and versatile team member, I bring a wealth of experience in navigating diverse challenges collaboratively. Whether thriving within a team dynamic or autonomously driving initiatives, I am recognized for my adaptability. Rapidly assimilating new technologies has become a hallmark of my career, and I am committed to leveraging this skill to enhance project outcomes and propel professional growth.',
        line3: 'Front End: Javascript,HTML,CSS',
        line4: 'Back End: SpringBoot,Java Oracle SQL',
        line5:'Dynamic PDF document generation using Apache Velocity for templates and Apache PDFBox for manipulation.',
        line6:'Utilized Tortoise SVN for effective sourcecode management and collaborative development'

    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[260px] font-bold'>Technical Skills</h1>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line5}</p>
                <p className='pb-5'>{config.line6}</p>
            </div>
            </div>
            
        </div>
    </section>
}