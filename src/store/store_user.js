import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import MyApi from '@/api';
// import { atomWithStorage ,atomFamily} from 'jotai/utils'

const _username = atomWithStorage('G_userInfo', '');
const userInfo = atom(
  (get) => get(_username),
  async (get, set, _id) => {
    const res = await MyApi({
      method: 'post',
      url: '/login',
      data: {
        username: _id,
      },
    });
    await set(_username, res);
    return await res.username;
  },
);

export { userInfo };
