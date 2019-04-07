import React from 'react';
import styled from 'styled-components/native';

const IndicatorButton = styled.TouchableOpacity`
  width: 10px;
  height: 10px;
  border-radius: 50;
  background-color: ${({ selected, index }) =>
    selected === index ? '#ff5400' : '#d5d5d5'};
`;

const Indicator = ({ index, selected, onPressIndicator }) => {
  return (
    <IndicatorButton
      index={index}
      selected={selected}
      onPress={() => onPressIndicator(index)}
    />
  );
};

export default Indicator;
