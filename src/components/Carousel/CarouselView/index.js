import React from 'react';
import styled from 'styled-components/native';
import { deviceWidth } from '../../../utils/dimensions';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${deviceWidth}px;
  height: 100%;
`;

const index = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export default index;
