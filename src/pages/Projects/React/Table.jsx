import React, { useState } from "react";

const TableCard = () => {
  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState({ name: "", age: "" });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editRowData, setEditRowData] = useState({ name: "", age: "" });

  const handleAddRow = () => {
    if (!newRow.name || !newRow.age) {
      alert("Please fill out all fields.");
      return;
    }
    setRows([...rows, newRow]);
    setNewRow({ name: "", age: "" });
  };

  const handleEditRow = (index) => {
    setEditingRowIndex(index);
    setEditRowData(rows[index]);
  };

  const handleSaveEditRow = () => {
    const updatedRows = rows.map((row, index) =>
      index === editingRowIndex ? editRowData : row
    );
    setRows(updatedRows);
    setEditingRowIndex(null);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <>
    <div className="conatiner-fluid vh-100 design py-5" style={{backgroundColor:'#1E1E1E'}}>
    <div className="container text-center g-0">
      <h2 className="text-warning">Interactive Table</h2>
      <div className="w-100">
          <div className="text-success row g-0">
            <p className="border col-4 p-2">Name</p>
            <p className="border col-4 p-2">Age</p>
            <p className="col-4 border p-2">Actions</p>
          </div>
        <div className="row g-0">
          {rows.map((row, index) => (
            <div key={index}>
              {editingRowIndex === index ? (
                <>
                <div className="row g-0 bg-dark">
                  <div className="border col-4">
                    <input
                      type="text"
                      className="bg-dark text-light border-0 p-2 w-100"
                      value={editRowData.name}
                      onChange={(e) =>
                        setEditRowData({ ...editRowData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="border col-4"> 
                    <input
                      type="number"
                      className="bg-dark text-light border-0 p-2 w-100"
                      value={editRowData.age}
                      onChange={(e) =>
                        setEditRowData({ ...editRowData, age: e.target.value })
                      }
                    />
                  </div>
                  <div className="border col-4">
                    <div className="row g-6">
                        <div className="col-6 my-1">
                        <button onClick={handleSaveEditRow} className="btn btn-sm border  shadow-0  text-success text-capitalize">Save <i class="fi fi-ss-check-circle"></i></button>
                        </div>
                        <div className="col-6 my-1">
                        <button onClick={() => setEditingRowIndex(null)} className="btn btn-sm text-danger border text-capitalize">
                    <i class="fi fi-rr-trash"></i> Cancel
                    </button>
                        </div>
                    </div>
                  </div>
                  </div>
                </>
              ) : (
                <>
                <div className="row g-0 bg-dark my-2">
                  <div className="text-light text-capitalize bg-dark border col-4 d-flex align-items-center justify-content-center">{row.name}</div>
                  <div className="text-light bg-dark border col-4 d-flex align-items-center justify-content-center">{row.age}</div>
                  <div className="col-4">
                    <div className="row border g-0">
                        <div className="col-6  my-1">
                        <button onClick={() => handleEditRow(index)} className="btn btn-sm border shadow-0 text-warning  text-capitalize"> <i class="fi fi-sr-pen-clip"></i> Edit</button>
                        </div>
                        <div className="col-6  my-1">
                    <button onClick={() => handleDeleteRow(index)} className="btn btn-sm  border shadow-0 text-danger ms-1  text-capitalize"> <i class="fi fi-rr-trash"></i> Delete</button>
                    </div>
                    </div>
                  
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="row g-0 bg-dark">
            <div className="border col-4">
              <input
                type="text"
                className="bg-dark text-light border-0 p-lg-2 w-100"
                placeholder="Name"
                value={newRow.name}
                onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
              />
            </div>
            <div className="border col-4">
              <input
                type="number"
                className="bg-dark text-light border-0 p-lg-2 w-100"
                placeholder="Age"
                value={newRow.age}
                onChange={(e) => setNewRow({ ...newRow, age: e.target.value })}
              />
            </div>
            <div className="col-4 border">
              <button onClick={handleAddRow} className="border btn  bg-dark  text-capitalize text-light">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default TableCard;
