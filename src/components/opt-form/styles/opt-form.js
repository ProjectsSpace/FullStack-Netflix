import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  max-width: 815px;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 949px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 949px) {
    margin-left: 2rem;
  }
`;

export const Input = styled.input`
  max-width: 500px;
  border: 0;
  flex-grow: 2;
  color: #8c8c8c;
  font-size: 16px;
  padding: 10px 10px 0;
  height: 70px;
  box-sizing: border-box;

  @media (max-width: 949px) {
    height: 60px;
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  color: #fff;
  text-transform: uppercase;
  font-size: 26px;
  padding: 0 32px;
  border: 0;
  cursor: pointer;
  font-weight: 500;

  img {
    width: 20px;
    margin-left: 10px;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 949px) {
    padding: 10px 15px;
    margin-top: 10px;
  }
`;
export const Text = styled.h3`
  padding: 0 5%;
  margin: 0 auto 15px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`;
