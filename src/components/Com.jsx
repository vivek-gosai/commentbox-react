import "../App.css";
import React, { useState ,useEffect} from "react";

const Com = () => {
  const [Userdata, setUserdata] = useState({
    id: "",
    user: "",
    comment: "",
    emoji: "", 
  });
  const [displaydata,setdisplaydata]=useState({})
  const [storage,setstorage]=useState([])

  useEffect(()=>{
    const storeddata =JSON.parse(localStorage.getItem("data")) || [];
     setstorage(storeddata)
  }, [])

  const datachange = (e) => {
    setUserdata({ ...Userdata, [e.target.name]: e.target.value });
  };

  const handleform = (e) => {
    e.preventDefault();
    console.log(Userdata);

    const newID = {...Userdata, id: parseInt(Math.random() * 10000)};


    setstorage([...storage, newID])
    
    setUserdata({
      id: "",
      user: "",
      comment: "",
      emoji: "", 
    });
  };
  
  const handlemood = (emoji) => {
    setUserdata((prev) => ({ ...prev, emoji })); 
  };
  
  useEffect(() => {
    
    console.log("STORAGE", storage);
    localStorage.setItem("data", JSON.stringify(storage));
  },[storage]);

  

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
          <input type="text" name="id" value={Userdata.id} onChange={datachange} hidden />
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
      {
        storage.map((items , index)=>(<>
        <div key={index} className="flex justify-between items-center mt-5"></div>
         <h1 className="font-bold">{items.user}</h1>
         <h1 className="font-bold">{items.comment}</h1>
         <h1 className="font-bold">{items.emoji}</h1>
         
        </>
         
        ))
} 
      </div>
    </>
  );
};

export default Com;
