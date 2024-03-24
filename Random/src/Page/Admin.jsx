import axios from 'axios'
import { useState } from 'react'

const Admin = () => {

    const [name, setName] = useState('')

    const handleName = async () => {
        const data = {
            name:name
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.post('http://localhost:5000/setname', data, config)
        console.log("this is response====>", res)
    }

    return (
        <div className="w-[100vw] h-[100vh] justify-center items-center flex">
            <div className="w-3/5 h-3/4 bg-purple-200  rounded-xl flex justify-center px-20 items-center flex-col">
                <input type="text" className="w-[50%] text-center text-5xl p-10" autoFocus onChange={(e) => setName(e.target.value)} />
                <button className="w-[50%] h-[100px]  bg-sky-500 rounded-lg mt-6 text-center text-2xl text-white p-5 active:bg-sky-300 font-serif" onClick={handleName}>Confirm Name</button>
            </div>
        </div>
    );
}
export default Admin;