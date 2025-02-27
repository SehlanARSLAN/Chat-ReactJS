import React, { useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init, subscribeChat, subscribeInitialMessages} from '../SocketApi'

import {useChat} from '../context/ChatContext'

function Container() {
  const { setMessages } = useChat()

  useEffect(() => {
    init();
    subscribeInitialMessages((messages)=>setMessages(messages));
    subscribeChat ((message)=>{
      setMessages((prevState)=>[...prevState, {message}])
    });
  }, []);
  return (
    <div className='App'>
      <ChatList/>
      <ChatForm/>
    </div>
  )
}

export default Container;
