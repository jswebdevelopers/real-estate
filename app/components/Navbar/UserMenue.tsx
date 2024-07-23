'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdArrowOutward } from "react-icons/md";
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import MenuItem from './MenuItem'

const UserMenue = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="
            hidden
            md:flex
            items-center
            text-sm
            font-semibold
            py-2
            px-6
            rounded-full
            transition-all
            duration-300
            cursor-pointer
            bg-transparent
            border
            border-black
            text-black
            hover:bg-white
            hover:text-orange-500
            hover:border-orange-500
            gap-2
          "
        >
          Add Property
          <MdArrowOutward />
        </div>

         
    </div>
    </div>
  )
}

export default UserMenue
