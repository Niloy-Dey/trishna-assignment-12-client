import { Link } from 'react-router-dom';
import error from '../../assets/images/error.jpg'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center'>
            <img className='h-[600px] w-[100vw] ' src={error} alt="" />
        </div>
     <div className='flex justify-center my-8'>
       
     <Link to="/"><button className='btn btn-primary bg-opacity-70 font-bold font-mono'> <FaArrowAltCircleLeft className='text-white'/> Back to home</button></Link>
     </div>
        </div>
    );
};

export default Error;

