import React, {useEffect } from "react";
import { fetchApi } from "../../service/api";
/**
 * 路線查詢頁面
 */
export const RouteQuery = () => {


  useEffect(() => {
    fetchApi(
      `/v2/Bus/EstimatedTimeOfArrival/City/Taipei/307?$top=30&$format=JSON`
    ).then((response) => {
      if (response && response.status === 200) {
        console.log(response)
      }
    });
  }, []);


  return  <div>
            <h1>路線查詢</h1>
          </div>
          
};

