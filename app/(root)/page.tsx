import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function SetUpPage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
     <div>
      <UserButton/>
     </div>
    </main>
  )
}
