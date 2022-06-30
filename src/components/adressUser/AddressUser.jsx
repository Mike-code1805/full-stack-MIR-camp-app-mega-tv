/* eslint arrow-body-style: ["error", "always"] */
/* eslint no-underscore-dangle: 0 */
/* eslint-env es6 */

import React, { useEffect, useState } from "react";
// import Subtitle from "../../shared/subtitle/index.jsx";
// import Input from "../../shared/input/index.jsx";

// import Button from "../../shared/button/index.jsx";
import "./styles.scss";

function AddressUser() {
  const [active, setActive] = useState(false);
  const [citys, setCitys] = useState([]);
  const [selectedText, setSelectedText] = useState(
    "STREET, ADDRESS, CITY, STATE"
  );

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/khriztianmoreno/tv-services-challenge/main/assets/buildings.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCitys(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const toggle = () => {
    setActive((wasOpened) => {
      return !wasOpened;
    });
  };

  return (
    <div className="container">
      <div onClick={toggle} className="select-box">
        <div
          className={active ? "options-container active" : "options-container"}
        >
          {citys.map((item) => {
            return (
              <div
                key={item._id}
                onClick={() => {
                  setSelectedText(`${item.name}
              ${item.address}
              ${item.city}
              ${item.state}
              ${item.postal}`);
                }}
                className="option"
              >
                <input type="radio" className="radio" />
                <label htmlFor={item.id}>
                  {item.name}
                  {item.address}
                  {item.city}
                  {item.state}
                  {item.postal}
                </label>
              </div>
            );
          })}
        </div>
        <div className="selected">{selectedText}</div>
        <div className="search-box">
          <input
            onClick={() => {
              setActive(false);
            }}
            className="input"
            placeholder={selectedText}
          />
        </div>
      </div>
    </div>
  );
}

export default AddressUser;

// <div class="option">
// <input type="radio" class="radio" id="film" name="category" />
// <label for="film">Film Animation</label>
// </div>

// <div class="option">
// <input type="radio" class="radio" id="science" name="category" />
// <label for="science">Science & Technology</label>
// </div>

// <div class="option">
// <input type="radio" class="radio" id="art" name="category" />
// <label for="art">Art</label>
// </div>

// <div class="option">
// <input type="radio" class="radio" id="music" name="category" />
// <label for="music">Music</label>
// </div>

// <div class="option">
// <input type="radio" class="radio" id="travel" name="category" />
// <label for="travel">Travel & Events</label>
// </div>

// <div class="option">
// <input type="radio" class="radio" id="sports" name="category" />
// <label for="sports">Sports</label>
// </div>

// <div class="option">
// <input type="radio" class="radio" id="news" name="category" />
// <label for="news">News & Politics</label>
// </div>

// <div class="option">
// <input type="radio" class="radio" id="tutorials" name="category" />
// <label for="tutorials">Tutorials</label>
// </div>
