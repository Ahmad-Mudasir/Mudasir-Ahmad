import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
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
    <div className="p-4 w-full" id="contact">
      <Toaster />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-4xl  font-extrabold my-6 tracking-tighter bg-gradient-to-r from-[#0ef] via-white to-[#0ef] bg-clip-text text-transparent"
      >
        Let&apos;s <span className="text-rose-500 ml-2">Connect</span>
      </motion.h2>
      <div className="mx-auto mb-8 h-px max-w-3xl bg-gradient-to-r from-transparent via-[#0ef]/40 to-transparent" />
      <form
        className="w-full max-w-3xl mx-auto box-border border border-white/10 bg-white/[0.03] rounded-xl p-4 sm:p-6"
        onSubmit={Handlesubmit}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="flex flex-col min-w-0">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputdata.name}
              placeholder="Name"
              onChange={HandleChange}
              className="w-full appearance-none border-b border-b-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            <span className="min-h-[18px] text-rose-500 text-xs mt-1">
              {error.name || ""}
            </span>
          </div>

          <div className="flex flex-col min-w-0">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputdata.email}
              placeholder="Email"
              onChange={HandleChange}
              className="w-full appearance-none border-b border-b-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            <span className="min-h-[18px] text-rose-500 text-xs mt-1">
              {error.email || ""}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-2"
        >
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={inputdata.message}
            placeholder="Message"
            onChange={HandleChange}
            className="w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows="6"
          />
          <span className="min-h-[18px] text-rose-500 text-xs mt-1 inline-block">
            {error.message || ""}
          </span>
        </motion.div>
        <div className="mt-4">
          <button
            type="submit"
            className={`w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
              issending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={issending}
          >
            <div className="flex items-center justify-center gap-2">
              {issending ? "sending... " : "send"}
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
