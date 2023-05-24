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

            </div>
        </div>

       </section>
    );
};

export default Login;