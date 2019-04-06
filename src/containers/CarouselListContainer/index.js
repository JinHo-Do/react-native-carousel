import React, { Component, createRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import {
  CarouselPrevButton,
  CarouselNextButton,
} from '../../components/Carousel';

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

  render() {
    const { scroll, onPressNextBtn, onPressPrevBtn } = this;
    const { children } = this.props;

    return (
      <>
        <StyledScrollView ref={scroll} horizontal pagingEnabled>
          {children}
        </StyledScrollView>
        {children.length && (
          <>
            <CarouselPrevButton onPress={onPressPrevBtn} />
            <CarouselNextButton onPress={onPressNextBtn} />
          </>
        )}
      </>
    );
  }
}

export default index;
