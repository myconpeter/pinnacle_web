import PinnacleLogo from '../assets/PinnacleLogo.png';


const StudentServices = () => {

    const allServices = [
        {
           title : "Test Preparation",
           description: "Intensive coaching for TOEFL, SAT, and IELTS.",
           image: PinnacleLogo
        },
        {
           title : "University Admissions",
           description: "Assistance in selecting and applying to university that fits your profile",
           image: PinnacleLogo
        },
        {
           title : "Scholarship Application Assistance",
           description: "Guidance to secure financial aid opportunities through SAT",
           image: PinnacleLogo
        },
        {
           title : "Visa Processing",
           description: "Step-by-step support through the visa application process",
           image: PinnacleLogo
        },
        {
           title : "Counseling Services ",
           description: "Free one-on-one sessions to align your goals with the right academic path",
           image: PinnacleLogo
        },
        {
           title : "Document Preparation ",
           description: "Guidance and editing of document to ensure maximum operations",
           image: PinnacleLogo
        },
        {
           title : "Pre-departure Briefing",
           description: "We are committed to providing the resources and support you need to succeed",
           image: PinnacleLogo
        }
    ]
  return (
    	

			<div  >
				<p className=' text-2xl font-bold md:text-7xl'>Our Services For Students</p>

                {allServices.map(({title, description, image})=>(
                    <div className='mt-10 md:mt-28 flex flex-col  md:px-36'>
					<div className='flex flex-col items-center justify-center shadow-2xl shadow-gray-700 rounded-3xl md:rounded-4xl p-2 md:p-20'>
						<p className='font-bold text-xl md:text-6xl text-center'>{title}</p>
						<p className='mt-5 md:mt-10 md:text-3xl text-center'>
							{' '}
							{description}
						</p>
						<div className='shadow-2xl shadow-black rounded-full px-2 py-1 md:py-5 md:px-5 mt-5 md:mt-10'>
							<img
								src={image}
								alt='PinnacleLogo'
								className='w-10 md:w-20'
							/>
						</div>
					</div>
				</div>
                ))}

				
			
			</div>
  )
}

export default StudentServices