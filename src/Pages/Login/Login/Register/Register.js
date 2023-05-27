import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import GoogleIcons from '../../../../Images/google (2).png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from "../../../../Images/login.png";
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import { ToastBar, toast } from 'react-hot-toast';

const Register = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {createUser,updateUser,signInWithGoogle} = useContext(AuthContext)
    const [signUpError,setSignUpError]=useState('');
  



    const handleSignUp = data =>{
     console.log(data)
     setSignUpError('')
     createUser(data.email,data.password)
     .then(result =>{
        const user = result.user;
        toast('user created successfully')
        const userInfo = {
            displayName:data.name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(err =>console.log(err))
     })
     .catch(error =>{
        console.log(error)
        setSignUpError(error.message)});
    }
    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then( (result) =>{
        const user = result.user;
        console.log(user)
  
          
      })
      .catch(error=>{
        console.log(error)
      })
  }
    return (
        <div>
           <section className="mx-6 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 items-center justify-items-center">
        <div>
          {" "}
          <img src={login} style={{height:'400px'}} alt="" />{" "}
        </div>
        <div>
          <h1 style={{color:'#555'}} className="text-center text-3xl font-bold ">Please Sign Up</h1>
          <form  className="mt-3" onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
           <label className="label">
              <span style={{color:'#555'}} className="label-text font-bold">Your Name</span>
            </label>

            <input
              type="text"
              className="input input-bordered w-full max-w-xs"

              {...register("name",
              { required: 'Your Name is Required' }
              )}
            />
            {errors.name && <p className="text-red-500">{errors.name?.message}</p>}
           </div>
          <div className="form-control w-full max-w-xs">
           <label className="label">
              <span style={{color:'#555'}} className="label-text font-bold">Your Email</span>
            </label>

            <input
              type="email"
              className="input input-bordered w-full max-w-xs"

              {...register("email",
              { required: 'Email Address is Required' }
              )}
            />
            {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
           </div>

           <div>
           <label className="label">
              <span style={{color:'#555'}} className="label-text font-bold">Your Password</span>
            </label>
           
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password",
              { required: 'Password is Required',
              minLength:{value:6,message:'password must be at least 6 characters longer'}
            
            }

              )}
              
            /> 
            {errors.password && <p className="text-red-500" >{errors.password?.message}</p>}
           </div>
              {signUpError && <p className='text-red-600'>{signUpError}</p> }
            <input style={{background:'#b8cd06'}} value='SignUp' className="mt-3 btn font-bold text-white border-none w-80 mt-2" type="submit" />
          </form>
          <p style={{color:'#888'}} className="font-medium">Already have an account <Link className="font-bold" style={{color:'#b8cd06'}} to='/Login'>Please Login?</Link></p>
          <div className="divider font-bold">OR</div>
          <button onClick={handleGoogleSignIn} style={{background:'#555'}} className="btn w-80 border-none"> <img src={GoogleIcons} style={{height:'50px',width:'55px'}} alt="" /> Google</button>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Register;