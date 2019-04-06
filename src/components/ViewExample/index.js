import React from 'react';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: 110px;
  height: 100px;
`;

const Title = styled.Text`
  margin: 50px auto;
  width: 260px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #2b2b2b;
`;

const JoinButton = styled.TouchableOpacity`
  width: 220px;
  height: 50;
  border-radius: 25px;
  background-color: #ff4500;
`;

const JoinButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 50px;
  color: #ffffff;
`;

const ComponentName = () => (
  <>
    <StyledImage
      source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
      style={{ width: 110, height: 98 }}
    />
    <Title>몇가지 질문으로 시작하겠습니다.</Title>
    <JoinButton>
      <JoinButtonText>회원가입 시작하기 {'>'}</JoinButtonText>
    </JoinButton>
  </>
);

export default ComponentName;
