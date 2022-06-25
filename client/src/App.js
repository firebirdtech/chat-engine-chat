import React from 'react'
import './App.css'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'

const apiKey =process.env.STREAM_API_KEY

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  )
}

export default App