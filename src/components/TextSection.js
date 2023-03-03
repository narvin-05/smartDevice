import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Title>Smart Clothes for Military Personnel </Title>
      <Description>
        Build the Future with prespective of security and enhancement
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 40vw;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  border:3px solid black;
  font-size: 60px;
`;

const Description = styled.p`
  max-width: 240px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
