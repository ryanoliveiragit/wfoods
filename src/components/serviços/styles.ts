import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  margin-top: -6rem;
  padding: 1rem 7.75rem;
  padding-top: 15.1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex;

  .p-button {
    background-color: ${(props) => props.theme["pink"]};
    border: 1px solid ${(props) => props.theme["pink"]};
    :hover {
      border: 1px solid ${(props) => props.theme["pink"]};
      background-color: ${(props) => props.theme["pink-100"]};
    }
  }
  @media screen and (max-width: 1300px) {
    padding: 1.6rem 1.5rem;
  }
  .imageProductsLast {
    img {
      width: 240px;
      height: 140px;
    }
  }
  .imageProducts {
    img {
      width: 240px;
      height: 140px;
    }
  }

`;
export const Content = styled.div`
margin-top: -8rem;
  width: 31rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  @media screen and (max-width: 900px) {
    margin-top: 6.25rem;
    width: 100%;
  }

  span {
    margin-top: 4rem;
    color: ${(props) => props.theme.pink};
    font-size: 0.85rem;
    line-height: 21px;
    letter-spacing: 8%;
    font-weight: 700;
  }
  h1 {
    line-height: 52px;
    font-weight: 700;
    font-size: 2.5rem;

    @media screen and (max-width: 900px) {
      font-size: 2rem;
      line-height: 39px;
    }
  }
`;
export const CardsT = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  gap: 2.5rem;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
  h4 {
    padding: 1rem;
    display: flex;

    align-items: center;
    font-size: 1rem;
  }
  div {
    border-radius: 6px;
    gap: 1rem;
    width: 100%;
    padding: 1.5rem 1rem;
    background-color: ${(props) => props.theme.white};

    border: 2px solid ${(props) => props.theme.white};
    transition: all .2s;

    :hover {
      cursor: pointer;
    }
    svg {
      width: 1.5rem;
      color: ${(props) => props.theme.pink};
    }
    h1 {
      padding-top: 1.5rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 31px;
    }
    p {
      font-weight: 200;
      font-size: 1rem;
      line-height: 24px;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;


export const Cards = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.5rem;

  h4 {
    padding: 1rem;
    display: flex;

    align-items: center;
    font-size: 1rem;
  }
  div {
    border-radius: 6px;
    gap: 1rem;
    padding: 1.5rem 1rem;
    background-color: ${(props) => props.theme.white};

    border: 2px solid ${(props) => props.theme.white};
    transition: all .2s;

    :hover {
      cursor: pointer;
    }
    svg {
      width: 1.5rem;
      color: ${(props) => props.theme.pink};
    }
    h1 {
      padding-top: 1.5rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 31px;
    }
    p {
      font-weight: 200;
      font-size: 1rem;
      line-height: 24px;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;
