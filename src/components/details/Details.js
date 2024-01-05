import React from "react";
import "./details.scss";

const Details = () => {
  return (
    <section id="details">
      <div class="container details__container overflow-hidden">
        <div class="row align-items-center row-cols-1 row-cols-md-3 gx-5">
          <div id="option1" class="col details__option">
            <p>
              Fusce ut pulvinar justo. Proin vulputate accumsan massa ut tempus.
              Morbi a lectus eu justo interdum tristique. Donec consectetur
            </p>
          </div>
          <div id="option2" class="col details__option">
            <p>
              Fusce ut pulvinar justo. Proin vulputate accumsan massa ut tempus.
              Morbi a lectus eu justo interdum tristique. Donec consectetur
            </p>
          </div>
          <div id="option3" class="col details__option">
            <p>
              Fusce ut pulvinar justo. Proin vulputate accumsan massa ut tempus.
              Morbi a lectus eu justo interdum tristique. Donec consectetur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
