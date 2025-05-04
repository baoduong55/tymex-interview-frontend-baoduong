import { ButtonHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import styles from './style.module.scss'
import clsx from "clsx";

interface Tprops extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white',
  isActive?: boolean,
}
export const Button = (props: Tprops) => {
  const { variant = 'primary', isActive = true, className, children, ...restProps } = props;
  return <div className={styles.customButton}>
    {
      variant === 'primary' && <button {...restProps} className={clsx(
        'primary',
        isActive ? 'active' : 'inactive',
        className,
      )}>
        {children}
      </button>
    }
    {
      variant === 'secondary' && <button {...restProps} className={clsx(
        'secondary',
        className,
      )}>{children}</button>
    }
  </div>
};


