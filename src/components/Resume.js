import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    const config = {
        link: 'https://drive.google.com/file/d/1kE8hSuCKg765DxHCLL3yRumOOOWvmc89/view?usp=drivesdk'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='flex flex-col md:flex-row pb-5 mr-2 gap-3'>View and Download my resume here <a className='btn' href={config.link} target='_blank' download> Download</a></p>
            </div>
        </div>
    </section>
}