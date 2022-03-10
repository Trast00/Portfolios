import { Box } from '@material-ui/core'
import './Contact.scss'
import React from 'react'
import { ContactItems } from './ContactItems'

const Contact = () => {
  return (
    <div className='contact'>
        <Box className='box'>
            <h2>Contacts</h2>
            
            <ContactItems />
            <ContactItems />
            <ContactItems />
            <ContactItems />
            
        </Box>
    </div>
  )
}

export default Contact