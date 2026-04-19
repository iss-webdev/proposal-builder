  import React from "react";

  const ProposalForm = ({
    press,
    setPress,
    service,
    setService,
    quant,
    setQuant,
    price,
    setPrice,
    editingId,
    setEditingId,
    modal,
    setModal,
    not,
  }) => {
    return (
      <div>
        <div>
          {modal && (
            <div className="modal">
              <div className="inside">
                <p>Service Input Name</p>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />

                <p>Quantity</p>
                <input
                  type="number"
                  value={quant}
                  onChange={(e) => setQuant(e.target.value)}
                />

                <p>Price</p>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <button
                  style={{ backgroundColor: "blue" }}
                  onClick={() => {
                    setPress(
                      press.map((item) =>
                        item.id === editingId
                          ? { ...item, service, quant, price }
                          : item,
                      ),
                    );
                    setModal(false);
                    setEditingId(null);

                    setService("");
                    setQuant("");
                    setPrice("");
                  }}
                >
                  submit
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <p>Service Input Name</p>
          <input
            className="inp"
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />

          <p>Quantity</p>
          <input
            className="inp"
            type="number"
            value={quant}
            onChange={(e) => setQuant(e.target.value)}
          />

          <p>Price</p>
          <input
            className="inp"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button
            className="btn"
            onClick={() => {
              setPress([...press, { service, price, quant, id: Date.now() }]);

              setService("");
              setPrice("");
              setQuant("");
            }}
            disabled={!not}
            style={{ backgroundColor: !not ? "gray" : "blue" }}
          >
            Add
          </button>
        </div>
      </div>
    );
  };

  export default ProposalForm;
