import { $host } from "./index.ts";

export const registration = async (email: any, password: any) => {
    const response = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    return response;
}

export const login = async (email: any, password: any) => {
    const response = await $host.post('api/user/login', {email, password})
    return response;
}

export const check = async () => {
    const response = await $host.post('api/user/registration',)
    return response;
}