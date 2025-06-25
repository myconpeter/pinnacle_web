import { IoIosMailOpen } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
const ContactUs = () => {
	return (
		<div className='relative w-full px-3 md:px-20 mt-10 md:mt-24 items-center md:pb-48'>
			<a
				href='https://wa.me/2347088009511?text=Hello%20Pinnacle%20Education%20and%20Training%20Limited%2C%20I%20am%20interested%20in '
				target='_blank'
				rel='noopener noreferrer'>
				<button className='md:p-3 p-2 bg-light-tomato text-sm md:text-xl rounded-3xl text-white'>
					Contact Us Now
				</button>
			</a>

			<div className='flex mt-2 md:mt-5 items-center gap-2'>
				<IoIosMailOpen className='text-darkBlue text-xl' />
				<a
					href='mailto:pinnacleeducationuyo@gmail.com'
					className='text-blue-500 md:text-xl'>
					pinnacleeducationuyo@gmail.com
				</a>
			</div>

			<div className='flex mt-2 md:mt-5 items-center gap-2'>
				<FaPhoneAlt className='text-black text-xl' />
				<a
					href='tel:08036692720'
					className='text-black md:text-xl'>
					08036692720
				</a>
			</div>

			<div className='flex mt-2 md:mt-5 items-center gap-2'>
				<IoLogoWhatsapp className='text-green-600 text-xl' />
				<a
					href='https://wa.me/2347088009511?text=Hello%20Pinnacle%20Education%20and%20Training%20Limited%2C%20I%20am%20interested%20in '
					target='_blank'
					rel='noopener noreferrer'
					className='text-black md:text-xl'>
					07088009511
				</a>
			</div>
		</div>
	);
};

export default ContactUs;
