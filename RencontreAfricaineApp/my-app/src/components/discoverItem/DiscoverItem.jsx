import { Box } from '@material-ui/core'
import './DiscoverItem.scss'
import React from 'react'

const DiscoverItem = () => {
  return (
    <div className='discoverItem'>
        <Box className='box'>
            <img src="https://scontent.forn3-1.fna.fbcdn.net/v/t39.30808-6/273705726_1120001282168258_6228290758840196750_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH6wyT9KAMMlL0X55g7cpR-qQ8xig4rugapDzGKDiu6BqCKOzn8tKA4A2_kttRpnFU6KJStzrQh0Dy1QxE4XcrW&_nc_ohc=oD2QCZa7EKwAX_GMrgl&_nc_oc=AQng6hzqTMAiAguHnwoWY-X7apZEA5ixJ0b6X38eqLM-IIxszLj8FTZq-fintbQNIj8&_nc_ht=scontent.forn3-1.fna&oh=00_AT_ueofF2gF-6p7UV-fXTzdnLLl21Qd9jho5WrJJnC33Ig&oe=621168B2"  alt="" />
            
            <div>
            <div className='data'>
              <div>
                <h3>Carl Gustave Jung</h3>
                <span>Online</span>
              </div>
              <span className='canDispear'>
                @carljung47
              </span>

              <span className='canDispear'><br/>
                <span>Like</span> bananas, video game, shinkegi no kio gin, no game no life.
              </span>
              <span className='canDispear'>
                <span>Dislike</span> boruto, long movies, selfish guy/girl 
              </span>
              <span className="desc canDispear"><br/>
                <span>Want to talk about: </span> <br/>
                Creepy movies, Coding, Pizza, Funny meme, 
                How much you like shingeki no kio jin
                And so much other thing, that i want to doo cause a like them. So don t be a jerk
              </span>


            </div>
            <div className='buttons'>
                <span>Send Friend Request</span>
                <span>Read More</span>
              </div>
            </div>
        </Box>
    </div>
  )
}

export default DiscoverItem