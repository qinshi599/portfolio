import React,{useState} from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e5bdbd3a-d481-42b9-be51-246d538055cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer_bg_color.png")] bg-no-repeat bg-center
    bg-[length:90%_auto]'>
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
        <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        If you have any questions, feedback, or just want to say hello, feel free to reach out to me.
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6 mb-8 mt-10">
                <input type="text" placeholder="Enter your name" required
                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white" name="name"/>
                <input type="email" placeholder="Enter your email" required 
                 className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white" name="email"/>
            </div>
            <textarea rows="6" placeholder="Enter your message" required
             className="w-full p-4 outline-none border-[0.5px] border-gray-400
             rounded-md bg-white mb-6" name="message"></textarea>


            <button type="summit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black duration-500">Summit Now <Image src={assets.right_arrow_white} alt="arrow white" 
            className="w-4"/></button>

            <p className="mt-4">{result}</p>

        </form>
    </div>
  )
}

export default Contact;