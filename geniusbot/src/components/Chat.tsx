import MessageBox from "./MessageBox"
import ChatbotHeader from "./ChatbotHeader"
import { useState, useEffect, useContext } from "react"
import UserContext from "../context/userContext"

const Chat = () => {
    const { userMessage } = useContext(UserContext)

    return (
        <div className="bg-cream-bg rounded-lg relative h-full">
            <ChatbotHeader />
            <div id="bot" className="flex justify-start flex-col w-[60%] ml-3 mt-2">
                <h3 className="text-navy-bg font-bold text-[14px] text-start mb-1">GeniusBot</h3>
                <div className="bg-light-gray rounded-xl p-2 w-[80%]">
                    <p className="text-start text-black text-[12px] pl-2 w-[full]">Hi, how can I help you?</p>
                </div>
            </div>
            <div id="user" className="w-full">
                {userMessage ? userMessage.map(msg => (<p>{msg}</p>)) : <></>}
            </div>
            <MessageBox />
        </div>
    )
}

export default Chat