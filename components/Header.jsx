import { SearchIcon } from "@heroicons/react/outline";
import Button from "./Button";

function Header() {
  return (
    <nav className="bg-[#422B46] py-2 px-8 md:px-16 flex justify-between items-center">
      <div className="flex justify-between gap-8 md:justify-start items-center w-full">
        <h1 className="text-white font-semibold text-3xl cursor-pointer">
          Joker
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search Jokes"
            className="bg-transparent text-white outline-none border-2 border-[#663F6C] rounded-l-md px-2 w-40 md:w-80"
          />
          <div className="bg-[#663F6C] p-2 px-3 rounded-r-md cursor-pointer">
            <SearchIcon className="w-6 text-[#C900EC]" />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Button />
      </div>
    </nav>
  );
}

export default Header;
