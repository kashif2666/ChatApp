import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TbMessages } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header  */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex float-start  ">
            <span className="label-text text-white">To : &nbsp; </span>{" "}
            <span className="text-gray-900 font-bold ">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 flex flex-col font-semibold items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄️</p>
        <p>Select a Chat to start Messaging</p>
        <TbMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
