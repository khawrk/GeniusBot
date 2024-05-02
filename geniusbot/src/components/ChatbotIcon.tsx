import ChatbotImage from '../assets/botIcon.svg'
import { useState } from 'react'
import ChatbotBox from './ChatbotBox'



const ChatbotIcon = () => {
  const [openChatbot, setOpenChatbot] = useState<boolean>(false)

  return (
    <>
      {openChatbot ? <ChatbotBox /> : <></>}
      <div className='bg-navy-bg w-[80px] h-[80px] p-2 flex rounded-full absolute bottom-0 right-0 m-5' onClick={() => setOpenChatbot(!openChatbot)}>
        <img src={ChatbotImage} alt="chatbotIcon" className='' />
      </div>
    </>
  )
}

export default ChatbotIcon