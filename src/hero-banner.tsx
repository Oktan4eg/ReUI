import { ReactNode } from 'react';
import { Text } from './lib';

interface HeroHeadersProps {
  /** Отображаемый контент */
  children?: ReactNode;
}

export const HeroBanner: React.FC<HeroHeadersProps> = ({ children }): JSX.Element => {
  return (
    <div style={{ display: 'grid', gap: '96px' }}>
      <Text as={'h1'} size={'display'} scale={'xl'} weight={'black'} align={'justify'} font={'display'}>
        {children}
      </Text>
    </div>
  );
};
