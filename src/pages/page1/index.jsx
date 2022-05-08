import { useAtom } from 'jotai';
import { userInfo } from '@/store/store_user';

export default function Page1() {
  let [username] = useAtom(userInfo);

  return (
    <div className="sm:bg-red-500 sm:hover:bg-green-300 dark:bg-white">
      page1...<div>{username.username}</div>
    </div>
  );
}
