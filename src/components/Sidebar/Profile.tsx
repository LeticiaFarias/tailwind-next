/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJvc3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Jane Doe</span>
        <span className="truncate text-sm text-zinc-500">janedoe@mail.com</span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
