import Image from 'next/image'

export default function Home() {
  return (
    <main className="dark:bg-gray-900 bg-white flex min-h-screen flex-col items-center justify-between p-24">
      <div className="dark:text-white text-black z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p>© 2021</p>
      </div>
    </main>
  )
}

