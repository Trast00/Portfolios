import { Box } from '@material-ui/core'
import './AppAds.scss'
import React from 'react'

function AppAds() {
  var boxStyle = {
    width: '90%',
    height: 'auto',
    boxShadow: '0 3px 6px rgb(0,0,0, 0.16)',
    textAlign: 'center',
    margin: '8px',
    padding: '3px',
}
  return (
    <div className='appAds'>

      <Box className='box'>
            <h2>Discover our App</h2>
            <span id="desc" textAlign="center">Download our App, and make new friend anywhere
                
                </span>
                <span id="mid"><br/>(A other part of my portefolios)
                  <br/><br/>
                  <img src="" alt='Our Android App' />
                 </span>

                <span id="bot"><br/><br/>Cause special meet, dosn't wait</span>
        </Box>
    </div>
  )
}

export default AppAds