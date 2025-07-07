import { z } from 'zod/v4-mini';

const requiredString = z.string().check(z.minLength(1), z.trim());

export const step1Schema = z.object({
    name: requiredString,
    email: z.email()
})

export type Step1Schema = z.infer<typeof step1Schema>;