import React from 'react'
import Layout from '../components/shared/Layout'
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

type Inputs = {
  name: string,
  email: string,
  gender: string,
  password: string,
  re_password: string,
};

interface IFormValues {
  gender: string;
}

const Select = React.forwardRef<HTMLSelectElement, { label: string } & ReturnType<UseFormRegister<IFormValues>>>(({ onChange, onBlur, name, label }, ref) => (
  <div className='mt-3'>
    <label>{label}</label>
    <select className='text-sm' name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
));

function Registration() {
  const { registration, userLoading, error, setError, user } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  console.log(errors)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setError('');
    if (data.re_password != data.password) {
      setError("your re-password didn't match");
      return;
    }
    registration(data.email, data.password, data.name, data.gender)
  };
  return user?.name ? <Navigate to="/login" replace={true} /> :
    <div>
      <Layout>
        <div className='grid bg-white rounded-md shadow-lg p-5 lg:grid-cols-2 container xl:max-w-screen-lg mx-auto mt-10'>
          <div>
            <div>
              <img src="/img/login.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center pt-6'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className='text-sm' htmlFor="">*Name</label>
                  <br />
                  {
                    errors.name &&
                    <p className='text-red-600 text-sm'>please enter a 5 character name</p>
                  }
                  <input className='border px-2 py-1 rounded-md w-full' {...register('name', { required: true, minLength : 5 })} />
                </div>
                <div className='mt-2'>
                  <label className='text-sm' htmlFor="">*email</label>
                  <br />
                  {
                    errors.email &&
                    <p className='text-red-600 text-sm'>please enter a valid email</p>
                  }
                  <input type="email" className='border px-2 py-1 rounded-md w-full' {...register('email', { required: true})} />
                </div>
                <div>
                {
                    errors.gender &&
                    <p className='text-red-600 text-sm'>please enter select your gender</p>
                  }
                  <Select label="Gender" {...register("gender")} />
                </div>
                <div className='mt-2'>
                  <label className='text-sm' htmlFor="">*Password</label>
                  <br />
                  {
                    errors.password &&
                    <p className='text-red-600 text-sm'>please enter the password</p>
                  }
                  <input className='border px-2 py-1 rounded-md w-full' {...register('password', { required: true })} />
                </div>
                <div className='mt-2'>
                  <label className='text-sm' htmlFor="">*Re-Password</label>
                  <br />
                  {
                    errors.re_password &&
                    <p className='text-red-600 text-sm'>please enter the password</p>
                  }
                  <input className='border px-2 py-1 rounded-md w-full' {...register('re_password', { required: true })} />
                </div>
                <div className='text-red-500 mt-3'>
                  {error}
                </div>
                {
                  !userLoading ?
                    <input className='bg-primarymain py-1 text-white w-full mt-5 rounded-sm' type="submit" />
                    :
                    <button className='bg-blue-400 py-1 text-white w-full mt-5 rounded-sm' disabled>Processing...</button>
                }
                <div className='mt-3'>
                  Already have an account?<Link to="/login"> <span className='ml-1 hover:underline'>Login</span> </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
}

export default Registration