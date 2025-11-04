import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';

const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const showAlertMessage = (type, message)=>{
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(()=>{
        setShowAlert(false);
    }, 5000);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setIsLoading(true);
    // Handle form submission logic here
    // service_pdnl8y2
    // template_6n4dwgj
    try{
        console.log("Form Data:", formData);
        await emailjs.send('service_pdnl8y2', 'template_6n4dwgj', {form_name: formData.name, to_name: "Abhishek", form_email: formData.email, to_email: "abhishekgoyal1311@gmail.com",message: formData.message}, 'tOBeYKGnhlRX3-AnG');
        setIsLoading(false);
        setFormData({name: '', email: '', message: ''});    
        showAlertMessage("success", "Thank you. I will get back to you as soon as possible.");
    }catch(e){
        setIsLoading(false);
        showAlertMessage("danger", "Failed to send email. Please try again later.");
    }
  }
  return (
    <section className='relative flex items-center c-space section-spacing'>
        <Particles 
            className='absolute inset-0 -z-50'
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh={true}
        />
        {showAlert && <Alert type={alertType}  text={alertMessage}/>}
      <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
            <h2 className='text-heading'>Let's Talk</h2>
            <p className='text-body'>I'm always open to discussing new projects and opportunities. Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help. Feel free to reach out!</p>
        </div>
        <form className='w-full' onSubmit={handleSubmit}>
            <div className='mb-5'>
                <label htmlFor="name" className='field-label'>Full Name</label>
                <input type="text" id="name" name='name' className='field-input field-input-focus' placeholder='John Doe' required autoComplete='name' value={formData.name} onChange={handleChange}/>
            </div>
            <div className='mb-5'>
                <label htmlFor="email" className='field-label'>Email Address</label>
                <input type="email" id="email" name='email' className='field-input field-input-focus' placeholder='john.doe@example.com' required autoComplete='email' value={formData.email} onChange={handleChange}/>
            </div>
            <div className='mb-5'>
                <label htmlFor="message" className='field-label'>Message</label>
                <textarea id="message" name='message' className='field-input field-input-focus' placeholder='Your message here...' required autoComplete='off' value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation' >{!isLoading?"Send":"Sending..."}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact