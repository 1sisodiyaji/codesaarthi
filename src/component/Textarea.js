import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function TextForm() {
  const handleUpFSize = (value) => {
    setFontSize(value + "px");
  };

  const handleToggleBold = () => {
    setIsBold(!isBold);
  };

  const handleToggleitalic = () => {
    setisitalic(!isitalic);
  };

  const handleToggleunderline = () => {
    setisunderline(!isunderline);
  };

  const handleToggleleft = () => {
    setisleft(!isleft);
  };

  const handleTogglecenter = () => {
    setiscenter(!iscenter);
  };

  const handleTogglesymbol = () => {
    setissymbol(!issymbol);
  };

  const handleToClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isBold, setIsBold] = useState(false);
  const [isitalic, setisitalic] = useState(false);
  const [isunderline, setisunderline] = useState(false);
  const [isleft, setisleft] = useState(false);
  const [iscenter, setiscenter] = useState(false);
  const [issymbol, setissymbol] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row mb-2 ">
          <div className="col-12 d-flex justify-content-evenly align-items-center">
            <div className="col-3">
              <input
                type="number"
                value={parseInt(fontSize)}
                min={0}
                className="border-0 shadow-0 outline-none text-center bg-success w-75"
                onChange={(e) => handleUpFSize(e.target.value)}
              />
            </div>

            <div className="col-1 d-flex align-items-center justify-content-center ">
              <i
                className={`fi fi-sr-bold ${isBold ? "text-success" : ""}`}
                onClick={handleToggleBold}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                className={`fi fi-sr-italic   ${isitalic ? "text-success" : ""}`}
                onClick={handleToggleitalic}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                className={`fi fi-sr-underline   ${
                  isunderline ? "text-success" : ""
                }`}
                onClick={handleToggleunderline}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                className={`fi fi-sr-align-left   ${isleft ? "text-success" : ""}`}
                onClick={handleToggleleft}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                className={`fi fi-sr-align-center   ${
                  iscenter ? "text-success" : ""
                }`}
                onClick={handleTogglecenter}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                className={`fi fi-sr-symbol   ${issymbol ? "text-success" : ""}`}
                onClick={handleTogglesymbol}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="mb-3" style={{ position: "relative" }}>
          <textarea
            className={`form-control  bg-${
              copied ? "success" : "dark"
            } text-light ${isBold ? "fw-bold" : ""} ${
              isitalic ? "fst-italic" : ""
            } ${isunderline ? "text-decoration-underline" : ""}
            ${isleft ? "text-start" : ""}  ${iscenter ? "text-center" : ""}   ${
              issymbol ? "text-end" : ""
            }`}
            value={text}
            onChange={handleOnChange}
            style={{ fontSize: fontSize }}
            id="myBox"
            rows="8"
          ></textarea>
          <i
            className="fi fi-ss-duplicate"
            icon={copied ? "check" : "paste"}
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              cursor: "pointer",
              padding: "5px",
              color: copied ? "green" : "white",
            }}
            onClick={handleCopyToClipboard}
          ></i>

          {copied && (
            <div style={{ color: "green", marginTop: "5px" }}>Copied!</div>
          )}

          <div>
            <div className="d-flex justify-content-evenly align-items-center flex-wrap my-2">
              <button
                className="btn text-light border border-success shadow-6 text-capitalize"
                onClick={handleToClear}
              >
                Save
              </button>
              <button
                className="btn text-danger text-capitalize border border-danger"
                onClick={handleToClear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
