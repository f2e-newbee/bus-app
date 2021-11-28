import React from "react";
import { MobileHeader, Title, SearchBar, CitySelect } from "../../components";
import { ReactComponent as RightArrowIcon } from "../../assets/icon/RightArrowIcon.svg";

const MobileRouteQuery = (props) => {
  const { filterList, keyWord, setKeyWord, city, setCity, autoSearch} = props;


  return (
    <div className="h-full flex flex-col">
      <MobileHeader title="路線查詢">
        <div className="grid grid-cols-5 gap-2 items-center	">
          <div className="col-span-2">
            <CitySelect  city={city} setCity={setCity} />
          </div>
          <div className="col-span-3">
            <SearchBar
              autoSearch={autoSearch}
              keyWord={keyWord}
              setKeyWord={setKeyWord}
            />
          </div>
        </div>
      </MobileHeader>
      <div className="px-4 py-8 max-h-full overflow-y-auto">
        <Title>搜尋結果</Title>
        <div>
          {
            filterList && filterList.map(item =>{
              return   <RouteItem key={item.RouteUID} data={item}/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MobileRouteQuery;


// TODO:路線列表項目，資料尚未串接api
const RouteItem = ({data}) => {
  return (
    <div className="border-b-1 p-2 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-gray-dark font-semibold">{data.RouteName.Zh_tw}</span>
        <span className="text-gray-light font-semibold">{data.DepartureStopNameZh}-{data.DestinationStopNameZh}</span>
        <span className="text-gray-light font-semibold">{data.TicketPriceDescriptionZh}</span>
      </div>
      <div>
        <RightArrowIcon />
      </div>
    </div>
  );
};
