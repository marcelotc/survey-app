import { useEffect, useState, useCallback, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Form as FormAnt, Button as ButtonAnt } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Container, 
  ButtonContainer,
  } from './styles';
import { Identity } from './Identity';
import { Details } from './Details';
import { Favorites } from './Favorites';
import { Summary } from './Summary';
import { Button } from '../../../../shared/Button';
import { incrementStep, decrementStep, setStep } from '../../../../store/modules/formSteps/actions';
import { setFormData } from '../../../../store/modules/formData/actions';
import { IState } from '../../../../store/index';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

interface IError {
  age: string;
  gender: string;
  book: string;
  colors: []
}

export function Form({setShowModal}: Props) {
  const dispatch = useDispatch();
  const step = useSelector<IState, number>(state => state.formSteps.step);
  const formData = useSelector<IState, any>(state => state.formData.formData);
  const storagedSurveyData = localStorage.getItem('@Yieldstreet:surveyData');

  const [surveyData, setSurveyData] = useState(() => {
    if (storagedSurveyData) {
        return JSON.parse(storagedSurveyData);
    } else {
        return formData;
      }
  });
  const [formErrors, setFormErrors] = useState({});
  
  localStorage.setItem('@Yieldstreet:surveyData', JSON.stringify(surveyData));

  dispatch(setFormData(surveyData));

  useEffect(() => {
    if(surveyData.step === 1) {
      dispatch(setStep(1));
    } else if(surveyData.step === 2) {
      dispatch(setStep(2));
    } else {
      dispatch(setStep(3));
    }
  }, [])

  console.log('storagedSurveyData', storagedSurveyData);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSurveyData({
      ...surveyData,
      [e.target.name]: e.target.value,
      step: step === 1 ? 1 : 3
    });
  }

  function handleChangeSelect(value: string) {
    setSurveyData({
      ...surveyData,
      age: value,
      step: 2
    })
  }

  function handleChangeRadio(e: ChangeEvent<HTMLInputElement>) {
    setSurveyData({
      ...surveyData,
      gender: e.target.value,
      step: 2,
    })
  }

  function handleChangeMultiSelect(value: string) {
    setSurveyData({
      ...surveyData,
      colors: value,
      step: 3
    })
  }

  const handleIncrementStep = useCallback(() => {
    localStorage.setItem('@Yieldstreet:surveyData', JSON.stringify(surveyData));
    dispatch(incrementStep());
    dispatch(setFormData(surveyData));
    setFormErrors(false);
  }, []);

  const handleDecrementStep = useCallback(() => {
    dispatch(decrementStep());
  }, []);

  const handleSubmit = () => {
    setFormErrors(validate());
  };

  const validate = () => {
    let errors: any = {};

    if (step === 2 && !formData.age) {
      errors.age = "Cannot be blank";
    } 
    
    if (step === 2 && !formData.gender) {
      errors.gender = "Cannot be blank";
    } 

    if ((step === 3 && !formData.book)) {
      errors.book = "Cannot be blank";
    } 

    if ((step === 3 && formData.colors === "") || (step === 3 && formData.colors.length === 0)) {
      errors.colors = "Cannot be blank";
    } 

    return errors;
  };

  const renderButtonNext = () => {
    if((step === 2 && surveyData.age === '') || (step === 2 && surveyData.gender === '') ||
      (step === 3 && surveyData.book === '') || (step === 3 && surveyData.colors.length === 0)) {
      return (
        <ButtonContainer>
          <ButtonAnt htmlType="submit">NEXT</ButtonAnt>
        </ButtonContainer>
      )
    } else {
      return (
        <ButtonAnt
          onClick={() => handleIncrementStep()}>
          NEXT
        </ButtonAnt>)
    }
  }

    return (
        <Container step={step}>
          <FormAnt onFinish={handleSubmit}>
            {step === 1 ? (
              <Details 
                surveyData={surveyData}
                handleChange={handleChange}
              />
            ) : null}
            {step === 2 ? (
              <Identity 
                formErrors={formErrors}
                surveyData={surveyData}
                handleChangeSelect={handleChangeSelect}
                handleChangeRadio={handleChangeRadio}
              />
            ) : null}
            {step === 3 ? (
              <Favorites
                formErrors={formErrors}
                surveyData={surveyData}
                handleChange={handleChange}
                handleChangeMultiSelect={handleChangeMultiSelect}
              />
            ) : null}
            {step === 4 ? (
              <Summary
               surveyData={surveyData} 
               setSurveyData={setSurveyData} 
               setShowModal={setShowModal}
               />
            ) : null}
            {step !== 4 ? (
              <ButtonContainer>
                <ButtonAnt
                  onClick={() => handleDecrementStep()}
                  style={ step === 1 ? { display: 'none'} : {}}
                >
                  BACK
                </ButtonAnt>
                  {renderButtonNext()}
              </ButtonContainer>
          ) : null}
          </FormAnt>
      </Container>
    )
}
