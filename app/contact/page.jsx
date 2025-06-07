"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResultMsg("");

    emailjs
      .sendForm(
        "service_w8vu47i",
        "template_e4akws5",
        formRef.current,
        "9riWVnBGLzFwQPKz-"
      )
      .then(
        (result) => {
          setResultMsg("Message sent successfully! Thank you.");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          setResultMsg("Oops! Something went wrong. Please try again.");
          setLoading(false);
          console.error(error?.text || error?.message || error);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible ">
        <div className="w-full ">
          <div className="flex flex-col xl:flex-row gap-6 ">
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Have a project in mind or just want to say hello? Feel free to
                  reach out! I'm here to help bring your ideas to life.
                </p>
              </div>
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone  */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+11 22 33 44 55</span>
                </div>
                {/* email  */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>divilthkr3@gmail.com</span>
                </div>
                {/* location  */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Chandigarh, Punjab </span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start"
              >
                {/* name  */}
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      FirstName <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="lastname">
                      LastName <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                {/* email  */}
                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="your@mail.com"
                    required
                  />
                </div>
                {/* select  */}
                <div className="w-full">
                  <Label htmlFor="service"> I'm interested in</Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className={"bg-black border-white/20"}>
                      <SelectItem value="Web-Development">
                        Web Development{" "}
                      </SelectItem>
                      <SelectItem value="Deployment/Hosting">
                        Deployment & Hosting{" "}
                      </SelectItem>
                      <SelectItem value="Frontend-Development">
                        Frontend Development{" "}
                      </SelectItem>
                      <SelectItem value="Backend-Development">
                        Backend Development{" "}
                      </SelectItem>
                      <SelectItem value="UI/UX Design">
                        UI & UX Design{" "}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* textarea  */}
                <div className="w-full">
                  <Label htmlFor="message">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="write your message..."
                    className={
                      "min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                    }
                  ></Textarea>
                </div>
                {/* btn  */}
                <button
                  type="submit"
                  className="btn btn-lg btn-accent"
                  disabled={loading}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
                {/* resultMsg  */}
                {resultMsg && (
                  <p
                    className={`mt-4 ${
                      resultMsg.includes("successfully")
                        ? "text-accent"
                        : "text-red-500"
                    }`}
                  >
                    {resultMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
