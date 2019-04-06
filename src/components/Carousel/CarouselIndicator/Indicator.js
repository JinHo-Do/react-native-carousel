import React from 'react';
import styled from 'styled-components/native';

const IndicatorView = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 50;
  background-color: ${({ selected, index }) =>
    selected === index ? '#ff5400' : '#d5d5d5'};
`;

const Indicator = ({ index, selected }) => {
  return <IndicatorView index={index} selected={selected} />;
};

export default Indicator;
