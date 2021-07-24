import { Radio as RadioInput } from 'antd';
import { Container } from './styles';

export const Radio = ({ ...rest }) => {
  return (
    <Container>
        <RadioInput.Group {...rest}>
        <RadioInput.Button value="Female">Female</RadioInput.Button>
        <RadioInput.Button value="Male">Male</RadioInput.Button>
        <RadioInput.Button value="Non-binary">Non-binary</RadioInput.Button>
        <RadioInput.Button value="Transgender">Transgender</RadioInput.Button>
        <RadioInput.Button value="Intersex">Intersex</RadioInput.Button>
        <RadioInput.Button value="I prefer not to say">I prefer not to say</RadioInput.Button>
        </RadioInput.Group>
    </Container>
  );
};
