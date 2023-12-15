import React, { useState, useEffect } from "react";
function AddUpdateInput({ id, label, defaultValue, type = "text" }) {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    if (type == "checkbox") {
      const now = new Date();
      const hours = now.getHours();
      const openTime = parseInt(defaultValue[0]?.split(":")[0]);
      const closeTime = parseInt(defaultValue[1]?.split(":")[0]);
      
      hours > openTime && hours < closeTime
        ? setIsClosed(false)
        : setIsClosed(true);
    }
  }, []);

  return (
    <div className="form-group">
      <label className="col-xs-10 col-sm-2 control-label">{label}</label>
      <div className="col-xs-12 col-sm-10">
        <input
          name={id}
          type={type}
          className={
            type === "checkbox" ? "form-check-input" : "form-control col-lg-10"
          }
          defaultValue={defaultValue}
          defaultChecked={type == "checkbox" && isClosed}
        />
      </div>
    </div>
  );
}

export default AddUpdateInput;
