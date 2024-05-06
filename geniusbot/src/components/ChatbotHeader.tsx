import UserContext from "../context/userContext"
import { useContext } from "react"
import ChatbotIcon from '../assets/botIcon.svg'
import DropdownIcon from '../assets/dropdownIcon.png'

const ChatbotHeader = () => {
    const { name, setOpenChatbot, openChatbot } = useContext(UserContext)

    return (
        <>
            {openChatbot ?
                <div>
                    < div className="bg-navy-bg w-full h-[60px] border-navy-bg rounded-t-lg flex gap-1 p-1 justify-evenly relative" >
                        <div className="w-[30%] mr-1 flex justify-center">
                            <img src={ChatbotIcon} alt="chatbot icon" className="border-cream-bg border-[1px] rounded-full m-1 p-1" />
                        </div>
                        <div className="flex justify-start flex-col mt-1 mx-0 w-full">
                            <h3 className="font-bold text-start text-[14px] text-cream-bg">Hi {name}</h3>
                            <h3 className="text-start text-[12px] p-0 text-cream-bg">You are chatting with GeniusBot</h3>
                        </div>
                        <div className="flex justify-center w-[30%]"><button onClick={() => setOpenChatbot(!openChatbot)}><img src={DropdownIcon} alt="dropdown icon" className="w-[10px]" /></button></div>
                    </div >
                </div> :
                <div></div>}
        </>
    )
}

export default ChatbotHeader