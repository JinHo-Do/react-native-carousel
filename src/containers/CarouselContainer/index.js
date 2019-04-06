import React, { Component } from 'react';
import styled from 'styled-components/native';

import { CarouselList } from '../../components/Carousel';

export {
  default as CarouselImage,
} from '../../components/Carousel/CarouselImageItem';

const StyledView = styled.View`
  width: 100%;
  height: auto;
`;

class CarouselContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <StyledView>
        <CarouselList>{children}</CarouselList>
      </StyledView>
    );
  }
}

export default CarouselContainer;
