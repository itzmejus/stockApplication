import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import Axios from "axios";
function HomePage() {
  const API_URL = "http://localhost:5000/stock";
  const [stock, setStock] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchData = () => {
    Axios.get(API_URL).then((res) => {
      setStock(res.data);
      // console.log(stock);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(searchTerm);
  return (
    <div className="container-fluid ">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-sm-12 text-center">
          <h1 className="mt-5 fs-2 fw-bold">
            The easiest way to buy <br /> and sell stocks.
          </h1>
          <h2 className=" fs-5 ">
            stock analysis and screening tool for <br />
            investors in India
          </h2>

          <div class="input-group flex-nowrap mt-4">
            <input
              type="text"
              class="form-control bi bi-search shadow-lg"
              placeholder="search"
              aria-label="search"
              aria-describedby="addon-wrapping"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {stock
        .filter((val) => {
          if (searchTerm === " ") {
            return val;
          } else if (
            val.Name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((data, key) => {
          return (
            searchTerm.length != 0 && (
              <div className=" row justify-content-center mt-5 mb-2">
                <div className="col-lg-6 col-sm-12 text-center bg-white rounded-4 shadow-lg">
                  <h3 className=" mb-4 ms-4 mt-3">
                    {data.Name}
                  </h3>
                  <div className="row p-1  ">
                    <div className="col-xl-4 col-sm-12 ">
                      <h6 className="d-flex justify-content-between">
                        Market_Cap{" "}
                        <span className="text-danger"> ₹{data.Market_Cap}</span>
                      </h6>
                    </div>
                    <div className="col-xl-4 col-sm-12  ">
                      <h6 className="d-flex justify-content-between">
                        Dividend Yield{" "}
                        <span className="text-danger">
                          {" "}
                          ₹{data.Dividend_Yield}
                        </span>
                      </h6>
                    </div>
                    <div className="col-xl-4 col-sm-12">
                      <h6 className="d-flex justify-content-between">
                        Debt Equality{" "}
                        <span className="text-danger">
                          {" "}
                          ₹{data.Debt_to_Equity}
                        </span>
                      </h6>
                    </div>
                    <div className="col-xl-4 col-sm-12 bg1 rounded-pill">
                      <h6 className="d-flex justify-content-between">
                        Current Price:
                        <span className="text-danger">
                          {" "}
                          ₹{data.Current_Market_Price}
                        </span>
                      </h6>
                    </div>
                    <div className="col-xl-4 col-sm-12 bg1 rounded-pill">
                      <h6 className="d-flex justify-content-between">
                        Current Price:
                        <span className="text-danger">
                          {" "}
                          ₹{data.Current_Market_Price}
                        </span>
                      </h6>
                    </div>
                    <div className="col-xl-4 col-sm-12 bg1 rounded-pill">
                      <h6 className="d-flex justify-content-between">
                        EPS <span className="text-danger"> ₹{data.EPS}</span>
                      </h6>
                    </div>

                    <div className="col-xl-4 col-sm-12 ">
                      <h6 className="d-flex justify-content-between">
                        Stock/PE{" "}
                        <span className="text-danger">{data.Stock_PE}%</span>
                      </h6>
                    </div>
                    <div className="col-xl-4 col-sm-12">
                      <h6 className="d-flex justify-content-between">
                        ROE{" "}
                        <span className="text-danger">
                          {data.ROE_Previous_Annum}%
                        </span>
                      </h6>
                    </div>
                    <div className="col-xl-4 col-sm-12 ">
                      <h6 className="d-flex justify-content-between">
                        Reserves{" "}
                        <span className="text-danger">₹{data.Reserves}</span>
                      </h6>
                    </div>
                    <div className="col-xl-4 col-sm-12 bg1 rounded-pill ">
                      <h6 className="d-flex justify-content-between">
                        Debt <span className="text-danger">₹{data.Debt}</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
    </div>
  );
}

export default HomePage;
