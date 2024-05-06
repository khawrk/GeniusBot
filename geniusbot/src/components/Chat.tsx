import MessageBox from "./MessageBox"

import ChatbotHeader from "./ChatbotHeader"

const Chat = () => {

    return (
        <div className="bg-cream-bg rounded-lg relative h-full">
            {/* <div className="bg-navy-bg w-full h-[50px] border-navy-bg rounded-t-lg">
                <h1>chat works</h1>
            </div> */}
            <ChatbotHeader />
            <div>
                <p>hahahah</p>
            </div>
            <MessageBox />
        </div>
    )
}

export default Chat