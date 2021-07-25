import { Container } from './styles';
import { Select as SelecteAntd } from 'antd';


export const Select = ({...rest }) => {
  const { Option } = SelecteAntd;

  return (
    <Container>
        <SelecteAntd
          bordered={false}
          {...rest}
        >
          <Option label="1" value="Youth">under 24</Option>
          <Option label="2" value="Adult">25 - 64</Option>
          <Option label="3" value="Senior">64+</Option>
        </SelecteAntd>
    </Container>
  );
};
