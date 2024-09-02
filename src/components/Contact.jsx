import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  /* for input data */
  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* For Error */
  const [error, seterror] = useState({});
  /* For Sending Btn */
  const [issending, setissending] = useState(false);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setinputdata({
      ...inputdata,
      [name]: value,
    });
  };

  const validate = () => {
    let error = {};
    if (!inputdata.name) {
      error.name = "name is required";
    }

    if (!inputdata.email) {
      error.email = "email is required";
    }
    if (!inputdata.message) error.message = "message is required";
    return error;
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (Object.keys(validationError).length > 0) {
      seterror(validationError);
    } else {
      seterror({});
      setissending(true);

      emailjs
        .send(
          "service_24yo0go",
          "template_qq8fh1n",
          inputdata,
          "b6ODOu967a9LWFYqe"
        )
        .then(() => {
          toast.success("message send successfully");
          setinputdata({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("failed...", error);
          toast.error("failed to send message.please try again");
        })
        .finally(() => {
          setissending(false);
        });
    }
  };
  return (
    <div className="p-4 lg:w-3/4 " id="contact">
      <Toaster />
      <h2 className="text-center text-4xl  font-semibold my-8 tracking-tighter">
      Let&apos;s <span className="text-rose-500 ml-2">Connect</span>
      </h2>
      <form className="shadow-md shadow-green-500 p-3" onSubmit={Handlesubmit}>
        <div className="flex mb-8 space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={inputdata.name}
              placeholder="Name"
              onChange={HandleChange}
              className="mb-8 w-full appearance-none  border-b border-b-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {error.name && (
              <p className="text-rose-800 text-sm">{error.name};</p>
            )}
          </div>

          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              value={inputdata.email}
              placeholder="Email"
              onChange={HandleChange}
              className="mb-8 w-full appearance-none  border-b border-b-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {error.email && (
              <p className="text-rose-800 text-sm">{error.email};</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={inputdata.message}
            placeholder="Message"
            onChange={HandleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows="6"
          />
          {error.message && (
            <p className="text-rose-800 text-sm">{error.message};</p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
            issending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={issending}
        >
          <div className="flex items-center justify-center gap-2">
            {issending ? "sending... " : "send"}
          </div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
