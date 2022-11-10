import React from 'react';
import styled from 'styled-components';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

const Card = () => {
  return (
    <CardContainer>
      <CardImage />
      <CardInfo />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 15px;
  width: 350px;
  height: 596px;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  background: var(--cardBG);

  @media screen and (max-width: 375px) {
    width: 327px;
    height: 543px;
  }
`;

export default Card;
