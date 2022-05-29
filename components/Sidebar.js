import Image from "next/image"
import SidebarLink from "./SidebarLink"
import { HomeIcon } from "@heroicons/react/solid"
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline"

const Sidebar = () => {
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
          <Image src="https://icon-library.com/images/twitter-icon-svg/twitter-icon-svg-28.jpg" height={30} width={30} alt={"Twitter Logo"}/> 
        </div>
        <div className="space-y-2.5 mt-5 mb-2.5 xl:ml-24">
          <SidebarLink text="Home" Icon={HomeIcon} active/>
          <SidebarLink text="Explore" Icon={HashtagIcon}/>
          <SidebarLink text="Notifications" Icon={BellIcon} />
          <SidebarLink text="Messages" Icon={InboxIcon} />
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLink text="Lists" Icon={ClipboardListIcon} />
          <SidebarLink text="Profile" Icon={UserIcon} />
          <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
        <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</button>
        <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
          <img src="" alt="" className="h-10 w-10 rounded-full xl:mr-2.5"/>
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">okDud</h4>
            <p className="text-[#6e767d]">@okdud</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar