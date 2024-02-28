import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import '../App.css';

export default function Hero() {
    const config  = {
        subtitle: 'Im a Front-end developer',
        social: {
            // twitter: 'https://twitter.com/jvlcode',
            // facebook: 'https://facebook.com/jvlcode',
            linkedin: 'https://www.linkedin.com/in/sivasubramani-govindasamy-047061214'
        }
    }
    const AnimatedSubtitle = ({ text }) => {
        return (
          <p className='text-2xl'>
            {text.split('').map((char, index) => (
              <span key={index} className={`text-black opacity-0 animate-fade-in`} 
              style = {{ animationDelay : `${index * 0.1}s`}}>
                {char}
              </span>
            ))}
          </p>
        );
      };

    return <section className='flex flex-col md:flex-row px-5 py-5 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-fomt'>Hi, <br/> I am <span className='text-black'></span>Sivasubramani 
            <p><AnimatedSubtitle text={config.subtitle} /></p>
            </h1>
            <div className='flex py-10'>
                {/* <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a> */}
                <a href={config.social.linkedin} target='_blank' className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}