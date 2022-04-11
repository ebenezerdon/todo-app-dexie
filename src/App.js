import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h3 className="teal-text center-align">Todo App</h3>
      <form className="add-item-form">
        <input type="text" className="itemField" placeholder="What do you want to do today?" required />
        <button type="button" className="waves-effect btn teal right">Add</button>
      </form>
      <div className="card white darken-1">
        <div className="card-content">
          <form>
            <div className="row">
              <p className="col s10">
                <label>
                  <input type="checkbox" checked className="checkbox-blue" />
                  <span className="black-tex strike-text">Call John Legend</span>
                </label>
              </p>
              <i className="col s2 material-icons delete-button">delete</i>
            </div>
            <div className="row">
              <p className="col s10">
                <label>
                  <input type="checkbox" className="checkbox-blue" />
                  <span className="black-tex">Do my laundry</span>
                </label>
              </p>
              <i className="col s2 material-icons delete-button">delete</i>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
