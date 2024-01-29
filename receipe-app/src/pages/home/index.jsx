import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import ReceipeItems from '../../components/receipe-Items';

export default function Home() {
  const { receipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...... Please Wait!</div>;

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-18'>
      {receipeList && receipeList.length > 0 ? (
        receipeList.map((item) => <ReceipeItems key={item.id} item={item} />)
      ) : (
        <div>
          <p className='lg:text-4xl font-extrabold text-center text-black '>
            Nothing to show.. Please search Something
          </p>
        </div>
      )}
    </div>
  );
}
