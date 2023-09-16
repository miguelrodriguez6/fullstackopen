import React, { useState } from "react";

const Filter = (props) => {
  return (
    <>
      <h3>filter by name</h3>
      <div>
        filter shown with: <input value={props.nameFilter} onChange={props.onFilterChange} />
      </div>
    </>

  )
}

export default Filter