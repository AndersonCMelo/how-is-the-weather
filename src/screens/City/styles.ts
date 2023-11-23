import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native';

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

interface FontProps {
  fontTheme: 'light' | 'dark'
}

interface BackgroundProps {
  backgroundTheme: number
}

export const Container = styled(SafeAreaView)<BackgroundProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BG_800};
  padding: ${height*0.03}px ${width*0.1}px 0;

  ${props => props.backgroundTheme === 800 && css`
    background-color: ${({ theme }) => theme.COLORS.BG_800};
  `}

  ${props =>
    props.backgroundTheme.toString()[0] === '8' &&
    props.backgroundTheme.toString()[2] !== '0' && css`
      background-color: ${({ theme }) => theme.COLORS.BG_80X};
  `}

  ${props => props.backgroundTheme.toString()[0] === '2' && css`
    background-color: ${({ theme }) => theme.COLORS.BG_2XX};
  `}

  ${props => props.backgroundTheme.toString()[0] === '3' && css`
    background-color: ${({ theme }) => theme.COLORS.BG_3XX};
  `}

  ${props => props.backgroundTheme.toString()[0] === '5' && css`
    background-color: ${({ theme }) => theme.COLORS.BG_5XX};
  `}

  ${props => props.backgroundTheme.toString()[0] === '6' && css`
    background-color: ${({ theme }) => theme.COLORS.BG_6XX};
  `}

  ${props => props.backgroundTheme.toString()[0] === '7' && css`
    background-color: ${({ theme }) => theme.COLORS.BG_7XX};
  `}
`

export const CityName = styled.Text<FontProps>`
  color: ${({ theme }) => theme.COLORS.DARK_FONTS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 600;
  margin-bottom: 5px;

  ${props => props.fontTheme === 'light' && css`
    color: ${({ theme }) => theme.COLORS.LIGHT_FONTS};
  `}
`

export const Title = styled.Text<FontProps>`
  color: ${({ theme }) => theme.COLORS.DARK_FONTS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 5px;

  ${props => props.fontTheme === 'light' && css`
    color: ${({ theme }) => theme.COLORS.LIGHT_FONTS};
  `}
`

export const Degree = styled.Text<FontProps>`
  color: ${({ theme }) => theme.COLORS.DARK_FONTS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 600;
  margin-bottom: -10px;

  ${props => props.fontTheme === 'light' && css`
    color: ${({ theme }) => theme.COLORS.LIGHT_FONTS};
  `}
`

export const Description = styled.Text<FontProps>`
  color: ${({ theme }) => theme.COLORS.DARK_FONTS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: 400;

  ${props => props.fontTheme === 'light' && css`
    color: ${({ theme }) => theme.COLORS.LIGHT_FONTS};
  `}
`

export const DegreeSection = styled.View`
  position: absolute;
  left: ${width/10}px;
  bottom: ${height/10}px;
`

export const Button = styled.TouchableOpacity<FontProps>`
  align-self: baseline;
  margin-bottom: 30px;

  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_FONTS};
  flex-direction: row;
  padding: 6px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    color: red;
  }

  ${props => props.fontTheme === 'light' && css`
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_FONTS};
  `}
`

export const ButtonText = styled.Text<FontProps>`
  color: ${({ theme }) => theme.COLORS.DARK_FONTS};
  font-family: 'Montserrat_600SemiBold';
  font-size: 16px;
  font-weight: bold;
  margin-left: 6px;

  ${props => props.fontTheme === 'light' && css`
    color: ${({ theme }) => theme.COLORS.LIGHT_FONTS};
  `}
`

export const Image = styled.Image`
  /* border: 1px solid #333; */
  width: ${width}px;
  margin-left: -${width*0.1}px;
  margin-top: 20px;
`