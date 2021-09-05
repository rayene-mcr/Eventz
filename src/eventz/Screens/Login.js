import axios from "axios";
import React, { useState } from "react";
import { Redirect,Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import authSvg from '../assets/login.svg'
import { authenticate, isAuth } from '../helpers/auth';
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';





 function Login ({history}) {
     const [formData, setFormData] = useState({
         email:"",
         password1:"",
     })
     const {email,password1} = formData 
     //Handle change from inputs
     const handleChange = text => e => {
         setFormData({...formData,[text]:e.target.value})
     }
     const informParent = response => {
      authenticate(response, () => {
        isAuth() && isAuth().role === 'admin'
          ? history.push('/invites')
          : history.push('/display');
      });
    };
    // Send Facebook token 
    const sendFacebookToken = (userID, accessToken)=> {
      axios.post('http://localhost:3001/api/facebooklogin',{
        userID, accessToken
      }).then(res=> {
        console.log(res.data)
        informParent(res)
      }).catch(err=> {
        toast.error('Facebook Auth error')
      })
    }
    
     //Send google token
     const sendGoogleToken = tokenId => {
      axios
        .post('http://localhost:3001/api/googlelogin', {
          idToken: tokenId
        })
        .then(res => {
          localStorage.setItem("googleemail",res.data.user.email)
          localStorage.setItem("googlename",res.data.user.name)  
          console.log(res.data);
          informParent(res);
        })
        .catch(error => {
          console.log('GOOGLE SIGNIN ERROR', error.response);
        });
    };
    
     //Get response from google
     const responseGoogle = response => {
      console.log(response);
      sendGoogleToken(response.tokenId);
    };
    // Get Response from facebook
    const responseFacebook = response => {
      console.log(response);
      sendFacebookToken(response.userID, response.accessToken)
    };
     //Submit data to backend
     const handleSubmit = e => {
      console.log(process.env.REACT_APP_API_URL);
      e.preventDefault();
      if (email && password1) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .post('http://localhost:3001/api/login', {
            email,
            password: password1
          })
          .then(res => {
            authenticate(res, () => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Submitted'
              });
              console.log(res.data.user.role)
              localStorage.setItem("name",res.data.user.name)
              localStorage.setItem("email", res.data.user.email)
              localStorage.setItem("role",res.data.user.role)
              isAuth() && isAuth().role === 'admin'
                ? history.push('/adminroute')
                : history.push('/display');
              toast.success(`Hey ${res.data.user.name}, Welcome back!`);
            });
          })
          .catch(err => {
            setFormData({
              ...formData,
              email: '',
              password1: '',
              textChange: 'Sign In'
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error('Please fill all fields');
      }
    };
    return (
        <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
            { isAuth()? <Redirect to='/display'/>:null }
            <ToastContainer/>
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold'>
                            Sign In for eventz
                        </h1>
                        <form className='w-full flex-1 mt-8 text-indigo-500'
                        onSubmit={handleSubmit}
                        >
                            <div className="mx-auto max-w-xs relative">
                            <input 
                            type='email'
                            placeholder='Email'
                            onChange = {handleChange('email')}
                            value={email}
                            className='w-full px-8 py-4 mt-3 rounded-lg font-medium bg-gray-100 boarder boarder-gray-200 placeholder-gray-500 text-sm focus:bg-white'
                            />
                            <input 
                            type='password'
                            placeholder='Password'
                            onChange = {handleChange('password1')}
                            value={password1}
                            className='w-full px-8 py-4 mt-3 rounded-lg font-medium bg-gray-100 boarder boarder-gray-200 placeholder-gray-500 text-sm focus:bg-white'
                            />
                            <button
                            type='submit'
                            className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
                                Register
                            </button>
                            <a href='/users/password/forget'
                            className='no-underline hover:underline text-indigo-599 text-md text-right absolute right-0 mt-2'>
                                Forgot password?
                            </a>
                            </div>
                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign up 
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                            <a
                  className='mt-3 w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  href='/register'
                  target='_self'
                >
                  <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                  <span className='ml-4'>Sign Up</span>
                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
                <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
                </div>
            </div>

        </div>
    )
}
export default Login;
