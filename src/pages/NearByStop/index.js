import React, { useState , useEffect , useCallback } from "react";
import { fetchApi } from "../../service/api";
import getGeoLocation from "../../service/GeolocationService";
import MobileNearByStop from './MobileNearByStop';

/**
 * 附近站牌頁面
 */
export const NearByStop = () => {
  const [location, setLocation] = useState(null);
  const [stationData, setStationData] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [filterList, setFilterList] = useState([]);

  const DISTANCE = 500
  const getNearBy = useCallback(() => {
    fetchApi(
      `/v2/Bus/Station/NearBy?$top=30&$?$top=30&$spatialFilter=nearby(${location.latitude}, ${location.longitude},${DISTANCE})&$format=JSON`
    ).then((response) => {
      if (response && response.status === 200) {
        setStationData(response.data);
        setFilterList(response.data);
      }
    });
  }, [location]);

  //取得使用者地理位置
  useEffect(() => {
    getGeoLocation().then(
      (location) => {
        setLocation(location);
      },
      (error) => {
        alert(error);
      }
    );
  }, []);

  useEffect(() => {
    if (location) {
        getNearBy();
      }
    }, [location, getNearBy]);

  function autoSearch(keyWord) {
    if(keyWord === ''){
      setFilterList(stationData);
      return
    }
    if (keyWord && keyWord.trim()) {
      const filter = stationData.filter((item) => {
        return item.StationName.Zh_tw.includes(keyWord);
      });
      setFilterList(filter);
    }
  }

  return (<MobileNearByStop 
            filterList={filterList}
            keyWord={keyWord}
            setKeyWord={setKeyWord}
            autoSearch={autoSearch}>
          </MobileNearByStop>
  )
}

