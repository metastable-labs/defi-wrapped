import useSystemFunctions from '@/hooks/useSystemFunctions';
import { setInitializing, setWindowInnerHeight } from '.';
import { CallbackProps } from '..';

const useAppActions = () => {
  const { dispatch } = useSystemFunctions();

  const getWindowInnerHeight = async (callback?: CallbackProps) => {
    try {
      dispatch(setInitializing(true));

      const height = window.innerHeight;

      dispatch(setWindowInnerHeight(height));

      callback?.onSuccess?.(height);
    } catch (error: any) {
      console.error(error);
    } finally {
      dispatch(setInitializing(false));
    }
  };

  return {
    getWindowInnerHeight,
  };
};

export default useAppActions;
