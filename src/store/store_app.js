import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const _darkMode = atomWithStorage('darkMode', 'light');

const darkMode = atom(
  (get) => get(_darkMode),
  async (get, set, _id) => {
    get(_darkMode) === 'light' ? set(_darkMode, 'dark') : set(_darkMode, 'light');
  },
);
export { darkMode };
