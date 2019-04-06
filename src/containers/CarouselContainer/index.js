import React, { Component, createRef } from 'react';
import styled from 'styled-components/native';
import { deviceWidth, deviceHeight } from '../../utils/dimensions';

import {
  CarouselPrevButton,
  CarouselNextButton,
  CarouselIndicator,
} from '../../components/Carousel';

export {
  default as CarouselImage,
} from '../../components/Carousel/CarouselImage';

export {
  default as CarouselView,
} from '../../components/Carousel/CarouselView';

const StyledView = styled.View`
  width: 100%;
  height: auto;
`;

const StyledScrollView = styled.ScrollView`
  position: relative;
  width: 100%;
  height: auto;
`;

class index extends Component {
  state = {
    length: 0,
    index: 0,
  };

  scroll = createRef();

  componentDidMount() {
    const { children } = this.props;

    if (children) {
      this.setState({
        length: children.length,
      });
    }
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
          current.scrollTo({ x: index * deviceWidth });
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
        current.scrollTo({ x: index * deviceWidth });
      },
    );
  };

  handleScroll = e => {
    const scrolledValue = e.nativeEvent.contentOffset.x;
    const page = Math.round(scrolledValue / deviceWidth);

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
        {children && children.length && (
          <>
            <CarouselPrevButton
              onPress={onPressPrevBtn}
              deviceHeight={deviceHeight}
            />
            <CarouselNextButton
              onPress={onPressNextBtn}
              deviceHeight={deviceHeight}
            />
          </>
        )}
        <CarouselIndicator
          length={length}
          index={index}
          deviceWidth={deviceWidth}
        />
      </StyledView>
    );
  }
}

export default index;
