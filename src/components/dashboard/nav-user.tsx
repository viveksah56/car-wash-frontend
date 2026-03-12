"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronsUpDown, LogOut, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={menuRef} className="relative w-full">
      <Button
        variant="outline"
        className="flex w-full justify-between gap-2 px-3 py-2 h-auto font-normal"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1 text-left">
          <Avatar className="h-8 w-8 rounded-lg flex-shrink-0">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-xs rounded-lg">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-sm font-medium truncate">{user.name}</span>
            <span className="text-xs text-muted-foreground truncate">
              {user.email}
            </span>
          </div>
        </div>
        <ChevronsUpDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      </Button>

      {isOpen && (
        <div className="absolute bottom-full left-0 right-0 mb-2 bg-popover border border-border rounded-lg shadow-lg p-1 z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded transition-colors"
          >
            <User className="h-4 w-4" />
            Account
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded transition-colors"
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <div className="h-px bg-border my-1" />
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
