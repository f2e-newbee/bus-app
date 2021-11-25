import React from "react";
import styled from "@emotion/styled";

export const Title = ({ children }) => {
  return (
    <TitleWrapper>
      <span>{children}</span>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.h3`
  color: #151f56;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    width: 5px;
    background-color: #151f56;
  }
  span {
    display: inline-block;
    margin-left: 10px;
  }
`;
