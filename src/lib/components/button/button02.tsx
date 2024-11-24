import { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  /** Текст кнопки */
  label?: string;

  /** Цвет кнопки */
  color?: 'inverse' | 'neutral' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';

  /** Вариант отображения кнопки */
  appearance: 'filled' | 'outlined' | 'tonal' | 'linked';

  /** Размер кнопки */
  size?: 'lg' | 'md' | 'sm';

  /** Анимация уменьшения при нажатии */
  scaleble?: boolean;

  /** Не активное состояние кнопки */
  disabled?: boolean;

  /** Иконка слева (перед текстом) */
  iconBefore?: React.ReactNode;

  /** Иконка справа (после текста) */
  iconAfter?: React.ReactNode;

  /** Функция при нажатии на кнопку */
  onClick?: MouseEventHandler;
}
const borderWidth = 1.5;
const StyledButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.typography.fontFamily.text};
  border: ${borderWidth}px solid transparent;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  padding: unset;
  background: unset;
  font-size: unset;
  gap: 8;
  transition: all 250ms ease;
  &:focus-visible {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.colors.bg.default.page},
      0px 0px 0px 4px ${(props) => props.theme.colors.lead.default.primary};
  }
  ${(props) =>
    props.size === 'lg' &&
    `
    border-radius: 12px;
    padding: ${10 - borderWidth}px ${16 - borderWidth}px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 20px;
    min-width: 120px;
    `}

  ${(props) =>
    props.size === 'md' &&
    `
        border-radius: 10px;
        padding: ${8 - borderWidth}px ${12 - borderWidth}px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 16px;
        min-width: 96px;
        `}
  ${(props) =>
    props.size === 'sm' &&
    `
        border-radius: 8px;
        padding: ${6 - borderWidth}px ${8 - borderWidth}px;
        font-size: 10px;
        line-height: 12px;
        font-weight: 12px;
        min-width: 72px;
        `}


	${(props) =>
    props.scaleble &&
    !props.disabled &&
    `       
            &:active {
                  scale: 0.98;
      
            }
        `}

	${(props) =>
    props.appearance === 'filled' &&
    props.color &&
    `       &:enabled {
            background: ${props.theme.colors[props.color].default.primary};
            color: ${props.theme.colors[props.color].default.contrast};
            border-color: transparent;
            } 

            &:hover {
            background: ${props.theme.colors[props.color].default.hover};
            }

            &:active {
            background: ${props.theme.colors[props.color].default.active};
      
            }
        `}
   
	

        ${(props) =>
    props.appearance === 'outlined' &&
    props.color &&
    `
            background: transparent;
            color: ${props.theme.colors[props.color].default.primary};
            border-color: ${props.theme.colors[props.color].default.primary};

            &:hover {
            background: ${props.theme.colors[props.color].ghosty.hover};
            }

            &:active {
            background: ${props.theme.colors[props.color].ghosty.active};
   
            }
        `}

        ${(props) =>
    props.appearance === 'tonal' &&
    props.color &&
    `       
            background: ${props.theme.colors[props.color].ghosty.secondary};
            color: ${props.theme.colors[props.color].ghosty.contrast};
            border-color: transparent;
        
            &:hover {
            background: ${props.theme.colors[props.color].ghosty.hover};
            }

            &:active {
            background: ${props.theme.colors[props.color].ghosty.active};
           
                  }
              `}

${(props) =>
    props.appearance === 'linked' &&
    props.color &&
    `
            background: transparent;
            color: ${props.theme.colors[props.color].default.primary};
            border-color: transparent;
               
            &:hover {
            background: ${props.theme.colors[props.color].ghosty.hover};
            }

            &:active {
            background: ${props.theme.colors[props.color].ghosty.active};
            
            }
    `}
       
    ${(props) =>
    props.disabled &&
    `
            cursor: default;
            &:disabled, &:active, &:hover {
            color: #ffffff;
            background: #bababa;
            border-color: #bababa;
            }
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  appearance,
  color = 'lead',
  scaleble = true,
  size = 'md',
  label = 'Button',
  disabled,
  iconAfter,
  iconBefore,
  onClick,
}) => {
  return (
    <StyledButton appearance={appearance} size={size} disabled={disabled} color={color} scaleble={scaleble}>
      {iconBefore ? iconBefore : null}
      {label}
      {iconAfter ? iconAfter : null}
    </StyledButton>
  );
};
