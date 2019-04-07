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
  static defaultProps = {
    indicator: true,
    buttons: true,
  };

  state = {
    length: 0,
    index: 0,
    isAutoSlide: false,
  };

  scroll = createRef();

  interval = null;

  componentDidMount() {
    const { children, auto, speed } = this.props;

    if (children) {
      this.setState(
        {
          length: children.length,
        },
        () => {
          if (auto) {
            this.handleAutoSlide(speed);
          }
        },
      );
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { index, length } = this.state;
    return index !== nextState.index || length !== nextState.length;
  }

  componentWillUnmount() {
    this.removeAutoSlide();
  }

  removeAutoSlide = () => {
    const { isAutoSlide } = this.state;

    if (isAutoSlide) {
      clearInterval(this.interval);

      this.setState({
        isAutoSlide: false,
      });
    }
  };

  handleAutoSlide = (time = 2000) => {
    this.setState({
      isAutoSlide: true,
    });

    this.interval = setInterval(() => {
      this.onPressNextBtn(null, false);
    }, time);
  };

  onPressPrevBtn = () => {
    const { current } = this.scroll;
    const { index, length } = this.state;

    this.removeAutoSlide();

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

  onPressNextBtn = (e, checkAuto = true) => {
    const { index, length } = this.state;
    const { current } = this.scroll;

    if (checkAuto) {
      this.removeAutoSlide();
    }

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

  onScrollStart = () => {
    this.removeAutoSlide();
  };

  handleScroll = e => {
    const scrolledValue = e.nativeEvent.contentOffset.x;
    const page = Math.round(scrolledValue / deviceWidth);

    this.setState({
      index: page,
    });
  };

  render() {
    const {
      scroll,
      onPressNextBtn,
      onPressPrevBtn,
      handleScroll,
      onScrollStart,
    } = this;
    const { children, indicator, buttons } = this.props;
    const { length, index } = this.state;

    return (
      <StyledView>
        <StyledScrollView
          ref={scroll}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          onScrollBeginDrag={onScrollStart}
        >
          {children}
        </StyledScrollView>

        {children && children.length && buttons && (
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

        {indicator && (
          <CarouselIndicator
            length={length}
            index={index}
            deviceWidth={deviceWidth}
          />
        )}
      </StyledView>
    );
  }
}

export default index;
