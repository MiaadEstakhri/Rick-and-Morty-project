import HeartIcon from "../assets/icons/heartIcon";
import logo from "../assets/images/images_prev_ui(2).png";

function Navbar({
  numOfResult,
  query,
  setQuery,
  favorites,
  onSelectFavorites,
}) {
  return (
    <nav className="flex justify-between items-center bg-slate-700 text-white rounded-lg py-2 px-4 mt-8 ">
      <a href="#" className="">
        <img src={logo} alt="Logo" className="w-24 sm:w-28" />
      </a>

      <form
        className="w-36  sm:w-44 md:w-56 xl:w-64 bg-slate-500 py-1.5 px-3 rounded-lg "
        onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="search ..."
          className="bg-transparent outline-none w-full"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
      <div className="text-gray-400 text-xs sm:text-sm ms-4 sm:ms-0">
        Found {numOfResult} Results
      </div>
      <div className="relative me-5">
        <span className="h-4 w-4 sm:h-5 sm:w-5 flex justify-center items-center bg-red-600 text-white rounded-full text-xs absolute left-4 sm:left-6 bottom-[1.1rem] sm:bottom-[1.3rem]">
          {favorites.length}
        </span>
        <button onClick={onSelectFavorites}>
          <HeartIcon color="#dc2626" className="w-7 h-7 sm:w-9 sm:h-9" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
