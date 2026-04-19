import React from "react";

const LineItems = ({setModal, press, setPress, setEditingId, before, after, step, sub}) => {
  return (
    <div>
      <div>
        <ul>
          {press.map((item, index) => (
            <li key={index}>
              service: {item.service} <br />
              Quantity: {item.quant} <br />
              Price: {item.price}
              <button
                style={{ backgroundColor: "blue" }}
                onClick={() => {
                  setEditingId(item.id);
                  setModal(true);
                }}
              >
                Edit
              </button>
              <button
                style={{ backgroundColor: "blue" }}
                onClick={() => setPress(press.filter((item, i) => i !== index))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button
          className="btn"
          style={{ backgroundColor: !sub ? "gray" : "blue" }}
          onClick={before}
        >
          before
        </button>
        <button
          className="btn"
          style={{ backgroundColor: press.length < 1 ? "gray" : "blue" }}
          onClick={after}
          disabled={press.length < 1}
        >
          next
        </button>
        <p>{step} of 3</p>
      </div>
    </div>
  );
};

export default LineItems;
