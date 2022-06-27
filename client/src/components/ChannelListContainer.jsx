import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import Cookies from 'universal-cookie'
import HospitalIcon from '../assets/hospital.png'
import LogOutIcon from '../assets/logout.png'


const SideBar = () => {
    return (
        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src={HospitalIcon} alt='logo' width="30" />
                </div>
            </div>
            <div className='channel-list__sidebar__icon2'>
                <div className='icon2__inner'>
                    <img src={LogOutIcon} alt='logout' width="30" />
                </div>
            </div>
        </div>
    )
}

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>
            Medical Pager
        </p>
    </div>
)

const ChannelListContainer = () => (
    <>
        <SideBar />
        <div className='channel-list__list__wrapper'>
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => { }}
                List={(listProps) => <TeamChannelList
                    type="team"
                />
                }
                Preview={(previewProps) => <TeamChannelPreview {...previewProps}
                    type="team"
                />}
            />
        </div>

    </>
)

export default ChannelListContainer