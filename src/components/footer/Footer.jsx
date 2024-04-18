import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

import { socialMediaIcons } from "../../utils/data";

import "./Footer.css";

function Footer({ socialMedia, email }) {
  //#region ------ configuration ------
  const { register, handleSubmit } = useForm(); // hook form
  //#endregion

  //#region ------ variable declaration ------
  const [contactActive, isContactActive] = useState(false);
  //#endregion

  //#region ------ functions ------
  const onSubmit = (data) => {
    window.location.href = `mailto:${email}?subject=${data.subject}&body=Hi, my name is ${data.name}. \n${data.message}
    (${data.email})`;
  };
  //#endregion

  return (
    <footer id="footer" className="footer">
      {/* Social Media */}
      <div className="footerSocialIcons">
        {socialMedia?.map((social) => (
          <a
            key={social["name"]}
            href={social["link"]}
            target="_blank"
            rel="noreferrer"
          >
            {socialMediaIcons[social["name"]]}
          </a>
        ))}
      </div>
      {/* Contact Form */}
      <div className="footerContact">
        <button onClick={() => isContactActive(true)}>Contact</button>
      </div>

      {contactActive && (
        <motion.div
          className="footerDialogContainer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footerDialog">
            <h2 className="footerDialogTitle">Contact Me</h2>
            <div className="footerDialogContent">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="footerDialogForm"
              >
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your Name"
                  className="footerContactInput"
                  required
                />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className="footerContactInput"
                  required
                />
                <input
                  {...register("subject")}
                  type="subject"
                  placeholder="Subject"
                  className="footerContactInput"
                  required
                />
                <textarea
                  {...register("message")}
                  type="text"
                  rows="7"
                  placeholder="Your Message"
                  className="footerContactInput"
                  required
                ></textarea>
                {/* <h4 className='text-primaryColor flex flex-row justify-center w-[50%] m-auto'><MdOutlineEmail className='text-xl mr-2'/> joyce.tang@jastudio-tech.com</h4> */}
                <div className="footerContactSendButtonContainer">
                  <button type="submit" className="footerContactSendButton">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <button
              className="footerDialogCloseButton"
              onClick={() => isContactActive(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </footer>
  );
}

export default Footer;
