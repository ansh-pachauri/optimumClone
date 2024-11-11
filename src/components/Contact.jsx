import React from "react";
import { assets } from "../assets/assets";
import { useForm } from "react-hook-form";

const Input = ({ label, register, required ,type,pattern}) => (
  <>
    <label className="block text-blue-800 font-medium mt-3">{label}</label>
    <input {...register(label, { required })}
    type={type}
    pattern={pattern}
    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label  className="block text-gray-700 font-medium mb-2">{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="Online Search">Online Search</option>
      <option value="Instagram">Instagram/Facebook</option>
      <option value="Linkedln">Linkedln</option>
      <option value="Tv">Tv</option>
      <option value="Email">Email</option>
      <option value="Other">Other</option>
    </select>
  </>
));

const Contact = () => {
  const { register, handleSubmit,formState: {errors} } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
 

  return (
    <>
      <div className="flex justify-around p-8 bg-gray-50">
        <div>
          <img src={assets.letsimage2} className="w-full max-w-xl rounded-lg" />
        </div>
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between gap-3">

          <Input label="First Name" register={register} required={{ value: true, message: "First Name is required" }} type="text"
            />

            <Input label="Last Name" register={register} required={{ value: true, message: "Last Name is required" }} 
                type='text'
            />
          </div>
            

            <Input label="Email" register={register} required={{ value: true, message: "Email is required" }}
             type="email"/>
             {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}


            <Input label="Phone" register={register} required={{ value: true, message: "Number is required" }}
            type="tel"
            pattern={{
                value: /^[0-9]{10}$/,
                message: "Phone Number must be of 10 digits"
            }} />

            <Input label="Company" register={register} required={{ value: true, message: "Company is required" }}
            type="text" />

            <Input label="State" register={register} required={{ value: true, message: "State is required" }}
            type="text" />

            <Input label="How Can We Help?"
              register={register}
              required={{ value: true, message: "required" }}
              type="text" 
            />

            <Select label="How Did You Hear About Us?" {...register("hear")} /> 

            <input type="submit" 
             className="mt-4 w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
