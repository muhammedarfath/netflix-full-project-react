import React,{useState} from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../Hooks/useAuth';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [login,setLogin] = useState(false)
  const { SignIn, SignUp } = useAuth(); 

  const onSubmit = async ({email,password}) => {
    if (login) {
      await SignIn(email,password)
    } else {
      await SignUp(email,password)
    }
  } 
  
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <img
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="relative space-y-8 rounded bg-black/75 py-10 px-6 md:max-w-md md:px-14" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input {...register("email", { required: true })}
               type="email" placeholder="Email" 
               className="input" />
               {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
            </label>
            <label className="inline-block w-full">
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="input"
              />
               {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
            </label>
          </div>

          <button className="w-full rounded bg-[#e50914] py-3 font-semibold">
            Sign In
          </button>

          <div className="text-[gray]">
            New to Netflix?{' '}
            <button type="submit" className="text-white hover:underline">
              Sign up now
            </button>
          </div>
        </form>
      </div>
      
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
    </div>
  );
}

export default Login;
