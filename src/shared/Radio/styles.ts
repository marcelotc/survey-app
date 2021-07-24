import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0px;

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #000;
    border-color: #000;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: #000;
  }

  .ant-radio-button-wrapper:hover {
    color: #000;
  }

  .ant-radio-button-wrapper:focus-within {
    box-shadow: unset;
  }

  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border-right-color: #000;
  }
`;
