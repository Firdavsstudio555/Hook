import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  // const { handleSubmit, submitDats } = (data) => {
  //   console.log(data)
  // }
  const submitDats = (data) => {
    console.log(data)
  }
  const { register, handleSubmit } = useForm()
  return (
    <>
      <div className='grid'>
        <h1 className='text-red-500'>Form</h1>
        <div>
          <input {...register("name", { required: true })}
            className='p-5' type="text"
            placeholder='Your name' />
          <input {...register("email", { required: true} )}
            className='p-5' type="text"
            placeholder='Your email' />
          <input {...register("password", { required: true}  )}
            className='p-5' type="text"
            placeholder='Your password' />
          <input {...register("confirmpassword", { required: true })}
            className='p-5' type="text"
            placeholder='Your confirmpassword' />
          <input {...register("city", { required: true })}
            className='p-5' type="text"
            placeholder='Your city' />
          <input {...register("country", { required: true })}
            className='p-5' type="text"
            placeholder='Your  country' />
          <button onClick={handleSubmit(submitDats)}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
