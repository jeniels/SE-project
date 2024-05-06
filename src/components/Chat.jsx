import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import "./style_chat.css";

const userId = "nameless-disk-4";
const userName = "nameless-disk-4";

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
};
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibmFtZWxlc3MtZGlzay00In0.Ks92Y5N2SIUbcnFMr-oY9fku9LFOHZjzttehd1ZmJvg";

const chatClient = new StreamChat("w9gbvr89v99r");
chatClient.connectUser(user, userToken);

//123-- custom channel name

const channel = chatClient.channel("messaging", "123", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/github.png",
  name: "Discussion forum",
  members: [userId],
});

function Chatting() {
  return (
    <div className="max-h-screen px-10 pt-5">
      {/* <div className="flex pl-10 pt-5 items-center">
        <h1 className="font-semibold text-lg  md:text-2xl">Chat</h1>
      </div> */}
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}

export default Chatting;
