import React from "react";
import styled from "styled-components";
import HashTag from "./HashTag";

const Card = ({ cards }) => {
  return (
    <CardContainer>
      {cards.map((card) => (
        <div className="card-list">
          <img className="card-img" src={card.imageUrl} alt="card-list-img" />
          <div className="card-content">
            <p className="card-name">{card.name}</p>
            <div className="card-hashtag">
              {card.hashtag.map((tag) => {
                return <HashTag tag={tag} />;
              })}
            </div>
            <div className="card-data-container">
              <div className="card-data">
                <img src="images/mainCard/패스 657.png" alt="download" />
                <span>{card.downloads}</span>
              </div>
              <div className="card-price">
                <img src="images/mainCard/Group 2022.png" alt="price" />
                <span>{card.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* border: 1px solid red; */
  height: 870px;
  overflow-y: scroll;

  .card-list {
    width: 164px;
    height: 199px;
    margin-left: 27px;
    margin-bottom: 10px;

    .card-img {
      width: 164px;
      height: 130px;
      border-radius: 10px;
    }

    .card-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 65px;
      .card-name {
        display: block;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-hashtag {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${({ theme }) => theme.colors.grey};
      }

      .card-data-container {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;

        img {
          width: 12px;
          height: 12px;
        }

        .card-data {
          display: flex;
          align-items: center;
          img {
            background-color: gray;
            border-radius: 50%;
          }
          span {
            padding-left: 4px;
            color: ${({ theme }) => theme.colors.grey};
          }
        }

        .card-price {
          display: flex;
          align-items: center;
          span {
            padding-left: 4px;
            color: ${({ theme }) => theme.colors.skyblue};
          }
        }
      }
    }
  }
`;