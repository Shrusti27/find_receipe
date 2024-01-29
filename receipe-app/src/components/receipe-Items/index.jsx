import { Link } from "react-router-dom";

export default function ReceipeItems({ item }) {
    return (
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-spacing-5">
            <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                <img src={item?.image_url} alt="recipe-items" className="block w-full" />
            </div>
            <div>
                <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
                <h3 className="font-bold text-2xl text-black">{item?.title}</h3>
                <Link to={`/recipe-item/${item?.id}`} className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium inline-block tracking-wider shadow-md bg-black text-white">Receipe Details</Link>
            </div>
        </div>
    )
}
