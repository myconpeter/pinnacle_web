const ContactUs = () => {
	return (
		<div className='relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center pb-20'>
			<div className='bg-lighterBlue p-3 flex justify-center items-center'>
				<p className='text-white font-bold text-3xl'>CONTACT US</p>
			</div>

			<div>
				<p className='mt-5 text-xl font-semibold text-center'>HEAD OFFICE</p>
				<div className='flex flex-col md:flex md:flex-row  items-center justify-center md:justify-around'>
					<div className='text-center flex flex-col items-center gap-1'>
						<p className='text-white bg-lighterBlue p-3 text-xl font-bold w-fit'>
							Lagos
						</p>
						<p>5 Abdul Benson Street </p>
						<p> behind Eco bank, </p>
						<p>off Lagos road Ikorodu.</p>
						<p className='font-semibold'> 08029837117</p>
						<p>
							Email:{' '}
							<a
								href='mailto:pinnacleeducationuyo@gmail.com'
								className='text-blue-500 underline'>
								pinnacleeducationuyo@gmail.com
							</a>
						</p>
					</div>

					<div className='text-center flex flex-col md:flex items-center gap-1 mt-10'>
						<p className='text-white bg-lighterBlue p-3 text-xl font-bold w-fit'>
							Akwa Ibom
						</p>
						<p>5 Udo Abasi street,</p>
						<p> off Abak road behind Pepperoni, Uyo. </p>
						<p className='font-semibold'> 07088009511, 08036692720</p>
						<p>
							Email:{' '}
							<a
								href='mailto:pinnacleeducationuyo@gmail.com'
								className='text-blue-500 underline'>
								pinnacleeducationuyo@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
