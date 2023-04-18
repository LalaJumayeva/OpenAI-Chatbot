import React, { useState, useEffect } from 'react';
import './chat.css';
import { Navbar } from '../components';
import { FaPaperPlane } from 'react-icons/fa';

function Chat() {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState(null);
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState(null);
    const [previousMessageContent, setPreviousMessageContent] = useState('');


    const createNewChat = () => {
        setMessage(null);
        setValue('');
        setCurrentTitle(null);
    };

    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle);
    };

    const getMessages = async () => {
        if (value.trim() === '') return; // check if input is empty

        const options = {
            method: 'POST',
            body: JSON.stringify({
                message: value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch('http://localhost:8000/completions', options);
            const data = await response.json();
            console.log(data);
            setMessage({ role: 'assistant', content: data.choices[0].message.content });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        if (!currentTitle && value && message) {
            setCurrentTitle(value);
        }
        if (currentTitle && value && message && message.content !== previousMessageContent) {
            setPreviousChats((previousChats) => [...previousChats, { title: currentTitle, role: 'user', content: value, }, { title: currentTitle, role: message.role, content: message.content, },]);
            setPreviousMessageContent(message.content);
            setValue('');
        }
    }, [message, currentTitle, value]);


    const currentChat = previousChats.filter((chat) => chat.title === currentTitle);
    const uniqueTitles = Array.from(new Set(previousChats.map((chat) => chat.title)));

    return (
        <>
            <Navbar />
            <div className="chat">
                <section className="side-bar">
                    <button onClick={createNewChat}>+ New Chat</button>
                    <ul className="history">
                        {uniqueTitles?.map((title, index) => (
                            <li key={index} onClick={() => handleClick(title)}>
                                {title}
                            </li>
                        ))}
                    </ul>
                    <nav>
                        <p>Made by L. Jumayeva</p>
                    </nav>
                </section>
                <section className="main">
                    {!currentTitle && <h1>AI-GPT</h1>}
                    <ul className="feed">
                        {currentChat?.map((chatMessage, index) => (
                            <li key={index}>
                                <p className="role">{chatMessage.role}</p>
                                <p>{chatMessage.content}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="bottom_section">
                        <div className="input_container">
                            <input value={value} onChange={(e) => setValue(e.target.value)} />
                            <div id="submit" onClick={getMessages}>
                                <FaPaperPlane />
                            </div>
                        </div>
                        <p className="info">
                            GPT-3 is a neural network model that was trained on a massive corpus of text data from the internet, using
                            unsupervised learning techniques.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Chat;
