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
    const [location, setLocation] = useState<object>({})
    const [openChatbot, setOpenChatbot] = useState<boolean>(false)
    const [userMessage, setUserMessage] = useState<string[]>([])

    return (
        <UserContext.Provider value={{ name, setName, email, setEmail, zipcode, setZipcode, phone, setPhone, submitForm, setSubmitForm, location, setLocation, openChatbot, setOpenChatbot, userMessage, setUserMessage }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider