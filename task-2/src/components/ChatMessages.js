import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions/chatActions';
import { animateScroll } from "react-scroll";

const ChatMessages = ({ chat, user: { user }, getMessages }) => {

    const { messages } = chat;
    const [lastMessageId, setLastMessageId] = useState(null);

    const messageLimit = useRef(25);
    useEffect(() => {
        getMessages(messageLimit.current);
        // eslint-disable-next-line
    }, []);
    // update messages in every second
    useEffect(() => {
        const interval = setInterval(() => {
            getMessages(messageLimit.current);
        }, 1000);
        console.log(messageLimit.current);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [getMessages]);

    const scrollToBottom = () => {
        animateScroll.scrollToBottom({
            containerId: "messages-list",
            offset: 50,
            duration: 500,
            delay: 0,
        });
    }

    const listInnerRef = useRef();

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop } = listInnerRef.current;
            // detect if scroll is at the top
            if (scrollTop === 0) {
                messageLimit.current = messageLimit.current + 25;
                getMessages(messageLimit.current);
            }

        }
    };

    useEffect(() => {
        if (messages.length > 0) {
            if (lastMessageId != null) {
                if (lastMessageId !== messages[messages.length - 1].id) {
                    scrollToBottom();
                    setLastMessageId(messages[messages.length - 1].id);

                }
            }
            setLastMessageId(messages[messages.length - 1].id);

            // eslint-disable-next-line
        }
        // eslint-disable-next-line
    }, [messages]);



    return (
        <div className="card-body height3" id='messages-list' onScroll={() => onScroll()} ref={listInnerRef}>
            <ul className="chat-list" >
                {messages.length > 0 && messages.map(message => (
                    <li className={message.user_id === user.id ? "out" : "in"} key={message.id}>
                        <div className="chat-img">
                            <img alt="Avtar" src={message.user_avatar} />
                        </div>
                        <div className="chat-body">
                            <div className="chat-message">
                                <h5>{message.user_name}</h5>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>);

}

const mapStateToProps = state => ({
    chat: state.chat,
    user: state.user
});
export default connect(mapStateToProps, {
    getMessages,
})(ChatMessages);

