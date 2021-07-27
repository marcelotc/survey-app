import styled from 'styled-components';
import { Input } from 'antd';

export const Container = styled.div`
  .ant-input {
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    background-color: #f9f9f9;
    box-shadow: 0px 0px 3px 0px lightgrey;
    border-radius: 3px;
    padding: 0px 20px;
    margin: 20px 0px;

    @media (max-width: 380px) {
      width: 100%;
    }
  }

  .ant-input:focus, .ant-input-focused {
    border: 0;
  }
`;

export const InputField = styled(Input)`
  font-family: 'FontsFreeNetSFProTextLight';
  font-size: 1rem;
  width: 100%;
  background-color: #f9f9f9;
  color: #000;

  &::placeholder{
    color: #000;
  }
`;
