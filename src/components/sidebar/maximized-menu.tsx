import React from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { SIDE_BAR_MENU } from '@/constants/menu'
import DomainMenu from './domain-menu'
import MenuItem from './menu-item'

type Props = {
    onExpand(): void
    current: string
    onSignOut(): void
    domains:
      | {
          id: string
          name: string
          icon: string | null
        }[]
      | null
      | undefined
  }

const MaxMenu = ({current, domains, onExpand, onSignOut}: Props) => {
  return (
<div className="py-3 px-4 flex flex-col h-full">
        <div className="flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt="LOGO"
        sizes="100vw"
        className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
        style={{
          width: '50%',
          height: 'auto',
        }}
        width={0}
        height={0}
      />
      <Menu
        className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards"
        onClick={onExpand}
      />
        </div>
    <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem
              size="max"
              {...menu}
              key={key}
              current={current}
            />
          ))}
          <DomainMenu domains={domains} />
        </div>
    </div>
</div>
  )
}

export default MaxMenu