import PrivacyFooter from '../assets/PrivacyFooter.jpg';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Privacy = () => {
	return (
		<div>
			<NavBar />
			<div className={` relative w-full px-2 md:px-20  mt-16 md:mt-24 items-center `}></div>

			<div className='relative w-full px-3 md:px-20 mt-10  md:mt-24 items-center'>
				<p className='text-2xl text-center md:text-4xl text-light-tomato font-medium'>
					Privacy Policy
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					Any of the information we collect from you may be used for one or more of the
					following purposes:
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					● To personalize your experience (the information helps Pinnacle Education and
					Training Limited better respond to your individual needs);
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					● To enable you to control the user experience for End Users and allow our
					Service to automatically apply the End User’s consent across your websites;
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					● To improve our website (Pinnacle Education and Training Limited continually
					strives to enhance our offerings based on the feedback and information we
					receive from clients);
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					● To identify you as a contracting party;
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					● To establish a primary channel of communication with you;
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					● To produce and display cookie declarations to End Users and store/display scan
					reports to you;
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					● To provide you with aggregated insights on the choices End Users make
					regarding accepted cookie types and display them visually in the Service
					Manager;
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose font-light'>
					● To send periodic emails (The email address you provide during order processing
					may be used to send information and updates about your order, occasional company
					news (if opted-in), product or service updates, and other relevant information).
				</p>
				<p className='text-sm/loose mt-5 md:text-2xl/loose pb-24 font-light'>
					If at any time you would like to unsubscribe from receiving future emails, you
					may unsubscribe by clicking ''unsubscribe'' on your email.
				</p>
			</div>

			<div className={` absolute z-20 top w-full  md:px-24  mt-8 md:-mt-16  items-center `}>
				<img
					src={PrivacyFooter}
					alt='Demo'
					className=' md:ml-5'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Privacy;
