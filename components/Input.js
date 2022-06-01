import {useState} from 'react'
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";

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
            {selectedFile && (
            <div className='relative'>
                <div className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'>
                  <XIcon className='text-white h-5' />
                </div>
                <img src={selectedFile} alt="" className='rounded-2xl max-h-80 object-contain'/>
            </div>
            )}
        </div>
    </div> 
    </div>
  )
}

export default Input