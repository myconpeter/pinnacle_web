import { motion } from 'framer-motion';

const ContactUs = () => {
	return (
		<div
			id='contact'
			className='relative w-full md:px-6 mt-16 md:mt-24 items-center md:pb-28'>
			{/* Contact Us Header */}
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='bg-lighterBlue p-3 flex justify-center items-center'>
				<p className='text-white font-bold text-xl'>CONTACT US</p>
			</motion.div>

			{/* Head Office Title */}
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.6 }}
				className='mt-5 text-xl font-medium text-center'>
				HEAD OFFICE
			</motion.p>

			{/* Locations */}
			<div className='flex flex-col md:flex-row items-center justify-center md:justify-around mt-6 gap-10'>
				{/* Lagos Office */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className='text-center flex flex-col items-center gap-1'>
					<p className='text-white bg-lighterBlue p-2 text-xl w-fit'>Lagos</p>
					<p>5 Abdul Benson Street</p>
					<p>behind Eco bank,</p>
					<p>off Lagos road Ikorodu.</p>
					<p>08029837117</p>
					{/* <p>
						Email:{' '}
						<a
							href="mailto:pinnacleeducationuyo@gmail.com"
							className="text-blue-500 underline"
						>
							pinnacleeducationuyo@gmail.com
						</a>
					</p> */}
				</motion.div>

				{/* Akwa Ibom Office */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.8, duration: 0.6 }}
					className='text-center flex flex-col items-center gap-1'>
					<p className='text-white bg-lighterBlue p-2 text-xl font-bold w-fit'>
						Akwa Ibom
					</p>
					<p>5 Udo Abasi street,</p>
					<p>off Abak road behind Pepperoni, Uyo.</p>
					<p>07088009511, 08036692720</p>
					<p>
						Email:{' '}
						<a
							href='mailto:pinnacleeducationuyo@gmail.com'
							className='text-blue-500 underline'>
							pinnacleeducationuyo@gmail.com
						</a>
					</p>
					<p>
						Whatsapp:{' '}
						<a
							href='https://wa.me/2348029837117?text=Hello%20Pinnacle%20Education%20and%20Training%20Limited.%2C%20I%20am%20interested%20in '
							className='text-blue-500 underline'>
							08029837117
						</a>
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default ContactUs;
