import img from '../../../assets/home/chef-service.jpg'
import './BistroBoss.css'
const BistroBoss = () => {
    return (
        <div className='my-10'>
            <div className="relative h-3/6 bg-fixed" style={{
                backgroundImage: `url(${img})`,
                height: '400px',
                backgroundPosition: 'center'
            }}>
                <div className='absolute top-[20%] bottom-[20%] overflow-hidden md:px-5 bo md:mx-20 mx-5 bg-white md:py-10 '>
                    <h4 className='text-3xl md:text-5xl  text-center pb-5 font-cinzel mt-4'>Bistro Boss</h4>
                    <p className='pb-5 text-center lg:w-8/12 w-10/12 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;