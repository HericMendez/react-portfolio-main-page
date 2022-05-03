
import { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
    {/* Container externo*/}
    <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >   {/*Formulário */}
        <form method="POST" action="https://getform.io/f/a2ea2d9d-c968-4ba0-84cf-1f3524482e26" className="flex flex-col max-w-[600px] w-full"> 
            <div className="pb-8 text-gray-300" >
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Contact</p>
                <p className="py-4">Submit the form if you want to hire my skills or know more about my work!</p>
            </div>
            <input className="bg-[#ccd6f6] p-2 rounded-md" type="text" placeholder="Name" name="name" />
            <input className="bg-[#ccd6f6] my-4 p-2 rounded-md" type="text" placeholder="Email" name="email" />
            <textarea className="bg-[#ccd6f6] p-2 rounded-md" rows="5" placeholder="Type a message..." name="message" />
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"> Submit </button>
        </form>{/*fim do Formulário */}
    </div>{/* Fim do Container externo*/}
    </Fragment>
  );
};

export default Contact;
