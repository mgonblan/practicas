import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header from "components/Header";

const formFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectYearOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckoutPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[45px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row gap-4 items-start justify-start mt-[30px] md:px-5 w-[19%] md:w-full">
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
          <Text
            className="mt-[38px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
            size="txtPoppinsBold36"
          >
            Checkout
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1604px] mt-[100px] mx-auto md:px-5 w-full">
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
            <Line className="bg-blue_gray-100 h-0.5 ml-14 md:ml-[0] md:mt-0 my-[27px] w-[24%]" />
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start ml-8 md:ml-[0] w-[14%] md:w-full">
              <Text
                className="border-2 border-blue_gray-100 border-solid flex h-14 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-blue_gray-100 text-center sm:text-xl w-14"
                size="txtPoppinsMedium24Bluegray100"
              >
                3
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                size="txtPoppinsMedium24Bluegray100"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1632px] mt-[81px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="groupForty"
                  placeholder="Buyer Info"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-800 sm:pr-5 text-gray-800 text-left text-lg w-full"
                  wrapClassName="border-b border-blue_gray-100 pb-[31px] pr-[35px] w-full"
                ></Input>
                <div className="flex flex-col gap-4 items-start justify-start mt-[30px] w-full">
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Full Name
                  </Text>
                  <Input
                    name="form"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-[60px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start mt-[31px] w-full">
                  <Text
                    className="text-center text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Address
                  </Text>
                  <Input
                    name="form_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-[60px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start mt-8 w-full">
                  <Text
                    className="text-center text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Contact
                  </Text>
                  <Input
                    name="form_Two"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-[60px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start mt-[33px] w-full">
                  <Text
                    className="text-center text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    City
                  </Text>
                  <Input
                    name="form_Three"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-[60px] w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-8 w-full">
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[59%] md:w-full">
                    <Text
                      className="text-center text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      State
                    </Text>
                    <SelectBox
                      className="border border-blue_gray-100 border-solid leading-[normal] sm:px-5 px-8 py-4 text-center text-gray-500 text-lg w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="form_Four"
                      options={formFourOptionsList}
                      isSearchable={false}
                      placeholder="Select State"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[38%] md:w-full">
                    <Text
                      className="text-center text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Zip Code
                    </Text>
                    <Input
                      name="form_Five"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex h-[60px] w-full"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="title"
                  placeholder="Payment Method"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-800 sm:pr-5 text-gray-800 text-left text-lg w-full"
                  wrapClassName="border-b border-blue_gray-100 pb-[30px] pr-[35px] w-full"
                ></Input>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[31px] w-full">
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[245px] px-[34px] py-[31px]"
                    leftIcon={
                      <Img
                        className="h-10 mr-4"
                        src="images/img_card.svg"
                        alt="Card"
                      />
                    }
                  >
                    <div className="leading-[normal] sm:px-5 text-gray-800 text-left text-lg">
                      Credit Card
                    </div>
                  </Button>
                  <Button
                    className="bg-gray-800 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[245px] px-8 py-[31px]"
                    leftIcon={
                      <div className="h-10 mr-4 w-10 bg-gray-800 p-[3px] flex justify-center items-center">
                        <Img
                          className="h-[33px]"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                      </div>
                    }
                  >
                    <div className="leading-[normal] sm:px-5 text-left text-lg text-white-A700">
                      Bank Transfer
                    </div>
                  </Button>
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[245px] px-[34px] py-[31px]"
                    leftIcon={
                      <Img
                        className="h-10 mr-4"
                        src="images/img_paypal.svg"
                        alt="paypal"
                      />
                    }
                  >
                    <div className="leading-[normal] sm:px-5 text-gray-800 text-left text-lg">
                      Paypal
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start mt-[31px] w-full">
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Name on Card
                  </Text>
                  <Input
                    name="form_Six"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-[60px] w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-[31px] w-full">
                  <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[66%] md:w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Card Number
                    </Text>
                    <Input
                      name="form_Seven"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex h-[60px] w-full"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[31%] md:w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      CVV
                    </Text>
                    <Input
                      name="rectangleTwentyFive"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex h-[60px] w-full"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-[31px] w-full">
                  <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[48%] md:w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Month
                    </Text>
                    <SelectBox
                      className="border border-blue_gray-100 border-solid leading-[normal] sm:px-5 px-8 py-4 text-gray-500 text-left text-lg w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupTwelve"
                      options={selectMonthOptionsList}
                      isSearchable={false}
                      placeholder="Select Month"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[48%] md:w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Year
                    </Text>
                    <SelectBox
                      className="border border-blue_gray-100 border-solid leading-[normal] sm:px-5 px-8 py-4 text-gray-500 text-left text-lg w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupThirteen"
                      options={selectYearOptionsList}
                      isSearchable={false}
                      placeholder="Select Year"
                    />
                  </div>
                </div>
                <Button className="bg-gray-800 cursor-pointer font-medium h-[60px] leading-[normal] md:ml-[0] ml-[555px] mt-[75px] py-4 text-center text-lg text-white-A700 w-[245px]">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
          <footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[26px] mt-14 mx-auto w-[85%]">
              <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row items-start justify-between w-[43%] md:w-full">
                      <Img
                        className="h-6 mt-1"
                        src="images/img_group19.svg"
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
                      name="form_Eight"
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

export default CheckoutPage;
