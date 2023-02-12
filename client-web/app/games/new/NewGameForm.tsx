// max players
// starting cards?
// cost per tile

// map width
// map height
export const NewGameForm = () => {
  return (
    <form className="mb-4 grid grid-cols-12 gap-4 rounded bg-white px-8 pt-6 pb-8">
      <div className="col-span-6">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Max Number of Players
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          type="number"
          placeholder="2"
        />
      </div>
      <div className="col-span-6">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Cost per Tile
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          type="number"
          placeholder="1000"
        />
      </div>
      <div className="col-span-12 flex items-center justify-end">
        <button
          className="focus:shadow-outline rounded bg-indigo-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          Create
        </button>
      </div>
    </form>
  );
};
