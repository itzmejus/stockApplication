import React from "react";
import '../styles/Header.css'
function Header() {
  return (
    <div class="container-fluid bgColor">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand fs-3 fw-bold ms-5" href="#">
            Stocks
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
