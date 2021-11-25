import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as ClearIcon } from "../../assets/icon/ClearIcon.svg";

export const SearchBar = () => {
  return (
    <div className="w-full bg-gray py-2 px-4 rounded-3xl flex items-center">
      <SearchIcon className="w-6  mr-2 text-gray-dark"></SearchIcon>

      <input
        type="text"
        placeholder="關鍵字搜尋"
        className=" focus:outline-none bg-transparent"
      />
      <ClearIcon className="w-6 h-6 ml-auto"></ClearIcon>
    </div>
  );
};
