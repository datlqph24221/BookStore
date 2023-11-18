export interface IUsersignin {
    email: string,
    password: string
}

export interface IUsersignup {
    firstname: string,
    lastname: string,
    phoneNumber: string
    email: string,
    password: string,
    confirmPassword: string,
    birthday: string,
    gender: string,
    image: string,
    address: string,
    role: string
}
export interface IUserdata {
    accessToken?: string
    message?: string
    user: {
        _id: number | string,
        email: string,
        password: string,
        phoneNumber: string,
        role: string
    }
}