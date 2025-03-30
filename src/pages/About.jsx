import React from "react";
import PagesBanner from "../components/PagesBanner";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import accordianData from "../dataCenter/faqData.json";

const About = () => {
  return (
    <>
      <PagesBanner title={"About Us"} subtitle={"About us - Agriculture"} />
      <div className="px-4 sm:px-10 md:px-20 py-10">
        <div className="p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:px-10 text-normal sm:text-md text-gray-800">
            <h3 className="text-xl sm:text-3xl font-bold mb-4">
              <span className="text-[#39B54A]">About</span> Us
            </h3>
            <p className="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              architecto tenetur blanditiis a ad voluptatum assumenda nemo ipsam
              explicabo repellat, rem ea autem ipsa voluptas reprehenderit?
              Repellat veritatis praesentium cupiditate, enim aperiam hic,
              adipisci aspernatur sit voluptate amet, animi ratione!
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit labore odit, natus dolor quia minus nihil beatae?
              Officiis provident omnis illo delectus perferendis, dignissimos
              consequuntur?
            </p>
          </div>
          <img src="about.webp" alt=" " className="h-[15rem] rounded-3xl" />
        </div>
      </div>
      <div className="px-4 sm:px-10 md:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="md:w-1/3 flex flex-col gap-5">
            <div className="px-5 flex justify-end">
              <div className="flex flex-col gap-3 justify-end md:w-[80%]">
                <div className="p-2 flex jsutify-center items-center gap-5 md:flex-row-reverse">
                  <div className="p-4 bg-[#EBFFF6] rounded-lg">
                    <i className="ri-customer-service-2-fill text-4xl"></i>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold mb-2">Customer Support</h3>
                  </div>
                </div>
                <div className="text-xs md:text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  cupiditate repudiandae nulla aspernatur suscipit magnam
                  sapiente, est eligendi voluptatum enim.
                </div>
              </div>
            </div>
            <div className="px-5 flex justify-end">
              <div className="flex flex-col gap-3 justify-end md:w-[80%]">
                <div className="p-2 flex jsutify-center items-center gap-5 md:flex-row-reverse">
                  <div className="p-4 bg-[#EBFFF6] rounded-lg">
                    <i className="ri-price-tag-3-line text-4xl"></i>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold mb-2">Best Price</h3>
                  </div>
                </div>
                <div className="text-xs md:text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  cupiditate repudiandae nulla aspernatur suscipit magnam
                  sapiente, est eligendi voluptatum enim.
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center items-center">
            <img src="banner/banner12.png" alt=" " className="h-[15rem]" />
          </div>
          <div className="md:w-1/3 flex flex-col gap-5">
            <div className="px-5 flex justify-start">
              <div className="flex flex-col gap-3 justify-start md:w-[80%]">
                <div className="p-2 flex jsutify-center items-center gap-5">
                  <div className="p-4 bg-[#EBFFF6] rounded-lg">
                    <i className="ri-truck-line text-4xl"></i>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold mb-2">Fast Delivery</h3>
                  </div>
                </div>
                <div className="text-xs md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  cupiditate repudiandae nulla aspernatur suscipit magnam
                  sapiente, est eligendi voluptatum enim.
                </div>
              </div>
            </div>
            <div className="px-5 flex justify-start">
              <div className="flex flex-col gap-3 justify-start md:w-[80%]">
                <div className="p-2 flex jsutify-center items-center gap-5">
                  <div className="p-4 bg-[#EBFFF6] rounded-lg">
                    <i className="ri-wallet-3-line text-4xl"></i>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold mb-2">Easy Payments</h3>
                  </div>
                </div>
                <div className="text-xs md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  cupiditate repudiandae nulla aspernatur suscipit magnam
                  sapiente, est eligendi voluptatum enim.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HAVE A QUESTIONS SECTION START HERE */}
      <div className="px-4 sm:px-10 md:px-20 py-10 mb-20 bg-[#E4F5E8] flex flex-col justify-center items-center gap-10">
        <h3 className="text-3xl font-bold text-center">
          Have <span className="text-[#39B54A]">Questions?</span>
        </h3>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <Accordion className="w-full">
            {accordianData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  className="p-4 border-b-2 border-white w-[100%] text-gray-800 text-md"
                  header={
                    <div className="flex items-center text-gray-700 font-semibold w-full justify-between hover:cursor-pointer">
                      {data.question}
                      <i className="ri-arrow-down-wide-line"></i>
                    </div>
                  }
                >
                  {data.answer}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      {/* HAVE A QUESTIONS SECTION END HERE */}
    </>
  );
};

export default About;
