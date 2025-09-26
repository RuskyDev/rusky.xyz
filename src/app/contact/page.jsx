"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Mail,
  MessageCircle,
  Loader2,
  CheckCircle2,
  Hand,
} from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { sendMessage } from "@/libs/sendMessage";

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaStep, setCaptchaStep] = useState(false);
  const captchaRef = useRef(null);
  const [formValues, setFormValues] = useState(null);

  const handlePreSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFormValues({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
    setCaptchaStep(true);
  };

  const handleCaptchaVerify = async (token) => {
    setIsSubmitting(true);
    try {
      await sendMessage({ ...formValues, captcha: token });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsOpen(false);
      }, 2500);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setCaptchaStep(false);
      captchaRef.current.resetCaptcha();
    }
  };

  return (
    <div className="mt-24 px-4 sm:px-6 md:px-12 lg:px-28">
      <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
      <p className="text-base text-white max-w-2xl mb-6">
        Feel free to reach out to me via the platforms below!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 text-white">
        {[
          {
            href: "https://github.com/ruskydev",
            label: "GitHub",
            icon: <Github size={20} />,
          },
          {
            href: "mailto:iamayaanalee@gmail.com",
            label: "Email",
            icon: <Mail size={20} />,
          },
          {
            href: "https://discord.com/users/969507085316399154",
            label: "Discord",
            icon: <MessageCircle size={20} />,
          },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-500 ease-in-out cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4, ease: "easeOut" }}
          >
            {item.icon}
            {item.label}
          </motion.a>
        ))}

        <motion.a
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-500 ease-in-out cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Hand size={20} />
          </motion.div>
          Send a Message
        </motion.a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-white/10 rounded-xl shadow-xl w-full max-w-md"
            >
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">Send a Message</h2>
              </div>
              {!isSuccess ? (
                <form
                  onSubmit={handlePreSubmit}
                  className="p-6 flex flex-col gap-4"
                >
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    className="px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    className="px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    className="px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  ></motion.textarea>

                  {captchaStep && (
                    <div className="flex justify-center">
                      <HCaptcha
                        sitekey=""
                        onVerify={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                        ref={captchaRef}
                      />
                    </div>
                  )}

                  <div className="flex justify-end gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                        >
                          <Loader2 size={18} />
                        </motion.div>
                      ) : (
                        "Send"
                      )}
                    </motion.button>
                  </div>
                </form>
              ) : (
                <div className="p-10 flex flex-col items-center justify-center gap-4 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle2 size={64} className="text-green-400" />
                  </motion.div>
                  <p className="text-white text-lg font-semibold">
                    Message Sent Successfully!
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
