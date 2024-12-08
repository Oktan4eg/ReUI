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
  border: 2px solid ${(props) => props.theme.colors.lead.default.primary};
  transition: all 250ms ease;

  &:before {
    content: '';
    /* display: block; */
    border-radius: 24px;
    position: absolute;
    width: 0px;
    height: 0px;
    background: ${(props) => props.theme.colors.lead.ghosty.primary};
    opacity: 0;
    top: 6px;
    left: 6px;
    transition: all 250ms ease;
  }
  &:checked {
    border-color: ${(props) => props.theme.colors.lead.default.primary};
    border: 2px solid ${(props) => props.theme.colors.lead.default.primary};
    /* outline-offset: -8px; */
    background-color: ${(props) => props.theme.colors.lead.default.primary};
  }
  &:hover::before {
    content: '';
    /* display: block; */
    border-radius: 24px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: ${(props) => props.theme.colors.lead.default.primary};
    opacity: 0.16;
    inset: -8px;
  }
  &:active::before {
    content: '';
    opacity: 0.24;
  }

  &:checked::after {
    content: '';

    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    position: absolute;
    width: 24px;
    height: 24px;
    inset: -4px;
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
    `}

  ${(props) =>
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
    `}
`;

export const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <Label htmlFor={props.id} input={props.input} danger={props.danger} disabled={props.disabled}>
      <StyledCheckbox
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

      <span className='input-label'>{props.label}</span>
    </Label>
  );
};
