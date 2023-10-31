import { useState, useEffect } from "react";
export default function Resturnt() {
  let [products, setResturnt] = useState([]);
  const getResturnt = async () => {
    let response = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=pizza"
    );
    let data = await response.json();
    setResturnt(data.recipes);
  };

  useEffect(() => {
    getResturnt();
  }, []);

  let [salads, setSalads] = useState([]);
  const getBashar = async () => {
    let responsee = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=salad"
    );
    let dataa = await responsee.json();
    setSalads(dataa.recipes);
  };

  useEffect(() => {
    getBashar();
  }, []);

  let [corns, setCorns] = useState([]);
  const getH = async () => {
    let responseee = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=corn"
    );
    let dataaa = await responseee.json();
    setCorns(dataaa.recipes);
  };

  useEffect(() => {
    getH();
  }, []);

  return (
    <>
      <div className="row">
        <h2 className="fs-2 text-center text-white bg-dark pt-2">Pizza</h2>
        {products.map((ele) => {
          return (
            <div className="col-md-4" key={ele.id}>
              <h2>{ele.title}</h2>
              <img src={ele.image_url} className="w-100" alt="" />
            </div>
          );
        })}

        <h2 className="fs-2 text-center text-white bg-dark mt-2">Salads</h2>
        {salads.map((ele) => {
          return (
            <div className="col-md-4" key={ele.id}>
              <h2>{ele.title}</h2>
              <img src={ele.image_url} className="w-100" alt="" />
            </div>
          );
        })}

        <h2 className="fs-2 text-center text-white bg-dark mt-2">Corns</h2>
        {corns.map((ele) => {
          return (
            <div className="col-md-4" key={ele.id}>
              <h2>{ele.title}</h2>
              <img src={ele.image_url} className="w-100" alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
