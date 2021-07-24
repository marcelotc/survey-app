import React, { ButtonHTMLAttributes } from 'react';
import { Container, IconLeft } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: string;
}

export const Button = ({ iconLeft, children, ...rest }: Props) => {
  const renderIconLeft = () => {
    if (iconLeft) {
      return <IconLeft src={iconLeft} alt="Left Icon" />;
    }
  };

  return (
    <Container {...rest}>
      {renderIconLeft()}
      {children}
    </Container>
  );
};
