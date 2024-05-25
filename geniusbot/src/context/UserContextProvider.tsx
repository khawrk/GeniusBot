import { useState, ReactNode } from 'react'
import UserContext from './userContext'
import runChat from '../config/gemini'

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
    const [inputPrompt, setInputPrompt] = useState<string>('');
    const [recentPrompt, setRecentPrompt] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false)
    // const [loading, setLoading] = useState<boolean>(false) // for loading animation
    const [resultData, setResultData] = useState<string>('')
    const [messages, setMessages] = useState<Array<{ sender: string, content: string }>>([]);

    // const delayParagraph = (index: number, nextWord: string) => {
    //     setTimeout(function () {
    //         setResultData(prev => prev + nextWord)
    //     }, 75 * index)
    // }

    const onSent = async () => {
        // setResultData("")
        // setMessages(prev => [...prev, { sender: name, content: inputPrompt }]); // Add user message
        // setShowResult(true)
        // setRecentPrompt(inputPrompt)
        // const response = await runChat(inputPrompt)
        // let responseArray = response.split("**")
        // let newResponse: string = '';
        // if (responseArray) {
        //     for (let i = 0; i < responseArray.length; i++) {
        //         if (i === 0 || i % 2 !== 1) {
        //             newResponse += responseArray[i];
        //         } else {
        //             newResponse += "<b>" + responseArray[i] + "</b>"
        //         }
        //     }
        // }
        // let newResponse2 = newResponse.split('*').join("</br>")
        // let newResponseArray = newResponse2.split(" "); // use space to split the string
        // for (let i = 0; i < newResponseArray.length; i++) {
        //     const nextWord = newResponseArray[i]
        //     delayParagraph(i, nextWord + " ")
        // }

        setMessages(prev => [...prev, { sender: name, content: inputPrompt }]); // Add user message
        const response = await runChat(inputPrompt);

        // Process response
        const responseArray = response.split("**");
        let newResponse: string = '';
        if (responseArray) {
            for (let i = 0; i < responseArray.length; i++) {
                if (i % 2 === 0) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }
            }
        }
        newResponse = newResponse.split('*').join("</br>");

        setMessages(prev => [...prev, { sender: 'GeniusBot', content: newResponse }]); // Add bot response
        setInputPrompt('');
    };


    return (
        <UserContext.Provider
            value={
                {
                    name, setName,
                    email, setEmail,
                    zipcode, setZipcode,
                    phone, setPhone,
                    submitForm, setSubmitForm,
                    location, setLocation,
                    openChatbot, setOpenChatbot,
                    userMessage, setUserMessage,
                    inputPrompt, setInputPrompt,
                    recentPrompt, setRecentPrompt,
                    showResult, setShowResult,
                    resultData, setResultData,
                    onSent,
                    messages, setMessages
                }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider