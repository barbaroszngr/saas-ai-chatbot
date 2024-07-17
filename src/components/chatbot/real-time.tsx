import React from 'react'
import { Card } from '../ui/card'
<<<<<<< HEAD
//import { useRealTime } from '@/hooks/chatbot/use-chatbot'
=======
import { useRealTime } from '@/hooks/chatbot/use-chatbot'
>>>>>>> 9cbbaae1e0bd8257b83692b582df024b5de2b306

type Props = {
  chatRoomId: string
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        role: 'user' | 'assistant'
        content: string
        link?: string | undefined
      }[]
    >
  >
}

const RealTimeMode = ({ chatRoomId, setChats }: Props) => {
<<<<<<< HEAD
 //useRealTime(chatRoomId, setChats)
=======
 useRealTime(chatRoomId, setChats)
>>>>>>> 9cbbaae1e0bd8257b83692b582df024b5de2b306

  return (
    <Card className="px-3 rounded-full py-1 bg-orange font-bold text-white text-sm">
      Real Time
    </Card>
  )
}

export default RealTimeMode