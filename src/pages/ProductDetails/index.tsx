import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const ProductDetailsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header1 className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col items-end mt-[31px] md:px-10 px-36 sm:px-5 w-full">
          <div className="flex flex-col gap-[11px] justify-start w-[91%] md:w-full">
            <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[673px] w-[55%] md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    Featured
                  </Text>
                  <Text
                    className="text-blue_gray-100 text-lg w-auto"
                    size="txtPoppinsMedium18Bluegray100"
                  >
                    <>&gt;</>
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    Purple Warm Jacket
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-gray-800"
                    size="txtPoppinsBold56"
                  >
                    <>
                      Purple Warm <br />
                      Zip Jacket
                    </>
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500"
                    size="txtPoppinsRegular36Gray500"
                  >
                    $299
                  </Text>
                  <Line className="bg-blue_gray-100 h-px mt-[45px] w-full" />
                  <div className="h-24 md:h-[132px] mt-9 relative w-full">
                    <Text
                      className="leading-[32.00px] m-auto text-gray-500 text-lg w-full"
                      size="txtPoppinsRegular18"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <div className="absolute bottom-[20%] flex flex-row gap-6 items-end justify-between left-[0] w-[35%]">
                      <Text
                        className="mt-[9px] text-gray-800 text-lg"
                        size="txtPoppinsMedium18Gray800"
                      >
                        Quantity
                      </Text>
                      <div className="md:h-12 h-9 relative w-[63%]">
                        <div className="absolute bg-gray-800 flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center my-auto p-4 right-[0] w-12">
                          <Img
                            className="h-4 w-4"
                            src="images/img_grid.svg"
                            alt="grid"
                          />
                        </div>
                        <div className="bg-gray-50 flex flex-col md:h-auto h-full items-center justify-center my-auto p-4 w-12">
                          <div className="bg-gray-500 h-0.5 w-[57%]"></div>
                        </div>
                        <Button className="absolute border border-blue_gray-100 border-solid cursor-pointer font-medium h-full inset-[0] leading-[normal] m-auto py-1 text-center text-gray-800 text-lg w-[171px]">
                          1
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="bg-gray-800 cursor-pointer flex items-center justify-center px-[35px] py-4 w-[245px]"
                rightIcon={
                  <Img
                    className="h-8 ml-4"
                    src="images/img_cart_white_a700.svg"
                    alt="Cart"
                  />
                }
              >
                <div className="font-bold leading-[normal] sm:px-5 text-left text-lg text-white-A700">
                  Add to Cart
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-[33%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[137px] md:h-auto object-cover w-full"
                    src="images/img_placeholder_137x139.png"
                    alt="placeholder"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[137px] md:h-auto object-cover w-full"
                    src="images/img_placeholder_10.png"
                    alt="placeholder"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                  <Img
                    className="h-[137px] md:h-auto object-cover w-full"
                    src="images/img_placeholder_11.png"
                    alt="placeholder"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-center mt-[186px] w-full">
          <div className="flex flex-col gap-[33px] items-center justify-start max-w-[1632px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-row gap-8 items-center justify-between w-1/4 sm:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                  size="txtPoppinsBold36"
                >
                  Similiar Product
                </Text>
                <a href="javascript:" className="text-gray-500 text-lg">
                  <Text size="txtPoppinsMedium18">View all</Text>
                </a>
              </div>
              <Img
                className="h-12 sm:mt-0 mt-1"
                src="images/img_button.svg"
                alt="button"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-4 h-[500px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_placeholder_250x250.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                      size="txtPoppinsMedium24"
                    >
                      Black Briefcase
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 h-[500px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_placeholder_12.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                      size="txtPoppinsMedium24"
                    >
                      Pink Shirt
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                </div>
              </List>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-4 h-[499px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_placeholder_13.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                      size="txtPoppinsMedium24"
                    >
                      Gray T-shirt
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 h-[499px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_placeholder_14.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                      size="txtPoppinsMedium24"
                    >
                      Red Flannel
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Footer className="bg-gray-800 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
