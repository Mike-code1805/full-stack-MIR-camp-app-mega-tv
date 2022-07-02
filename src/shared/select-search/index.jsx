/* eslint arrow-body-style: ["error", "always"] */
/* eslint no-underscore-dangle: 0 */
/* eslint-env es6 */

import React, { useEffect, useRef, useState } from "react";
import Button from "../button/index.jsx";
import "./styles.scss";

function SelectSearch(props) {
  const { link, placeholder } = props;

  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [citys, setCitys] = useState([]);
  const [selectedText, setSelectedText] = useState(
    placeholder
  );
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCitys(data);
      })
      .catch((err) => {
        return err;
      });
  }, []);
  const toggle = () => {
    setActive((wasOpened) => {
      return !wasOpened;
    });
    setSearchField("");
  };

  const filteredCitys = citys.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchField.toLowerCase()) ||
      item.address.toLowerCase().includes(searchField.toLowerCase()) ||
      item.city.toLowerCase().includes(searchField.toLowerCase()) ||
      item.state.toLowerCase().includes(searchField.toLowerCase()) ||
      item.postal.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const filtered = filteredCitys.map((filt) => {
    return filt;
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const handleClick = () => {
    ref.current.value = "";
  };

  return (
    <div onClick={handleClick} className="container">
      <div onClick={toggle} className="select-box">
        <div
          className={active ? "options-container active" : "options-container"}
        >
          {filtered.map((item) => {
            return (
              <div
                key={item._id}
                onClick={() => {
                  setSelectedText(`${item.address}, 
              ${item.city}, 
              ${item.state}, 
              ${item.postal}`);
                }}
                className="option"
              >
                <input type="radio" className="radio" />
                <label htmlFor={item.id}>
                  {item.name},{item.address},{item.city},{item.state},
                  {item.postal},
                </label>
                <div>
                  <Button width={false} text={"select"} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="selected">{selectedText}</div>
        <div className="search-box">
          <input
            ref={ref}
            onClick={() => {
              setActive(false);
            }}
            className="input"
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectSearch;
