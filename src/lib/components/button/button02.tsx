import { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label?: string;
  color?: 'inverse' | 'neutral' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';
  volume?: 'default' | 'inverse';
  inverse?: boolean;
  appearance: 'filled' | 'outlined' | 'tonal' | 'linked';
  size?: 'lg' | 'md' | 'sm';
  disabled?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  onClick?: MouseEventHandler;
}

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid transparent;
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
    padding: 10px 16px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 20px;
    min-width: 120px;
    `}

  ${(props) =>
    props.size === 'md' &&
    `
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 16px;
        min-width: 96px;
        `}
  ${(props) =>
    props.size === 'sm' &&
    `
        border-radius: 8px;
        padding: 6px 8px;
        font-size: 10px;
        line-height: 12px;
        font-weight: 12px;
        min-width: 72px;
        `}


	${(props) =>
    props.appearance === 'filled' &&
    props.color &&
    props.volume &&
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
    props.volume &&
    `
            background: transparent;
            color: ${props.theme.colors[props.color].default.primary};
            border-color: ${props.theme.colors[props.color].default.primary};

            &:hover {
            background: ${props.theme.colors[props.color].default.hover};
            }

            &:active {
            background: ${props.theme.colors[props.color].default.active};
            }
        `}

        ${(props) =>
    props.appearance === 'tonal' &&
    props.color &&
    props.volume &&
    `       
            background: ${props.theme.colors[props.color].default.primary};
            color: ${props.theme.colors[props.color].default.contrast};
            border-color: transparent;
        
            &:hover {
            background: ${props.theme.colors[props.color].default.hover};
            }

            &:active {
            background: ${props.theme.colors[props.color].default.active};
                  }
              `}

${(props) =>
    props.appearance === 'linked' &&
    props.color &&
    props.volume &&
    `
            background: transparent;
            color: ${props.theme.colors[props.color].default.primary};
            border-color: transparent;
               
            &:hover {
            background: ${props.theme.colors[props.color].default.contrast};
            }

            &:active {
            background: ${props.theme.colors[props.color].default.active};
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
  volume = 'default',
  inverse = false,
  size = 'md',
  label = 'Button',
  disabled,
  iconAfter,
  iconBefore,
  onClick,
}) => {
  return (
    <StyledButton
      appearance={appearance}
      size={size}
      volume={volume}
      inverse={inverse}
      disabled={disabled}
      color={color}
    >
      {iconBefore ? iconBefore : null}
      {label}
      {iconAfter ? iconAfter : null}
    </StyledButton>
  );
};
