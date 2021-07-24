import { Container, InputField } from './styles';

interface Props {
  value?: string;
  type?: string;
  name?: string;
  id?: string;
  onChange?: any;
  placeholder?: string;
}

export const Input = ({ id, value, name, placeholder, onChange, ...rest}: Props) => {
  return (
    <Container>
      <InputField name={name} value={value} placeholder={placeholder} onChange={onChange} {...rest} />
    </Container>
  );
};
