import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps {
  label?: string
  onPress?: () => void
}

export function Button({ label, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </Container>
  )
}
