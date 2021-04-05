

class TransformThreads {

    constructor(threads, authUser){
        this.threads = threads;
        this.authUser = authUser;
    }

    /**
     *return the last message
     * @param {object} messages 
     */
    lastMessage(messages){
        let msgStr;
        const msg = messages[messages?.length - 1];
        if(msg.type === "text" && msg.body){
            msgStr = msg.body?.slice(0, 20)+'...';
        }else{
            msgStr = 'file'
        }
        return msgStr;
    }

    /**
     * returns the last message in a thread timestamp
     */
   lastMessageTime(messages){
    const msg = messages[messages?.length - 1];
    return msg?.created_at;
   } 


/**
 * returns the profile picture of the receiver
 * @param {object} profilePics 
 * @returns 
 */
    getProfilePicture(profilePics){
       return profilePics?.find(pic => pic?.client_id !== this.authUser?.id);

    }

    /**
     * returns the message receiver
     * @param {object} users 
     * @returns 
     */
    getReceiver(users){
        return users?.find(user => user?.id !== this.authUser?.id);
    }

    /**
     * get last read for the current user
     * @param {object} participants 
     */
    getLastRead(participants){
       const pt = participants.find(pt => pt.user_id === this.authUser?.id);
       return pt?.last_read;
    }

    /**
     * transforms the threads
     */

    getThreads(){
      const threads = this.threads?.map((thread, i) => {
            return {
                id: thread.id,
                count: thread.count,
                messages: thread.messages,
                users: thread.users,
                participants: thread.participants,
                profilePic: this.getProfilePicture(thread.profile_pictures),
                receiver: this.getReceiver(thread.users),
                lastMessage: this.lastMessage(thread.messages),
                last_read: this.getLastRead(thread.participants),
                lastMessageTime: this.lastMessageTime(thread.messages)
            }
        })
      return threads  
    }


}

export default TransformThreads;