import React from 'react';
import styled from 'styled-components';
import ethereumIcon from '../images/icon-ethereum.svg';
import clockIcon from '../images/icon-clock.svg';
import avatarIcon from '../images/image-avatar.png';

const CardInfo = () => {
  return (
    <CardInfoContainer>
      <div className='card__info'>
        <h1>Equilibrium #3429</h1>
        <p className='card__info-p'>
          Our Equilibrium collection promotes balance and calm.
        </p>
      </div>

      <div className='eth__info'>
        <div className='price'>
          <img src={ethereumIcon} alt='ethereum' />
          <p>0.041 ETH</p>
        </div>

        <div className='days'>
          <img src={clockIcon} alt='clock' />
          <p>3 days left</p>
        </div>
      </div>
      <div className='line'></div>
      <div className='card__footer'>
        <img src={avatarIcon} alt='profile-img' />
        <h3>
          Creation of <span>Jules Wyvern</span>
        </h3>
      </div>
    </CardInfoContainer>
  );
};

const CardInfoContainer = styled.div`
  padding: 0 24px 0 24px;

  h1 {
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    color: var(--white);
    cursor: pointer;

    &:hover {
      color: var(--cyan);
    }
  }

  .card__info {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
  }

  .card__info-p {
    margin-top: 16px;
    color: #8bacd9;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
  }

  .eth__info {
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      display: flex;
      align-items: center;

      p {
        color: #00fff8;
        margin-left: 6.48px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
      }
    }

    .days {
      display: flex;
      align-items: center;

      p {
        color: #8bacd9;
        margin-left: 6.48px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  .line {
    background: var(--line);
    margin-top: 24px;
    width: 302px;
    height: 1px;
  }

  .card__footer {
    display: flex;
    margin-top: 16px;
    align-items: center;
    img {
      border: 1px solid #ffffff;
      border-radius: 50%;
      width: 33px;
      height: 33px;
    }

    h3 {
      margin-left: 16px;
      color: #8bacd9;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      span {
        color: var(--white);
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;

        &:hover {
          color: var(--cyan);
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .card__info-p {
      margin-top: 12px;
    }
    .eth__info {
      margin-top: 16px;
      font-size: 15px;

      .price {
        p {
          font-weight: 600;
          font-size: 15px;
          line-height: 19px;
        }
      }

      .days {
        p {
          font-weight: 400;
          font-size: 15px;
          line-height: 19px;
        }
      }
    }

    .line {
      margin-top: 16px;
    }

    .card__footer {
      font-size: 15px;
      span {
        font-size: 15px;
      }
    }
  }
`;

export default CardInfo;
