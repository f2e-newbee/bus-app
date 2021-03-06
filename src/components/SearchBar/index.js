import React, { useState, useRef } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as ClearIcon } from "../../assets/icon/ClearIcon.svg";
import { BusKeyBoard } from "../BusKeyBoard";

/**
 * 關鍵字搜尋元件
 * @returns 
 */
export const SearchBar = (props) => {
  const { autoSearch, keyWord,setKeyWord } = props;

  const [showKeyBoard, setShowKeyBoard] = useState(false);
  const ref = useRef(null);

  /**
   * 關鍵字Input Focus開啟鍵盤
   */
  const handleInputFocus = () => {
    if(!showKeyBoard){
      document.addEventListener('click',handleOutsideClick,false);
      setShowKeyBoard(true);
    }
    else{
      document.removeEventListener("click", handleOutsideClick,false);
    }
  };


  // 點擊其他地方關閉鍵盤
  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowKeyBoard(false);
    }
  };

  const handleInputChange = (event) => {
    setKeyWord(event.target.value);
  };

  const handleKeyBoardClick = (value) => {
    let preKeyword = keyWord.split('');;
    //清除資料
    if(value === 'X'){
      if(preKeyword.length > 0){
        preKeyword.pop();
        preKeyword =  preKeyword.join('')
        setKeyWord(preKeyword);
        autoSearch(preKeyword);
      }
      return
    }
    //全部清除
    else if(value === '重設'){
      setKeyWord('')
    }
    else{
      setKeyWord(keyWord + value);
      autoSearch(keyWord + value);
    }
  };

  const handleComposition = (evt) => {
    if (evt.type === 'compositionend') {
      autoSearch(keyWord);
      return;
    }
  };
  

  const handleDelete = () => {
    setKeyWord("");
  };

 
  return (
          <div ref={ref}> 
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
              {showKeyBoard && (
                <BusKeyBoard handleKeyBoardClick={handleKeyBoardClick} />
              )}
            </div>
  );
};
