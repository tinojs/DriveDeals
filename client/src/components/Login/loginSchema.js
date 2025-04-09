import { z } from 'zod';


const loginSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).max(50, { message: 'Email must be less than 50 characters.' }),
    password: z.string().min(4, { message: 'Please enter your password' }),
})

export default loginSchema;