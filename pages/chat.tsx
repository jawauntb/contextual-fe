import type { NextPage } from 'next'
import Image from 'next/image'
import PageBody from './page'
import MobileMenu from '../components/mobileMenu';
import ylang_logo from '../public/ylang.jpg';
import ChatIO from '../components/chatIO';

const Chat: NextPage = () => {


  return (
    <div className="mb-6 flex min-h-screen flex-col py-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-cyan-300 to-yellow-100">
      <MobileMenu />
      < PageBody >
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <ChatIO />
        </main>
      </PageBody >
      <footer className="flex h-1/10 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://replit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by YlangYlang
          <Image src={ylang_logo} alt="Replit Logo" width={5} height={5} />
        </a>
      </footer>
    </div >
  )
}

export default Chat