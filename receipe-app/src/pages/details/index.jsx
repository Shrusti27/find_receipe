import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context';

export default function Details() {
  const { id } = useParams();
  const { receipeDetails, setReceipeDetails, favouriteList, handleAddtoFavourite } = useContext(GlobalContext);

  useEffect(() => {
    async function getReceipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();  // Note: Added "await" here

      console.log(data);

      if (data?.data) {
        setReceipeDetails(data?.data);
      }
    }

    getReceipeDetails();
  }, [id, setReceipeDetails]);  // Added "id" and "setReceipeDetails" to the dependency array

  console.log(receipeDetails, 'receipeDetails');

  return (
    <>
      <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='row-start-2 lg:row-start-auto'>
          <div className='h-96 overflow-hidden rounded-xl group'>
            <img
              src={receipeDetails?.recipe?.image_url}
              alt='Recipe-details'
              className='w-full h-full object-cover block group-hover:scale-105 duration-300'
            />
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <span className='text-sm p-3 mt-5 px-8 text-cyan-700 font-medium tracking-wider'>
            {receipeDetails?.recipe?.publisher}</span>
          <h3 className="font-bold text-2xl text-black">{receipeDetails?.recipe?.title}</h3>
          <div >
            <button onClick={() => handleAddtoFavourite(receipeDetails?.recipe)}
              className='p-3 px-6 text-sm uppercase font-medium tracking-wider rounded-lg bg-black
             text-white hover:scale-105'>
              {
                favouriteList.findIndex((item) => item.id === receipeDetails?.recipe?.id) !== -1 ? "Remove from favourite" : "Add to favourite"
              }
            </button>
          </div>
          <div>
            <span className='text-2xl font-semibold text-black'>Ingredients:
            </span>

            <ul className='flex flex-col gap-3'>
              {receipeDetails?.recipe?.ingredients.map((ingredient) => (
                <li key={ingredient.description}>
                  <span className='text-xl font-semibold text-black'>
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className='text-xl font-semibold text-black'>
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
