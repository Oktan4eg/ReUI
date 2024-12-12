import styled from 'styled-components';
import { FC } from 'react';
// import {  useState } from 'react';

import { InputProps } from '../text-input';
import { Label } from '../label';
// import { Icon } from '../icon';

export interface CheckboxProps extends InputProps {
  /** 🔴 — Доделать. В целом, логика всех чекбоксов-тогглов итд не проработана, только стилизация*/
  checked?: boolean;

  /** 🔴 — Доделать. */
  identerminate?: boolean;

  /** Дополнительный кастомный класс */
  className?: string;

  /** Цвет чекбокса */
  color?: 'neutral' | 'inverse' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';
}

const StyledCheckbox = styled.input<CheckboxProps>`
  appearance: none;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  margin: 0px 8px 0px 0px;
  padding: 0px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  transition: all 250ms ease;
  background-color: transparent;

  ${(props) =>
    props.checked &&
    `
    border: 2px solid ${props.theme.colors.distuctive.default.primary};
        background-color: ${props.theme.colors.distuctive.default.primary};
    `}

  ${(props) =>
    props.color &&
    `
      border: 2px solid ${props.theme.colors[props.color].default.primary};

      &:before {
        content: '';
        border-radius: 24px;
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        top: 6px;
        left: 6px;
        transition: all 250ms ease;
      }

      &:checked {
        border: 2px solid ${props.theme.colors[props.color].default.primary};
        background-color: ${props.theme.colors[props.color].default.primary};
      }

      &:hover::before {
        content: '';
        border-radius: 24px;
        position: absolute;
        width: 32px;
        height: 32px;
        background-color: ${props.theme.colors[props.color].default.primary};
        opacity: 0.16;
        inset: -8px;
      }

      &:active::before {
        content: '';
        opacity: 0.24;
      }
    `}
  &:checked::after {
    content: '';
    /* -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='white'  stroke-linejoin='round' stroke-width='1.5' d='M13.6685 4.20777C13.3914 3.93074 12.9423 3.93074 12.6653 4.20777L6.46687 10.4062L4.26746 8.20676C3.98722 7.92652 3.53628 7.91579 3.24303 8.18238C2.92936 8.46754 2.91771 8.957 3.21746 9.25676L6.11103 12.1503C6.30718 12.3465 6.62552 12.3454 6.82041 12.148L13.6717 5.20775C13.9457 4.93021 13.9443 4.48355 13.6685 4.20777Z'/%3e%3c/svg%3e"); */
    mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='white'  stroke-linejoin='round' stroke-width='1.5' d='M13.6685 4.20777C13.3914 3.93074 12.9423 3.93074 12.6653 4.20777L6.46687 10.4062L4.26746 8.20676C3.98722 7.92652 3.53628 7.91579 3.24303 8.18238C2.92936 8.46754 2.91771 8.957 3.21746 9.25676L6.11103 12.1503C6.30718 12.3465 6.62552 12.3454 6.82041 12.148L13.6717 5.20775C13.9457 4.93021 13.9443 4.48355 13.6685 4.20777Z'/%3e%3c/svg%3e");
    background-color: ${(props) => props.theme.colors.fg.inverse.primary};
    position: absolute;
    width: 20px;
    height: 20px;
    inset: -2px;
  }
  ${(props) =>
    props.color === 'inverse' &&
    `
  &:checked::after {
    background-color: ${props.theme.colors.fg.default.primary};
  }
  `}

  ${(props) =>
    props.disabled &&
    `
    border-color: ${props.theme.colors.bg.inverse.disabled};
    cursor: default;
    &:disabled, &:active, &:hover {
      border-color: ${props.theme.colors.fg.default.disabled};
    }
    &:hover::before {
      background-color: ${props.theme.colors.bg.default.disabled};
    }
    
    &:checked {
      background-color: ${props.theme.colors.bg.inverse.disabled};    
      border-color: ${props.theme.colors.fg.inverse.disabled};
    }
    &:checked::after {
      background-color: ${props.theme.colors.fg.default.disabled};
  }
  `}
  ${(props) =>
    props.disabled &&
    props.color === 'inverse' &&
    `
    border-color: ${props.theme.colors.bg.default.disabled};
    cursor: default;
    &:disabled, &:active, &:hover {
      border-color: ${props.theme.colors.fg.inverse.disabled};
    }
    &:hover::before {
      background-color: ${props.theme.colors.bg.default.disabled};
    }
    
    &:checked {
      background-color: ${props.theme.colors.bg.default.disabled};    
      border-color: ${props.theme.colors.fg.inverse.disabled};
    }
    &:checked::after {
      background-color: ${props.theme.colors.fg.inverse.disabled};
  }
  `}
`;

export const Checkbox: FC<CheckboxProps> = ({ color = 'lead', ...props }) => {
  // Попытка управлять состоянием чекбокса через хук, вроде как иначе не сделать состояние identerminate
  // const [checked, setChecked] = useState(true);
  return (
    <Label
      htmlFor={props.id}
      input={props.input}
      danger={props.danger}
      disabled={props.disabled}
      inverse={color === 'inverse' ? true : false}
    >
      <StyledCheckbox
        color={color}
        className={props.className}
        checked={props.checked}
        identerminate={props.identerminate}
        disabled={props.disabled}
        danger={props.danger}
        success={props.success}
        name={props.name}
        type={'checkbox'}
        onChange={props.onChange}
        // onChange={() => setChecked(!checked)}
      />

      <span className='input-label'>
        {props.label}
        {/* Попытка вынести иконку отдельно от стилей */}
        {/* {checked ? ' выкл' : ' вкл'} */}
        {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)' }}>
          <svg aria-hidden='true' viewBox='0 0 15 11' fill='none'>
            <path d='M6 10l3 3l6-6' strokeWidth='2' stroke={checked ? '#73bd55' : '#882222'} />
          </svg>
        </div> */}
      </span>
    </Label>
  );
};
