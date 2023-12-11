import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.css';

export interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ContainerProps>(function Container(
  { children, className, ...props },
  ref,
) {
  return (
    <div {...props} ref={ref} className={clsx(styles.container, className)}>
      {children}
    </div>
  );
});
