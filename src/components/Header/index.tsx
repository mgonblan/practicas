import React from "react";

import { Button, Img, Line, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end p-6 sm:px-5 w-full">
          <div className="flex md:flex-1 flex-row gap-2 items-start justify-center w-[6%] md:w-full">
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
          <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[541px] w-auto">
            <Img className="h-6 w-6" src="images/img_cart.svg" alt="cart" />
            <Img className="h-6 w-6" src="images/img_email.svg" alt="email" />
          </div>
          <Button className="bg-gray-800 cursor-pointer font-medium font-poppins h-12 leading-[normal] ml-8 md:ml-[0] mr-[120px] py-2.5 text-center text-lg text-white-A700 w-[107px]">
            Login
          </Button>
        </div>
        <Line className="bg-gray-50 h-px mx-auto w-[85%]" />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
