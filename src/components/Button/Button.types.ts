import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'primary' | 'secondary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};
