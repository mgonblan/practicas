import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const CompletedPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins justify-start mx-auto pb-[45px] w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-row gap-4 items-start justify-start ml-36 md:ml-[0] mt-[30px] md:px-5 w-[19%] md:w-full">
          <Text className="text-gray-500 text-lg" size="txtPoppinsMedium18">
            Home
          </Text>
          <Text
            className="mb-0.5 text-blue_gray-100 text-lg"
            size="txtPoppinsMedium18Bluegray100"
          >
            <>&gt;</>
          </Text>
          <Text
            className="mt-0.5 text-gray-500 text-lg"
            size="txtPoppinsMedium18"
          >
            Shopping Cart
          </Text>
          <Text
            className="mb-0.5 text-blue_gray-100 text-lg"
            size="txtPoppinsMedium18Bluegray100"
          >
            <>&gt;</>
          </Text>
          <Text
            className="mb-0.5 text-gray-800 text-lg"
            size="txtPoppinsMedium18Gray800"
          >
            Checkout
          </Text>
        </div>
        <div className="flex flex-col items-center mt-[97px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1604px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start w-[16%] md:w-full">
              <Text
                className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14"
                size="txtPoppinsMedium24"
              >
                1
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Shopping Cart
              </Text>
            </div>
            <Line className="bg-gray-800 h-0.5 md:ml-[0] ml-[21px] md:mt-0 my-[27px] w-[24%]" />
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-center md:ml-[0] ml-[57px] w-[13%] md:w-full">
              <Text
                className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14"
                size="txtPoppinsMedium24"
              >
                2
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Checkout
              </Text>
            </div>
            <Line className="bg-gray-800 h-0.5 ml-14 md:ml-[0] md:mt-0 my-[27px] w-[24%]" />
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start ml-8 md:ml-[0] w-[14%] md:w-full">
              <Text
                className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14"
                size="txtPoppinsMedium24"
              >
                3
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[206px] md:px-5 w-[37%] md:w-full">
            <Text
              className="md:text-5xl text-[64px] text-gray-800"
              size="txtPoppinsBold64"
            >
              Checkout Complete!
            </Text>
            <Text
              className="leading-[32.00px] mt-[9px] text-center text-gray-800 text-lg w-[98%] sm:w-full"
              size="txtPoppinsRegular18Gray800"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Button className="bg-gray-800 cursor-pointer font-medium h-[60px] leading-[normal] mt-16 py-4 text-center text-lg text-white-A700 w-[245px]">
              Go Shopping Again
            </Button>
          </div>
          <footer className="bg-gray-800 flex items-center justify-center mt-[200px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[26px] mt-14 mx-auto w-[85%]">
              <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-[110px] items-start justify-start w-[43%] md:w-full">
                      <Img
                        className="h-6 mt-1"
                        src="images/img_group19_24x1.svg"
                        alt="groupNineteen"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        Elliye{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[32.00px] md:max-w-full max-w-sm text-gray-500 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor .
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto sm:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call.svg"
                          alt="call"
                        />
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsRegular18WhiteA700"
                        >
                          +1234567890
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto sm:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_email_white_a700.svg"
                          alt="email_One"
                        />
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsRegular18WhiteA700"
                        >
                          elliye@support.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[278px] w-[245px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPoppinsBold24"
                    >
                      Product Links
                    </Text>
                    <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">Categories</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">New Arrival</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">Features</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">Collections</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start ml-8 md:ml-[0] w-[245px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPoppinsBold24"
                    >
                      Company
                    </Text>
                    <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">About</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">Blog</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">Careers</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">Services</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">Privacy Policy</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-500 text-lg">
                          <Text size="txtPoppinsRegular18">
                            Terms of service
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start ml-8 md:ml-[0] w-[24%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Join our Newsletter
                    </Text>
                    <Text
                      className="mt-[19px] text-gray-500 text-lg w-full"
                      size="txtPoppinsRegular18"
                    >
                      Drop your email below to get update, promotions, coupons,
                      and more!
                    </Text>
                    <Input
                      name="form"
                      placeholder="Enter your email"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-100_87 sm:pl-5 text-blue_gray-100_87 text-center text-lg tracking-[0.36px] w-full"
                      wrapClassName="bg-gray-800 border border-solid border-white-A700 flex mt-[26px] pl-6 w-full"
                      type="email"
                      suffix={
                        <div className="ml-3 sm:w-full sm:mx-0 w-[16%] bg-white-A700 py-[11px] px-3.5 flex justify-center items-center">
                          <Img
                            className="my-auto"
                            src="images/img_menu.svg"
                            alt="menu"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtPoppinsRegular14"
                >
                  Copyright © 2021 Elliye. All Right Reseved
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default CompletedPage;
