import React from 'react'
import {useForm} from 'react-hook-form'

function Registration()
{
    const { register,handleSubmit,formState:{errors}}=useForm();
    const onFormSubmit=(userData)=>{
        console.log(userData)
    }
    return(
        <div id="reg">
        <div className='row'>
            <div className="container col-11 col-sm-8 col-md-5 mx-auto mt-5 mb-4">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    {/* username */}
                    <div className="mb-3">
                        <label htmlFor="un"><em>Username</em></label>
                        <input type="text" id="un" className="form-control" {...register("username", { required: true, minLength: 6 ,maxLength:10})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 6</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email"><em>Email</em></label>
                        <input type="email" id="email" className="form-control" {...register("email", { required: true })} />
                        {/* validation error msg for email */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="password"><em>Password</em></label>
                        <input type="password" id="password" className="form-control" {...register("password", { required: true,maxLength:4, maxLength:8 })} />
                        {/* validation error msg for password */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Password required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 8</p>}
                    </div>
                <div className='row'>
                    {/* date of birth */}
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="dob"><em>Date of birth</em></label>
                        <input type="date" id="dob" className="form-control" {...register("dob", { required: true })} />
                        {/* validation error msg for username */}
                        {errors.dob?.type === 'required' && <p className='text-danger'>* Date of birth required</p>}
                    </div>
                    {/* select branch */}
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="branch"><em>Branch</em></label>
                        <select id="branch" className="form-select" {...register("branch", { required: true })} defaultValue={'CSE'}>
                            <option value="cse">CSE</option>
                            <option value="it">IT</option>
                            <option value="ece">ECE</option>
                        </select>
                        {/* validation error msg for branch */}
                        {errors.branch?.type === 'required' && <p className='text-danger'>* Branch is required</p>}
                    </div>
                </div>
                <div className='row'>
                    {/* gender */}
                    <div className="mb-3 col-sm-6">
                        <label><em>Choose a gender</em></label>
                        {/* male */}
                        <div className="form-check">
                            <input type="radio" id="male" className="form-check-input" {...register("gender", { required: true })} value="male" />
                            <label htmlFor="male" className="form-check-label"><em>Male</em></label>
                        </div>
                        {/* female */}
                        <div className="form-check">
                            <input type="radio" id="male" className="form-check-input" {...register("gender", { required: true })} value="female" />
                            <label htmlFor="female" className="form-check-label"><em>Female</em></label>
                        </div>
                        {/* validation error msg for gender */}
                        {errors.gender?.type === 'required' && <p className='text-danger'>* Gender required</p>}
                    </div>
                    {/* Skills */}
                    <div className="mb-3 col-sm-6">
                        <label><em>Choose a skill</em></label>
                        {/* front-end */}
                        <div className="form-check">
                            <input type="radio" id="front-end" className="form-check-input" {...register("skills")} value="front-end" />
                            <label htmlFor="front-end" className="form-check-label"><em>Front-end</em></label>
                        </div>
                        {/* back-end */}
                        <div className="form-check">
                            <input type="radio" id="back-end" className="form-check-input" {...register("skills")} value="back-end" />
                            <label htmlFor="back-end" className="form-check-label"><em>Back-end</em></label>
                        </div>
                    </div>
                </div>

                    {/* user feedback */}
                    <div className="mb-3">
                        <label htmlFor="feedback"><em>Feedback</em></label>
                        <textarea id="feedback" rows="4" className="form-control" {...register("feedback", { required: true })}></textarea>
                        {/* validation error msg for feedback */}
                        {errors.feedback?.type === 'required' && <p className='text-danger'>* Feedback required</p>}
                    </div>
                    {/* submit button */}
                    <button type="submit" className="btn btn-success w-50 mb-1">Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}
export default Registration;