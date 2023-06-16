import React from "react";

import { Button, Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-6 w-[85%]">
          <div className="header-row mt-[7px] mb-1">
            <div className="flex flex-row gap-2 items-start justify-start">
              <Img
                className="h-6 mt-1"
                src="images/img_volume.svg"
                alt="volume"
              />
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsBold24Gray800"
              >
                Elliye{" "}
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="bg-white-A700 border-2 border-gray-50 border-solid flex flex-row sm:hidden items-center justify-between md:ml-[0] ml-[411px] sm:pl-5 pl-8 w-[36%] md:w-full">
            <Text
              className="text-center text-gray-500_87 text-lg"
              size="txtPoppinsRegular18Gray50087"
            >
              Search here
            </Text>
            <div className="bg-gray-800 flex flex-col h-12 md:h-auto items-center justify-center p-4 w-12">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_search_white_a700.svg"
                alt="search"
              />
            </div>
          </div>
          <div className="flex flex-row gap-8 sm:hidden items-start justify-start md:ml-[0] ml-[304px] w-auto">
            <Img className="h-6 w-6" src="images/img_cart.svg" alt="cart" />
            <Img className="h-6 w-6" src="images/img_email.svg" alt="email" />
          </div>
          <Button className="bg-gray-800 cursor-pointer font-bold font-poppins h-12 sm:hidden leading-[normal] ml-8 md:ml-[0] py-[13px] text-center text-sm text-white-A700 w-[107px]">
            Login
          </Button>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
