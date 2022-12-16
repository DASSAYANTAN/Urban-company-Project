import React from "react";

const Slider1 = () => {
  return (
    <div id="slider1">
      <a id="a1" href="">
        Home / Delhi-Ncr
      </a>
      <h1 id="h11">Home Services, on demand.</h1>
      <aside id="aside1">
        <label id="inp1">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png"
            alt=""
            height="20px"
            width="30px"
          />
          <label>Delhi/NCR</label>
          <i class="fa-solid fa-caret-down"></i>
        </label>
        <input id="inp2" type="search" placeholder="Search for services" />
        <span id="mglass">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <br />
        <a href="">Women's Therapies,</a> &nbsp;
        <a href="">Salon for Men,</a> &nbsp;
        <a href="">Men's Therapies</a>&nbsp;etc
      </aside>
    </div>
  );
};

export default Slider1;
