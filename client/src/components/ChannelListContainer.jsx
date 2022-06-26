import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import Cookies from 'universal-cookie'
import HospitalIcon from '../assets/hospital.png'


const sideBar = () => {
    return (
        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src={HospitalIcon} alt='logo' width="30" />
                </div>
            </div>
            <div className='channel-list__sidebar__icon2'>
                <div className='icon2__inner'>
                    <img src={HospitalIcon} alt='logo' width="30" />
                </div>
            </div>
        </div>
    )
}

const ChannelListContainer = () => {
  return (
    <div>{sideBar()}</div>
  )
}

export default ChannelListContainer