import React from 'react';
import ylang_logo from '../public/ylang.jpg'

interface ChatListItemProps {
  name: string;
  time: string;
  message: string;
  image: string;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ name, time, message, image }) => {
  return (
    <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
      <img className="object-cover w-10 h-10 rounded-full" src={ylang_logo.src} alt="username" />
      <div className="w-full pb-2">
        <div className="flex justify-between">
          <span className="block ml-2 font-semibold text-gray-600">{name}</span>
          <span className="block ml-2 text-sm text-gray-600">{time}</span>
        </div>
        <span className="block ml-2 text-sm text-gray-600">{message}</span>
      </div>
    </a>
  );
};

export default ChatListItem;