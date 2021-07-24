import styled from 'styled-components';

interface SurveyFormProps {
  step?: number;
  ageError?: boolean;
  genderError?: boolean;
}

export const Container = styled.div<SurveyFormProps>`
    width: ${(props) => props.step === 4 ? '' : '64%'};

    @media (max-width: 812px) {
      overflow: scroll;
      height: 295px;
    }
`;

export const Label = styled.label`
    font-family: 'FontsFreeNetSFProTextLight';
    font-size: 1rem;
`; 

export const StepContainer = styled.div<SurveyFormProps>`
    .age {
      color: ${(props) => props.ageError ? 'red' : '#000'}
    }

    .gender {
      color: ${(props) => props.genderError ? 'red' : '#000'}
    }
`; 

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    .ant-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0px;
      color: #fff;
      background: #1a1b1d;
      border-color: #1a1b1d;
      border-radius: 3px;
      height: 35px;
      width: 115px;
      font-size: 1.2rem;

      > span {
        font-family: 'FontsFreeNetSFProTextLight';
      }
    }

    @media (max-width: 580px) {
      justify-content: space-between;
      flex-direction: column-reverse;
      align-items: center;
  }
`;  

export const TableWrapper = styled.div`
    width: 100%;
    max-width: 960px;
    border-radius: 19px;

    > button {
      display: table;
      margin: 20px auto;
    }
    
    @media(min-width: 812px){
      padding: 0 30px;
    }
`;
export const Table = styled.table`
    width: 100%;
    max-width: 960px;
    vertical-align: middle;
    text-align: left;
    border-collapse: collapse;
    border-spacing: 0;

    tr:not(:last-child){
      border-bottom: 2px solid #000;
    }
    th,
    td {
      padding: 15px;
    }
    th {
      font-size: 1.1rem;
      font-weight: bold;
      color: #000;
      border-bottom: 2px solid #000;
    }
    td {
      font-size: 1.1rem;
      color: #000;
    }
    td:last-child{
      display: block;
      max-height: 100px;
      color:#047D10;
      font-weight: 500;
      overflow-y: scroll;
    }

    @media (max-width: 813px) {
      tbody,
      tr,
      td {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: right;
      }
      thead {
        display: none;
      }
      td {
        position: relative;
      }
      td:before {
        content: attr(data-label);
        position: absolute;
        color: #000;
        padding-right: 5px;
        text-align: left;
        font-weight: 600;
      }
    }

    @media (max-width: 812px){
      td:before {
        position: relative;
        text-align: left;
      }
      td{
          text-align: left;
          padding: 15px 15px;
      }
    }
`;

export const ErrorMessage = styled.p`
  color: red;
`;
