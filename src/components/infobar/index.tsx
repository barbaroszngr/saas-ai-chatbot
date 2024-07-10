import React from 'react'
import BreadCrumb from './bread-crumb'
import { Headphones, Star, Trash } from 'lucide-react'
import { Card } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type Props = {}

const Infobar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center py-1 mb-8 ">
        <BreadCrumb />
        
      <div className="flex gap-3 items-center">
        <div>
          <Card className="rounded-xl flex gap-3 py-3 px-4 text-ghost">
            <Trash />
            <Star></Star>
          </Card>
        </div>
        <Avatar>
          <AvatarFallback className="bg-orange text-white">
            <Headphones />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Infobar