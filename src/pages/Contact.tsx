import React, { useRef, useState, forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faFacebook, faViber } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "react-hot-toast";

interface ContactProps {
    id: string;
};

const Contact= forwardRef<HTMLElement, ContactProps>(({id}, ref) => {

    const form = useRef<HTMLFormElement>(null);

    const publicKey = import.meta.env.VITE_PUBLIC_KEY || '';
    const serviceID = import.meta.env.VITE_SERVICE_ID || '';
    const templateID = import.meta.env.VITE_TEMPLATE_ID || '';
    
    const [send, setSend] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
    const [err, setErr] = useState<string | null>(null);

    // Form Event Type သတ်မှတ်ခြင်း
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!name.trim() || !email.trim() || !message.trim()) {
            toast.error("Please fill in all fields");
            return;
        }
        
        if (!form.current) return; // Form ref မရှိရင် ဘာမှမလုပ်ဖို့ စစ်ဆေးခြင်း

        setSend(true);
        
        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey,
            })
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    setName("");
                    setEmail("");
                    setMessage("");
                    setIsConfirmed(true);
                    setSend(false);
                    setErr(null);
                },
                (error) => {
                    toast.error("Failed to send message. Please try again.");
                    setIsConfirmed(false);
                    setSend(false);
                    setErr(error.text);
                },
            );
    };

    const copyText = (text: string): void => {
        navigator.clipboard.writeText(text);
        toast.success("Copied!");
    }


    return (
        <section 
            id={id} ref={ref}
            className="w-full h-auto py-12 px-6 overflow-hidden"
        >
           <div className="max-w-250 h-auto mx-auto relative">
             <header className="text-center mb-14 text-xl font-bold">
                <h3 className='font-black bg-linear-to-b from-main to-slate-200 bg-clip-text text-transparent'>Contact Me</h3>
                <p className="text-main">✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
            </header>
            
            <div className="w-fit mx-auto h-auto grid grid-cols-1 md:grid-cols-2 xl:gap-x-30 gap-y-10 md:gap-x-20 lg:gap-x-20 text-main px-2 sm:px-7 md:px-0">
                <div className="max-w-100 grid-self-center md:w-full flex flex-col justify-center">
                    <div className="w-full"> 
                        <h4 className="text-xl mb-5 font-black text-shadow bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">Get in touch!</h4>
                        <p className="text-lg">
                            I'm currently open to work opportunities as a Frontend Developer. 
                            If you're looking for someone passionate about building responsive and user-friendly websites, feel free to reach out.
                        </p>
                    
                        <div className="my-2 mt-6">
                            <Toaster position="top-center" />
                            <label className="me-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="hover:text-secondary hover:-translate-2 text-xl text-main text-shadow-glow"/>
                                    <span className="text-2xl ms-1 text-main">:</span>
                            </label>
                            <span 
                                className="text-md ms-4 text-accent hover:text-secondary cursor-pointer text-decoration-underline" 
                                onClick={() => copyText("kyawzinwin23k@gmail.com")}
                            >
                                kyawzinwin23k@gmail.com
                            </span>
                        </div>
                    
                        <div className="mt-1">
                            <label className="me-2">
                                    <FontAwesomeIcon icon={faPhone} className="hover:text-secondary hover:-translate-2 text-xl text-main text-shadow-glow"/>
                                    <span className="text-2xl ms-1 text-main">:</span>
                            </label>
                            <span 
                                className="text-md ms-4 text-accent hover:text-secondary cursor-pointer text-decoration-underline" 
                                onClick={() => copyText("+95 9674114295")}
                            >
                                +95 9674114295
                            </span>
                        </div>
                    </div>
                </div>


                <div 
                className="max-w-100 grid-self-center md:w-full flex justify-center items-center relative">
                    <form 
                        ref={form} 
                        onSubmit={sendEmail}
                        className="w-full opacity-80 bg-bg/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 flex flex-col gap-2 py-4 px-6 z-10 hover:-translate-2 transition-all duration-100" 
                    >
                        {/* Header Section */}
                        <div className="mb-2">
                            <h4 className="text-main font-black text-shadow-[0_0_4px_rgba(255,255,255,0.3)]">Work with me!</h4>
                            <p className="text-sm text-muted mt-1">Collaboration is the key to success. Drop your message and let’s start our journey!</p>
                        </div>

                    <div className="w-full flex flex-col gap-4">
                            {/* Name Input */}
                        <div className="relative group">
                            <input 
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder=" " // Important: Must be a space for floating label to work
                                className="peer w-full p-2 rounded-xl border border-muted/50 bg-bg text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                required
                            />
                            <label className="absolute rounded-md left-4 top-2 transition-all duration-200 pointer-events-none
                                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2
                                            peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                                            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs
                                            bg-bg text-muted px-1">
                                Your name
                            </label>
                        </div>
                        {/* Email Input */}
                       <div className="relative group">
                            <input 
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder=" " // Important: Must be a space for floating label to work
                                className="peer w-full p-2 rounded-xl border border-muted/50 bg-bg text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                required
                            />
                            <label className="absolute rounded-md left-4 top-2 transition-all duration-200 pointer-events-none
                                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2
                                            peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                                            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs
                                            bg-bg text-muted px-1">
                                Your email
                            </label>
                        </div>

                        {/* Message Input Group */}
                        <div className="relative group">
                            <textarea 
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                placeholder=" " // Important: Must be a space for floating label to work
                                className="peer w-full p-2 rounded-xl border border-muted/50 bg-bg text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none min-h-"
                                required
                                rows={4}
                            />
                            <label className="absolute rounded-md left-2 top-4 transition-all duration-200 pointer-events-none
                                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2
                                            peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                                            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs
                                            bg-bg text-muted px-1">
                                Your messages
                            </label>
                        </div>
                    </div>
                        
                        {/* Status Messages */}
                        {isConfirmed && (
                            <div className="text-green-600 text-sm font-medium text-center">
                                ✅ You sent a message to me!
                            </div>
                        )}
                        {err && (
                            <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium rounded-lg text-center">
                                ❌ {err}
                            </div>
                        )}
                        
                        {/* Submit Button */}
                        <button 
                            type="submit"
                            disabled={send}
                            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center" 
                        >
                            {send ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : "Let's Go!"}
                        </button>
                    </form>
                </div>
            </div>

            <footer className="w-full mt-16 flex justify-center gap-2">
                     <button className='p-1 rounded-md bg-transparent transition-all duration-200 ease-linear hover:-translate-y-2'>
                        <a href="https://github.com/kyawzin17" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#f21b24]' />
                        </a>
                    </button>
                     <button className='p-1 rounded-md bg-transparent transition-all duration-200 ease-linear hover:-translate-y-2'>
                        <a href="https://facebook.com/reddragon1766" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#3b569d]' />
                        </a>
                    </button>
                    <button className='p-1 rounded-md bg-transparent transition-all duration-200 ease-linear hover:-translate-y-2'>
                        <a href="https://t.me/@kyawzinwinei" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#007bff]' />
                        </a>
                    </button>
                    <button className='p-1 rounded-md bg-transparent transition-all duration-200 ease-linear hover:-translate-y-2'>
                        <a href="viber://chat?number=%2B959674114295" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faViber} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#665ca7]' />
                        </a>
                    </button>
            </footer>
           </div>
        </section>
    );
})

export default Contact;