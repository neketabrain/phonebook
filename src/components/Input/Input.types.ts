import { InputHTMLAttributes } from 'react';

import { ClassName } from 'src/types';

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  ClassName & {
    label: string;
    error?: string | boolean;
  };
