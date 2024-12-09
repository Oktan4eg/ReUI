import styled from 'styled-components';
import { FC } from 'react';

import { InputProps } from '../text-input';
import { Label } from '../label';
import { Icon } from '../icon';

export interface CheckboxProps extends InputProps {
  /**
   * if `true` change checkbox on check
   * */
  checked?: boolean;

  /**
   * Allow to add classes to component
   * */
  className?: string;
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
    /* background-color: red; */
    /* content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6685 4.20777C13.3914 3.93074 12.9423 3.93074 12.6653 4.20777L6.46687 10.4062L4.26746 8.20676C3.98722 7.92652 3.53628 7.91579 3.24303 8.18238C2.92936 8.46754 2.91771 8.957 3.21746 9.25676L6.11103 12.1503C6.30718 12.3465 6.62552 12.3454 6.82041 12.148L13.6717 5.20775C13.9457 4.93021 13.9443 4.48355 13.6685 4.20777Z' fill='currentColor'/%3E%3C/svg%3E%0A"); */
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='inherit' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"); */
    /* background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6685 4.20777C13.3914 3.93074 12.9423 3.93074 12.6653 4.20777L6.46687 10.4062L4.26746 8.20676C3.98722 7.92652 3.53628 7.91579 3.24303 8.18238C2.92936 8.46754 2.91771 8.957 3.21746 9.25676L6.11103 12.1503C6.30718 12.3465 6.62552 12.3454 6.82041 12.148L13.6717 5.20775C13.9457 4.93021 13.9443 4.48355 13.6685 4.20777Z' fill='black'"); */
    color: #95ff00;
    /* content: url("data:image/svg+xml; utf8, <svg ... code here</svg>"); */
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='currentColor'  stroke-linejoin='round' stroke-width='1.5' d='M13.6685 4.20777C13.3914 3.93074 12.9423 3.93074 12.6653 4.20777L6.46687 10.4062L4.26746 8.20676C3.98722 7.92652 3.53628 7.91579 3.24303 8.18238C2.92936 8.46754 2.91771 8.957 3.21746 9.25676L6.11103 12.1503C6.30718 12.3465 6.62552 12.3454 6.82041 12.148L13.6717 5.20775C13.9457 4.93021 13.9443 4.48355 13.6685 4.20777Z'/%3e%3c/svg%3e"); */
    position: absolute;
    /* stroke: red; */
    /* stroke-opacity: 0.2; */
    fill: red;
    width: 20px;
    height: 20px;
    inset: -2px;
  }
  &:indeterminate::after {
    content: '';
    /* content: url("data:image/svg+xml; utf8, <svg ... code here</svg>"); */
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='currentColor'  stroke-linejoin='round' stroke-width='6' d='M13.6685 4.20777C13.3914 3.93074 12.9423 3.93074 12.6653 4.20777L6.46687 10.4062L4.26746 8.20676C3.98722 7.92652 3.53628 7.91579 3.24303 8.18238C2.92936 8.46754 2.91771 8.957 3.21746 9.25676L6.11103 12.1503C6.30718 12.3465 6.62552 12.3454 6.82041 12.148L13.6717 5.20775C13.9457 4.93021 13.9443 4.48355 13.6685 4.20777Z'/%3e%3c/svg%3e"); */
    position: absolute;

    fill: red;
    width: 20px;
    height: 20px;
    inset: -2px;
  }

  ${(props) =>
    props.disabled &&
    `
         border-color: #a5a5a5;
         cursor: not-allowed;
         &:hover {
            border-color: #8e8d8d;
            box-shadow: none;
    }
    
    &:checked {
        background-color: #858585;       
        border-color: #797979;
    }
    `}/* ${(props) =>
    props.danger &&
    `
         border-color: #ff7171;
         &:hover {
            border-color: #ff8484; 
         
    }
    
    &:checked::after {
        background-color: #ff6969;
    }
    `}
    
     ${(props) =>
    props.success &&
    `
         border-color: #9fff7c;
         &:hover {
            border-color: #7eff82; 
         
    }
    
    &:checked::after {
        background-color: #00ff37;
    }
    `} */
`;
// export const Toggle: FC<ToggleProps> = ({ color = 'lead', ...props }) => {
export const Checkbox: FC<CheckboxProps> = ({ color = 'lead', ...props }) => {
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
        disabled={props.disabled}
        danger={props.danger}
        success={props.success}
        name={props.name}
        type={'checkbox'}
        onChange={props.onChange}
      />
      {/* <Icon iconName='components' /> */}

      {/* <div className='input-label' style={{ color: color === 'inverse' ? 'white' : 'black' }}> */}
      <span className='input-label'>
        {props.label}
        <svg
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden='true'
          viewBox='0 0 15 11'
          fill='none'
          display='absolute'
        >
          <path
            d='M1 4.5L5 9L14 1'
            strokeWidth='2'
            stroke={props.checked ? '#73bd55' : '#882222'} // only show the checkmark when `isCheck` is `true`
          />
        </svg>
      </span>
    </Label>
  );
};
