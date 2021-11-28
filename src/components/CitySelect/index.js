import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

/**
 * 選擇縣市下拉
 */
export const CitySelect = (props) => {
  const { city ,setCity} = props;
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        sx={{
          color: "white",
        }}
      >
        選擇縣市
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={city}
        label="City"
        onChange={handleChange}
        sx={{
          color: "white",
          fontWeight: "700",
          borderRadius: "1rem",
          backgroundColor: "transparent",
          border:"white"
        }}
      >
        <MenuItem value="" disabled >請選擇</MenuItem>
        {cityList.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const cityList = [
  {
    label: "臺中市",
    value: "Taichung",
  },
  {
    label: "新竹市",
    value: "Hsinchu",
  },
  {
    label: "苗栗縣",
    value: "MiaoliCounty",
  },
  {
    label: "新北市",
    value: "NewTaipei",
  },
  {
    label: "屏東縣",
    value: "PingtungCounty",
  },
  {
    label: "金門縣",
    value: "KinmenCounty",
  },
  {
    label: "桃園市",
    value: "Taoyuan",
  },
  {
    label: "臺北市",
    value: "Taipei",
  },
  {
    label: "高雄市",
    value: "Kaohsiung",
  },
  {
    label: "臺南市",
    value: "Tainan",
  },
  {
    label: "嘉義市",
    value: "Chiayi",
  },
];
