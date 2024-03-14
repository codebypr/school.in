import React, { useState } from 'react';

function Demo() {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({ ...checkboxValues, [name]: checked });
  };

  const getSelectedCheckboxValues = () => {
    let selectedCheckboxes = [];
    for (let checkbox in checkboxValues) {
      if (checkboxValues[checkbox]) {
        selectedCheckboxes.push(checkbox);
      }
    }
    return selectedCheckboxes.join(', ');
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="Student"
          checked={checkboxValues.checkbox1}
          onChange={handleCheckboxChange}
        />
       Student
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Teacher"
          checked={checkboxValues.checkbox2}
          onChange={handleCheckboxChange}
        />
        Teacher
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Receptionist"
          checked={checkboxValues.checkbox3}
          onChange={handleCheckboxChange}
        />
        Receptionist
      </label>
      <br />
      <p>Selected checkboxes: {getSelectedCheckboxValues()}</p>
    </div>
  );
}

export default Demo;
