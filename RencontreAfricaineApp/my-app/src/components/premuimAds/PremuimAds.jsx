import { Box } from '@material-ui/core'
import './PremuimAds.scss'
import React from 'react'

function PremuimAds() {
  return (
    <div className='premuimAds'>
        <Box className='box'>
            <h2>20% Discount On Prémium !</h2>
            <span id="desc">Get 20% discount on all your purchage, become 
                premuim only for
                </span><strong>
                   <del>20$</del> <span>16$.</span><br/>
                  <span color='#F82581'>Click Here</span>
                </strong>  
                
                <span id="mid"><br/><br/>
                  1-Up to profile to the top of page to be to first seen by users.
                  <br/><br/>
                      2-Talk to unlimited number of friends
                  <br/><br/>
                  3-Support this little Site</span>

                  <span id="bot"><br/><br/>Cause special meet, dosn't wait</span>
        </Box>
    </div>
  )
}

export default PremuimAds