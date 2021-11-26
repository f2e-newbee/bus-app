import React from "react";
import { MobileHeader, Title, SearchBar, CitySelect } from "../../components";
import { ReactComponent as RightArrowIcon } from "../../assets/icon/RightArrowIcon.svg";

const MobileRouteQuery = () => {
  return (
    <div className="h-full flex flex-col">
      <MobileHeader title="路線查詢">
        <div className="grid grid-cols-5 gap-2 items-center	">
          <div className="col-span-2">
            <CitySelect />
          </div>
          <div className="col-span-3">
            <SearchBar />
          </div>
        </div>
      </MobileHeader>
      <div className="px-4 max-h-full overflow-y-auto">
        <Title>搜尋結果</Title>
        <div>
          {/* TODO: 路線列表區，尚未串接api資料 */}
          <RouteItem />
          <RouteItem />
          <RouteItem />
          <RouteItem />
          <RouteItem />
          <RouteItem />
          <RouteItem />
          <RouteItem />
        </div>
      </div>
    </div>
  );
};

export default MobileRouteQuery;


// TODO:路線列表項目，資料尚未串接api
const RouteItem = () => {
  return (
    <div className="border-b-1 p-2 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-gray-dark font-semibold">15和平幹縣</span>
        <span className="text-gray-light font-semibold">萬芳社區-衡陽路</span>
      </div>
      <div>
        <RightArrowIcon />
      </div>
    </div>
  );
};
