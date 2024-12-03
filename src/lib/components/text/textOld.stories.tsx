import { Children } from 'react';
import { TextOld } from './textOld';

export default {
  title: 'Components/Typoghraphy/TextOld',

  component: TextOld,
  parameters: {
    layout: 'centered',
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  tags: ['autodocs'],
};

export const Base = {
  args: {
    children: 'Я текст',
    as: 'p',
  },
};
