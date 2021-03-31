import { LinkProps } from 'react-router-dom';

import { ButtonVariants } from '../Button/Button.types';

export type LinkButtonProps = LinkProps & {
  variant?: ButtonVariants;
};
