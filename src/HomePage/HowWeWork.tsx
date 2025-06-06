import { BiSolidPlaneAlt } from 'react-icons/bi';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { MdEditDocument } from 'react-icons/md';
const HowWeWork = () => {
	return (
		<div className='relative w-full px-3 md:px-6 mt-20 md:mt-32 items-center'>
			<div className='px-5 md:px-32'>
				<div className='flex items-center justify-center p-5 shadow-xl shadow-gray-300 '>
					<p className='text-3xl md:text-5xl  text-light-tomato font-bold'>HOW WE WORK</p>
				</div>
			</div>

			<div className='flex items-center justify-between mt-10 md:mt-20'>
				<div className='flex flex-col bg-gray-200 p-6 md:p-20 items-center rounded-full '>
					<p className='text-2xl md:text-7xl text-light-tomato border-2 md:border-4 border-light-tomato rounded-full px-3 md:px-5 py-1'>
						1
					</p>
					<p className='mt-10 md:mt-20 font-bold md:text-6xl'>Consult</p>
					<p className='mt-10 md:mt-20 text-xs md:text-4xl'>Reach Us</p>
					<BsFillTelephoneInboundFill className='mt-10 md:mt-20 text-light-tomato text-xl  md:text-4xl' />
				</div>
				<div className='flex flex-col bg-gray-200 p-6 md:p-20 items-center rounded-full '>
					<p className='text-2xl md:text-7xl text-light-tomato border-2 md:border-4 border-light-tomato rounded-full px-3 md:px-5 py-1'>
						2
					</p>
					<p className='mt-10 md:mt-20 font-bold md:text-6xl'>Apply</p>
					<p className='mt-10 md:mt-20 text-xs md:text-4xl'>Fill all</p>
					<p className=' text-xs md:text-4xl'>document</p>
					<MdEditDocument className='mt-10 md:mt-20 text-light-tomato text-xl  md:text-4xl' />
				</div>
				<div className='flex flex-col bg-gray-200 p-6 md:p-20 items-center rounded-full '>
					<p className='text-2xl md:text-7xl text-light-tomato border-2 md:border-4 border-light-tomato rounded-full px-3 md:px-5 py-1'>
						3
					</p>
					<p className='mt-10 md:mt-20 font-bold md:text-6xl'>Fly</p>
					<p className='mt-10 md:mt-20 text-xs md:text-4xl'>Travel to</p>
					<p className=' text-xs md:text-4xl'>your dream</p>
					<p className=' text-xs md:text-4xl'>country</p>
					<BiSolidPlaneAlt className='mt-10 md:mt-20 text-light-tomato text-xl  md:text-4xl' />
				</div>
			</div>
		</div>
	);
};

export default HowWeWork;
