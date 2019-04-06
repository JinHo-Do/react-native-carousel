import React from 'react';
import styled from 'styled-components/native';

const StyledScrollView = styled.ScrollView`
  width: 100%;
  height: auto;
`;

const index = ({ children }) => (
  <StyledScrollView horizontal pagingEnabled>
    {children}
  </StyledScrollView>
);

export default index;
