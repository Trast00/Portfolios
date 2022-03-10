import { Box } from '@material-ui/core'
import './Discussion.scss'
import React from 'react'
import DiscussionNavbar from '../components/discussionItems/DiscussionNavbar'
import ListMessages from '../components/discussionItems/message/ListMessages'
import Messagebar from '../components/discussionItems/Messagebar'
import UserPresentation from '../components/discussionItems/UserPresentation'

function Discussion() {
  return (
    <div className='discussion'>
        <Box className='box'>
            <DiscussionNavbar className="top" />
            <div className="mid">
                <UserPresentation />
                <ListMessages />
            </div>
            <Messagebar className="bot" />
        </Box>
    </div>
  )
}

export default Discussion