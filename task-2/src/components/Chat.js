import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ChatMessages from './ChatMessages';
import ChatBox from './ChatBox';
import { ChatHeader } from './ChatHeader';
import { getUser, setUser } from '../actions/userActions';
const Chat = ({ user: { user }, getUser, setUser }) => {

    const askUserForName = () => {
        const name = prompt('Please enter your name');
        if (name) {
            setUser(name);
        }
    }

    useEffect(() => {
        // getUser();
        askUserForName();
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        console.log(user);
    }, [user]);


    if (user.name === undefined)
        return (
            <div className='text-center'>
                You must enter your name to chat.
                <br />
                <br />
                <div onClick={askUserForName} className='btn btn-primary'> Enter Name</div>
            </div>
        )

    return (



        <div className="col-md-8 col-lg-6 col-12 m-auto">
            <div className="card">
                <ChatHeader />
                <ChatMessages />
                <ChatBox />
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    user: state.user,
});
export default connect(mapStateToProps, {
    getUser, setUser
})(Chat);

