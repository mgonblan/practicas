import React from "react";

import {
  Button,
  Img,
  Input,
  List,
  PagerIndicator,
  RatingBar,
  Text,
} from "components";

const HomepageVOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-[17px] w-[85%]">
            <div className="header-row mt-3 mb-[11px]">
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
            <ul className="flex sm:flex-col flex-row gap-20 h-[29px] md:h-auto sm:hidden items-start justify-start md:ml-[0] ml-[392px] w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">Categories</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">New Arrival</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">Features</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">Collections</Text>
                </a>
              </li>
            </ul>
            <div className="flex flex-row sm:hidden items-center justify-between md:ml-[0] ml-[259px] w-[16%] md:w-full">
              <Img className="h-6 w-20" src="images/img_car.svg" alt="car" />
              <Button className="bg-gray-800 cursor-pointer font-bold h-[60px] leading-[normal] py-4 text-center text-lg text-white-A700 w-[107px]">
                Login
              </Button>
            </div>
          </div>
        </header>
        <div className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-start justify-start pt-[102px] md:px-10 sm:px-5 px-[102px] w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start mb-[125px] md:ml-[0] ml-[41px] w-[34%] md:w-full">
            <Text
              className="md:text-5xl text-8xl text-gray-800"
              size="txtPlayfairDisplayRegular96"
            >
              Summer Sale
            </Text>
            <Text
              className="mt-0.5 md:text-5xl text-[64px] text-gray-800"
              size="txtPoppinsBold64"
            >
              50% Off
            </Text>
            <Text
              className="leading-[32.00px] mt-[34px] text-gray-800 text-lg w-[93%] sm:w-full"
              size="txtPoppinsRegular18Gray800"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Button
              className="bg-gray-800 cursor-pointer flex h-[60px] items-center justify-center mt-14 px-[33px] py-1.5 w-[245px]"
              rightIcon={
                <Img
                  className="h-12 ml-2.5"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
            >
              <div className="font-medium font-poppins leading-[normal] md:text-[22px] sm:px-5 sm:text-xl text-2xl text-left text-white-A700">
                Shop Now
              </div>
            </Button>
          </div>
          <PagerIndicator
            className="flex gap-2 h-3 md:h-auto items-start justify-start md:ml-[0] ml-[191px] md:mt-0 mt-[549px] w-28"
            count={6}
            activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3"
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
          <Img
            className="h-12 md:ml-[0] ml-[600px] md:mt-0 mt-[549px]"
            src="images/img_button_white_a700.svg"
            alt="button"
          />
        </div>
        <div className="flex flex-col gap-7 items-center justify-start max-w-[1633px] mt-[103px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
              size="txtPoppinsBold36"
            >
              Categories
            </Text>
            <div className="flex flex-col items-center justify-start">
              <a href="javascript:" className="text-gray-800 text-lg">
                <Text size="txtPoppinsMedium18Gray800">View all</Text>
              </a>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-9 sm:px-5 w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start mb-2.5 w-[56%] md:w-full">
                <Img
                  className="h-24 w-24"
                  src="images/img_sweater.svg"
                  alt="sweater"
                />
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  Jacket
                </Text>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-9 sm:px-5 w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start mb-2.5 w-[56%] md:w-full">
                <Img
                  className="h-24 w-24"
                  src="images/img_tshirt.svg"
                  alt="tshirt"
                />
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  Shirt
                </Text>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-9 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start mb-[9px] w-[56%] md:w-full">
                <Img
                  className="h-24 w-24"
                  src="images/img_pants.svg"
                  alt="pants"
                />
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  Pants
                </Text>
              </div>
            </div>
            <div className="bg-gray-800 flex flex-1 flex-col items-center justify-start p-9 sm:px-5 w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start mb-2.5 w-[56%] md:w-full">
                <Img
                  className="h-24 w-24"
                  src="images/img_boot.svg"
                  alt="boot"
                />
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18WhiteA700"
                >
                  Shoes
                </Text>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-9 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start mb-[9px] w-[56%] md:w-full">
                <Img
                  className="h-24 w-24"
                  src="images/img_dress.svg"
                  alt="dress"
                />
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  Dress
                </Text>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-9 sm:px-5 w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start mb-2.5 w-[57%] md:w-full">
                <Img
                  className="h-24 w-24"
                  src="images/img_belt.svg"
                  alt="belt"
                />
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  Accesories
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1632px] mt-[98px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[33px] items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                New Arrivals
              </Text>
              <div className="flex flex-col items-center justify-start">
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">View all</Text>
                </a>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
              <div className="bg-gray-50 flex flex-1 flex-col h-[688px] md:h-auto items-center justify-center max-w-[800px] p-8 sm:px-5 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-[245px]">
                  <div className="flex flex-col gap-2 items-center justify-start w-[245px]">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[245px]"
                      size="txtPoppinsMedium24"
                    >
                      Purple Warm Jacket
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-[45px]"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                  <Button className="bg-gray-800 cursor-pointer font-bold h-[60px] leading-[normal] py-4 text-center text-lg text-white-A700 w-[200px]">
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
                      <div className="flex flex-col gap-2 items-center justify-start w-[283px]">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[283px]"
                          size="txtPoppinsMedium24"
                        >
                          Blue Grey Warm Jacket
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-[45px]"
                          size="txtPoppinsMedium18"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
                      <div className="flex flex-col gap-2 items-center justify-start w-[167px]">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[167px]"
                          size="txtPoppinsMedium24"
                        >
                          Denim Jacket
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-[45px]"
                          size="txtPoppinsMedium18"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
                      <div className="flex flex-col gap-2 items-center justify-start w-[153px]">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[153px]"
                          size="txtPoppinsMedium24"
                        >
                          Black Jacket
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-[45px]"
                          size="txtPoppinsMedium18"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
                      <div className="flex flex-col gap-2 items-center justify-start w-[229px]">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[229px]"
                          size="txtPoppinsMedium24"
                        >
                          Green Polar Jacket
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-[45px]"
                          size="txtPoppinsMedium18"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-start max-w-[1632px] mt-[99px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
              size="txtPoppinsBold36"
            >
              Featured
            </Text>
            <div className="flex flex-col items-center justify-start">
              <a href="javascript:" className="text-gray-800 text-lg">
                <Text size="txtPoppinsMedium18Gray800">View all</Text>
              </a>
            </div>
          </div>
          <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
            <div className="border-2 border-gray-800 border-solid flex flex-1 flex-col gap-4 h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[184px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[184px]"
                  size="txtPoppinsMedium24"
                >
                  Black Briefcase
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
              <Button className="bg-gray-800 cursor-pointer font-bold h-[60px] leading-[normal] py-4 text-center text-lg text-white-A700 w-[200px]">
                Add to Cart
              </Button>
            </div>
            <div className="flex flex-1 flex-col h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[111px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[111px]"
                  size="txtPoppinsMedium24"
                >
                  Pink Shirt
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[499px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[145px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[145px]"
                  size="txtPoppinsMedium24"
                >
                  Gray T-shirt
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[499px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[140px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[140px]"
                  size="txtPoppinsMedium24"
                >
                  Red Flannel
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-48">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-48"
                  size="txtPoppinsMedium24"
                >
                  Black Highheels
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[228px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[228px]"
                  size="txtPoppinsMedium24"
                >
                  Casual Grey Shoes
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[155px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[155px]"
                  size="txtPoppinsMedium24"
                >
                  Brown Shoes
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[499px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[167px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[167px]"
                  size="txtPoppinsMedium24"
                >
                  Business Shirt
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[212px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[212px]"
                  size="txtPoppinsMedium24"
                >
                  Grey Warm Pants
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[231px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[231px]"
                  size="txtPoppinsMedium24"
                >
                  Green Sport Jacket
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[499px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-[245px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[245px]"
                  size="txtPoppinsMedium24"
                >
                  Purple Warm Jacket
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[499px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-60">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-60"
                  size="txtPoppinsMedium24"
                >
                  Woman Denim Skirt
                </Text>
                <Text
                  className="text-gray-500 text-lg w-[45px]"
                  size="txtPoppinsMedium18"
                >
                  $299
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:h-[1338px] h-[544px] md:h-[906px] mt-[74px] md:px-5 relative w-full">
          <div className="absolute bg-gray-800 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[43px] md:px-10 sm:px-5 top-[0] w-full">
            <Text
              className="mb-[284px] md:ml-[0] ml-[100px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtPoppinsBold36WhiteA700"
            >
              Summer Collections
            </Text>
          </div>
          <div className="absolute bottom-[0] sm:h-[1264px] h-[400px] md:h-[832px] inset-x-[0] mx-auto w-[87%] md:w-full">
            <List
              className="absolute sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-[0] justify-center m-auto w-[99%]"
              orientation="horizontal"
            >
              <div className="bg-blue_gray-100 flex flex-col items-start justify-center p-[59px] md:px-10 sm:px-5 w-full">
                <Text
                  className="my-[87px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                  size="txtPoppinsRegular36Gray800"
                >
                  <>
                    Summer <br />
                    Collection
                  </>
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-start justify-center p-[53px] md:px-10 sm:px-5 w-full">
                <Text
                  className="my-[93px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsRegular36"
                >
                  <>
                    Casual <br />
                    Collection
                  </>
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-start justify-center p-[52px] md:px-10 sm:px-5 w-full">
                <Text
                  className="my-[94px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsRegular36"
                >
                  <>
                    Big Vibe <br />
                    Collection
                  </>
                </Text>
              </div>
            </List>
            <Button className="absolute bg-white-A700 flex h-[60px] inset-y-[0] items-center justify-center my-auto p-[9px] right-[0] w-[60px]">
              <Img src="images/img_menu.svg" alt="menu" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center justify-start max-w-[1632px] mt-[103px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
              size="txtPoppinsBold36"
            >
              Popular This Week
            </Text>
            <div className="flex flex-col items-center justify-start">
              <a href="javascript:" className="text-gray-800 text-lg">
                <Text size="txtPoppinsMedium18Gray800">View all</Text>
              </a>
            </div>
          </div>
          <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[220px]">
                <div className="flex flex-col gap-2 items-start justify-start w-[220px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[220px]"
                    size="txtPoppinsMedium24"
                  >
                    Checkered Jacket
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[179px]">
                <div className="flex flex-col gap-2 items-start justify-start w-[179px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[179px]"
                    size="txtPoppinsMedium24"
                  >
                    Elegant Jacket
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-60">
                <div className="flex flex-col gap-2 items-start justify-start w-60">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-60"
                    size="txtPoppinsMedium24"
                  >
                    Blue Woman Denim
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[171px]">
                <div className="flex flex-col gap-2 items-start justify-start w-[171px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[171px]"
                    size="txtPoppinsMedium24"
                  >
                    Orange Jeans
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[152px]">
                <div className="flex flex-col gap-2 items-start justify-start w-[132px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[132px]"
                    size="txtPoppinsMedium24"
                  >
                    Blue Jeans
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[152px]">
                <div className="flex flex-col gap-2 items-start justify-start w-36">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-36"
                    size="txtPoppinsMedium24"
                  >
                    Gray Watch
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-56">
                <div className="flex flex-col gap-2 items-start justify-start w-56">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-56"
                    size="txtPoppinsMedium24"
                  >
                    Black Sport Jacket
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[152px]">
                <div className="flex flex-col gap-2 items-start justify-start w-[137px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[137px]"
                    size="txtPoppinsMedium24"
                  >
                    Wristwatch
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[173px]">
                <div className="flex flex-col gap-2 items-start justify-start w-[173px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[173px]"
                    size="txtPoppinsMedium24"
                  >
                    Classic Watch
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[60px]"
                    size="txtPoppinsMedium24Gray500"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-row h-6 md:h-auto items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[152px]"
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[27px] justify-start mt-[104px] w-full">
          <Text
            className="ml-36 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
            size="txtPoppinsBold36"
          >
            Why Choose Us
          </Text>
          <List
            className="bg-gray-50 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:px-10 px-36 sm:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-8 h-96 md:h-auto items-center justify-center p-8 sm:px-5 w-full">
              <Img
                className="h-[120px] w-[120px]"
                src="images/img_icon.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-4 items-center justify-start w-[211px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-40"
                  size="txtPoppinsBold24Gray800"
                >
                  Free Delivery
                </Text>
                <Text
                  className="text-center text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-8 h-96 md:h-auto items-center justify-center p-8 sm:px-5 w-full">
              <Img
                className="h-[120px] w-[120px]"
                src="images/img_icon_gray_500.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-4 items-center justify-start w-[212px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[212px]"
                  size="txtPoppinsBold24Gray800"
                >
                  Payment Method
                </Text>
                <Text
                  className="text-center text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-8 h-96 md:h-auto items-center justify-center p-8 sm:px-5 w-full">
              <Img
                className="h-[120px] w-[120px]"
                src="images/img_icon_gray_500_120x120.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-4 items-center justify-start w-[211px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[120px]"
                  size="txtPoppinsBold24Gray800"
                >
                  Warranty
                </Text>
                <Text
                  className="text-center text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-8 h-96 md:h-auto items-center justify-center p-8 sm:px-5 w-full">
              <Img
                className="h-[120px] w-[120px]"
                src="images/img_icon_120x120.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-4 items-center justify-start w-[228px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[228px]"
                  size="txtPoppinsBold24Gray800"
                >
                  Customer Support{" "}
                </Text>
                <Text
                  className="text-center text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Img
          className="h-[68px] mt-[100px]"
          src="images/img_brand.svg"
          alt="brand"
        />
        <footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-center mb-[30px] ml-36 mr-[236px] mt-[62px] w-[81%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[28%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Join our Newsletter
                  </Text>
                  <Text
                    className="mt-[25px] text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    <>
                      Drop your email below to get update about us, <br />
                      lastest news, tips, and more!
                    </>
                  </Text>
                  <Input
                    name="input"
                    placeholder="Enter your email"
                    className="leading-[normal] p-0 placeholder:text-gray-500_87 sm:pl-5 text-center text-gray-500_87 text-lg tracking-[0.36px] w-full"
                    wrapClassName="bg-white-A700 flex mt-[35px] pl-6 pr-4 py-3.5 w-[91%]"
                    type="email"
                    suffix={
                      <Img
                        className="ml-3 my-auto"
                        src="images/img_menu.svg"
                        alt="menu"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[131px] w-[166px]">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[166px]"
                    size="txtPoppinsBold24"
                  >
                    Product Links
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-[101px] md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          Categories
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          New Arrival
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          Features
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          Collections
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start ml-28 md:ml-[0] md:mt-0 mt-1 w-[8%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-[75px] md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">About</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">Blog</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">Careers</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          Contact{" "}
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          Services
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[154px] md:mt-0 mt-1 w-[10%] md:w-full">
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtPoppinsBold24">Support</Text>
                  </a>
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-[147px] md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          Support Center
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">FAQ</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPoppinsRegular18WhiteA700">
                          Terms of service
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-6 items-start justify-start md:ml-[0] ml-[130px] w-[10%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Get In Touch
                  </Text>
                  <div className="flex flex-row gap-6 h-6 md:h-auto items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                    <div className="flex flex-col h-6 items-center justify-start w-6">
                      <div className="flex flex-col h-6 items-center justify-start w-6">
                        <Img
                          className="h-6 w-6"
                          src="images/img_twitter.svg"
                          alt="twitter"
                        />
                      </div>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[676px] mr-[583px] text-sm text-white-A700"
              size="txtPoppinsRegular14WhiteA700"
            >
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageVOnePage;
