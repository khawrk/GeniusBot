import { FormEvent, useState } from "react"

type UserData = {
    name: string,
    email: string,
    zipcode: string,
    phone: string
}

const InfoForm = () => {
    const [submitForm, setSubmitForm] = useState<boolean>(false)
    const [inputName, setInputName] = useState<string>("")
    const [inputEmail, setInputEmail] = useState<string>("")
    const [inputPhone, setInputPhone] = useState<string>("")
    const [inputZipcode, setInputZipcode] = useState<string>("")
    const [userData, setUserData] = useState<UserData>({
        name: "",
        email: "",
        zipcode: "",
        phone: ""
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newUserdata = {
            name: inputName,
            email: inputEmail,
            zipcode: inputZipcode,
            phone: inputPhone
        }
        setUserData(newUserdata)
        setSubmitForm(true)
        console.log(userData)
    }

    return (
        <div className="text-navy-bg">
            <h3 className="text-[14px] pt-5 pb-5 px-5 font-bold">Fill in the form so we know you better before we start chatting 🙂</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col justify-start">
                    <label htmlFor="name" className="text-start text-[12px] ml-8 text-navy-bg font-bold">Name</label>
                    <input required type="text" onChange={(e) => setInputName(e.target.value)} name="name" className="w-[80%] mx-auto bg-light-gray rounded-xl pl-3 text-[10px] h-[30px]" />
                </div>
                <div className="flex flex-col justify-start">
                    <label htmlFor="email" className="text-start text-[12px] ml-8 text-navy-bg font-bold">Email</label>
                    <input required type="email" name="email" id="email" onChange={(e) => setInputEmail(e.target.value)} className="w-[80%] mx-auto bg-light-gray rounded-xl pl-3 text-[10px] h-[30px]" />
                </div>
                <div className="flex flex-col justify-start ">
                    <label htmlFor="zipcode" className="text-start text-[12px] ml-8 text-navy-bg font-bold">Zip Code</label>
                    <input required type="text" name="zipcode" id="zipcode" onChange={(e) => setInputZipcode(e.target.value)} className="w-[80%] mx-auto bg-light-gray rounded-xl pl-3 text-[10px] h-[30px]" />
                </div>
                <div className="flex flex-col justify-start">
                    <label htmlFor="phoneNumber" className="text-start text-[12px] ml-8 text-navy-bg font-bold">Email</label>
                    <input required type="string" name="phoneNumber" id="phoneNumber" onChange={(e) => setInputPhone(e.target.value)} className="w-[80%] mx-auto bg-light-gray rounded-xl pl-3 text-[10px] h-[30px]" />
                </div>
                <div><button type="submit" className="rounded-full text-[12px] py-2 px-2 font-bold">Continue</button></div>

            </form>
        </div>
    )
}

export default InfoForm