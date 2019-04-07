import React from 'react';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: 120px;
  height: 100px;
`;

const TextLine1 = styled.Text`
  margin: 50px auto 10px;
  width: 260px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #2b2b2b;
`;

const TextLine2 = styled(TextLine1)`
  margin: 0 auto 50px;
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
      source={{
        uri:
          'https://s3.ap-northeast-2.amazonaws.com/momsitter-service/momsitter-app/static/public/join/join-sitter-image@2x.png',
      }}
      style={{ width: 120 }}
    />
    <TextLine1>당신은 어떤분 인가요?</TextLine1>
    <TextLine2>몇가지 질문으로 시작하겠습니다.</TextLine2>
    <JoinButton>
      <JoinButtonText>회원가입 시작하기 {'>'}</JoinButtonText>
    </JoinButton>
  </>
);

export default ComponentName;
