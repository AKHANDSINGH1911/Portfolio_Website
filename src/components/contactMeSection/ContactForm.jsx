import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useRef();
  
  const handleName = (e) => {
    setName(e.target.value);
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    emailjs
      .sendForm("service_ko3hmpt", "template_ahbmmqd", form.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully!");
          setIsSubmitting(false);
          
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="max-w-xl w-full mx-auto">
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-600 text-white flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {success}
          </motion.div>
        )}
        
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-400 to-rose-600 text-white flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 dark:text-slate-400 mt-2"
            >
              Have a question or want to work together?
            </motion.p>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-slate-600 dark:text-slate-300 font-medium mb-2 ml-1">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="name"
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-darkBrown border border-lightGrey dark:border-grey focus:border-cyan focus:ring-2 focus:ring-lightCyan dark:focus:ring-darkCyan transition-all duration-300 outline-none text-darkBrown dark:text-white placeholder-grey dark:placeholder-lightGrey"
                  value={name}
                  onChange={handleName}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-slate-600 dark:text-slate-300 font-medium mb-2 ml-1">
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-darkBrown border border-lightGrey dark:border-grey focus:border-cyan focus:ring-2 focus:ring-lightCyan dark:focus:ring-darkCyan transition-all duration-300 outline-none text-darkBrown dark:text-white placeholder-grey dark:placeholder-lightGrey"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-slate-600 dark:text-slate-300 font-medium mb-2 ml-1">
                Your Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Hello, I'd like to talk about..."
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-darkBrown border border-lightGrey dark:border-grey focus:border-cyan focus:ring-2 focus:ring-lightCyan dark:focus:ring-darkCyan transition-all duration-300 outline-none text-darkBrown dark:text-white placeholder-grey dark:placeholder-lightGrey"
                  value={message}
                  onChange={handleMessage}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-2"
            >
              <button
  type="submit"
  disabled={isSubmitting}
  className={`w-full rounded-xl font-bold py-4 px-6 transition-all duration-300 transform 
    ${isSubmitting 
      ? 'bg-gradient-to-r from-grey to-darkGrey cursor-not-allowed shadow-inner' 
      : `bg-gradient-to-r from-cyan to-darkCyan 
         hover:from-lightCyan hover:to-cyan
         active:from-darkCyan active:to-cyan
         shadow-lg hover:shadow-xl hover:shadow-cyan/30
         active:shadow-md`} 
    focus:outline-none focus:ring-2 focus:ring-lightCyan focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-darkBrown
    relative overflow-hidden group`}
>
  {/* Animated background shine */}
  {!isSubmitting && (
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 transform group-hover:translate-x-full"></span>
  )}
  
  <div className="flex items-center justify-center relative z-10">
    {isSubmitting ? (
      <>
        <svg 
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-white tracking-wider">Sending...</span>
      </>
    ) : (
      <>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2 text-white group-hover:animate-bounce" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
        <span className="text-white tracking-wider group-hover:tracking-widest transition-all duration-300">
          Send Message
        </span>
      </>
    )}
  </div>
  
  {/* Ripple effect (requires JS) */}
  {!isSubmitting && (
    <span className="absolute inset-0 bg-white/10 rounded-xl opacity-0 
      group-active:opacity-100 group-active:animate-ripple 
      pointer-events-none"></span>
  )}
</button>
            </motion.div>
          </form>
        </div>
        
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-t border-slate-200 dark:border-slate-700 p-4 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>We'll get back to you within 24 hours</p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-center text-slate-500 dark:text-slate-400 text-sm"
      >
        <p>Prefer email? Contact us at <span className="text-cyan-600 dark:text-cyan-400 font-medium">contact@example.com</span></p>
      </motion.div>
    </div>
  );
};

export default ContactForm;