import React from 'react';
import { Children, MouseEventHandler, ReactNode } from 'react';
// import { Icon } from '../icon';
import { Text, Link } from './lib';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { EducationLogo } from './lib/components/for-education/education-logo';
// import { HeroLink } from './HeroLink';
import video from './video.mp4';

interface HeroProps {
  /** Имя logo */
  logo?: ReactNode;
}

const StyledHero = styled.span<HeroProps>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 640px;
  background-color: aliceblue;
  gap: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  z-index: 0;
`;

export const Hero: React.FC<HeroProps> = ({ logo = 'name' }) => {
  return (
    <StyledHero>
      {/* <video src="video.mp4" type="video/mp4" autoPlay muted loop></video> */}

      <video autoPlay muted loop>
        <source src={video} type='video/mp4' />
      </video>
    </StyledHero>
  );
};
