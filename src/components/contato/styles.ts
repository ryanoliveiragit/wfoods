import styled from "styled-components";

export const ContainerContato = styled.div`
  display: flex;
  gap: 8.8rem;
  padding: 10rem 7.5rem;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 11px;
  }
  @media screen and (max-width: 900px) {
    display: flex;

    gap: 3.75rem;
    padding: 5rem 1.5rem;

    img {
      width: 20rem;
      height: 15rem;
    }
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButton = styled.input`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.pink};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme["pink-50"]};
  }
`;
export const ContentContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    font-weight: 600;
    font-size: .85rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    input,textarea{
      padding: .85rem;
    }
  }

  div {
    gap: .5rem;
    align-items: center;
    display: flex;
    text-align: center;

    svg {
        color: ${(props) => props.theme.pink};
        fill: ${(props) => props.theme.pink};
    }
  }

  h1 {
    max-width: 25rem;
    font-size: 2.5rem;
    line-height: 52px;
    font-weight: 700;

    color: ${(props) => props.theme["gray-900"]};
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
  }
  a {
    color: ${(props) => props.theme["gray-900"]};
  }
  button {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 40px;
    background-color: ${(props) => props.theme.pink};
    color: ${(props) => props.theme.white};

    font-size: 0.85rem;
    font-weight: 700;
    line-height: 14px;

    max-width: 16rem;
    transition: all .3s;
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme["pink-100"]};
      color: ${(props) => props.theme.white};
    }
  }
  @media screen and (max-width: 900px) {
    
  h1 {
    font-size: 1.8rem;
    line-height: 39px;
    font-weight: 700;

    color: ${(props) => props.theme["gray-900"]};
  }
  }
`;
