import React from 'react';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';

import Indicator from './Indicator';

const StyledView = styled.View`
  position: absolute;
  top: 80px;
  left: ${({ deviceWidth }) => deviceWidth / 2 - deviceWidth * 0.15};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 10px;
`;

const index = ({ length, index, deviceWidth, onPressIndicator }) => {
  const Indicators = Array(length)
    .fill(null)
    .map((item, i) => {
      return (
        <Indicator
          key={uuid()}
          index={i}
          selected={index}
          onPressIndicator={onPressIndicator}
        />
      );
    });

  return <StyledView deviceWidth={deviceWidth}>{Indicators}</StyledView>;
};

export default index;
