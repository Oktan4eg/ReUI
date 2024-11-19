import { ButtonWithStateLayer } from './ButtonWithStateLayer';

export default {
  title: 'Компоненты/buttonWithStateLayer',
  component: ButtonWithStateLayer,
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
    color: 'lead',
    size: 'md',
  },
};
