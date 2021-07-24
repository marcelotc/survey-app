import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 115px;
  background-color: #1a1b1d;
  border-radius: 3px;
  border: 0px;
  outline: 0;
  padding: 0px 10px;
  margin: 20px 0px;
  font-family: 'FontsFreeNetSFProTextLight';
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;

  > a {
    color: inherit;
  }

  @media (max-width: 380px) {
   width: 100%;
  }
`;

export const IconLeft = styled.img`
  height: 16px;
  margin-right: 4px;
`;
