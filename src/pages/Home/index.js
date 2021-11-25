import React from "react";
import Block from "./Block";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icon/ArrowIcon.svg";
import { Stack } from "@material-ui/core";

export const Home = () => {
  return (
    <div
      className="min-h-screen text-white flex items-center flex-col justify-center"
      style={{
        backgroundImage: ` linear-gradient(360deg, rgba(5, 11, 41, 0.9) 0%, #151F56 48.01%, #151F56 99.99%)`,
      }}
    >
      <h2 className="font-semibold text-5xl mb-2">WhereIsMyBus</h2>
      <h4 className="text-xl">Never miss the bus again.</h4>
      <Stack direction="row" spacing={6} className="mt-8">
        <Block title="路線查詢" icon={<SearchIcon />} link="/near-by-stop" />
        <Block title="附近站牌" icon={<ArrowIcon />} link="/route-query" />
      </Stack>
    </div>
  );
};
