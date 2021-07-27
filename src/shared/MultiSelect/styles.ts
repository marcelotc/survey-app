import styled from 'styled-components';

export const Container = styled.div`
  .ant-select{
    display: flex;
    align-items: center;
    margin: 20px 0px;
  }

  .ant-select-selector{
    background-color: #f9f9f9;
    width: 100%;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: unset;
    border-color: unset;
  }

  .ant-select-selection-placeholder{
    font-family: 'FontsFreeNetSFProTextLight';
    color: #000;
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: unset;
  }
`;
