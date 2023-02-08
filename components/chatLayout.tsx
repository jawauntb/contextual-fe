import React from 'react';
import Head from 'next/head';

const ChatLayout: React.FC = ({ children }: { children: React.ReactNode }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tailwind CSS Response Chat Template</title>
    </Head>
    <div className="container mx-auto">
      <div className="min-w-full h-4/6 rounded">
        {children}
      </div>
    </div>
  </>
);

export default ChatLayout;