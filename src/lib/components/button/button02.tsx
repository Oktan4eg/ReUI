import { Children, MouseEventHandler, ReactNode } from 'react';
import { Icon } from '../icon';
import { Text } from '../text';
import styled from 'styled-components';

type ButtonAppearance = 'filled' | 'outlined' | 'tonal' | 'linked';
type ButtonColor = 'inverse' | 'neutral' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';
type ButtonSize = 'lg' | 'md' | 'sm';
type ButtonIcons =
  | 'sun'
  | 'sunCloud'
  | 'sunCloudFill'
  | 'sunFill'
  | 'components'
  | 'componentsFill'
  | 'dark'
  | 'darkFill'
  | 'sunCloud'
  | 'check'
  | 'checkCircle'
  | 'checkCircleFill'
  | 'checkShield'
  | 'checkShieldFill'
  | 'cancel'
  | 'cancelCircle'
  | 'cancelCircleFill'
  | 'info'
  | 'infoCircle'
  | 'infoCircleFill'
  | 'answer'
  | 'answerCircle'
  | 'answerCircleFill';

interface ButtonProps {
  /** Текст кнопки */
  label?: string;

  /** Цвет кнопки */
  color?: ButtonColor;

  /** Вариант отображения кнопки */
  appearance: ButtonAppearance;

  /** Размер кнопки */
  size?: ButtonSize;

  /** Анимация уменьшения при нажатии */
  scaleble?: boolean;

  /** Не активное состояние кнопки */
  disabled?: boolean;

  /** Иконка слева (перед текстом) */
  iconStart?: ButtonIcons;

  /** Иконка справа (после текста) */
  iconEnd?: ButtonIcons;

  /** Если присутствиует, то кнопка заполняет собой все пространство, по умолчанию у кнопки min-width */
  filled?: boolean;

  /** Функция при нажатии на кнопку */
  onClick?: MouseEventHandler;

  /** 🔴 — Доделать. */
  children?: ReactNode;

  /** 🔴 — Доделать. <br/> Максимальное количество строк текста (работает в связке с overflow) */
  maxLines?: 1; // доделать возможность скрыития строки
  /** 🔴 — Доделать. <br/> Задает отображение переполненного текста */
  overflow?: 'fade' | 'ellipsis' | 'fade-horizontal';
}
const borderWidth = 1.5;
// const iconSize = 24;
const StyledButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.font.family.body};
  font-weight: ${(props) => props.theme.font.weight.medium};
  border: ${borderWidth}px solid transparent;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  transition: all 250ms ease;
  margin: auto;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */

  /* width: 100%; */
  // white-space: nowrap; /* Без переносов */
  //overflow: hidden; /* Скрываем лишнее */
  //text-overflow: ellipsis; /* Добавляем многоточие */
  //width: 100%; /* Растягиваем на всю доступную ширину */

  ${(props) =>
    props.filled &&
    `
    width: 100%;
    `}

  &:focus-visible {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.colors.bg.default.page},
      0px 0px 0px 4px ${(props) => props.theme.colors.lead.default.primary};
  }
  // font-size: clamp(props.theme.font.size.button.sm, props.theme.font.size.button.md, props.theme.font.size.button.lg );
  ${(props) =>
    props.size === 'lg' &&
    `
    font-size: ${props.theme.font.size.button.xl};
    line-height: ${props.theme.font.height.button.xl};
    border-radius: 20px;
    padding: ${16 - borderWidth}px ${24 - borderWidth}px;
    gap: 12px;
    min-width: 120px;

    `}

  ${(props) =>
    props.size === 'md' &&
    `
    font-size: ${props.theme.font.size.button.lg};
    line-height: ${props.theme.font.height.button.lg};
    border-radius: 16px;
    padding: ${12 - borderWidth}px ${16 - borderWidth}px;
    gap: 8px;
    min-width: 96px;

    `}
  ${(props) =>
    props.size === 'sm' &&
    `
      font-size: ${props.theme.font.size.button.md};
      line-height: ${props.theme.font.height.button.md};
      border-radius: 12px;
      padding: ${8 - borderWidth}px ${12 - borderWidth}px;
      gap: 6px;
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
  filled,
  label = 'Button',
  disabled,
  iconStart,
  iconEnd,
  onClick,
  // children,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      appearance={appearance}
      size={size}
      filled={filled}
      disabled={disabled}
      color={color}
      scaleble={scaleble}
    >
      {iconStart ? <Icon iconName={iconStart} size={size === 'lg' ? 24 : size === 'md' ? 20 : 16} /> : null}
      {label}
      {/* {children} */}
      {/* <Text font='body' weight='medium' size='button' scale={size}>
        {label}
      </Text> */}
      {iconEnd ? <Icon iconName={iconEnd} size={size === 'lg' ? 24 : size === 'md' ? 20 : 16} /> : null}
    </StyledButton>
  );
};
