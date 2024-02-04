import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  return (
    <div>
      {isChatOpen && (
        <div id="chat-container">
          <div className="card" id="chat1" style={{ borderRadius: '15px' }}>
            <div className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
              <i className="fas fa-angle-left"></i>
              <p className="mb-0 fw-bold">Live chat</p>
              <i className="fas fa-times" onClick={closeChat} style={{ cursor: 'pointer' }}>X</i>
            </div>
            <div className="card-body">
              <div className="d-flex flex-row justify-content-start mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                <div className="p-3 ms-3" style={{ borderRadius: '15px', backgroundColor: 'rgba(57, 192, 237, .2)' }}>
                  <p className="small mb-0">Merhaba hangi yemek hakkında yardım almak istersin?</p>
                </div>
              </div>

              {/* Diğer içerikler buraya eklenebilir */}

              <div className="form-outline">
                <textarea className="form-control" id="textAreaExample" rows="4"></textarea>
                <label className="form-label" htmlFor="textAreaExample">Gönder</label>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isChatOpen && (
        <div id="chat-container2" style={{ backgroundColor: 'rgba(57, 192, 237, 0.9)', borderRadius: '10px', padding: '10px', display: 'inline-block', cursor: 'pointer' }} onClick={toggleChat}>
          <p style={{ color: 'white', margin: '0', padding: '0', bottom: '20px' ,}}>Chatbot</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
