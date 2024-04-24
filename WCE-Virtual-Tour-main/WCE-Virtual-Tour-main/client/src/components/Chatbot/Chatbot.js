
import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with wce_Virtual_Assistant",
          botConversationDescription: "WCE_VIRTUAL_TOUR_CHATBOT",
          botId: "0e5daeeb-2974-4c8b-b9d5-e3e9e99ca850",
          hostUrl: "https://cdn.botpress.cloud/webchat/v1",
          messagingUrl: "https://messaging.botpress.cloud",
          clientId: "0e5daeeb-2974-4c8b-b9d5-e3e9e99ca850",
          webhookId: "678bd114-5340-4c79-b934-7c7a05ca7c54",
          lazySocket: true,
          themeName: "prism",
          botName: "wce_Virtual_Assistant",
          avatarUrl: "https://www.google.com/imgres?q=chatbot&imgurl=https%3A%2F%2Fopenwebsolutions.in%2Fblog%2Fwp-content%2Fuploads%2F2020%2F02%2Fchatbot-4071274_1920.jpg&imgrefurl=https%3A%2F%2Fopenwebsolutions.in%2Fblog%2Fknow-how-chatbot-development-becoming-next-big-thing-in-industry%2F&docid=5AFOsZzq6QzeVM&tbnid=uRUKdp4vveyRoM&vet=12ahUKEwj7zdXr3NWFAxW6yjgGHZOnA68QM3oFCIEBEAA..i&w=1920&h=1217&hcb=2&ved=2ahUKEwj7zdXr3NWFAxW6yjgGHZOnA68QM3oFCIEBEAA",
          
          stylesheet: "https://webchat-styler-css.botpress.app/prod/4bbbf36c-aafc-4c56-911a-0148075337e8/v98753/style.css",
          frontendVersion: "v1",
          useSessionStorage: true,
          enableConversationDeletion: true,
          theme: "prism",
          themeColor: "#2563eb"
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot
