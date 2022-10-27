export enum GradientProgressSize {
  Default = 'default',
  Large = 'large'
}

export type GradientProgressProps = {
  progress: number;
  size?: GradientProgressSize;
};
