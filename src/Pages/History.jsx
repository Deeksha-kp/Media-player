import React from 'react'

function History() {
  return (
<>
 <div className='p-5'>
 <h2>Wtch History</h2>
 <table className="table table-bordered">
  <thead>
    <tr>
      <th>Video ID</th>
      <th> Title</th>
      <th> Video URL</th>
      <th> Date and Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Big Dawgs</td>
      <td>https://www.youtube.com/watch/ytkuy8688867</td>
      <td>2024-08-24</td>
      <button className='btn'>
      <i className="fa-solid fa-trash" style={{color: "#99b5e5",}} />
      </button>
    </tr>
  </tbody>
 </table>
 </div>
</>
  )
}

export default History