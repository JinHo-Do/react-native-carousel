# React Native Carousel Project

## Description

리액트 네이티브만을 사용하여 캐러셀 만들기

## Show Case

![DEMO](/media/demo.gif)

## Usage

```javascript
...
import Carousel, {
  CarouselImage,
  CarouselView,
} from 'src/containers/CarouselContainer';

const Something = () => (
  <Carousel auto indicator buttons speed={2000}>
    <CarouselView>
      <ViewExample />
    </CarouselView>

    <CarouselImage url="https://cdn.pixabay.com/photo/2015/07/21/15/19/koala-854021_1280.jpg" />
    <CarouselImage url="https://cdn.pixabay.com/photo/2015/05/15/14/42/monkeys-768641_1280.jpg" />
    <CarouselImage url="https://cdn.pixabay.com/photo/2017/10/12/10/37/beautiful-2844189__480.jpg" />
    <CarouselImage url="https://cdn.pixabay.com/photo/2018/07/16/07/11/flowers-3541330_1280.jpg" />
  </Carousel>
);

export default Something;
```

### CarouselView

![ScreenShot](https://s3.ap-northeast-2.amazonaws.com/gurmbyh/CarouselView.png)

```javascript
...
<Carousel>  {/* Carousel 컴포넌트로 감싸면 자식 컴포넌트는 모두 캐러셀의 아이템이 됩니다. */}
  <CarouselView>  {/* CarouselView 컴포넌트는 디바이스 넓이를 가지는 View 컴포넌트입니다. */}
    <ViewExample />  {/* 이 컴포넌트는 단순히 예시를 위한 컴포넌트입니다. */}
  </CarouselView>
</Carousel>
...
```

### CarouselImage

![ScreenShot](https://s3.ap-northeast-2.amazonaws.com/gurmbyh/CarouselImage.png)

```javascript
<Carousel>  {/* Carousel 컴포넌트로 감싸면 자식 컴포넌트는 모두 캐러셀의 아이템이 됩니다. */}
  <CarouselImage url="이미지 주소">  {/* CarouselView컴포넌트를 사용해도 되지만 단순히 이미지만 사용하려면
                                    CarouselImage컴포넌트가 더 간편합니다.
                                  */}
</CarouselImage>
```

### Carousel Options

```javascript
{/* Carousel 컴포넌트의 props로 다양한 옵션을 설정 할 수 있습니다. 인디케이터 터치 시 해당 페이지로 이동합니다. */}
<Carousel auto speed={3000} indicator={false} buttons={false}>
  <CarouselImage url="이미지 주소">
</CarouselImage>
```

| Prop Name | Type    | Default value | Description                                   |
| --------- | ------- | ------------- | --------------------------------------------- |
| auto      | Boolean | false         | 자동 슬라이드의 여부를 정합니다.              |
| speed     | Number  | 2000          | 자동으로 슬라이드 넘어가는 시간을 설정합니다. |
| indicator | Boolean | true         | false 설정 시 인디케이터가 나타나지 않습니다. |
| buttons   | Boolean | true         | false 설정 시 버튼이 나타나지 않습니다.       |
