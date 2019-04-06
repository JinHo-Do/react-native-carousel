import React, { Component } from 'react';
import styled from 'styled-components/native';

import CarouselListContainer from '../CarouselListContainer';

export {
  default as CarouselImage,
} from '../../components/Carousel/CarouselImageItem';

const StyledView = styled.View`
  position: relative;
  width: 100%;
  height: auto;
  background-color: #ff5400;
`;

class CarouselContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <StyledView>
        <CarouselListContainer>{children}</CarouselListContainer>
      </StyledView>
    );
  }
}

export default CarouselContainer;
