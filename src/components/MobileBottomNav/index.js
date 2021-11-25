import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@material-ui/core";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icon/ArrowIcon.svg";

export const MobileBottomNav = () => {
  return (
    <div
      className="bg-primary absolute 
    bottom-0 left-0 right-0 block 
    md:hidden rounded-t-2xl shadow-md z-20"
    >
      <div className="grid grid-cols-2">
        <NavLink
          to="/route-query"
          className={({ isActive }) =>
            isActive ? " text-white" : " text-gray-100"
          }
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            className="h-full  py-2"
          >
            <SearchIcon className="w-6 h-6" />
            <span className="font-semibold">路線查詢</span>
          </Stack>
        </NavLink>
        <NavLink
          to="/near-by-stop"
          className={({ isActive }) =>
            isActive ? " text-white" : "text-gray-100"
          }
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            className="h-full py-2"
          >
            <ArrowIcon className="w-6 h-6" />
            <span className="font-semibold">附近站牌</span>
          </Stack>
        </NavLink>
      </div>
    </div>
  );
};
