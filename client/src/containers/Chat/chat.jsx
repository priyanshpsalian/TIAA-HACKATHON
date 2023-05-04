// import Head from "next/head";
import { useEffect, useState } from "react";
import Pusher from "pusher-js"

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  let allMessages = [];

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("5a33732af92876b10bd3", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", function (data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({

        message,
      }),
    });

    setMessage("");
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-900">
      <div className="container bg-white">
        {/* <Head> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        {/* </Head> */}

        <div className="d-flex flex-column align-items-stretch flex-shrink-0">
          <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <input
              className="fs-5 fw-semibold "
            />
          </div>
          <div
            className="list-group list-group-flush border-bottom scrollarea width 300px margin 200px "
            style={{ minHeight: "500px" }}
          >
            {messages.map((message) => {
              return (

                <div className="list-group-item list-group-item-action py-3 lh-tight  ">
                  <strong className="mb-1">{message.username}</strong>
                  <div className="col-10 mb-1 small box-border h-20 p-4 border-4 bg font-medium  rounded-r-lg rounded-l-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white ">{message.message}</div>
                </div>
              );
            })}

          </div>
        </div>

        <form onSubmit={submit}>
          <input
            className="form-control"
            placeholder="Write a message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              console.log(e);
            }}
          />
        </form>
      </div></div>
  );
}

