import { Button } from './button02';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Buttons/Button',

  component: Button,
  parameters: {
    layout: 'padded',
    // layout: 'centered',
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  tags: ['autodocs'],
};

export const Base = {
  args: {
    label: 'Я кнопка',
    color: 'neutral',
    appearance: 'filled',
    size: 'md',
    // onClick: action('on-click'),
    // onClick: fn(),
  },
};
