import axios from 'axios'
import { useState } from 'react'

const Home = () => {

    const [name, setName] = useState([])
    const [display, setDisplay] = useState({})
    const handleInput = async (e) => {

        console.log("this is file====>", e.target.files[0])
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const list = await axios.post('http://localhost:5000/list', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        setName(list.data)
    }

    const handleStart = async () => {

        const winner = await axios.get('http://localhost:5000/winner')
        setDisplay(winner.data)
        console.log(winner.data)

    }

    return (
        <div className="w-[100vw] h-[100vh] justify-center items-center flex">
            <div className="w-3/5 h-3/4 bg-purple-200  rounded-xl flex items-center px-20">

                <div className="w-full flex items-center flex-col">

                    <div className="w-[80%] h-[45vh] bg-white rounded-lg overflow-y-auto">
                        <ol className='px-8 py-3 text-xl font-sans'>

                            {name.map((item, key) => {
                                return <li className='pt-2' key={key}>{key + 1}:{' '}{item}</li>;
                            })}

                        </ol>
                    </div>

                    <input type="file" id="fileInput" className="hidden" onChange={handleInput} />
                    <label htmlFor="fileInput" className="w-[80%] h-[70px] bg-sky-500 rounded-lg mt-6 text-center text-2xl text-white p-5 active:bg-sky-300 font-serif">Upload</label>

                    <button className="w-[80%] h-[70px] bg-sky-500 rounded-lg mt-6 text-center text-2xl text-white p-5 active:bg-sky-300 font-serif" onClick={handleStart}>
                        Start
                    </button>

                </div>

                <div className="w-full flex flex-col items-center -mt-5">

                    <div className="w-[70%] h-[35vh] bg-white rounded-full text-center text-9xl p-20">{display.number && parseInt(display.number) + 1}</div>
                    <div className="w-[70%] h-[80px] bg-white rounded-lg mt-11 text-center text-3xl font-serif p-6">{display.name}</div>

                </div>

            </div>
        </div>
    )



}
export default Home;