import { Link } from './link';

export default {
  title: 'Components/Text/Link',

  component: Link,
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
    children: 'Я линка',
  },
};
