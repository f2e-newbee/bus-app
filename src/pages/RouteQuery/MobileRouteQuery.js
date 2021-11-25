import React from "react";
import { MobileHeader, Title, SearchBar, CitySelect } from "../../components";

const MobileRouteQuery = () => {
  return (
    <div>
      <MobileHeader title="路線查詢">
        <div className="grid grid-cols-5 gap-2 items-center	">
          <div className="col-span-2">
            <CitySelect />
          </div>
          <div className="col-span-3">
            <SearchBar  />
          </div>
        </div>
      </MobileHeader>
      <div className="px-4">
        <Title>搜尋結果</Title>
      </div>
    </div>
  );
};

export default MobileRouteQuery;
