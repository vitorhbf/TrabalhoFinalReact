import React from 'react';
import Input from "../../Input";
import {Div} from "./styled.js";

function Price({ handleChange }) {
  return (
    <Div>
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span> All
      </label>
      <div>
        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="test2"

        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"

        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"

        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"

        />



      </div>
    </Div>
  );
}

export default Price;
