import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

    // const config = {
    //     projects : [
    //         {
    //             image: websiteImg1,
    //             description: 'A Ecommerce Website. Built with MERN Stack.',
    //             link: 'https://github.com/jvlcode/jvlcart'
    //         },
    //         {
    //             image: websiteImg2,
    //             description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
    //             link: 'https://github.com/jvlcode/food'
    //         },
    //         {
    //             image: websiteImg3,
    //             description: 'Basic Blog Website . Built with Next JS and MongoDB',
    //             link: 'https://github.com/jvlcode/blog'
    //         }
    //     ]
    // }

    return <section id='projects' className="flex  flex-col py-2 px-2 justify-center bg-secondary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[400px] font-bold">Professonal Experience</h1>
                <p><span className='text-red-950 font-bold'>Company Name : </span>Newgen Sofware Technologies , Chennai India</p>
                <p><span className='text-red-950 font-bold'>Designation : </span>Software Engineer</p>
                <p><span className='text-red-950 font-bold'>Period : </span> July 2022 - Present</p>
                <p><span className='text-red-950 font-bold'>Project Undertaken : </span> Indian Bank Digital Lending Process.</p>
                <p><span className='text-red-950 font-bold'>Client : </span> Indian Bank</p>
                <p><span className='text-red-950 font-bold'>Process Undertaken : </span></p>
                <li>Home Loan</li>
                <li>Self Help Groups</li>
                <li>Jewel Loan Re-pledge Branch and Customer Assisted Journey</li>
                <li>Jewel Loan Fresh-Branch Assisted Journey and Jewel Loan Fresh-Customer Assisted Journey for LOS & LCS</li>
                <p><span className='text-red-950 font-bold '>Roles and Responsibilities : </span></p>
                
    <li>Successfully executed projects encompassing the development and enhancement of the Jewel Loan Fresh-Branch Assisted Loan Process, Jewel Loan Fresh-Customer Assisted Loan Process, and the Self-Help Group Loan Process within the Loan Origination System (LOS).</li>
    
    <li>Collaborated closely with the client, Indian Bank, to understand their specific needs and preferences, incorporating feedback into the development process to align the system with their expectations.</li>
    
    <li>Led the development of a robust and user-friendly loan lending system using Java, JavaScript, and CSS technologies.</li>
    
    <li>Collaborated closely with a cross-functional team of designers, business analysts, and testers to gather requirements and translate them into scalable software solutions.</li>
    
    <li>Developed the back-end functionality using Java, leveraging object-oriented principles and best practices to ensure code modularity, reusability, and maintainability.</li>
    
    <li>Assisted in the deployment and maintenance of the loan lending system, troubleshooting any issues and providing timely support to end-users.</li>
    
    <li>Successfully delivered the loan lending system within project timelines, meeting all functional requirements and exceeding client expectations.</li>
    
    <li>Integrated third-party APIs and services, to enable seamless loan processing and risk assessment.</li>
    
    <li>Conducted comprehensive unit testing throughout the development process to ensure the reliability and functionality of the loan lending system, identifying and resolving any bugs or issues promptly.</li>
    
    <li>Documented the design specifications in a detailed design document, providing a comprehensive reference for the system's architecture, components, and interactions.</li>
    
    <li>Established and maintained a well-organized repository, ensuring efficient collaboration among team members and providing a clear audit trail of code modifications.</li>


                


            </div>
            {/* </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div> */}
        </div>
    </section>
}