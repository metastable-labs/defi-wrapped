/**
 *
 * @description - Groups commonly used system functions and data in a central location for
 *                easy access and update. Commonly used funtions should be included here
 *                so we don't have to import and create same funtions everywhere.
 */

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from './useRedux';

const useSystemFunctions = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const pathname = usePathname();

  // states
  const metricsState = useAppSelector((state) => state.metrics);

  return {
    navigate,
    pathname,
    dispatch,

    // states
    metricsState,
  };
};

export default useSystemFunctions;