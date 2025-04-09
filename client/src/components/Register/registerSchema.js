import { z } from 'zod';


const registerSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).max(50, { message: 'Email must be less than 50 characters.' }),
    firstName: z.string().min(1, {message: 'First name is required.'}).max(20, { message: 'First name must be less than 20 characters.' }),
    lastName: z.string().min(1, {message: 'Last name is required.'}).max(20, { message: 'Last name must be less than 20 characters.' }),
    phoneNumber: z.string().min(1, {message: 'Phone number is required.'}).max(20, { message: 'Phone number must be less than 20 characters.' }),
    password: z.string().min(4, { message: 'Password must be at least 4 characters long.' }),
    repeatPassword: z.string().min(4, { message: 'Please repeat your password.' }),
}).refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must match!',
    path: ['repeatPassword'],
})


export default registerSchema;