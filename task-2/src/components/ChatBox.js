import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../actions/chatActions';
const ChatBox = ({ chat, user: { user }, setMessage }) => {
    const [userMessage, setUserMessage] = useState('');

    const sendMessage = () => {
        if (userMessage.trim() !== '') {

            const messageObject = {
                id: new Date().getTime(),
                message: userMessage,
                timestamp: new Date().getTime(),
                user_id: user.id,
                user_avatar: user.avatar,
                user_name: user.name,
            }

            setMessage(messageObject);
            setUserMessage('');
        }

    }

    return (
        <div className="card-footer d-flex justify-content-between">
            <div className='message-input-area'>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message here..."
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            sendMessage();
                        }
                    }}
                />

            </div>
            <div className="message-send-button-area br-50 ">
                <button onClick={sendMessage} className="btn send-button">Send</button>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    chat: state.chat,
    user: state.user,
});

export default connect(mapStateToProps, {
    setMessage
})(ChatBox);

