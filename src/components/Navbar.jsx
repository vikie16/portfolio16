import logo from '../assets/vikie.logo.png';


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt='' className='h-40 w-35 -mt-12' />
        
      </div>
     
    </nav>
  );
}

export default Navbar;
