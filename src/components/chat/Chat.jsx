import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(()=> {
    endRef.current?.scrollIntoView({behavior:"smooth"});
  });

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
              esse consequatur id sint at culpa ut accusamus, aut molestiae
              eligendi accusantium impedit? Veritatis dolorem autem, odio
              molestias et pariatur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
              esse consequatur id sint at culpa ut accusamus, aut molestiae
              eligendi accusantium impedit? Veritatis dolorem autem, odio
              molestias et pariatur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
              esse consequatur id sint at culpa ut accusamus, aut molestiae
              eligendi accusantium impedit? Veritatis dolorem autem, odio
              molestias et pariatur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
              esse consequatur id sint at culpa ut accusamus, aut molestiae
              eligendi accusantium impedit? Veritatis dolorem autem, odio
              molestias et pariatur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
              esse consequatur id sint at culpa ut accusamus, aut molestiae
              eligendi accusantium impedit? Veritatis dolorem autem, odio
              molestias et pariatur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
              esse consequatur id sint at culpa ut accusamus, aut molestiae
              eligendi accusantium impedit? Veritatis dolorem autem, odio
              molestias et pariatur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
              esse consequatur id sint at culpa ut accusamus, aut molestiae
              eligendi accusantium impedit? Veritatis dolorem autem, odio
              molestias et pariatur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="data:image/jpeg;base64,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" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
              esse consequatur id sint at culpa ut accusamus, aut molestiae
              eligendi accusantium impedit? Veritatis dolorem autem, odio
              molestias et pariatur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
