import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const { height } = Dimensions.get('window');

const StyledTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: ${height / 2 - 25}px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const index = ({ onPress }) => (
  <StyledTouchableOpacity onPress={onPress}>
    <Icon name="right" size={30} color="#ffffff" />
  </StyledTouchableOpacity>
);

export default index;
