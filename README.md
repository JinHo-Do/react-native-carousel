# React Native Carousel Project

## Description

리액트 네이티브만을 사용하여 캐러셀 만들기

## Usage

```
import Carousel, {
  CarouselImage,
  CarouselView,
} from 'src/containers/CarouselContainer';

<Carousel>
  <CarouselView>
    <ViewExample />
  </CarouselView>

  <CarouselImage url="https://cdn.pixabay.com/photo/2015/07/21/15/19/koala-854021_1280.jpg" />
  <CarouselImage url="https://cdn.pixabay.com/photo/2015/05/15/14/42/monkeys-768641_1280.jpg" />
  <CarouselImage url="https://cdn.pixabay.com/photo/2017/10/12/10/37/beautiful-2844189__480.jpg" />
  <CarouselImage url="https://cdn.pixabay.com/photo/2018/07/16/07/11/flowers-3541330_1280.jpg" />
</Carousel>
```

### CarouselView

![ScreenShot](./media/CarouselView.png)

```
<Carousel> // Carousel 컴포넌트로 감싸면 자식 컴포넌트는 모두 디바이스 넓이를 가지는 캐러셀의 아이템이 됩니다.
  <CarouselView> // CarouselView 컴포넌트는 디바이스 넓이를 가지는 View 컴포넌트입니다.
    <ViewExample /> // 이 컴포넌트는 단순히 예시를 위한 컴포넌트입니다.
  </CarouselView>
</Carousel>
```

### CarouselImage

![ScreenShot](./media/CarouselImage.png)

```
<Carousel> // Carousel 컴포넌트로 감싸면 자식 컴포넌트는 모두 디바이스 넓이를 가지는 캐러셀의 아이템이 됩니다.
  <CarouselImage url="이미지 주소"> /* CarouselView컴포넌트를 사용해도 되지만 단순히 이미지만 사용하려면
                                    CarouselImage컴포넌트가 더 간편합니다.
                                  */
</CarouselImage>
```
