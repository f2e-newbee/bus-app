import React from "react";

/**
 * 鍵盤元件
 */
export const BusKeyBoard = ({ handleKeyBoardClick }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-2/5 z-50 bg-primary rounded-t-3xl p-4">
      <div className="grid grid-cols-5 grid-rows-4 gap-y-3 h-full items-center justify-items-center	">
        {keyBoardList.map((item) => (
          <CustomButton
            label={item.label}
            type={item.type}
            key={item.label}
            handleClick={handleKeyBoardClick}
          />
        ))}
      </div>
    </div>
  );
};

// TODO: 不同按鈕不同點擊事件尚未完成，目前只傳送label值
const CustomButton = ({ label, handleClick, type }) => {
  return (
    <div
      onClick={() => handleClick(label)}
      className={`${type === "primary" && "bg-white text-primary"}  ${
        type === "secondary" && "bg-primary text-white"
      } ${
        type === "tertiary" && "bg-secondary text-primary"
      }  rounded-full h-full flex items-center justify-center border-1 font-semibold cursor-pointer`}
      style={{ aspectRatio: "1/1" }}
    >
      {label}
    </div>
  );
};

const keyBoardList = [
  {
    label: "紅",
    type: "primary",
  },
  {
    label: "藍",
    type: "primary",
  },
  {
    label: "1",
    type: "secondary",
  },
  {
    label: "2",
    type: "secondary",
  },
  {
    label: "3",
    type: "secondary",
  },
  {
    label: "綠",
    type: "primary",
  },
  {
    label: "棕",
    type: "primary",
  },
  {
    label: "4",
    type: "secondary",
  },
  {
    label: "5",
    type: "secondary",
  },
  {
    label: "6",
    type: "secondary",
  },
  {
    label: "橘",
    type: "primary",
  },
  {
    label: "小",
    type: "primary",
  },
  {
    label: "7",
    type: "secondary",
  },
  {
    label: "8",
    type: "secondary",
  },
  {
    label: "9",
    type: "secondary",
  },
  {
    label: "更多",
    type: "primary",
  },
  {
    label: "幹線",
    type: "primary",
  },
  {
    label: "重設",
    type: "tertiary",
  },
  {
    label: "0",
    type: "secondary",
  },
  {
    label: "X",
    type: "primary",
  },
];
