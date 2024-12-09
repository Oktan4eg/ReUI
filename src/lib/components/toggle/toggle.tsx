import React, { FC } from 'react';
import styled from 'styled-components';
import { InputProps } from '../text-input';
import { Label } from '../label';

type ToggleColor = 'inverse' | 'neutral' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';

export interface ToggleProps extends InputProps {
  /** 🔴 — Доделать. */
  checked?: boolean;

  /** Цвет тоггла */
  color?: ToggleColor;

  /** Дополнительный кастомный класс */
  className?: string;
}

const StyledToggle = styled.input<ToggleProps>`
  flex-shrink: 0;
  margin: 0px 8px 0px 0px;

  /* width: 20px;
  height: 20px; */

  ${(props) =>
    props.color &&
    `
  width: 56px;
  height: 32px;
  position: relative;
  display: block;
  cursor: pointer;
  appearance: none;
  outline: 2px solid ${props.theme.colors[props.color].default.primary};
  transition: all 250ms ease-in;
  border-radius: 32px;

  &:before,
  &:after {
    position: absolute;
    display: block;
    content: '';
    border-radius: 32px;
    top: 0;
  }

  &:before {
    margin: 16px;
    opacity: 0;
    width: 0px;
    height: 0px;
    transition: all 250ms ease-in;
    outline: ${props.theme.colors[props.color].default.contrast};
  }

  &:after {
    margin: 6px;
    width: 20px;
    height: 20px;
    transform: translate(0px);
    background-color: ${props.theme.colors[props.color].default.primary}; // цвет хендла
    transition: all 250ms ease-out;
  }
  &:enabled {
    &:hover {
      /* background-color: ${props.theme.colors[props.color].default.contrast}; // фон трека */
      &:after {
        /* background-color: ${props.theme.colors[props.color].default.primary}; // ховер хендла */
      }
      &:before {
        margin: -8px;
        width: 48px;
        height: 48px;
        transition: all 250ms ease-out;
        opacity: 0.24;
        background-color: ${props.theme.colors[props.color].default.primary}; // ховер вокруг хендла
      }
    }
    &:active {
      &:after {
        margin: 2px;
        transition: all 150ms ease-out;
        width: 28px;
        height: 28px;
      }
    }
  }
  &:checked {
    outline: 2px solid ${props.theme.colors[props.color].default.primary};
    background-color: ${props.theme.colors[props.color].default.primary};

    &:after {
      transform: translate(32px);
      margin: 2px 0px 0px -6px;
      transition: all 250ms ease-out;
      width: 28px;
      height: 28px;
      background-color: ${props.theme.colors[props.color].default.contrast};
    }
    &:hover {
      transition: all 250ms ease-out;
      &:after {
        /* background-color: ${props.theme.colors[props.color].default.primary}; */
      }
      /* background-color: ${props.theme.colors[props.color].default.contrast}; // фон трека */
      &:before {
        margin: -8px 0px 0px 16px;
        width: 48px;
        height: 48px;
        transition: all 250ms ease-out;
        opacity: 0.24;
        background-color: ${props.theme.colors[props.color].default.tertiary}; // ховер вокруг хендла
      }
    }
    &:active {
      &:after {
        transform: translate(32px);
        margin: 0px 0px 0px -8px;
        transition: all 150ms ease-out;
        width: 32px;
        height: 32px;
      }
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px red;
  }
  
`}
`;

export const Toggle: FC<ToggleProps> = ({ color = 'lead', ...props }) => {
  return (
    <Label
      htmlFor={props.id}
      input={props.input}
      danger={props.danger}
      disabled={props.disabled}
      inverse={color === 'inverse' ? true : false}
    >
      <StyledToggle
        checked={props.checked}
        color={color}
        disabled={props.disabled}
        danger={props.danger}
        success={props.success}
        name={props.name}
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        className={props.className}
      />
      <span className='input-label'>{props.label}</span>
    </Label>
  );
};
