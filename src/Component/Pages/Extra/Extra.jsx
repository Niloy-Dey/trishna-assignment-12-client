import certification from '../../../assets/images/cartification.jpg'
import teaching from '../../../assets/images/teaching.png'
import career from '../../../assets/images/career.png'
import superior from '../../../assets/images/superior.png'

const Extra = () => {
    return (
        <div>
            <div className='text-center font-mono font-bold mt-9'>
                <h1 className='text-5xl text-primary text-opacity-70'>Welcome, Folks!</h1>
                <p className='text-2xl text-orange-500'>
                    Why Study With Us
                </p>
            </div>
            <div className='flex justify-center gap-14 mt-14 mb-14'>
                <div>
                    <img className='h-[200px] w-[200] rounded-full my-6 ms-9' src={certification} alt="" />
                    <div className='font-mono text-center'>
                        <h3 className='text-primary  font-bold text-opacity-70 '>Certification</h3>
                        <p >Get certification from <br /> a respected organization   </p>
                    </div>


                </div>
                <div>
                    <img className='h-[200px] w-[200] rounded-full my-6 ms-9' src={teaching} alt="" />
                    <div className='font-mono text-center'>
                        <h3 className='text-primary font-bold text-opacity-70 '>Teaching Materials</h3>
                        <p>Use modern learning materials <br /> for over 15 language courses</p>
                    </div>

                </div>
                <div>
                    <img className='h-[200px] w-[200] rounded-full my-6 ms-9' src={career} alt="" />
                    <div className='font-mono text-center'>
                        <h3 className='text-primary  font-bold text-opacity-70 '>Career Upgrade</h3>
                        <p >Enhance your professional and <br /> academic CV as you travel the world</p>
                    </div>

                </div>
                <div>
                    <img className='h-[200px] w-[200] rounded-full my-6 ms-9' src={superior} alt="" />
                    <div className='text-center font-mono'>
                        <h3 className='text-primary  font-bold text-opacity-70 '>Superior Accomodation</h3>
                        <p>Over 100 rooms in premium <br /> residences and welcoming homestays</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Extra;