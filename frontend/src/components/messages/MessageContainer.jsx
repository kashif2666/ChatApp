import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TbMessages } from "react-icons/tb";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header  */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex float-start  ">
            <span className="label-text text-white">To : &nbsp; </span>{" "}
            <span className="text-gray-900 font-bold "> John Doe</span>
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
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 flex flex-col font-semibold items-center gap-2">
        <p>Welcome 👋 John Doe ❄️</p>
        <p>Select a Chat to start Messaging</p>
        <TbMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
