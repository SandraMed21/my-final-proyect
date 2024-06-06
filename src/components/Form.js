// // src/components/Form.js
// import React from 'react';
// import { useForm } from 'react-hook-form';

// const Form = () => {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = data => {
//     fetch('https://api.example.com/data', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(data => alert('Data inserted successfully'))
//       .catch(error => alert('Error inserting data'));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         name="name"
//         ref={register({ required: true })}
//         placeholder="Name"
//       />
//       {errors.name && <span>Name is required</span>}
//       <input
//         name="value"
//         ref={register({ required: true })}
//         placeholder="Value"
//       />
//       {errors.value && <span>Value is required</span>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;
