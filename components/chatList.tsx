import React from 'react';
import ChatListItem from './chatListItem';

const ChatList: React.FC = () => {
  return (
    <ul className="overflow-auto h-32rem">
      <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
      <li>
        <ChatListItem
          name="AI Research"
          time="25 minutes"
          message="Headline: Music Transformers are changing the producing industry"
          image="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340."
        />
        <ChatListItem
          name="Google Search Agent"
          time="50 minutes"
          message="I found 16 new articles for you"
          image="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340."
        />
        <ChatListItem
          name="Blossom"
          time="6 hour"
          message="Welcome to Contextual"
          image="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340."
        />
      </li>
    </ul>
  );
};

export default ChatList;