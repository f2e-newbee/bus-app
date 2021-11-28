import React from "react";
import { MobileHeader, Title, SearchBarNoKeyBoard } from "../../components";
import { ReactComponent as RightArrowIcon } from "../../assets/icon/RightArrowIcon.svg";

const MobileNearByStop = (props) => {
  const { filterList, keyWord, setKeyWord, autoSearch } = props;
  


  return (
    <div className="h-full flex flex-col">
      <MobileHeader title="附近站牌">
        <div className="w-full">
            <SearchBarNoKeyBoard
              autoSearch={autoSearch}
              keyWord={keyWord}
              setKeyWord={setKeyWord}
            />
        </div>
      </MobileHeader>
      <div className="px-4 py-8 max-h-full overflow-y-auto">
        <Title>搜尋結果</Title>
        <p className="px-2">共<span className="text-blue-800 bold mx-2 text-sm">{filterList ? filterList.length : 0 }</span>筆資料</p>
        <div>
          {
            filterList && filterList.map(item =>{
              return   <RouteItem key={item.StationUID} data={item}/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MobileNearByStop;


// TODO:路線列表項目，資料尚未串接api
const RouteItem = ({data}) => {
  return (
    <div className="border-b-1 border-indigo-900	 p-2 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-gray-dark font-semibold">{data.StationName.Zh_tw}</span>
        <span className="text-gray-light font-semibold">{data.StationAddress}</span>
      </div>
      <div>
        <RightArrowIcon />
      </div>
    </div>
  );
};
