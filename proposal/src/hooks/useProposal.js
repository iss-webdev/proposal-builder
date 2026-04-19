import { useState, useEffect } from "react";

export const useProposal = () => {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    deal: "",
    note: "",
    num: "",
    compname: "",
  });
  const [service, setService] = useState("");
  const [quant, setQuant] = useState("");
  const [price, setPrice] = useState("");
  const [press, setPress] = useState([]);
  const [step, setStep] = useState(1);
  const handle = () => setStep(2);
  const before = () => setStep(1);
  const after = () => setStep(3);
  const [loaded, setLoaded] = useState(false);
  const sub =
    form.name.length >= 3 &&
    form.mail.includes("@") &&
    form.compname.length >= 3;
  const not = service != "" && quant != "" && price != "";
  const con = () => console.log({ form, press });
  const [modal, setModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("proposal");
    if (saved) {
      const data = JSON.parse(saved);
      setForm(data.form);
      setPress(data.press);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("proposal", JSON.stringify({ form, press }));
  }, [form, press, loaded]);

  return {
    form,
    step,
    setStep,
    setForm,
    service,
    con,
    handle,
    setService,
    quant,
    setQuant,
    price,
    setPrice,
    press,
    setPress,
    not,
    modal,
    setModal,
    editingId,
    setEditingId,
    sub,
    after,
    before,
  };
};
