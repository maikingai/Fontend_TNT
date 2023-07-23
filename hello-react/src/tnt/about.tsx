import React from "react";

type Props = { 
  data: string[] 
  Fuc: React.Dispatch<React.SetStateAction<string>>
};

const about = (props: Props) => {
  return (
    <div>
      <h1>about</h1>
      <button onClick={()=>props.Fuc("state set")}> click</button>
      {props.data.map((item, idx) => (
        <h4 key={idx}>{item}</h4>
      ))}
    </div>
  );
};

export default about;
