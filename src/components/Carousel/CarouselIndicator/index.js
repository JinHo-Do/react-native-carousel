import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';

import Indicator from './Indicator';

const { width } = Dimensions.get('window');

const StyledView = styled.View`
  position: absolute;
  top: 80px;
  left: ${width / 2 - width * 0.15};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 10px;
`;

const index = ({ length, index }) => {
  const Indicators = Array(length)
    .fill(0)
    .map((item, i) => {
      return <Indicator key={uuid()} index={i} selected={index} />;
    });

  return <StyledView>{Indicators}</StyledView>;
};

export default index;
