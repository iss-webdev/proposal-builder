import React from "react";

const Preview = ({press, form, con, handle, step}) => {
  return (
    <div>
        <div className="final">
          <div className="toot">
            <h4>Name: {form.name}</h4>
            <h4>email: {form.mail}</h4>
            <h4> company: {form.compname}</h4>
            <h4>Deal Value: {form.deal}</h4>
            <p>Notes: {form.note}</p>
            <p>Valid until {form.num} Days</p>

            <ul>
              {press.map((item, index) => (
                <li key={index}>
                  {item.service} X quantity: {item.quant} X price: {item.price}{" "}
                  = {item.quant * item.price}
                </li>
              ))}
            </ul>

            <p className="total">
              Grand Total:
              {press.reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quant * currentItem.price,
                0
              )}
            </p>

            <button
              className="but"
              style={{ backgroundColor: "blue" }}
              onClick={handle}
            >
              before
            </button>
            <button
              className="bttn"
              style={{ backgroundColor: "blue" }}
              onClick={con}
            >
              submit
            </button>

            <p>{step} of 3</p>
          </div>
        </div>
    </div>
  );
};

export default Preview;
