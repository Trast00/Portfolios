import { Box, Input } from '@material-ui/core'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import SendIcon from '@material-ui/icons/Send';
import './Messagebar.scss'
import React from 'react'

const Messagebar = () => {
  return (
    <Box className='messagebar'>
      <AddPhotoAlternateIcon className='icons' />
      <Input type="text" hint="Aa" />
      <SendIcon className='icons'/>
    </Box>
  )
}

export default Messagebar