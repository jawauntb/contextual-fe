import React from 'react';

const ChatPage: React.FC = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Chat Template</title>
    </Head>

    <div className="container mx-auto">
      <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
        <div className="border-r border-gray-300 lg:col-span-1">
          <SearchForm />
          <ChatList />
        </div>
        <div className="hidden lg:col-span-2 lg:block">
          <ChatWindow />
        </div>
      </div>
    </div>
  </>
);
