import { useState } from "react";
import "./style.css";

function App() {
  const [input, setInput] = useState([{ id: Math.random(), name: "", phone: "" }]);
  const [disable, setDisable] = useState([]);

  const addMore = () => {
    let newfield = { id: Math.random(), name: "", phone: "" };
    setInput([...input, newfield]);
  };

  const removeBtn = (id) => {
    let deleteData = input.filter((val) => val.id !== id);
    setInput(deleteData);
  };

  const doneBtn = (id) => {
    if (!disable.includes(id)) {
      setDisable([...disable, id]);
    }
  };

  const editBtn = (id) => {
    setDisable(disable.filter((disableId) => disableId !== id));
  };

  return (
    <div className="container">
      <h2>Dynamic Form</h2>
      {input.map((val, index) => (
        <div className="form-group" key={val.id}>
          {disable.includes(val.id) ? (
            <>
              <input
                type="text"
                value={val.name}
                disabled
                className="input-field"
                placeholder="Name"
              />
              <input
                type="text"
                value={val.phone}
                disabled
                className="input-field"
                placeholder="Phone"
              />
              <button className="edit-btn" onClick={() => editBtn(val.id)}>Edit</button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={val.name}
                className="input-field"
                placeholder="Name"
                onChange={(e) => {
                  const updatedInputs = input.map((item) =>
                    item.id === val.id ? { ...item, name: e.target.value } : item
                  );
                  setInput(updatedInputs);
                }}
              />
              <input
                type="text"
                value={val.phone}
                className="input-field"
                placeholder="Phone"
                onChange={(e) => {
                  const updatedInputs = input.map((item) =>
                    item.id === val.id ? { ...item, phone: e.target.value } : item
                  );
                  setInput(updatedInputs);
                }}
              />
              <button className="done-btn" onClick={() => doneBtn(val.id)}>Done</button>
              
              {index > 0 && (
                <button className="remove-btn" onClick={() => removeBtn(val.id)}>Remove</button>
              )}
            </>
          )}
        </div>
      ))}
      <button className="add-btn" onClick={addMore}>Add</button>
    </div>
  );
}

export default App;
