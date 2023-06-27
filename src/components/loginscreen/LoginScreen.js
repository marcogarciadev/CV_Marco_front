import React, { useState } from 'react';
export const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else {

      if (email == 'marcogarciadev@gmail.com' && subject == 'interactivas2023') {
        setSuccessMsg(`Thank you dear , Your Messages has been sent Successfully!`);
        console.log(email, "email")
        console.log(subject, "pass")
        window.location.replace("http://localhost:3000/clientes");
      }

      setErrMsg("");
      setEmail("");
      setSubject("");
    }
  };
  return (

    <div className="w-full h-auto bg-bodyColor text-lightText ">
      <div className=" w-full max-w-screen-xl mx-auto ">

        <section
          id="contact"
          className="w-full py-2 pb-0 border-b-[1px] border-b-black"
        >

          <div className="w-full">

            <div className="w-full h-auto flex flex-col lgl:flex-row justify-center my-60">
              <div className="w-full lgl:w-[45%] h-full py-20 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                  {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}

                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Email
                    </p>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className={`${errMsg === "Please give your Email!" &&
                        "outline-designColor"
                        } contactInput`}
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Subject
                    </p>
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      className={`${errMsg === "Plese give your Subject!" &&
                        "outline-designColor"
                        } contactInput`}
                      type="text"
                    />
                  </div>

                  <div className="w-full">
                    <button
                      onClick={handleSend}
                      className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                    >
                      Send Message
                    </button>
                  </div>

                  {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}
                </form>

              </div>
            </div>
          </div>

          {/* <div className=" justify-center items-start text-center pb-5">
      
            <div className="flex flex-col gap-4 font-titleFont my-5">
              <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
                hola
              </h3>
              <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">Contact With Me</h1>
            </div>
          </div> */}
        </section>

      </div>
    </div>

  );
}
