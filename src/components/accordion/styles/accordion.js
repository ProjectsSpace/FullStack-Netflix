import styled from "styled-components/macro";

export const Container = styled.section`
  color: white;
  display: flex;
  border-bottom: 8px solid #222;
  justify-content: center;
  padding: 70px 45px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 949px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Frame = styled.div`
  width: 815px;
  margin: 40px 0;

  @media (max-width: 949px) {
    width: 90%;
  }
`;

export const Item = styled.div`
  margin-bottom: 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;
export const Body = styled.div`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
