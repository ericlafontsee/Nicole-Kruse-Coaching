import React from "react";

const Modal = () => {
  return (
    <>
      <div
        class="modal fade modal-lg"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered mx-auto">
          <div class="modal-content">
            <div class="modal-body d-flex flex-column flex-md-row p-0">
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <a
                href="https://docs.google.com/forms/d/1aoXrK00SH_Z-vmWvZJEE1i1O296j0hvZXPHYjjTuufQ/viewform?edit_requested=true"
                target="_blank"
                class="col-12 col-md-6"
              >
                ONE TIME MACRO <br/>
                COUNT APP
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdD1DJY0rCUpzgG3xTa4Z8cWZhwoR5hLV3-oAxGSAILDm7AEA/viewform"
                target="_blank"
                class="col-12 col-md-6"
              >
                1:1 <br/>
                COACHING APP
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
