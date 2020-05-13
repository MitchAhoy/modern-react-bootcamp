import React, { useState } from 'react';


function NewBoxForm() {

  const handleChange = evt => {
    [evt.target.name, `set${evt.target.name}`] = useState(evt.target.value)
  }

  return (
    <div className="NewBoxForm">
      <form>
        <label htmlFor="height">Height</label>
        <input
          id="height"
          name="height"
          value={this.state.height}
          onChange={handleChange}
        >
        </input>
      </form>
    </div>
  );
}

export default NewBoxForm