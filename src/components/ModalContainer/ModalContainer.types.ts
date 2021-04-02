import { ClassName } from 'src/types';

export type ModalContainerProps = ClassName & {
  onClose: VoidFunction;
  rootElement?: string;
};
