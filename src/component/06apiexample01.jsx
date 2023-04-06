import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header01 from "./03header";

const Apiexample01 = () => {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setdata(result);
        setloading(true);
      });
  }, []);

  return (
    <>
      <Header01/>
      {loading ? (
        Object.entries(data).map((val, ky) => {
          // console.log("key=", ky, "value=", val);
          console.log(data[0].title);

          return (         
                  <div key={val} className="container">                                
                      {/* <li > {ky}</li> */}
                      <li > {val[1].title} </li>                    
                {/* <li > {data[0].title} </li> */}
                {/* <li> {JSON.stringify(data[1])} </li> */}
              </div>           
          );
        })
      ) : (
        <h1> "loading....please wait..." </h1>
      )}
    </>
  );
};

export default Apiexample01;
