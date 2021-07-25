import React, { useRef, useCallback, SetStateAction, Dispatch} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Background, 
  ModalContent, 
  ModalWrapper, 
  ModalHeader,
  ModalImgOne, 
  ModalImgTwo,
  StepTitle
} from './styles';
import { FaChevronCircleLeft, FaRegTimesCircle } from 'react-icons/fa';
import { Form } from './components/Form';
import { useSpring, animated } from 'react-spring';
import { IState } from '../../store/index';
import { decrementStep } from '../../store/modules/formSteps/actions';

import modalImg from '../../assets/modal.jpg';
import yieldstreetImg from '../../assets/yieldstreet.png';

interface props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const SurveyForm = ({ showModal, setShowModal }: props) => {
  const dispatch = useDispatch();
  const step = useSelector<IState, number>(state => state.formSteps.step);

  const modalRef = useRef<HTMLDivElement>(null);

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const handleDecrementStep = useCallback(() => {
    dispatch(decrementStep());
  }, []);

  const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const renderStepTitle = () => {
    if(step === 1) {
      return 'Identity';
    } else if(step === 2) {
      return 'Details';
    } else {
      return 'Favorites';
    }
  }

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper step={step}>
              <ModalHeader step={step}>
                <FaChevronCircleLeft 
                  className="headerButtons" 
                  onClick={() => handleDecrementStep()} 
                  />
                <FaRegTimesCircle
                    className="headerButtons" 
                    onClick={() => setShowModal((prev: boolean) => !prev)}
                />
              </ModalHeader>
              {step !== 4 ? (
                <ModalImgOne src={modalImg} alt='YieldStreet logo' />
              ) : (
                <>
                  <StepTitle>
                    Summary
                  </StepTitle>
                  <ModalImgTwo src={yieldstreetImg} alt='YieldStreet logo' />
                </>
              )}
                <ModalContent step={step}>
                  {step !== 4 ? (
                    <StepTitle>
                      {renderStepTitle()}
                    </StepTitle>
                  ) : null}
                    <Form setShowModal={setShowModal} />
                </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};