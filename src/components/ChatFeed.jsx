import MessageForm from "./MessageFeed"
import MyMessage from "./MyMessage"
import TheirMessage from "./TheirMessage"


const ChatFeed=(props)=>{
    const {chats, activeChat, userName, messages} =props
    const chat =chats && chats[activeChat]
    // console.log(chat,userName,messages)
    const renderMessages =()=>{
        const keys =Object.keys(messages)
        // console.log(keys)
        return keys.map((key,index)=>{
            const message =messages[key]
            const lastMessageKey= index === 0 ? null:keys[index-1]
            const isMyMessage = userName===message.sender.userName
            return(
                <div key={`msg_${index}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage 
                            ? <MyMessage/> : <TheirMessage/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight:isMyMessage?'18px':'0px',marginLeft:isMyMessage?'0px':'68px'}}>
                    receipts receipts
                    </div>

                </div>
            )
        })
    }
    if(!chat)return"loading......."
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat?.title}
                    <h1>Hello everyone</h1>
                </div>
                <div className="chat-subtitle">
                    {chat.pepole.map((person)=>`${person.person.username}`)}
                </div>

            </div>
              {renderMessages()}  
              <div style={{height:'100px'}}/>
              <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
                
              </div>
        </div>
    )


}
export default ChatFeed