import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BG_80X};
  align-items: center;
  justify-content: center;
  padding: 0 10%;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARK_FONTS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 600;
  margin-bottom: 5px;
`

export const Description = styled.Text`
  color: #1B1C1E;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: 400;
`

export const Form = styled.View`
  width: 100%;
  margin-top: 30px;
`

export const Input = styled.TextInput`
  height: 56px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  color: ${({ theme }) => theme.COLORS.DARK_FONTS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  padding: 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`
