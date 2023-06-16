import logo from '../../assets/Screenshot_2023-06-13_230857-removebg-preview.png'
import { FaFacebook, FaTwitter, FaYoutube  } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-slate-800'>
            <footer className="footer mx-auto  p-10 bg-slate-200 shadow-md font-mono  text-base-content">
                <div>
                    <span className="footer-title text-primary font-bold">Quick Access</span>
                    <a className="link link-hover">Apply to Teach</a>
                    <a className="link link-hover">Search for Teachers</a>
                    <a className="link link-hover">List of Courses</a>
                    <a className="link link-hover">Department</a>
                </div>
                <div>
                    <span className="footer-title text-primary font-bold">Languages</span>
                    <a className="link link-hover">Learn English</a>
                    <a className="link link-hover">Learn Spanish</a>
                    <a className="link link-hover">Learn German</a>
                    <a className="link link-hover">Learn French</a>
                   
                </div>
                <div>
                    <span className="footer-title text-primary font-bold">Languages</span>
                    <a className="link link-hover">Learn hindi</a>
                    <a className="link link-hover">Learn Farsi</a>
                    <a className="link link-hover">Learn Turkish</a>
                    <a className="link link-hover">Learn Japanese</a>
                   
                </div>
                <div>
                    <span className="footer-title text-primary font-bold">Teachers</span>
                    <a className="link link-hover">English Tutors</a>
                    <a className="link link-hover">Spanish Tutors</a>
                    <a className="link link-hover">French Tutors</a>
                    <a className="link link-hover">Japanese Tutors</a>
                   
                </div>
                <div>
                    <span className="footer-title text-primary font-bold">Communication</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Faq</a>
                    <a className="link link-hover">Policy</a>
                </div>
            </footer>
            <footer className="footer  mx-auto px-10 py-4 border-t bg-slate-200 text-base-content font-mono font-bold border-base-300">
                <div className="items-center grid-flow-col">
                    <img className=" w-16 "src={logo} alt="" />
                
                   <div>
                   <p className="font-bold">
                        language Tutor, 1240,
                        Chattogram.
                    </p>
                    <p >Copyright © 2023 - All right reserved</p>
                   </div>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a className='text-primary'><FaFacebook   style={{ fontSize: '2rem' }} /></a>
                        <a className='text-primary'><FaTwitter style={{ fontSize: '2rem' }} /></a>
                        <a className='text-primary'><FaYoutube style={{ fontSize: '2rem' }} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;