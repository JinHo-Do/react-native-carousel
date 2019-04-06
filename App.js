import React, { Component } from 'react';
import styled from 'styled-components/native';

import Carousel, {
  CarouselImage,
  CarouselView,
} from './src/containers/CarouselContainer';

import ViewExample from './src/components/ViewExample';

const StyledView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

export default class App extends Component {
  render() {
    return (
      <StyledView>
        <Carousel>
          <CarouselView>
            <ViewExample />
          </CarouselView>

          <CarouselImage url="https://cdn.pixabay.com/photo/2015/07/21/15/19/koala-854021_1280.jpg" />
          <CarouselImage url="https://cdn.pixabay.com/photo/2015/05/15/14/42/monkeys-768641_1280.jpg" />
          <CarouselImage url="https://cdn.pixabay.com/photo/2017/10/12/10/37/beautiful-2844189__480.jpg" />
          <CarouselImage url="https://cdn.pixabay.com/photo/2018/07/16/07/11/flowers-3541330_1280.jpg" />
        </Carousel>
      </StyledView>
    );
  }
}
