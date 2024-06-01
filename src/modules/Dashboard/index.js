import React from "react";
import Input from "../../components/Input";

const Dashboard = () => {
  const contacts = [
    {
      name: "John",
      status: "Available",
      img: "https://raw.githubusercontent.com/Muhammad-Feroz/chat-app/a2cb22e4453efae8af2c0c38bad65ae9d8fd9a5b/Chat%20App/client/src/assets/avatar.svg",
    },
    {
      name: "Mary",
      status: "Available",
      img: "https://raw.githubusercontent.com/Muhammad-Feroz/chat-app/a2cb22e4453efae8af2c0c38bad65ae9d8fd9a5b/Chat%20App/client/src/assets/avatar.svg",
    },
    {
      name: "Alexander",
      status: "Available",
      img: "https://raw.githubusercontent.com/Muhammad-Feroz/chat-app/a2cb22e4453efae8af2c0c38bad65ae9d8fd9a5b/Chat%20App/client/src/assets/avatar.svg",
    },
    {
      name: "Alex",
      status: "Available",
      img: "https://raw.githubusercontent.com/Muhammad-Feroz/chat-app/a2cb22e4453efae8af2c0c38bad65ae9d8fd9a5b/Chat%20App/client/src/assets/avatar.svg",
    },
    {
      name: "Larry",
      status: "Available",
      img: "https://raw.githubusercontent.com/Muhammad-Feroz/chat-app/a2cb22e4453efae8af2c0c38bad65ae9d8fd9a5b/Chat%20App/client/src/assets/avatar.svg",
    },
    {
      name: "Don",
      status: "Available",
      img: "https://raw.githubusercontent.com/Muhammad-Feroz/chat-app/a2cb22e4453efae8af2c0c38bad65ae9d8fd9a5b/Chat%20App/client/src/assets/avatar.svg",
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen  shadow-lg bg-secondary">
        <div className="flex  items-center mx-10 my-4">
          <div className="border border-primary p-[2px] rounded-full cursor-pointer">
            <img
              src="https://raw.githubusercontent.com/Muhammad-Feroz/chat-app/a2cb22e4453efae8af2c0c38bad65ae9d8fd9a5b/Chat%20App/client/src/assets/avatar.svg"
              width={65}
              height={65}
            />
          </div>
          <div className="ml-8">
            <h3 className="text-xl font-bold">Kashif Anwar</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-6 mt-3">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex items-center py-3 border-b border-b-gray-300">
                  <div className="flex items-center cursor-pointer">
                    <div>
                      <img src={img} width={55} height={55} />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-lg font-light text-gray-600">{status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen flex flex-col items-center shadow-lg bg-white sh">
        <div className="w-[75%] bg-secondary h-[65px] my-6 shadow-md rounded-full flex items-center px-10">
          <div className="cursor-pointer">
            <img
              src="https://raw.githubusercontent.com/Muhammad-Feroz/chat-app/a2cb22e4453efae8af2c0c38bad65ae9d8fd9a5b/Chat%20App/client/src/assets/avatar.svg"
              width={50}
              height={50}
            />
          </div>
          <div className="ml-4 mr-auto items-center">
            <h3 className="text-lg">Alexander</h3>
            <p className="text-sm font-light text-gray-600">Online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
        </div>
        <div className="w-full overflow-y-scroll mt-3 shadow-sm">
          <div className="p-5">
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor s
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor s
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor s
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor s
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>{" "}
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor s
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor s
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>{" "}
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor s
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="p-8 w-full flex items-center">
          <Input
            placeholder="Type a message....."
            className="w-[95%]"
            inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus-border-0 outline-none"
          />
          <div className="ml-2 p-1 cursor-pointer bg-light rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div className="ml-2 p-1 cursor-pointer bg-light rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-screen bg-light shadow-lg"></div>
    </div>
  );
};

export default Dashboard;
