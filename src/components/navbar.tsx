"use client"

import { Menu } from "lucide-react"
// import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#008080] text-white p-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-white bg-transparent">
          <Menu className="h-6 w-6" />
        </Button>
        {/* <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-13%2011-52-21-RWMBnwPuYs0JVyAqMolx8RPxbEZ449.png"
          alt="Radhe Exchange Logo"
          width={150}
          height={40}
          className="h-8 object-contain"
        /> */}
      </div>
      <div className="flex items-center gap-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/client">Clients</Link>
          <Link href="/sport-analysis">Sport Analysis</Link>
          <Link href="/settlement">Settlement</Link>
          <Link href="/settlement">Settlement</Link>
          <Link href="/report">Reports</Link>
          <Link href="/report">Reports</Link>
          <Link href="/cutting">Cutting</Link>
          <Link href="/sontrol">Control</Link>
          <Link href="/sontrol">Control</Link>
          <Link href="/profile">dmmo123</Link>
          <Link href="/profile">dmmo123</Link>
      </div>
    </nav>
  )
}