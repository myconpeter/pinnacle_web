import Demo from '../assets/Demo.jpg';
import DemoTwo from '../assets/DemoTwo.jpg';

// type Props = {}

const Headers = () => {
  return (
    <>
        <div id='home' className={` relative w-full px-3 md:px-6 mt-16 md:mt-24 items-center`}>
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