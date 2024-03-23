
const Home = () => {

    const handleInput = (e) => {

        console.log(e.target.value)

    }

    const handleStart = () => {

        console.log("this is start")

    }

    return (
        <div className="w-[100vw] h-[100vh] justify-center items-center flex">
            <div className="w-3/5 h-3/4 bg-purple-200  rounded-xl flex items-center px-20">

                <div className="w-full flex items-center flex-col">

                    <div className="w-[80%] h-[45vh] bg-white rounded-lg"></div>

                    <input type="file" id="fileInput" className="hidden" onChange={handleInput} />
                    <label htmlFor="fileInput" className="w-[80%] h-[70px] bg-sky-500 rounded-lg mt-6 text-center text-2xl text-white p-5 active:bg-sky-300 font-serif">Upload</label>

                    <button className="w-[80%] h-[70px] bg-sky-500 rounded-lg mt-6 text-center text-2xl text-white p-5 active:bg-sky-300 font-serif" onClick={handleStart}>
                        Start
                    </button>

                </div>

                <div className="w-full flex flex-col items-center -mt-5">

                    <div className="w-[70%] h-[35vh] bg-white rounded-full"></div>
                    <div className="w-[70%] h-[80px] bg-white rounded-lg mt-11 text-center text-2xl font-serif"></div>

                </div>

            </div>
        </div>
    )



}
export default Home;