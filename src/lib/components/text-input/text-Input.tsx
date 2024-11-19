import styled from 'styled-components';
import React, { FC, ChangeEventHandler } from 'react';
import InputTypes from '../../types';

import { Label } from '../label';

export interface InputProps {
  disabled?: boolean;
  danger?: boolean;
  success?: boolean;
  loading?: boolean;
  placeholder?: string;
  name: string;
  type: InputTypes;
  value?: string;
  label?: string;
  alert?: string;
  defaultValue?: string;
  id?: string;
  input?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /**
   * Allow apply custom classes to component
   */
  className?: string;
}

const StyledInput = styled.input<InputProps>`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0;
  border-radius: 16;
  outline: 0;

  border: 1 solid red;

  color: red;
  background-color: red;
  padding: 7;

  &::placeholder {
  }

  &:hover {
  }
  &:focus {
  }

  ${(props) =>
    props.disabled &&
    `
        &::placeholder {
        color: red;
        }
         color: red;
         background-color: grey;
         border-color: grey;
         &:hover {    
            background-color: blue;
            border-color: blue;
            box-shadow: none;
    }
    `}

  ${(props) =>
    props.danger &&
    ` 
        border-color: ${props.theme.colors.fg.primary};
        &:focus {
        border-color: ${props.theme.colors.fg.primary};
        }
         &:hover {
            border-color: ${props.theme.colors.fg.primary};      
    }
    `}
    
    ${(props) =>
    props.success &&
    `       
         border-color: ${props.theme.colors.fg.primary};
         &:hover {
            border-color: ${props.theme.colors.fg.primary};       
    }
        &:focus {
        border-color: ${props.theme.colors.fg.primary};
        }
    `}
`;

export const TextInput: FC<InputProps> = (props) => {
  return (
    <Label
      htmlFor={props.id}
      input={props.input}
      danger={props.danger}
      success={props.success}
      disabled={props.disabled}
    >
      <span className='input-label'>{props.label}</span>
      <StyledInput
        className={props.className}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        disabled={props.disabled}
        danger={props.danger}
        success={props.success}
        placeholder={props.placeholder}
        value={props.value}
        defaultValue={props.defaultValue}
      />
      {props.alert && <span className='input-alert'>{props.alert}</span>}
    </Label>
  );
};
