import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context';
import { SiCodechef } from "react-icons/si";



function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
<SiCodechef size={55} width={45}/>
      {/* <h2 className='text-2xl font-bold justify-start text-orange-600 cursor-pointer'>Receipy</h2> */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Enter name....'
          className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg
           shadow-red-300 focus:shadow-red'
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
        />
      </form>

      <ul className='flex gap-5'>
        <li>
          <NavLink to={'/'} className='text-gray font-bold hover:text-gray-700 duration-300'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/favourites'} className='text-gray font-bold hover:text-gray-700 duration-300'>
            Favourites
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
