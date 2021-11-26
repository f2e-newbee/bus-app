import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as ClearIcon } from "../../assets/icon/ClearIcon.svg";

export const SearchBar = () => {
  return (
    <div className="w-full h-10 bg-gray  rounded-3xl grid grid-cols-5">
      <div className="col-span-1 h-10 flex items-center justify-center">
        <SearchIcon className="w-3/5 h-3/5 text-gray-dark" />
      </div>
      <input
        type="text"
        placeholder="關鍵字搜尋"
        className="col-span-3 focus:outline-none bg-transparent"
      />
      <div className="col-span-1 h-10 flex items-center justify-center">
        <ClearIcon className="w-3/5 h-3/5 text-gray-dark" />
      </div>
    </div>
  );
};
