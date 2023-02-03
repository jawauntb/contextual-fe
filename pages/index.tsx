import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageBody from './page'
import Form from '../components/form'
import MobileMenu from '../components/mobileMenu';
import ylang_logo from '../public/ylang.jpg'


const Home: NextPage = () => {

  const about = "Streamline your learning, doing and teaching by leveraging the power of your internal documents and AI. Surface relevant content, combine live search results with your data and create customized AI Agents with our that carry out tasks based on your wishes. Save time, automate tasks, and build on top of existing knowledge. Join the Contextual revolution today!"

  return (
    <div className="mb-6 flex min-h-screen flex-col py-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-cyan-300 to-yellow-100">
      <MobileMenu />
      <div className="m-7 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">It's time to get <a className="text-blue-600" href="https://replit.com/@JawaunBrown/contextFE#pages/index.tsx">
              Contextual
            </a></div>
      < PageBody >
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <p className="mt-3 mb-3 rounded-xl backdrop-blur-md items-center px-5 text-center"> {about} </p>
          <Form />
        </main>
      </PageBody >
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://replit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by YlangYlang
          <Image src={ylang_logo} alt="Replit Logo" width={50} height={50} />
        </a>
      </footer>
    </div >
  )
}

export default Home