// https://www.youtube.com/watch?v=KvctnEZSvtM
import styled from 'styled-components';

interface IStateLayer {
  color?: 'neutral' | 'lead' | 'success' | 'distucrive' | 'info' | 'warning';

  disabled?: boolean;
}

const StyledStateLayer = styled.span<IStateLayer>`
  ${(props) =>
    props.color === 'lead' &&
    `
            background: #713FD5;
            color: #ffffff;
            border-color: #713FD5;

            &:hover {
            background: #8450EC;
            color: #ffffff;
            border-color: #8450EC;
            }

            &:active {
            background: #936CEF;
            color: #ffffff;
            border-color: #936CEF;
            }
        `} ${(props) =>
    props.color === 'lead' &&
    `
                  background: transparent;
                  color: #713FD5;
                  border-color: #713FD5;
      
                  &:hover {
                  background: transparent;
                  color: #ffffff;
                  border-color: #8450EC;
                  }
      
                  &:active {
                  background: #936CEF;
                  color: #ffffff;
                  border-color: #936CEF;
                  }
              `}
        ${(props) =>
    props.color === 'lead' &&
    `
                  background: #936CEF30;
                  color: #936CEF;
                  border-color: transparent;
      
                  &:hover {
                  background: #936CEF50;
                  color: #936CEF;
                  border-color: transparent;
                  }
      
                  &:active {
                  background: #936CEF80;
                  color: #936CEF;
                  border-color: transparent;
                  }
              `}

        ${(props) =>
    props.disabled &&
    `
            color: #ffffff;
            background: #bababa;
            border: #bababa;
            cursor: not-allowed;

            &:hover, &:active {
            color: #ffffff;
            background: #bababa;
            border: #bababa;

            `}
`;

export const StateLayer: React.FC<IStateLayer> = ({
  color = 'lead',

  disabled,
}) => {
  return (
    <StyledStateLayer disabled={disabled} color={color}></StyledStateLayer>
  );
};
