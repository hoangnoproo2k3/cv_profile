import { ModeToggle } from '@/components/Mode_toggle'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-accent dark:text-test '>
      Test
      <ModeToggle />
    </div>
  )
}
