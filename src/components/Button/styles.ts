import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BG_7XX};
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 6px;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.LIGHT_FONTS};
  font-family: 'Montserrat_600SemiBold';
  font-size: 16px;
  font-weight: bold;
`