import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import ReceipeItems from '../../components/receipe-Items';

export default function Home() {
  const { favouriteList } = useContext(GlobalContext);


  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-18'>
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((item) => <ReceipeItems key={item.id} item={item} />)
      ) : (
        <div>
          <p className='lg:text-4xl font-extrabold text-center text-black '>
            Nothing is added in favourite
          </p>
        </div>
      )}
    </div>
  );
}
