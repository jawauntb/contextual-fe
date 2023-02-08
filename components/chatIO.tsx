import React from 'react';
import Head from 'next/head';
import ChatWindow from './chatWindow';
import ChatLayout from './chatLayout';
import SearchForm from './searchForm';
import ChatList from './chatList';

const ChatIO: React.FC = () => (
  <ChatLayout>
    <div className="w-full h-full m-7 w-xl container mx-auto rounded-lg overflow-hidden border border-gray-200 backdrop-blur-md bg-white/50 shadow-xl items-center">
      <div className="lg:grid lg:grid-cols-3">
        <div className="border-r border-gray-300 lg:col-span-1">
          <SearchForm />
          <ChatList />
        </div>
        <div className="hidden lg:col-span-2 lg:block">
          <ChatWindow />
        </div>
      </div>
    </div>
  </ChatLayout>
);

export default ChatIO;
