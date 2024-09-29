import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic =  useAxiosPublic();
  const {register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate();

  const onSubmit = data =>{
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{
        // send user to database
        const userInfo={
          name:data.name,
          email:data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res =>{
          if(res.data.insertedId){
            console.log('user added to database')
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          }
        })
        
      })
      .catch(error => console.log(error))
    })
  }

    return (
      <>
      <Helmet>
        <title>Digital | SignUp</title>
      </Helmet>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className="card md:w-1/2 bg-base-100 max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", {required:true})} name='name' placeholder="name" className="input input-bordered" required />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", {required:true})} placeholder="name" className="input input-bordered" required />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{required:true})} name='email' placeholder="email" className="input input-bordered" required />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",
                  {required:true,
                   minLength:6,
                   pattern:/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/, 
                   maxLength:20})} name='password' placeholder="password" className="input input-bordered" required />
                {errors.password?.type ==='required' && <span className="text-red-600">Name is required</span>}
                {errors.password?.type ==='minLength' && <span className="text-red-600">Password must be at least six character</span>}
                {errors.password?.type ==='maxLength' && <span className="text-red-600">Password at most 20 character</span>}
                {errors.password?.type ==='pattern' && <span className="text-red-600">Password must be one uppercase one lowercase, one digit, one special character</span>}
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-center mb-3"><small>Already have account? Please<Link to="/login">Login</Link></small></p>
        </div>
      </div>
  </div>
      </>
    );
};

export default SignUp;