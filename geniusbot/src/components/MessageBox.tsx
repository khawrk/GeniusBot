import MessageIcon from '../assets/messageButton.svg'
import { FormEvent, useContext } from 'react'
import UserContext from '../context/userContext'

const MessageBox = () => {
  const { onSent, setInputPrompt, inputPrompt } = useContext(UserContext)
  // const [msgInput, setMsgInput] = useState('')

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPrompt.trim() !== '') {
      onSent(inputPrompt);
    }
    setInputPrompt('');
  }

  return (
    <div className="absolute bottom-0 h-[50px] w-full rounded-b-lg px-2 mb-1">
      <form onSubmit={sendMessage} className='w-full flex justify-between rounded-b-lg h-full border-t-[1px] border-lighter-blue pt-1'>
        <input required className='w-full rounded-b-lg pl-4 text-navy-bg bg-cream-bg' type="text" name="message" id="message" placeholder="message..." onChange={(e) => setInputPrompt(e.target.value)} value={inputPrompt} />
        <button type='submit' className='rounded-br-lg bg-cream-bg'><img src={MessageIcon} alt="" className='bg-cream-bg' /></button>
      </form>
    </div>
  )
}

export default MessageBox