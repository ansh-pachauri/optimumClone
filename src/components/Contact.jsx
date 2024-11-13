import React from "react";
import { assets } from "../assets/assets";
import { useForm } from "react-hook-form";

const Input = ({ label, register, required ,type,pattern,placeholder}) => (
  <>
    <label className="block text-blue-800 font-medium mt-3">{label}</label>
    <input {...register(label, { required })}
    type={type}
    pattern={pattern}
    placeholder={placeholder}
    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
  </>
);

const Select = React.forwardRef(({ label, register }, ref) => (
    <div className="mb-4">
      <label className="block text-blue-800 font-medium mb-1">{label}</label>
      <select
        {...register("How Did You Hear About Us?")}
        ref={ref}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="Online Search">Online Search</option>
        <option value="Instagram/Facebook">Instagram/Facebook</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="TV">TV</option>
        <option value="Email">Email</option>
        <option value="Other">Other</option>
      </select>
    </div>
  ));


const Contact = () => {
  const { register, handleSubmit,formState: {errors} } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
 

  return (
    <>
      <div className="flex justify-around p-8 bg-white">
        <div className="mb-8">
          <img src={assets.letsimage2} className="w-full max-w-2xl rounded-lg" />
        </div>
        {/* rightside form */}
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg ">
          <form onSubmit={handleSubmit(onSubmit)}>

          {/* first name and last name */}
          <div className="flex flex-row justify-between gap-3">

          <div className="w-full">
          <Input label="First Name" register={register} required={{ value: true, message: "First Name is required" }} type="text"
            />
          </div>

          <div className="w-full">
          <Input label="Last Name" register={register} required={{ value: true, message: "Last Name is required" }} 
                type='text'
            />
          </div>
            
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
            type="text" placeholder="(eg. New York)" />

            <Input label="How Can We Help?"
              register={register}
              required={{ value: true, message: "required" }}
              type="text" 
            />

            <Select label="How Did You Hear About Us?" register={register} /> 

            <p className=" font-bold text-[#678FF5] mt-6 text-[12px]">We do not intend to collect or process personal information. Nevertheless, if you provide such information to us, you affirmatively consent to us collecting and processing it. </p>

            <input type="submit" 
             className="mt-4 w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
