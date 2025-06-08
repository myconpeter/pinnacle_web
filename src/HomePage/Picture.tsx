import Person from '../assets/Person.png';

const Picture = () => {
	return (
		<div className={` relative w-full  md:px-24  mt-16 md:mt-24 items-center ` }>
			<img
				src={Person}
				alt='Demo'
				className=' md:ml-5'
			/>
		</div>
	);
};

export default Picture;
