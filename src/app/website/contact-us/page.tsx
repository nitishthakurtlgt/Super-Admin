"use client";
import WebLayout from "@/components/Layouts/WebLayout";
import "@/css/style.css";
import Image from "next/image";
import React from "react";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const ContactUs: React.FC = () => {
  return (
    <>
      <WebLayout>
        <section className="flex min-h-50 flex-col items-center justify-center bg-primary500 bg-[url('/images/website/inner-pattern.png')] bg-cover bg-no-repeat p-6 text-center">
          <h1 className="text-3xl font-bold text-white lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-3 text-base lg:text-lg text-primary200">
            Any question or remarks? Just write us a message!
          </p>
        </section>

        <section className="information-box px-0 py-6 lg:py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-5">
                <div className="mb-5">
                  <h2 className="text-xl lg:text-3xl xl:text-4xl font-semibold text-black">
                    Contact Information
                  </h2>
                  <span className="mt-2 block text-base lg:text-md xl:text-lg font-medium text-primary400">
                    Say something to start a live chat!
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex gap-4">
                      <span className="flex h-13 min-w-13 w-13 items-center justify-center rounded-full border border-primary400 bg-white">
                        <PhoneIcon className="h-5 w-5 text-primary400" />
                      </span>
                      <div>
                        <h5 className="text-md text-grey500">PHONE</h5>
                        <p className="text-base font-medium text-[#414A53]">
                          +1012 3456 789
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-4">
                      <span className="flex h-13 min-w-13 w-13 items-center justify-center rounded-full border border-primary400 bg-white">
                        <EnvelopeIcon className="h-5 w-5 text-primary400" />
                      </span>
                      <div>
                        <h5 className="text-md text-grey500">MAIL</h5>
                        <p className="text-base font-medium text-[#414A53]">
                          demo@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-4">
                      <span className="flex h-13 min-w-13 w-13 items-center justify-center rounded-full border border-primary400 bg-white">
                        <MapPinIcon className="h-6 w-6 text-primary400" />
                      </span>
                      <div>
                        <h5 className="text-md text-grey500">LOCATION</h5>
                        <p className="text-base font-medium text-[#414A53]">
                          32 Dartmouth Street Boston, Massachusetts 02156 United
                          States
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-4">
                      <span className="flex h-13 min-w-13 w-13 items-center justify-center rounded-full border border-primary400 bg-white">
                        <ShareIcon className="h-5 w-5 text-primary400" />
                      </span>
                      <div>
                        <h5 className="text-md text-grey500">FOLLOW US</h5>
                        <div className="flex gap-0">
                          <Link className="flex items-center p-2" href="/">
                            <Image
                              width={18}
                              height={18}
                              src={"/images/website/contact-twitter.svg"}
                              alt="contact-twitter"
                            />
                          </Link>
                          <Link className="flex items-center p-2" href="/">
                            <Image
                              width={18}
                              height={18}
                              src={"/images/website/contact-instagram.svg"}
                              alt="contact-instagram"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="mt-6">
                  <form>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="box col-span-4 lg:col-span-2">
                        <label
                          htmlFor="first-name"
                          className=" block text-base font-medium leading-6 text-black"
                        >
                          First Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="name"
                            placeholder="Type your first name"
                            className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                          ></input>
                        </div>
                      </div>
                      <div className="box col-span-4 lg:col-span-2">
                        <label
                          htmlFor="first-name"
                          className=" block text-base font-medium leading-6 text-black"
                        >
                          Last Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="name"
                            placeholder="Type your last name"
                            className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                          ></input>
                        </div>
                      </div>

                      <div className="box col-span-4">
                        <label
                          htmlFor="first-name"
                          className=" block text-base font-medium leading-6 text-black"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="email"
                            placeholder="Type your email address"
                            className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                          ></input>
                        </div>
                      </div>

                      <div className="box col-span-4">
                        <label
                          htmlFor="first-name"
                          className=" block text-base font-medium leading-6 text-black"
                        >
                          Message
                        </label>
                        <div className="mt-1">
                          <textarea
                            name="message"
                            placeholder="Type your message"
                            className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                          ></textarea>
                        </div>
                      </div>

                      <div className="box col-span-4">
                        <label
                          htmlFor="first-name"
                          className=" block text-base font-medium leading-6 text-black"
                        >
                          Select Subject?
                        </label>
                        <div className="mt-2 flex gap-4 flex-wrap">
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="Country"
                              className="h-5 w-5"
                            />{" "}
                            General Inquiry
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="Country"
                              className="h-5 w-5"
                            />{" "}
                            General Inquiry
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="Country"
                              className="h-5 w-5"
                            />{" "}
                            General Inquiry
                          </label>
                        </div>
                      </div>
                    </div>

<button
  type="submit"
  className="ml-auto mt-6 rounded-full bg-primary300 px-8 p-3 font-normal text-white transition-all hover:bg-primary400"
>
  Send Message
</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="subscribe relative -bottom-12 mx-auto w-full lg:w-10/12">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-4 rounded-xl bg-primary100 p-4 px-6 shadow-default lg:flex-row lg:gap-10 lg:rounded-full">
              <h5 className="w-full text-base font-medium text-primary500">
                Subscribe to stay tuned for new updates and latest
                notifications. Let's do it!{" "}
              </h5>
              <div className="py- flex w-full gap-4 rounded-full bg-white p-2 pl-4 shadow-default">
                <input
                  type="text"
                  placeholder="Enter your Email Address"
                  className="w-full bg-transparent text-base text-black focus:outline-none"
                />
                <button
                  type="button"
                  value="Subscribe"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary300 bg-primary300 p-3 px-8 font-medium text-white transition hover:bg-opacity-90"
                >
                  Subscribe
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="footer bg-[#37383C] pb-15 pt-21">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3">
                <Link className="block flex-shrink-0" href="/">
                  <Image
                    width={160}
                    height={64}
                    src={"/images/logo-white.svg"}
                    alt="logo-white"
                  />
                </Link>
                <p className="mt-3 text-base text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="mt-4">
                  <h5 className="text-lg font-semibold text-white">
                    Follow Us
                  </h5>
                  <div className="mt-3 flex gap-0">
                    <Link
                      href="/"
                      className="flex h-10 w-10 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/facebook.svg"
                        width={12}
                        height={12}
                        alt="facebook"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-10 w-10 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/telegram.svg"
                        width={12}
                        height={12}
                        alt="telegram"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-10 w-10 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/twitter.svg"
                        width={12}
                        height={12}
                        alt="twitter"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-10 w-10 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/instagram.svg"
                        width={12}
                        height={12}
                        alt="instagram"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                <h5 className="mb-6 mt-3 text-lg font-semibold text-white">
                  Quick Links
                </h5>
                <div className="flex flex-col flex-nowrap gap-3">
                  <Link href="/website/about-us" className="w-full text-base text-white">
                    About Us
                  </Link>
                  <Link href="#" className="w-full text-base text-white">
                    How It Works
                  </Link>
                  <Link href="/website/privacy-policy" className="w-full text-base text-white">
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                <h5 className="mb-6 mt-3 text-lg font-semibold text-white">
                  Quick Links
                </h5>
                <div className="flex flex-col flex-nowrap gap-3">
                  <Link
                    href="#"
                    className="flex w-full items-center gap-2 text-base text-white"
                  >
                    <MapPinIcon className="h-5 w-5" /> Wisconsin Ave, Suite 700{" "}
                    <br />
                    Chevy Chase, Maryland 20815
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center gap-2 text-base text-white"
                  >
                    <DevicePhoneMobileIcon className="h-5 w-5" /> (415) 555‑0132
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center gap-2 text-base text-white"
                  >
                    <EnvelopeIcon className="h-5 w-5" /> bringMe@xyz.com
                  </Link>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <h5 className="mb-6 mt-3 text-lg font-semibold text-white">
                  Reach out to us
                </h5>
                <div className="flex gap-4">
                  <div className="box w-full">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-white"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Full Name"
                        className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>
                  <div className="box w-full">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-white"
                    >
                      Mobile
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Enter your Mobile Number"
                        className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-end gap-4">
                  <div className="box w-full">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-white"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your Email Address"
                        className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="submit"
                    className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-primary300 bg-primary300 p-3 px-8 font-medium text-white transition hover:bg-opacity-90"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </WebLayout>
    </>
  );
};

export default ContactUs;
