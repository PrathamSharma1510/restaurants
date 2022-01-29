import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Points from "./Points";
const Home = () => {
  const [data, setdata] = useState([]);
  const [selected, setSele] = useState([]);
  const Click = (id) => {
    if(selected.length >2){
      alert("Can't Select more");
    }
    else{
    setSele([...selected,id]);
    }
  };
  console.log(selected);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log("jasoon", json);
        setdata(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h3>Top Selects</h3>
        <Points array={selected}/>
        <div className="mt-5 mb-5"> Click to give points </div>
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-lg-3 col-md-3 col-3" key={item.id}>
                <div className="card" onClick={()=> Click(item.dishName)}>
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5>{item.dishName}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
