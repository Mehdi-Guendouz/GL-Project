import React, { useState } from 'react'
import { Link } from 'react-router-dom'  
import Header from '../components/Header'
import MessageCard from '../components/MessageCard'
import { BiSend } from 'react-icons/bi'

const currentUserId = 1
const contactUser = 2

const Discussion = () => {
    const [message, setMessage] = useState('')

    const [disc, setDisc] = useState([{
        sender: 1,
        receiver: 2,
        messageBody: 'hello there, how is everything?',
    },
    {
        sender: 2,
        receiver: 1,
        messageBody: 'fine thanks, how about you?',
    },
    {
        sender: 1,
        receiver: 2,
        messageBody: 'Good, have you finished the task?',
    },
    {
        sender: 2,
        receiver: 1,
        messageBody: 'well, not really, I have struggled a bit with the new database integration but it is fine',
    },])

    const handleSendMessage = () => {
        if (message) {
            setDisc([...disc, {
                sender: currentUserId,
                receiver: contactUser,
                messageBody: message,
            }])
        }
    }

  return (
    <section className='discussions'>
        <Header />

        <main>
            <div className="container">
                <h1>Messages reçus</h1>

                <div className="main-discussions-body">
                    <div className="discussions-list">
                        <MessageCard user='Robert Helson' image='/k.jpeg' date='15 décembre 2022' latestMessage='Je suis intéressé par votre offre de cours' discussionId={'1234'} />
                        <MessageCard user='Robert Helson' image='/k.jpeg' date='15 décembre 2022' latestMessage='Je suis intéressé par votre offre de cours' discussionId={'5435'} />
                        <MessageCard user='Robert Helson' image='/k.jpeg' date='15 décembre 2022' latestMessage='Je suis intéressé par votre offre de cours' isRead discussionId={'9847'} />
                        <MessageCard user='Robert Helson' image='/k.jpeg' date='15 décembre 2022' latestMessage='Je suis intéressé par votre offre de cours' isRead discussionId={'3432'} />
                    </div>

                    <div className="messaging">
                        <header>
                            <Link to='/users/james-felix'>
                                <img src="/k.jpeg" alt="" />
                            </Link>

                            <div className="user-info">
                                <Link to='/users/james-felix'>
                                    <p>James Felix</p>
                                </Link>
                                <span>Discussion</span>
                            </div>
                        </header>

                        <div className="messaging-body">
                            {disc.map((item, index) => {
                                return (
                                    <div className={currentUserId === item.sender ? 'sender message-container' : 'receiver message-container'}>
                                        {item.sender !== currentUserId && (
                                            <img src='/k.jpeg' alt='sender_image' />
                                        )}
                                        <article key={index}>
                                            {item.messageBody}
                                        </article>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="message-input">
                            <input type="text" placeholder='Votre message ...' onChange={(e) => setMessage(e.target.value)} value={message} onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage()
                                    setMessage('')
                                }
                            }} />
                            <BiSend className='icon' onClick={handleSendMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Discussion