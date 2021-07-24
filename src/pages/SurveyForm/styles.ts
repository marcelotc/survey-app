import styled from 'styled-components';

interface SurveyFormProps {
  step: number;
}

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div<SurveyFormProps>`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  justify-content: ${(props) => props.step === 4 ? '' : 'space-between'};
  flex-direction: ${(props) => props.step === 4 ? 'column' : ''};
  position: relative;
  z-index: 10;
  border-radius: 10px;

  .headerButtons:nth-child(1) {
    font-size: 40px;
    cursor: pointer;
    margin: 10px 0 0 10px;
  }

  .headerButtons:nth-child(2) {
    font-size: 40px;
    cursor: pointer;
    margin: 10px 10px 0  0;
  }
`;

export const ModalHeader = styled.div<SurveyFormProps>`
  display: ${(props) => props.step === 4 ? 'flex' : 'none'};;
  justify-content: space-between;
`;

export const ModalContent = styled.div<SurveyFormProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: ${(props) => props.step === 4 ? '' : '50%'};

  p {
    margin-bottom: 1rem;
  }
`;

export const ModalImgOne = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalImgTwo = styled.img`
  display: table;
  margin: 20px auto;
  width: 100px;
  height: 100px;
  border-radius: 10px 0 0 10px;
`;

export const StepTitle = styled.h1`
  font-family: 'FontsFreeNetSFProTextLight';
  text-align: center;
`;