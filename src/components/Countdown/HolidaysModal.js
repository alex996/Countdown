import React from 'react'

export default ({active, onToggle, holidays}) =>
  <div className={`modal${active ? ' is-active' : ''}`}>
    <div className="modal-background" onClick={onToggle}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Holidays</p>
        <button className="delete" aria-label="close" onClick={onToggle}></button>
      </header>
      <section className="modal-card-body">
        <table className="table is-fullwidth is-hoverable is-striped is-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Holiday</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, index) =>
              <tr key={index}>
                <td>{holiday.calendar()}</td>
                <td>{holiday.isHoliday()}</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  </div>
