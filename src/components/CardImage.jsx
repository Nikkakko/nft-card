import React from 'react';
import styled from 'styled-components';
import Equilibrium from '../images/image-equilibrium.jpg';
import iconView from '../images/icon-view.svg';

const CardImage = () => {
  return (
    <CardImageContainer>
      <div className='image__container'>
        <img src={Equilibrium} alt='equilibrium' className='equ' />
        <div className='overlay'></div>
        <img src={iconView} alt='view' className='view' />
      </div>
    </CardImageContainer>
  );
};

const CardImageContainer = styled.div`
  padding: 24px 24px 0 24px;

  .image__container {
    position: relative;
    overflow: hidden;

    &:hover {
      .overlay {
        opacity: 0.5;
      }
      .view {
        opacity: 1;
      }
    }
  }

  .view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 46px;
    height: 44px;
    cursor: pointer;
    color: var(--white);
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  .equ {
    /* display: block; */
    width: 302px;
    height: 302px;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
    object-position: center;
  }

  .overlay {
    position: absolute;
    width: 302px;
    height: 302px;
    inset: 0;
    background: var(--cyan);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 375px) {
    .equ {
      width: 278px;
      height: 278px;
    }
  }
`;
export default CardImage;
