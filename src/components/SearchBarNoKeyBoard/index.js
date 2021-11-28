import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as ClearIcon } from "../../assets/icon/ClearIcon.svg";

/**
 * 關鍵字搜尋元件
 * @returns 
 */
export const SearchBarNoKeyBoard = (props) => {
  const { autoSearch, keyWord,setKeyWord } = props;

  const handleInputChange = (event) => {
    if(event.target.value === ''){
      autoSearch('');
    }
    setKeyWord(event.target.value);
  };

  const handleDelete = () => {
    setKeyWord("");
  };

  const handleComposition = (evt) => {
    if (evt.type === 'compositionend') {
      autoSearch(keyWord);
      return;
    }
  };
  

 
  return (
          <div> 
            <div className="w-full h-10 bg-gray  rounded-3xl flex justify-between items-center p-2">
              <div className="flex h-full items-center"> 
                <div className="h-full w-auto">
                  <SearchIcon className="h-full w-auto text-gray-dark" />
                </div>
                <input
                  type="text"
                  placeholder="關鍵字搜尋"
                  className="col-span-3 focus:outline-none bg-transparent"
                  value={keyWord}
                  onCompositionStart={handleComposition}
                  onCompositionUpdate={handleComposition}
                  onCompositionEnd={handleComposition}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1 h-10 flex items-center justify-center">
                <ClearIcon
                  className="w-3/5 h-3/5 text-gray-dark"
                  onClick={handleDelete}
                />
              </div>
              </div>
          </div>
  );
};
