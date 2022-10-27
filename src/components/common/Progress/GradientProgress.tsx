import { FC } from 'react';
import cn from 'classnames';
import { LinearProgress } from './LinearProgress';
import { GradientProgressProps, GradientProgressSize } from './types';

import './styles.scss';

export const GradientProgress: FC<GradientProgressProps> = ({ progress, size = GradientProgressSize.Default }) => {
  return (
    <div
      className={cn('progress_bodrder', {
        'progress_bodrder--big': size === GradientProgressSize.Large
      })}
    >
      <LinearProgress
        className={cn('liner-progress', {
          'liner-progress--big': size === GradientProgressSize.Large
        })}
        variant="determinate"
        value={progress}
      />
    </div>
  );
};
