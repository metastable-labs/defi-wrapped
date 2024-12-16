import { axiosInstance } from '@/utils/axios';

type IMetrics = {
  getMetrics: (address: string) => Promise<Metrics>;
};

const metrics: IMetrics = {
  getMetrics: async (address: string): Promise<Metrics> => {
    const response = await axiosInstance.get(`base?address=${address}`);

    return response.data;
  },
};

export default metrics;
