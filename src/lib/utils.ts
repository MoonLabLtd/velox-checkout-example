import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

const DEFAULT_DECIMALS = 6;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const safeBigInt = (
	value: string | number | undefined | null,
	fallback: bigint,
) => {
	if (!value) return fallback;
	try {
		return BigInt(value);
	} 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (_err) {
		// console.log('error parsing value to BigInt', value);
		return fallback;
	}
};

export const getSearchParam = <T extends string>(key: string) => {
	if (typeof window === 'undefined') return null;
	const searchParams = new URLSearchParams(window.location.search);
	const paramValue = searchParams.get(key);
	return paramValue as T | null;
};

export type CheckoutType = {
  id: number,
  userId: string,
  createdTime: string,
  amount: string,
  externalId: string,
  metadata: {
    orderId: string,
    customerNote: string
  },
  paymentId: string,
  payments: {
    id: string,
    createdTime: string,
    totalAmount: string,
    txnFee: string,
    networkFee: string,
    discount: string,
    subPayments: [
      {
        status: "created" | "pending" | 'failed' | 'canceled' | 'done' ,
        amount: string,
        chain: string,
        currency: string,
        withTxnFee: boolean,
        networkFee: string,
        discount: string
      },
    ]
  },
  link: string
};

export const formatBigint = (
	n: bigint | string,
	decimal: number = DEFAULT_DECIMALS,
) => {
	if (typeof n !== 'bigint') {
		n = safeBigInt(n, 0n);
	}
	const formatted = Number(n) / 10 ** decimal;
	const [integerPart, decimalPart = ''] = formatted.toString().split('.');
	if (decimalPart === '') return integerPart;
	const shortenDecimalPart = decimalPart.slice(0, 2);
	return `${integerPart}.${shortenDecimalPart}`;
};

export function dateFormat(date: Date) {
	return `${date.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})}${`, `}${date.toLocaleTimeString('en-GB', {
		hour12: false,
	})}`;
}