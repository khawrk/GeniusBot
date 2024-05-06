import { createContext } from 'react'

type UserContextType = {
    name: string,
    setName: (name: string) => void,
    email: string,
    setEmail: (email: string) => void,
    zipcode: string,
    setZipcode: (zipcode: string) => void,
    phone: string,
    setPhone: (phone: string) => void,
    submitForm: boolean,
    setSubmitForm: (submitForm: boolean) => void,
    location: object,
    setLocation: (location: object) => void
}

const UserContext = createContext<UserContextType>({
    name: '',
    setName: () => { },
    email: '',
    setEmail: () => { },
    zipcode: '',
    setZipcode: () => { },
    phone: '',
    setPhone: () => { },
    submitForm: false,
    setSubmitForm: () => { },
    location: {},
    setLocation: () => { }
})

export default UserContext