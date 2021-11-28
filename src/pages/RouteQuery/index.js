import React, { useState, useEffect, useCallback } from "react";
import MobileRouteQuery from "./MobileRouteQuery";
import { fetchApi } from "../../service/api";
/**
 * 路線查詢頁面
 */
export const RouteQuery = () => {
  const [routeData, setRouteData] = useState(null);
  const [city, setCity] = useState("Taipei");
  const [keyWord, setKeyWord] = useState("");
  const [filterList, setFilterList] = useState([]);

  const getCity = useCallback(() => {
    if (city) {
      fetchApi(`v2/Bus/Route/City/${city}/${keyWord}?$format=JSON`).then((response) => {
        if (response && response.status === 200) {
          setRouteData(response.data);
        }
      });
    }
  }, [keyWord,city]);

  useEffect(() => {
    getCity();
  }, [city, getCity]);

  useEffect(() => {
    autoSearch(keyWord);
  }, [routeData]);


  function autoSearch(keyWord) {
    if(keyWord === ''){
      setFilterList(routeData);
      return
    }
    if (keyWord && keyWord.trim()) {
      const filter = routeData.filter((item) => {
        return item.RouteName.Zh_tw.includes(keyWord);
      });
      setFilterList(filter);
    }
  }


  return <MobileRouteQuery
            filterList={filterList}
            keyWord={keyWord}
            setKeyWord={setKeyWord}
            city={city} 
            setCity={setCity}
            autoSearch={autoSearch}>
          </MobileRouteQuery>;
};
