import React, { useState , useEffect , useCallback } from "react";
import { fetchApi } from "../../service/api";
import getGeoLocation from "../../service/GeolocationService";


/**
 * 附近站牌頁面
 */
export const NearByStop = () => {
  const [city, setCity] = useState('Taipei');
  const [location, setLocation] = useState(null);
  // const [stationData, setStationData] = useState(null);
  const DISTANCE = 10000

  const getNearBy = useCallback(() => {
    fetchApi(
      `/v2/Bus/Station/City/${city}?$top=30&$spatialFilter=nearby(${location.latitude}, ${location.longitude},${DISTANCE})&$format=JSON`
    ).then((response) => {
      if (response && response.status === 200) {
        console.log(response.data);
        // setStationData(response.data);
      }
    });
  }, [city,location]);

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
    }, [location, city, getNearBy]);


  return <div>附近站牌</div>;
};

