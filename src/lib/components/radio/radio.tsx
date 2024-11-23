import styled from 'styled-components';
import React, { FC } from 'react';
import { InputProps } from '../text-input';

import { Label } from '../label';

export interface RadioProps extends InputProps {
  checked?: boolean;

  /**
   * Allow applying custom classes to component
   */
  className?: string;
}

const StyledRadio = styled.input<RadioProps>`
  appearance: none;
  position: relative;
  cursor: pointer;
  display: block;
  margin: 0px 8px 0px 0px;
  padding: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  outline: 2px solid ${(props) => props.theme.colors.lead.default.primary};
  transition: all 250ms ease;

  &:before {
    content: '';
    display: block;
    border-radius: 24px;
    position: absolute;
    height: 0px;
    width: 0px;
    background: ${(props) => props.theme.colors.lead.default.primary};
    opacity: 0;
    top: 8px;
    left: 8px;
    transition: all 250ms ease;
  }
  &:checked {
    background-color: ${(props) => props.theme.colors.lead.default.primary};
    outline: 10px solid ${(props) => props.theme.colors.lead.default.primary};
    outline-offset: -8px;
    background-color: ${(props) => props.theme.colors.lead.default.primary};
  }
  &:hover::before {
    width: 32px;
    height: 32px;
    background: ${(props) => props.theme.colors.lead.default.primary};
    opacity: 0.16;
    top: -8px;
    left: -8px;
  }
  &:active::before {
    width: 32px;
    height: 32px;
    background: ${(props) => props.theme.colors.lead.default.primary};
    opacity: 0.24;
    top: -8px;
    left: -8px;
  }
  &:after {
    content: '';
    background-color: ${(props) => props.theme.colors.fg.inverse.primary};
    border-radius: 50%;
    position: absolute;
    width: -8px;
    height: -8px;
  }
  &:checked::after {
    content: '';

    border-radius: 50%;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 3px;
    left: 3px;
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

export const Radio: FC<RadioProps> = (props, { fontWeight }) => {
  return (
    <Label
      htmlFor={props.id}
      input={props.input}
      danger={props.danger}
      disabled={props.disabled}
      fontWeight={fontWeight}
    >
      <StyledRadio
        checked={props.checked}
        disabled={props.disabled}
        danger={props.danger}
        success={props.success}
        name={props.name}
        type={'radio'}
        id={props.id}
        onChange={props.onChange}
        className={props.className}
      />
      <span className='input-label'>{props.label}</span>
    </Label>
  );
};
