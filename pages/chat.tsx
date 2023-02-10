import type { NextPage } from 'next'
import Image from 'next/image'
import PageBody from './page'
import ylang_logo from '../public/ylang.jpg';
import ChatIO from '../components/chatIO';
import QueryForm from '../components/docSearch';

const Chat: NextPage = () => {
  return (
    <div>
      < PageBody >
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <ChatIO />
          <div className="flex flex-1 flex-col justify-center">
            <QueryForm />
          </div>
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