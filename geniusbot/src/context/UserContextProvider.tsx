import { useState, ReactNode } from 'react'
import UserContext from './userContext'

type UserContextProviderProps = {
    children: ReactNode
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [zipcode, setZipcode] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [submitForm, setSubmitForm] = useState<boolean>(false)

    return (
        <UserContext.Provider value={{ name, setName, email, setEmail, zipcode, setZipcode, phone, setPhone, submitForm, setSubmitForm }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider