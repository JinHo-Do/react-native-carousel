import React, { Component, createRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import {
  CarouselPrevButton,
  CarouselNextButton,
  CarouselIndicator,
} from '../../components/Carousel';

export {
  default as CarouselImage,
} from '../../components/Carousel/CarouselImageItem';

const StyledView = styled.View`
  position: relative;
  width: 100%;
  height: auto;
`;

const StyledScrollView = styled.ScrollView`
  position: relative;
  width: 100%;
  height: auto;
`;

const { width } = Dimensions.get('window');

class index extends Component {
  state = {
    length: 0,
    index: 0,
  };

  scroll = createRef();

  componentDidMount() {
    const { children } = this.props;

    this.setState({
      length: children.length,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { index, length } = this.state;
    return index !== nextState.index || length !== nextState.length;
  }

  onPressPrevBtn = () => {
    const { current } = this.scroll;
    const { index, length } = this.state;

    if (index === 0) {
      this.setState(
        {
          index: length - 1,
        },
        () => {
          current.scrollToEnd();
        },
      );
    } else {
      this.setState(
        {
          index: index - 1,
        },
        () => {
          const { index } = this.state;
          current.scrollTo({ x: index * width });
        },
      );
    }
  };

  onPressNextBtn = () => {
    const { index, length } = this.state;
    const { current } = this.scroll;

    this.setState(
      {
        index: (index + 1) % length,
      },
      () => {
        const { index } = this.state;
        current.scrollTo({ x: index * width });
      },
    );
  };

  handleScroll = e => {
    const scrolledValue = e.nativeEvent.contentOffset.x;

    const page = Math.round(scrolledValue / width);

    this.setState({
      index: page,
    });
  };

  render() {
    const { scroll, onPressNextBtn, onPressPrevBtn, handleScroll } = this;
    const { children } = this.props;
    const { length, index } = this.state;

    return (
      <StyledView>
        <StyledScrollView
          ref={scroll}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
        >
          {children}
        </StyledScrollView>
        {children.length && (
          <>
            <CarouselPrevButton onPress={onPressPrevBtn} />
            <CarouselNextButton onPress={onPressNextBtn} />
          </>
        )}
        <CarouselIndicator length={length} index={index} />
      </StyledView>
    );
  }
}

export default index;
