import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';


const Logo = () => {

  return (
    <div className="inline-block rounded-md text-base p-2 bg-customPurple cursor-pointer" >
      <Link to="/" className='flex items-center justify-center gap-4'>
        <p className="text-base text-white font-semibold">
          Rent <span className='font-normal'>it</span>
        </p>
        <GoHome className='text-white text-lg'/>
      </Link>
    </div>
  )
}

export default Logo
