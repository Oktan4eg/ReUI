import { Text } from './text';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Text/Text',

  component: Text,
  parameters: {
    layout: 'fullscreen',
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  tags: ['autodocs'],
};

export const Base = {
  args: {
    children: 'Я текст',
    font: 'body',
    weight: 'regular',
    size: 'display',
    scale: 'xl',
    as: 'h1',
    onClick: action('on-click'),
  },
};
