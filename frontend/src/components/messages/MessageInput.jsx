import { FiSend } from "react-icons/fi";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white"
          placeholder="Send a message"
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-white"
        >
          <FiSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// starter code snippet
// import { FiSend } from "react-icons/fi";

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full relative">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white"
//           placeholder="Send a message"
//         />

//         <button
//           type="submit"
//           className="absolute inset-y-0 end-0 flex items-center pe-3 text-white"
//         >
//           <FiSend />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;
