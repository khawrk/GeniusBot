import InfoForm from "./InfoForm"
import UserContext from "../context/userContext"
import { useContext } from "react"
import Chat from "./Chat"

const ChatbotBox = () => {
    const { submitForm } = useContext(UserContext)

    return (
        <div className="bg-cream-bg w-[350px] h-[500px] bottom-[80px] right-10 absolute mb-10 rounded-lg">
            {submitForm ? <Chat /> : <InfoForm />}
        </div>
    )
}

export default ChatbotBox