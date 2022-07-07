

const Contact = (props) => {
  return (
    <>
    {/* Container externo*/}
    <div
        name="contact"
        className=" w-full h-screen bg-bg_light dark:bg-bg_dark flex justify-center items-center p-4"
    >   {/*Formulário */}
        <form method="POST" action="https://getform.io/f/a2ea2d9d-c968-4ba0-84cf-1f3524482e26" className="flex flex-col max-w-[600px] w-full"> 
            <div className=" mt-12 pb-8 text-title_light dark:text-title_dark" >
                <p className="text-4xl font-bold inline border-b-4 border-detail_light dark:border-detail_dark ">{props.translate("Contact", "p_title")}</p>
                <p className="py-4">{props.translate("Contact", "p_description")}</p>
            </div>
            <input className="bg-navbar_light dark:bg-bg_light p-2 rounded-md" type="text" placeholder="Name" name="name" />

            <input className="bg-navbar_light dark:bg-bg_light my-4 p-2 rounded-md" type="text" placeholder="Email" name="email" />
            <textarea className="bg-navbar_light dark:bg-bg_light p-2 rounded-md" rows="5" placeholder="Type a message..." name="message" />
            <button className="text-detail_light  border-2 border-detail_light hover:bg-detail_light hover:border-detail_light hover:text-white px-4 dark:text-detail_dark  border-2 dark:border-detail_dark dark:hover:bg-detail_dark dark:hover:border-detail_dark dark:hover:text-white py-3 my-8 mx-auto flex items-center"> {props.translate("Contact", "button_submit")} </button>
        </form>{/*fim do Formulário */}
    </div>{/* Fim do Container externo*/}
    </>
  );
};

export default Contact;
