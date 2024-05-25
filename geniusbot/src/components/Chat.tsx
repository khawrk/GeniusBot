import MessageBox from "./MessageBox"
import ChatbotHeader from "./ChatbotHeader"
import { useRef, useEffect, useContext } from "react"
import UserContext from "../context/userContext"


const Chat = () => {
    const { messages, name } = useContext(UserContext)
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll to bottom on initial render and whenever userMessage changes
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="bg-cream-bg rounded-lg relative h-full flex flex-col scroll-m-0" >
            <ChatbotHeader />
            <div className="flex-grow overflow-y-auto mb-[55px] w-full overflow-hidden">
                <div id="bot" className="flex justify-start flex-col w-[60%] ml-3 mt-2 left-0">
                    <h3 className="text-navy-bg font-bold text-[14px] text-start mb-1">GeniusBot</h3>
                    <div className="bg-light-gray rounded-xl p-2 w-[80%]">
                        <p className="text-start text-black text-[12px] pl-2 w-[full]">Hi, how can I help you?</p>
                    </div>
                </div>
                {messages.map((msg: { sender: string, content: string }, index: number) => (
                    <div key={index} id={msg.sender === 'GeniusBot' ? 'bot' : 'user'} className={`${msg.sender === 'GeniusBot' ? 'flex justify-start flex-col w-[60%] ml-3 mt-2 left-0 self-start bg-cream-bg' : 'bg-cream-bg flex justify-end flex-col items-end self-end ml-3 mt-2 right-0 mr-3 overflow-y-scroll'}`}>
                        <h3 className={`text-navy-bg font-bold text-[14px] mb-1 ${msg.sender === 'GeniusBot' ? 'text-start' : 'text-end self-end mr-0 pr-0'}`}>{msg.sender === 'GeniusBot' ? 'GeniusBot' : name}</h3>
                        <div className="flex justify-end flex-col items-end ">
                            <div className={`bg-light-gray rounded-xl p-2 mt-1 mb-1 pl-4`}>
                                <p className={`text-[12px] ${msg.sender === 'GeniusBot' ? 'text-start pl-2' : 'text-end '}`} dangerouslySetInnerHTML={{ __html: msg.content }}></p>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
                {/* <div id="user" className="flex justify-end flex-col items-end ml-3 mt-2 right-0 mr-3 overflow-y-scroll">
                    <h3 className="text-navy-bg font-bold text-[14px] text-end mb-1 mr-3">{name}</h3>
                    <div className="flex justify-end flex-col items-end">
                        {userMessage ? userMessage.map((msg, index) => (
                            <div key={index} className="bg-light-gray rounded-xl p-2 mt-1 mb-1">
                                <p style={{ fontSize: `${Math.max(10, 14 - Math.log10(msg.length))}px` }} className="text-end text-black text-[12px] pr-2 w-[full] pl-1">{msg}</p>
                            </div>))
                            : <></>}
                        <div ref={messagesEndRef} />
                    </div>
                </div> */}
                {/* {showResult ?
                    <><div id="user" className="flex justify-end flex-col items-end ml-3 mt-2 right-0 mr-3 overflow-y-scroll">
                        <h3 className="text-navy-bg font-bold text-[14px] text-end mb-1 mr-3">{name}</h3>
                        <div className="flex justify-end flex-col items-end">
                            <div className="bg-light-gray rounded-xl p-2 mt-1 mb-1">
                                <p style={{ fontSize: `${Math.max(10, 14 - Math.log10(recentPrompt.length))}px` }} className="text-end text-black text-[12px] pr-2 w-[full] pl-1">{recentPrompt}</p>
                            </div>
                        </div>
                    </div>
                        <div id="bot" className="flex justify-start flex-col w-[60%] ml-3 mt-2 left-0 self-start">
                            <h3 className="text-navy-bg font-bold text-[14px] text-start mb-1">GeniusBot</h3>
                            <div className="bg-light-gray rounded-xl p-2 w-[80%]">
                                <p className="text-start text-black text-[12px] pl-2 w-[full]" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            </div>
                            <div ref={messagesEndRef} />
                        </div>
                    </> : <></>} */}
            </div>
            <MessageBox />
        </div>
    )
}

export default Chat