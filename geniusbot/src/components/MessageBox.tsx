import MessageIcon from '../assets/messageButton.svg'
import { FormEvent } from 'react'

const MessageBox = () => {

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="absolute bottom-0 h-[50px] w-full rounded-b-lg px-2">
      <form action="" className='w-full flex justify-between rounded-b-lg h-full border-t-[1px] border-lighter-blue pt-1 '>
        <input required className='w-full rounded-b-lg pl-4 text-navy-bg bg-cream-bg' type="text" name="message" id="message" placeholder="message..." />
        <button type='submit' className='rounded-br-lg bg-none'><img src={MessageIcon} alt="" /></button>
      </form>
    </div>
  )
}

export default MessageBox