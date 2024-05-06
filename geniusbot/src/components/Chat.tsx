import MessageBox from "./MessageBox"
import ChatbotHeader from "./ChatbotHeader"
import { useState, useRef, useEffect, useContext } from "react"
import UserContext from "../context/userContext"



const Chat = () => {
    const { userMessage, name } = useContext(UserContext)

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll to bottom on initial render and whenever userMessage changes
    useEffect(() => {
        scrollToBottom();
    }, [userMessage]);

    return (
        <div className="bg-cream-bg rounded-lg relative h-full overflow-y-scroll flex flex-col" >
            <ChatbotHeader />
            <div className="flex-grow overflow-y-scroll mb-[55px]">
                <div id="bot" className="flex justify-start flex-col w-[60%] ml-3 mt-2 left-0">
                    <h3 className="text-navy-bg font-bold text-[14px] text-start mb-1">GeniusBot</h3>
                    <div className="bg-light-gray rounded-xl p-2 w-[80%]">
                        <p className="text-start text-black text-[12px] pl-2 w-[full]">Hi, how can I help you?</p>
                    </div>
                </div>
                <div id="user" className="flex justify-end flex-col items-end ml-3 mt-2 right-0 mr-3 overflow-y-scroll">
                    <h3 className="text-navy-bg font-bold text-[14px] text-end mb-1 mr-3">{name}</h3>
                    <div className="flex justify-end flex-col items-end">
                        {userMessage ? userMessage.map(msg => (
                            <div className="bg-light-gray rounded-xl p-2 mt-1 mb-1">
                                <p style={{ fontSize: `${Math.max(10, 14 - Math.log10(msg.length))}px` }} className="text-end text-black text-[12px] pr-2 w-[full] pl-1">{msg}</p>
                            </div>))
                            : <></>}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            </div>
            <MessageBox />
        </div>
    )
}

export default Chat