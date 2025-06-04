import Demo from '../assets/Demo.png';
import DemoTwo from '../assets/DemoTwo.png';

// type Props = {}

const Headers = () => {
  return (
    <>
        <div className={` relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center`}>
				<img
					src={Demo}
					alt='Demo'
					className='rounded-3xl'
				/>
			</div>
			<div className={` relative w-full px-3 md:px-6 mt-5 items-center`}>
				<img
					src={DemoTwo}
					alt='DemoTwo'
					className=''
				/>
			</div>
    </>
  )
}

export default Headers