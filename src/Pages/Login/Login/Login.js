<<<<<<< HEAD
// import React from 'react';
// import login from '../../../Images/login.png'
// import { useForm } from 'react-hook-form';

// const Login = () => {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);
//   return (
//     <section>
//       <div>
//         <div> <img src={login} alt="" /> </div>
//         <div>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <input {...register("firstName")} />
//             <input type="submit" />
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };
=======
import React from 'react';
import { useFormAction } from 'react-router-dom';
import login from '../../../Images/login.png'

const Login = () => {
  const { register, handleSubmit } = useFormAction();
  const onSubmit = data => console.log(data);
    return (
       <section>
        <div>
            <div> <img src={login} alt="" /> </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
     
      <input type="submit" />
    </form>
>>>>>>> f41cf738390f178743ed92da8c36d7a336d33d6e

// export default Login;