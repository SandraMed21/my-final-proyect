// // src/components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import ChartComponent from './ChartComponent';

// const Dashboard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <ChartComponent data={data} />
//     </div>
//   );
// };

// export default Dashboard;
