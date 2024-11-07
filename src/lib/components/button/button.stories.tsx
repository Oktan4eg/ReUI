import { Button } from './button';

export default {
  title: 'Компоненты/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
    tags: ['autodocs'],
  },

  tags: ['autodocs'],
};

export const Base = {
  args: {
    label: 'baseButton',
    appearance: 'filled',
    size: 'md',
  },
};
