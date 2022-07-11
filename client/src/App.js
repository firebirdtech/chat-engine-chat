import React from 'react'
import './App.css'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelListContainer, ChannelContainer, Auth } from './components'


const cookies = new Cookies()

const apiKey =process.env.STREAM_API_KEY
const client = StreamChat.getInstance(apiKey)

const authToken = false

const App = () => {

  if(!authToken) return <Auth/>

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App