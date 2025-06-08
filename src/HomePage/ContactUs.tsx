const ContactUs = () => {
	return (
		<div id="contact" className='relative w-full  md:px-6 mt-16 md:mt-24 items-center md:pb-28'>
			<div className='bg-lighterBlue p-3 flex justify-center items-center'>
				<p className='text-white font-bold text-xl'>CONTACT US</p>
			</div>

			<div>
				<p className='mt-5 text-xl font-medium text-center'>HEAD OFFICE</p>
				<div className='flex flex-col md:flex md:flex-row  items-center justify-center md:justify-around'>
					<div className='text-center flex flex-col items-center gap-1'>
						<p className='text-white bg-lighterBlue p-2 text-xl  w-fit'>
							Lagos
						</p>
						<p>5 Abdul Benson Street </p>
						<p> behind Eco bank, </p>
						<p>off Lagos road Ikorodu.</p>
						<p className=''> 08029837117</p>
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
						<p className='text-white bg-lighterBlue p-2 text-xl font-bold w-fit'>
							Akwa Ibom
						</p>
						<p>5 Udo Abasi street,</p>
						<p> off Abak road behind Pepperoni, Uyo. </p>
						<p className=''> 07088009511, 08036692720</p>
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
