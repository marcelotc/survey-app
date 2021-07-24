import { useState } from "react"
import { Container } from './styles';
import { SurveyForm } from '../pages/SurveyForm';
import { GlobalStyle } from '../styles/globalStyles';

function App() {
  const storagedSurveyData = localStorage.getItem('@Yieldstreet:surveyData');
  const [showModal, setShowModal] = useState(false);
  
  if (storagedSurveyData) {
    const { submited } = JSON.parse(storagedSurveyData);
    if(!submited) {
      setTimeout(function(){ setShowModal(true) }, 2000);
    } 
  } else {
    setTimeout(function(){ setShowModal(true) }, 2000);
  } 
  return (
      <Container>
        <SurveyForm showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
  )
}

export default App;
