import { Container } from './styles';
import { Select as SelecteAntd, Tag  } from 'antd';

export const MultiSelect = ({ ...rest }) => {
  const options = [
    { value: 'gold' }, 
    { value: 'lime' }, 
    { value: 'green' }, 
    { value: 'cyan' },
    { value: 'blue' }, 
    { value: 'yellow' }, 
    { value: 'black' },
    { value: 'pink' },
    { value: 'orange' },
    { value: 'salmon' },
    { value: 'lavender' },
    { value: 'magenta' },
  ];

  function tagRender(props: any) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }
  
  return (
    <Container>
        <SelecteAntd
          mode="multiple"
          showArrow
          tagRender={tagRender}
          options={options}
          {...rest}
        >
        </SelecteAntd>
    </Container>
  );
};
