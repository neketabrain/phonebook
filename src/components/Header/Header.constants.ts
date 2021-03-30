import { MenuItem } from 'src/components/NavMenu/NavMenu.types';
import { PATHS } from 'src/constants';

export const MENU_ITEMS: MenuItem[] = [
  {
    path: PATHS.contacts,
    label: 'Контакты',
  },
  {
    path: PATHS.createContact,
    label: 'Создать контакт',
  },
];
