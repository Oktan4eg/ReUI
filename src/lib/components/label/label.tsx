import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type FontWeight = 'regular' | 'semiBold';

export interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  input?: boolean;
  danger?: boolean;
  success?: boolean;
  disabled?: boolean;
  fontWeight?: FontWeight;
  inverse?: boolean;

  /**
   * Allow to apply custom classes to component
   */
  className?: string;
}

const StyledLabel = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  width: 100%;

  span.input-label {
    color: ${(props) => props.theme.colors.fg.default.primary};
    font-family: ${(props) => props.theme.font.family.body};
  }

  span {
    display: block;

    margin: 0;
  }

  ${(props) =>
    props.input &&
    `      
            flex-direction: column;
            align-items: flex-start;
            span.input-alert {

                }
            span.input-label {

                margin-left: 0;
            }
 
            
    `};

  ${(props) =>
    props.danger &&
    `      
            span.input-alert {

            }
               
    `};

  ${(props) =>
    props.success &&
    `      
            span.input-alert {

            }
               
    `};

  ${(props) =>
    props.disabled &&
    `      
            span.input-label {
     
            }
            
    `};

  ${(props) =>
    props.fontWeight === 'regular' &&
    `      
            span.input-label {
     
            color: red;
            }
       
    `};
  ${(props) =>
    props.inverse &&
    `
      
    span.input-label {
      color: ${props.theme.colors.fg.inverse.primary}; 
    }
    `}
`;

export const Label: FC<LabelProps> = (props, { fontWeight }) => {
  return (
    <StyledLabel
      htmlFor={props.htmlFor}
      className={props.className}
      input={props.input}
      danger={props.danger}
      success={props.success}
      disabled={props.disabled}
      fontWeight={fontWeight}
      inverse={props.inverse}
    >
      {props.children}
    </StyledLabel>
  );
};
