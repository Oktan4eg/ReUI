import styled from 'styled-components';
import { useState } from 'react';

const StyledComponent = styled.div`
  position: relative;
  &:before {
    content: var(--before-content);
    position: absolute;
    background: red;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ComponentWithState = () => {
  const [beforeContent, setBeforeContent] = useState('Before content');
  const handleClick = () => {
    setBeforeContent('New before content');
  };
  return (
    <>
      <button onClick={handleClick}>Change before content</button>
      <StyledComponent
        style={{ '--before-content': `"${beforeContent}"` }}
      ></StyledComponent>
    </>
  );
};
