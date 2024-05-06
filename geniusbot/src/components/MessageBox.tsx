import MessageIcon from '../assets/messageButton.svg'
import { FormEvent, useState, useContext } from 'react'
import UserContext from '../context/userContext'

const MessageBox = () => {
  const { setUserMessage } = useContext(UserContext)
  const [msgInput, setMsgInput] = useState('')

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserMessage(prevMessages => [...prevMessages, msgInput])
    setMsgInput('')
  }

  return (
    <div className="absolute bottom-0 h-[50px] w-full rounded-b-lg px-2">
      <form onSubmit={sendMessage} className='w-full flex justify-between rounded-b-lg h-full border-t-[1px] border-lighter-blue pt-1 '>
        <input required className='w-full rounded-b-lg pl-4 text-navy-bg bg-cream-bg' type="text" name="message" id="message" placeholder="message..." onChange={(e) => setMsgInput(e.target.value)} value={msgInput} />
        <button type='submit' className='rounded-br-lg bg-none'><img src={MessageIcon} alt="" /></button>
      </form>
    </div>
  )
}

export default MessageBox