import React from "react";

import { Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-center mb-[30px] mt-[62px] mx-auto w-[85%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-[110px] items-start justify-start w-[43%] md:w-full">
                <Img
                  className="h-6 mt-1"
                  src="images/img_group19_white_a700_24x1.svg"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor .
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
            <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-start justify-between w-[58%] md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[245px]">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtPoppinsBold24"
                >
                  Product Links
                </Text>
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Categories
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      New Arrival
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Features
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Collections
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-[245px]">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtPoppinsBold24"
                >
                  Company
                </Text>
                <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      About
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Blog
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Careers
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Services
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Privacy Policy
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Terms of service
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-start w-[41%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Join our Newsletter
                </Text>
                <div className="h-[81px] relative w-full">
                  <Text
                    className="mb-[-8.1px] mx-auto text-gray-500 text-lg w-full z-[1]"
                    size="txtPoppinsRegular18"
                  >
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <div className="h-[37px] md:h-[62px] mt-auto mx-auto w-full">
                    <div className="absolute bg-gray-800 border border-solid border-white-A700 flex flex-col inset-x-[0] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[324px] top-[0] w-full">
                      <div className="bg-white-A700 flex flex-col h-[30px] md:h-auto items-center justify-center p-4 w-[60px]">
                        <Img
                          className="h-[30px] w-[31px]"
                          src="images/img_menu.svg"
                          alt="menu"
                        />
                      </div>
                    </div>
                    <Text
                      className="absolute bottom-[0] left-[6%] text-blue_gray-100_87 text-center text-lg tracking-[0.36px]"
                      size="txtPoppinsRegular18Bluegray10087"
                    >
                      Enter your email
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="text-blue_gray-100 text-sm"
            size="txtPoppinsRegular14"
          >
            Copyright © 2021 Elliye. All Right Reseved
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
