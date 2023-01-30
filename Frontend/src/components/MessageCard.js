import React from 'react'
import { useNavigate } from 'react-router-dom'

const MessageCard = ({ discussionId, user, image, date, latestMessage, isRead }) => {
  const navigate = useNavigate()

    return (
    <article className='message-card' onClick={() => navigate(`/discussions/${discussionId}`)}>
        <header>
            <img src={image} alt='user_picture' />

            <div className="message-info">
                <p>{user}</p>
                <span>{date}</span>

                <div className="message-body">
                    {latestMessage}
                </div>
            </div>
        </header>

        {!isRead && (
            <span className="new"></span>
        )}
    </article>
  )
}

export default MessageCard