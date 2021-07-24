import { Container } from './styles';
import { Select as SelecteAntd, SelectProps } from 'antd';


export const Select = ({...rest }) => {
  const { Option } = SelecteAntd;

  return (
    <Container>
        <SelecteAntd
          bordered={false}
          {...rest}
        >
          <Option value="Youth">under 24</Option>
          <Option value="Adult">25 - 64</Option>
          <Option value="Senior">64+</Option>
        </SelecteAntd>
    </Container>
  );
};
