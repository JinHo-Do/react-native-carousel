import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const StyledTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: ${({ deviceHeight }) => deviceHeight / 2 - 25}px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const index = ({ onPress, deviceHeight }) => (
  <StyledTouchableOpacity onPress={onPress} deviceHeight={deviceHeight}>
    <Icon name="right" size={30} color="#ffffff" />
  </StyledTouchableOpacity>
);

export default index;
