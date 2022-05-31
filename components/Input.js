import {useState} from 'react'

const Input = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className='border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide'>
        <img src="https://lh3.googleusercontent.com/a/AATXAJwCsuneWAkKlHwMPx0mLNjFACEvbtN8QPwbUsZ-=s96-c" className='h-11 w-11 rounded-full cursor-pointer' alt="" />
    <div className='w-full divide-y divide-gray-700'>
        <div className={``}>
            <textarea 
            value={input} 
            rows="2" 
            placeholder="What's happening?" 
            className='bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]'
            onChange={(e) => setInput(e.target.value)}
            />
            <div className='relative'>
                <div>

                </div>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default Input