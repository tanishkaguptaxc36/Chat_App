import { create } from "zustand"

const Useconvo = create((set) => ({
  selectedConversation: null, // chats kholne pe koi chat na khuli ho bss jab user pr click kre tb hi khule
  setSelectedconvo: (selectedConversation) => set({selectedConversation}),
  messages:[],
  setMessages : (messages) => set({messages}),
}))
 export default Useconvo;