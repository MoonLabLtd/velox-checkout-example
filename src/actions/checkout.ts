import { useQuery } from '@tanstack/react-query';
// import type { InferRequestType, InferResponseType } from 'hono/client';
// import { api } from '@/lib/api';
import { APIError } from '@/lib/error';
import type { CheckoutType } from '@/lib/utils';

const POLLING_INTERVAL = 5000; // 5 seconds
// const getCheckoutInfo = api.merchant.checkout[':externalId'].$get;
// type GetCheckoutInfoRequest = InferRequestType<typeof getCheckoutInfo>;
// export type GetCheckoutInfoResponse = InferResponseType<
// 	typeof getCheckoutInfo,
// 	200
// >;

export const useCheckoutInfoQuery = (externalId: string) => {
	return useQuery({
		queryKey: ['checkout-info', externalId],
		queryFn: async () => {
			if (!externalId) {
				throw new Error('External ID is required to fetch checkout info');
			}
            console.log('external ID', externalId)
            const serverUrl = import.meta.env.VITE_PUBLIC_SERVER_URL;
			const response = await fetch(`${serverUrl}/${externalId}`, {
				method: 'GET',
                headers: {
                    // Authorization: `Bearer ${}`,
                    'Content-Type': 'application/json'
                }
			});
			if (!response.ok) {
				const msg = await response.text().catch(() => 'Unknown error');
				throw new APIError(response.status, msg);
			}
			return await response.json() as CheckoutType;
		},
		enabled: !!externalId, // only run if externalId is provided
		refetchInterval: (q) => {
			if (q.state.error) return false; // stop refetching on error
			if (
				q.state.data?.payments?.subPayments.every((p) => p.status === 'done')
			) {
				return false; // stop refetching if all sub-payments are done
			}
			return POLLING_INTERVAL; // continue refetching every 5 seconds
		},
		retry: (failureCount, error) => {
			if (error instanceof APIError && error.status === 404) {
				return false; // do not retry on 404 errors
			}
			return failureCount < 3; // retry up to 3 times for other errors
		},
	});
};
