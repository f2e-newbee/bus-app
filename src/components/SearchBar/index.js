import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as ClearIcon } from "../../assets/icon/ClearIcon.svg";
import { BusKeyBoard } from "../BusKeyBoard";

/**
 * 關鍵字搜尋元件
 * @returns 
 */
export const SearchBar = () => {
  const [keyWord, setKeyWord] = useState("");
  const [showKeyBoard, setShowKeyBoard] = useState(false);

  /**
   * 關鍵字Input Focus開啟鍵盤
   */
  const handleInputFocus = () => {
    setShowKeyBoard(true);
  };

  // TODO: 點擊其他地方關閉鍵盤尚未完成
  // const handleInputBlur = () => {
  //   setShowKeyBoard(false);
  // };

  const handleInputChange = (event) => {
    setKeyWord(event.target.value);
  };

  const handleKeyBoardClick = (value) => {
    setKeyWord(keyWord + value);
  };

  const handleDelete = () => {
    setKeyWord("");
  };

  return (
          <>
            <div className="w-full h-10 bg-gray  rounded-3xl flex justify-between items-center p-2">
              <div className="flex h-full items-center"> 
                <div className="h-full w-auto">
                  <SearchIcon className="h-full w-auto text-gray-dark" />
                </div>
                <input
                  type="text"
                  placeholder="關鍵字搜尋"
                  className="col-span-3 focus:outline-none bg-transparent"
                  onFocus={handleInputFocus}
                  value={keyWord}
                  onChange={handleInputChange}
                />
                <div className="col-span-1 h-10 flex items-center justify-center">
                  <ClearIcon
                    className="w-3/5 h-3/5 text-gray-dark"
                    onClick={handleDelete}
                  />
                </div>
              </div>
              {showKeyBoard && (
                <BusKeyBoard handleKeyBoardClick={handleKeyBoardClick} />
              )}
            </div>
          </>
  );
};
