import React, { useState, useEffect } from 'react';
import { axiosWithAuth as axios } from '../utils/axiosWithAuth';

const mainTruck = {
    truckName: '',
    foodType: '',
    operatorId: 1
};

const TruckList = ({ trucks, updateTrucks }) => {
    const [editing, setEditing] = useState(false);
    const [editTruck, setTruckEdit] = useState(mainTruck);
    const [newTruck, setNewTruck] = useState(mainTruck);

useEffect(() => {
    axios()
    .get() // add when available
    then (res => updateTrucks(res.data));
}, [editing, updateTrucks]);

const editTruck = truck => {
    setEditing(true);
    setTruckEdit(truck);
};

const truckChangeHandler = e => {
    setTruckEdit({ ...editTruck, [e.target.name]: e.target.value});
};

const addTruckChangeHandler = e => {
    setNewTruck({ ...newTruck, truckName: e.target.value });
};

const addFoodChangeHandler = e => {
    setNewTruck({
        ...newTruck,
        foodType: e.target.value
    });
};

const saveEdit = e => {
    e.preventDefault();
    const body = { ...editTruck };
    const { id } = editTruck;
    axios()
    .put(``, body ) // add when available
    .catch(err => console.log(err));
setEditing(false)
truckUpdate();
};

const deleteTruck = (e, id) => {
    e.stopPropagation();
    axios()
    .delete(``) // add when available
    .catch(err => console,log(err));
setEditing(false);
truckUpdate();
};

const addTruck = truck => {
    console.log("trucks", truck);
    axios()
    .post('', truck) // add when available 
    .then(res => console.log("New truck added! ", newTruck))
    .catch(err => console.log(err));
};

function truckUpdate() {
    setTimeout(() => {
        axios()
        .get() // add when available
        .then(res => updateTrucks(res.data))
        .catch(err => console.log(err));
    }, 100);
}

return (
    <div className="colors-wrap">
    <p>Select A Truck!</p>
    <ul>
      {trucks.map(truck => (
        <li  onClick={() => editTruck(truck)}>
          <span>
            <span
              className="delete"
              onClick={e => {
                deleteTruck(e, truck.id);
              }}
            >
              x
            </span>{" "}
            {truck.truckName}
          </span>
          <div
            className="color-box"
            style={{ backgroundColor: "gray" , color: "white"}}
          />
        </li>
      ))}
    </ul>
    {editing && (
      <form onSubmit={saveEdit}>
        <legend>Edit Truck</legend>
        <label>
          Truck Name:
          <input name="truckName" onChange={truckChangeHandler} value={editTruck.truckName} />
        </label>
        <label>
          Food:
          <input name="foodType" onChange={truckChangeHandler} value={editTruck.foodType} />
        </label>
        <div className="button-row">
          <button type="submit">Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      </form>
    )}
   
    <form  onSubmit={() => addTruck(newTruck)}>
      <legend>Add New Truck!</legend>
      
      <label>
        Truck Name:
        <input onChange={addTruckChangeHandler} placeholder="truck name" value={newTruck.truckName} />
      </label>
    
    
      <label>
        Food Type:
        <input onChange={addFoodChangeHandler} placeholder="cuisine" value={newTruck.foodType} />
      </label>
     
      <button class="ui primary button" type="submit">ADD</button>
    </form>
  </div>
);
};
export default TruckList;