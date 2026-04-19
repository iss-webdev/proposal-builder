import React from "react";

const CustomerInfo = ({ form, setForm, sub, handle, step }) => {
  return (
    <div>
      <div>
        <p>Name</p>
        <input
          className="inp"
          type="text"
          value={form.name}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        <p>email</p>
        <input
          className="inp"
          type="email"
          value={form.mail}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, mail: e.target.value }))
          }
        />
        {!form.mail.includes("@") && <p>Enter a valid Email</p>}

        <p>Company Name</p>
        <input
          className="inp"
          type="text"
          value={form.compname}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, compname: e.target.value }))
          }
        />

        <p>Deal value</p>
        <input
          className="inp"
          type="text"
          value={form.deal}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, deal: e.target.value }))
          }
        />

        <p>Notes</p>
        <textarea
          value={form.note}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, note: e.target.value }))
          }
        ></textarea>

        <p>Valid Until</p>
        <input
          type="number"
          placeholder="Enter days"
          value={form.num}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, num: e.target.value }))
          }
        />
        <button
          className="btn"
          disabled={!sub}
          style={{ backgroundColor: !sub ? "gray" : "blue" }}
          onClick={handle}
        >
          next
        </button>

        <p>{step} of 3</p>
      </div>
    </div>
  );
};

export default CustomerInfo;
