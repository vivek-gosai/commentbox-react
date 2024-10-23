import "../App.css";
import React, { useState } from "react";

const Com = () => {
  const [Userdata, setUserdata] = useState({
    user: "",
    comment: "",
    emoji: "", 
  });
  const [displaydata,setdisplaydata]=useState({})
  const datachange = (e) => {
    setUserdata({ ...Userdata, [e.target.name]: e.target.value });
  };

  const handleform = (e) => {
    e.preventDefault();
    console.log(Userdata);
    setdisplaydata(Userdata)
    setUserdata({
      user: "",
      comment: "",
      emoji: "", 
    });
  };

  const handlemood = (emoji) => {
    setUserdata((prev) => ({ ...prev, emoji })); 
  };

  return (
    <>
      <form onSubmit={handleform}>
        <div className="feedback-card">
          <h2>MY COMMENT SECTION</h2>
          <p>How Was Your mood Today</p>
          <div className="emojis">
            {["😢", "😞", "😐", "🙂", "🥰"].map((emoji) => (
              <span
                key={emoji}
                className="emoji"
                onClick={() => handlemood(emoji)}
              >
                {emoji}
              </span>
            ))}
          </div>
          <label htmlFor="name" className="text-start block">
            User name:
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full border-2 rounded-xl"
            name="user"
            value={Userdata.user}
            onChange={datachange}
          />
          <label htmlFor="name" className="text-start block mt-[12px]">
            Comment:
          </label>
          <textarea
            className="comment-box w-full border-2"
            placeholder="Add a Comment..."
            name="comment"
            value={Userdata.comment}
            onChange={datachange}
          ></textarea>
          <button className="submit-btn">Submit Now</button>
        </div>
      </form>

      <div className="mt-7 bg-slate-600 rounded-2xl p-5 text-white">
        <h3 className="font-bold text-2xl ">{displaydata.user}</h3>
        <h5>{displaydata.comment}</h5>
        <h4>{displaydata.emoji}</h4>
      </div>
    </>
  );
};

export default Com;
