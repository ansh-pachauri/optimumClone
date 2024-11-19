import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import dotenv from "dotenv"
// dotenv.config()


const Input = ({name, label, register, required ,type,pattern,onChange, placeholder}) => (
  <>
    <label htmlFor={name} 
     className="block text-[#002865] font-medium mt-3">{label}</label>
    <input {...register(name, { required })}
    id={name}
    type={type}
    pattern={pattern}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
  </>
);

const Select = React.forwardRef(({ name,label, register }, ref) => (
    <div className="mb-4 mt-3">
      <label htmlFor={name} className="block text-[##002865] font-medium mb-1">{label}</label>
      <select
      id={name}
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

  // const notify = ()=>{
  //   toast.success("Thanks for filling the form",{
  //     theme : "colored"
  //   });
  // }

  const { register, handleSubmit,reset,formState: {errors} } = useForm();

  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const sendEmail = () => {
    const Data = {
      to_email : email,
      reply_to : name,
    } 
    emailjs
      .send(process.env.emailService, process.env.templateName, Data, process.env.apiKey)
      
    reset();
  };

 

  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row  p-8 sm:p-8 bg-white space-y-4 lg:space-y-0">
        <div className="mb-8 lg:mb-0 lg:max-w-md xl:max-w-2xl">
          <img src={assets.letsimage2} className="w-full max-w-2xl rounded-lg" />
        </div>
        {/* rightside form */}
        <div className="w-full lg:max-w-md xl:max-w-2xl bg-white  sm:p-8 max-w-2xl p-8 rounded-lg ">
          <form onSubmit={handleSubmit(sendEmail)}>

          {/* first name and last name */}
          <div className="flex flex-row sm:flex-col justify-between gap-3">

          <div className="w-full">
          <Input
                  name="reply_to"
                  label="First Name"
                  
                  register={register}
                  
                  required={{value: true, message : "Field required"}}
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">{errors.reply_to.message}</span>
                )}
          </div>

          <div className="w-full">
          <Input
                  name="lastName"
                  label="Last Name"
                  register={register}
                  required={{value: true, message : "Field required"}}
                  type="text"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                )}
          </div>
            
          </div>
            {/* website */}
          <Input
              name="website"
              label="Your Website Name"
              register={register}
              required={{value: true, message : "Please Enter your Correct website Name"}}
             
              type="text"
              
              placeholder="(e.g, www.shadowmarkettingllc.com)"
            />
            {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}

{/* EMAIL */}
            <Input
              name="email"
              label="Email"
              register={register}
              required={{ value: true, message: "Email is required" }}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}




            <Input
              name="phone"
              label="Phone"
              register={register}
              required={{value: true, message : "Phone Number is required"}}
              
              
              type="tel"
              placeholder="Enter your 10-digit phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}


            <Input
              name="company"
              label="Company"
              register={register}
              required={{value: true, message : "Field required"}}
              type="text"
              placeholder="Enter your company name"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}

            <Input
              name="state"
              label="State"
              register={register}
              required={{value: true, message : "Field required"}}
              type="text"
              placeholder="(e.g., New York)"
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}

            <Input
              name="howCanWeHelp"
              label="How Can We Help?"
              register={register}
              required={{value: true, message : "Field required"}}
              type="text"
              placeholder="Describe how we can assist you"
            />
            {errors.howCanWeHelp && <p className="text-red-500 text-sm">{errors.howCanWeHelp.message}</p>}

            <Select label="How Did You Hear About Us?" register={register}
            required={{value: true, message : "Please select an option"}}
             /> 

            <p className=" font-bold text-[#002865] mt-6 text-[12px] sm:text-sm">We do not intend to collect or process personal information. Nevertheless, if you provide such information to us, you affirmatively consent to us collecting and processing it. </p>

            <input type="submit" 
            
             className="mt-4 w-full bg-[#AB0505] text-white font-bold py-2 rounded-md hover:bg-[#E35F58] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" />
          </form>
        
        </div>
      </div>
      
    </>
  );
};

export default Contact;