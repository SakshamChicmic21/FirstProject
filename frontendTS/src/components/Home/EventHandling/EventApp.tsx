import React from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";

function EventApp() {
  // const [inputData,setInputData]=React.useState<string>("");

  // function handleOnChange(event:React.ChangeEvent<HTMLInputElement>){
  //     setInputData(event.target.value);
  //     console.log("Input Data:", event.target.value);
  // }
  function submithandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // event.stopPropagation();
    console.log("form submitted");
    const form = event.currentTarget;
    console.log("form element:", form);
    const formData = new FormData(form);
    console.log("Form Data:", formData);
    const username = formData.get("username");
    console.log("Username:", username);
  }

  return (
    <div>
      <form onSubmit={submithandler}>
        {/* <input type="text" name="username" placeholder='Enter your name' /> */}
        <Input type="text" name="username" placeholder="Enter your name" />
        <Button type="submit">Submit</Button>
      </form>
      {/* <div onClick={() => alert('Parent Div Clicked')}>
        <button onClick={(event) => { alert('Button Clicked'); event.stopPropagation(); }}>
          Click Me
        </button>
      </div> */}

      {/* <div>
            <input type="text" placeholder='add your name here' onChange={(e)=>handleOnChange(e)} />

            <h2>Your name is: {inputData}</h2>
        </div> */}
    </div>
  );
}

export default EventApp;
