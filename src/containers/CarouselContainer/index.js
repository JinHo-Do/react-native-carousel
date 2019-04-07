import React, { Component, createRef } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
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

class Carousel extends Component {
  static propTypes = {
    indicator: PropTypes.bool,
    buttons: PropTypes.bool,
    auto: PropTypes.bool,
    speed: PropTypes.number,
  };

  static defaultProps = {
    indicator: true,
    buttons: true,
    auto: false,
    speed: 2000,
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
          if (children.length > 1 && auto) {
            this.handleAutoSlide(speed);
          }
        },
      );
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { index, length, isAutoSlide } = this.state;

    return (
      index !== nextState.index ||
      length !== nextState.length ||
      isAutoSlide !== nextState.isAutoSlide
    );
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
      this.onPressNextBtn(null, true);
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

  onPressNextBtn = (e, isAutoSlide = false) => {
    const { index, length } = this.state;
    const { current } = this.scroll;

    if (!isAutoSlide) {
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

  onPressIndicator = index => {
    const { current } = this.scroll;

    this.removeAutoSlide();

    this.setState(
      {
        index,
      },
      () => {
        const { index } = this.state;
        current.scrollTo({ x: index * deviceWidth });
      },
    );
  };

  render() {
    const {
      scroll,
      onPressNextBtn,
      onPressPrevBtn,
      handleScroll,
      onScrollStart,
      onPressIndicator,
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
            onPressIndicator={onPressIndicator}
          />
        )}
      </StyledView>
    );
  }
}

export default Carousel;
