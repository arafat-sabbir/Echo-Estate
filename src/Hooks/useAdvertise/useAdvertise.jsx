import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const useAdvertise = () => {
    const axiosSecure = useAxiosSecure()
    const {
        data: advertise,
        isLoading,
        isError,
        refetch
      } = useQuery({
        queryKey: ["advertise"],
        queryFn: async () => {
          const res = await axiosSecure.get("/getAdvertiseProperty");
          return res.data;
        },
      });
      return {advertise,isLoading,isError,refetch}
};

export default useAdvertise;