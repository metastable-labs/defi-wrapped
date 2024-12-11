import useSystemFunctions from '@/hooks/useSystemFunctions';
import api from './api';
import { setLoading, setMetrics } from '.';
import { CallbackProps } from '..';

const useMetricsActions = () => {
  const { dispatch } = useSystemFunctions();

  const getMetrics = async (address: string, callback?: CallbackProps) => {
    try {
      dispatch(setLoading(true));
      const response = await api.getMetrics(address);

      dispatch(setMetrics(response));

      callback?.onSuccess?.(response);
    } catch (error: any) {
      let detail = error?.response?.data?.detail;

      if (typeof detail !== 'string') {
        detail = error?.response?.data?.detail?.[0]?.msg;
      }
      callback?.onError?.(detail);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    getMetrics,
  };
};

export default useMetricsActions;
