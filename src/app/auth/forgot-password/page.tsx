"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { SearchIcon } from '@heroicons/react';
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ForgotPassword: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sign IN ", e);
    router.push("/dashboard");
  };

  return (
    <section className="login-module flex items-center relative min-h-[100vh] bg-white dark:bg-boxdark">
      <img
        className="login_pattern fixed bottom-0 right-0 top-0 hidden h-screen bg-cover lg:block"
        src={"/images/login/login-pattern.png"}
        alt="Logo"
      />
      <div className="container mx-auto">
      <div className="flex w-full flex-wrap items-center justify-center py-8 lg:py-25">
          <div className="mx-auto h-full dark:border-strokedark xl:w-2/6 md:w-3/6 sm:w-4/6 w-5/6">
            <div className="items-center relative flex h-full w-full flex-col justify-center rounded-lg bg-white p-6 shadow-[0_4px_24px_4px_rgba(0,0,0,0.15)] sm:p-12.5 xl:p-8">
              <Link className="mb-5.5 inline-block" href="/">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>

              <h2 className="w-full text-base block mb-7 font-semibold text-black dark:text-white text-xl">
                Forgot Password
              </h2>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="name"
                      placeholder="Type your email address"
                      className="focus:border-primary300 dark:focus:border-primary300 w-full rounded-lg border border-stroke bg-transparent py-3 pl-4 pr-10 text-black outline-none focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    />
                  </div>
                </div>

                <div className="my-7 text-center">
                  <button
                    type="submit"
                    value="Log in"
                    className="border-primary300 bg-primary300 inline-flex cursor-pointer items-center gap-2 rounded-full border p-3 px-8 font-medium text-white transition hover:bg-opacity-90"
                  >
                    Submit
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
