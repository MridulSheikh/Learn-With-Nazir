import Layout from '../components/shared/Layout'
import { useForm, SubmitHandler} from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

type Inputs = {
    email: string,
    password: string,
};

function Login() {
    const { singin, error, setError, userLoading, user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const from  = location?.state?.from?.pathname || "/";
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setError('');
        singin(data.email, data.password)
    };
    if(user?.email){
        navigate(from, {replace : true})
    }
    return (
        <div>
            <Layout>
                <div className='grid bg-white rounded-md shadow-lg p-5 lg:grid-cols-2 container xl:max-w-screen-lg mx-auto mt-10'>
                    <div>
                        <div>
                            <img src="/img/login.jpg" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center h-full'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mt-2'>
                                    <label className='text-sm' htmlFor="">*Email</label>
                                    <br />
                                    <input className='border px-2 py-1 rounded-md w-full' {...register('email', { required: true })} />
                                </div>
                                <div className='mt-2'>
                                    <label className='text-sm' htmlFor="">*Password</label>
                                    <br />
                                    <input className='border px-2 py-1 rounded-md w-full' {...register('password', { required: true })} />
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
                                    I haven't any account?<Link to="/registration"> <span className='ml-1 hover:underline'>registration</span> </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Login