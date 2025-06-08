import { BiSolidPlaneAlt } from 'react-icons/bi';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { MdEditDocument } from 'react-icons/md';
const HowWeWork = () => {
	return (
		<div className='relative md:flex justify w-full px-3 md:px-6 mt-20 md:mt-32 items-center'>
			<div className='px-5 md:px-32'>
				<div className='flex items-center justify-center p-5 shadow-lg shadow-gray-100 '>
					<p className='text-3xl md:text-5xl  text-light-tomato font-medium'>
						HOW WE WORK
					</p>
				</div>
			</div>

			<div className='flex items-center justify-center gap-10 md:gap-20 mt-10 md:mt-20'>
				<div className='flex flex-col bg-white border border-light-tomato p-3 md:p-5 items-center rounded-full '>
					<p className='text-xl md:text-2xl text-light-tomato border md:border border-light-tomato rounded-full px-3 md:px-3 py-1'>
						1
					</p>
					<p className='mt-5 md:mt-10 font-bold md:text-xl'>Consult</p>
					<p className='mt-5 md:mt-10 text-xs md:text-xl'>Reach Us</p>
					<BsFillTelephoneInboundFill className='mt-5  text-light-tomato text-xl  md:text-2xl' />
				</div>
				<div className='flex flex-col bg-white border border-light-tomato p-3 md:p-5 items-center rounded-full '>
					<p className='text-xl md:text-2xl text-light-tomato border md:border border-light-tomato rounded-full px-3 md:px-3 py-1'>
						2
					</p>
					<p className='mt-5 md:mt-10 font-bold md:text-xl'>Apply</p>
					<p className='mt-5 md:mt-10 text-xs md:text-xl'>Fill all</p>
					<p className=' text-xs md:text-xl'>document</p>
					<MdEditDocument className='mt-5  text-light-tomato text-xl  md:text-2xl' />
				</div>
				<div className='flex flex-col bg-white border border-light-tomato p-3 md:p-5 items-center rounded-full '>
					<p className='text-xl md:text-2xl text-light-tomato border md:border border-light-tomato rounded-full px-3 md:px-3 py-1'>
						3
					</p>
					<p className='mt-5 md:mt-10 font-bold md:text-xl'>Fly</p>
					<p className='mt-5 md:mt-10 text-xs md:text-xl'>Travel to</p>
					<p className='text-xs md:text-xl'>your dream</p>
					<p className=' text-xs md:text-xl'>country</p>
					<BiSolidPlaneAlt  className='mt-5  text-light-tomato text-xl  md:text-2xl' />
				</div>
			</div>
		</div>
	);
};

export default HowWeWork;
