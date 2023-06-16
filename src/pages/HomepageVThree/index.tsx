import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";

const HomepageVThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto overflow-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-7 sm:px-5 w-full">
              <ul className="flex sm:flex-1 sm:flex-col flex-row gap-14 sm:hidden items-start justify-start md:ml-[0] ml-[115px] w-auto sm:w-full common-row-list">
                <li>
                  <a href="javascript:" className="text-gray-800 text-lg">
                    <Text size="txtPoppinsRegular18Gray800">Categories</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-gray-800 text-lg">
                    <Text size="txtPoppinsRegular18Gray800">New Arrival</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-gray-800 text-lg">
                    <Text size="txtPoppinsRegular18Gray800">Features</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-gray-800 text-lg">
                    <Text size="txtPoppinsRegular18Gray800">Collections</Text>
                  </a>
                </li>
              </ul>
              <div className="flex md:flex-1 flex-row gap-2 items-start justify-center md:ml-[0] ml-[213px] md:mt-0 mt-[3px] w-[7%] md:w-full">
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
              <div className="flex flex-row gap-12 items-start justify-start md:ml-[0] ml-[592px] w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_search_gray_800.svg"
                  alt="search"
                />
                <Img className="h-6 w-6" src="images/img_cart.svg" alt="cart" />
                <Img
                  className="h-6 w-6"
                  src="images/img_email.svg"
                  alt="email"
                />
              </div>
            </div>
            <Line className="bg-gray-50 h-px w-[85%]" />
          </div>
          <List
            className="bg-white-A700 flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 justify-center max-w-[1920px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-row gap-[34px] h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_sweater_blue_gray_100.svg"
                  alt="sweater"
                />
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtPoppinsRegular18Bluegray100"
                >
                  Jacket
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] w-[21%]"></div>
            </div>
            <div className="flex flex-1 flex-row gap-12 h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_tshirt_blue_gray_100.svg"
                  alt="tshirt"
                />
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtPoppinsRegular18Bluegray100"
                >
                  Shirt
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] w-1/5"></div>
            </div>
            <div className="flex flex-1 flex-row gap-[46px] h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_pants_blue_gray_100.svg"
                  alt="pants"
                />
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtPoppinsRegular18Bluegray100"
                >
                  Pants
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] w-[19%]"></div>
            </div>
            <div className="flex flex-1 flex-row gap-11 h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_boot_gray_800.svg"
                  alt="boot"
                />
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsRegular18Gray800"
                >
                  Shoes
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] w-[17%]"></div>
            </div>
            <div className="flex flex-1 flex-row gap-[50px] h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_dress_blue_gray_100.svg"
                  alt="dress"
                />
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtPoppinsRegular18Bluegray100"
                >
                  Dress
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] w-[16%]"></div>
            </div>
            <div className="flex flex-1 flex-row h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_belt_blue_gray_100.svg"
                  alt="belt"
                />
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtPoppinsRegular18Bluegray100"
                >
                  Accesories
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] ml-1 w-[15%]"></div>
            </div>
            <div className="flex flex-1 flex-row gap-[54px] h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_skirt_blue_gray_100.svg"
                  alt="skirt"
                />
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtPoppinsRegular18Bluegray100"
                >
                  Skirt
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] w-[15%]"></div>
            </div>
            <div className="flex flex-1 flex-row h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img className="h-12 w-12" src="images/img_bra.svg" alt="bra" />
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtPoppinsRegular18Bluegray100"
                >
                  Underwear
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] ml-1 w-[14%]"></div>
            </div>
            <div className="flex flex-1 flex-row gap-14 h-[120px] items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img className="h-12 w-12" src="images/img_dot.svg" alt="dot" />
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtPoppinsRegular18Bluegray100"
                >
                  More
                </Text>
              </div>
              <div className="bg-white-A700 h-[120px] w-[13%]"></div>
            </div>
          </List>
        </header>
        <div className="bg-white-A700_82 flex flex-col items-start justify-start p-[157px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[126px] w-[43%] md:w-full">
            <Button className="bg-white-A700 cursor-pointer font-medium font-poppins leading-[normal] min-w-[271px] py-2.5 text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl">
              50% Off Limited Offer
            </Button>
            <Text
              className="mt-[22px] md:text-5xl text-7xl text-gray-800"
              size="txtPlayfairDisplayBold72"
            >
              Summer Collection
            </Text>
            <Text
              className="leading-[32.00px] mt-[25px] text-gray-800 text-lg w-full"
              size="txtPoppinsRegular18Gray800"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Button
              className="bg-gray-800 cursor-pointer flex h-[60px] items-center justify-center mt-20 px-[33px] py-1.5 w-[245px]"
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
        </div>
        <div className="flex flex-col gap-8 items-center justify-start max-w-[1632px] mt-[31px] mx-auto md:px-5 w-full">
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
            <List
              className="flex flex-col gap-[292px] md:mt-0 mt-[261px] w-[29%]"
              orientation="vertical"
            >
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start w-[37%]">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      <>
                        Green <br />
                        Warm Jacket
                      </>
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[37%]">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      <>
                        Black
                        <br />
                        Warm Jacket
                      </>
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[39%]">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      <>
                        Black <br />
                        Warm Jacket
                      </>
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[30%]">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      <>
                        Black
                        <br />
                        Brief Case
                      </>
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      $299
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[768px] items-center justify-end p-[55px] md:px-10 sm:px-5 w-[34%] md:w-full"
              style={{ backgroundImage: "url('images/img_banner.svg')" }}
            >
              <div className="flex flex-col gap-12 h-[286px] items-center justify-start mt-[372px] w-[286px]">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800"
                    size="txtPoppinsMedium36"
                  >
                    <>
                      Brown <br />
                      Casual Sneaker
                    </>
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                    size="txtPoppinsMedium36Gray500"
                  >
                    $299
                  </Text>
                </div>
                <Button className="bg-gray-800 cursor-pointer font-bold h-[60px] leading-[normal] py-4 text-center text-lg text-white-A700 w-[200px]">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="sm:gap-5 gap-[124px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] md:mt-0 mt-[261px] w-[29%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Blue Grey <br />
                      Warm Jacket
                    </>
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Blue Denim <br />
                      Jacket
                    </>
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Modern Classic
                      <br />
                      Watch
                    </>
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Casual <br />
                      Classic Watch
                    </>
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[426px] sm:h-[525px] md:h-[680px] max-w-[1630px] mt-[99px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col gap-[17px] h-full items-start justify-start ml-8 mt-[30px]">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtPoppinsBold24"
            >
              New Arrival
            </Text>
            <Text
              className="leading-[32.00px] text-lg text-white-A700 w-full"
              size="txtPoppinsRegular18WhiteA700"
            >
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </div>
          <div className="absolute flex inset-[0] justify-center m-auto w-full">
            <div className="bg-gray-800 h-[426px] my-auto w-[24%]"></div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[-109px] my-auto w-[84%] z-[1]">
              <List
                className="sm:flex-col flex-row gap-[26px] grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col h-[362px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 shadow-bs2 w-[318px]">
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
                <div className="bg-white-A700 flex flex-col h-[362px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 shadow-bs2 w-[318px]">
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
              <div className="bg-white-A700 flex flex-col h-[361px] md:h-auto items-center justify-center p-6 sm:px-5 shadow-bs2 w-[318px]">
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
              <div className="bg-white-A700 flex flex-col h-[361px] md:h-auto items-center justify-center p-6 sm:px-5 shadow-bs2 w-[318px]">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-[242px] md:px-5 px-[226px] w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[602px] items-center justify-start w-[55%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtPoppinsRegular36"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>
                    Casual
                    <br />
                  </>
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-white-A700 font-playfairdisplay text-left text-5xl font-bold">
                  Collection
                </span>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtPoppinsRegular36"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>
                    Big Vibe <br />
                  </>
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-white-A700 font-playfairdisplay text-left text-5xl font-bold">
                  Collection
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[242px] w-full">
          <div className="h-[362px] md:h-[466px] sm:h-[964px] md:px-5 relative w-full">
            <div className="absolute bg-gray-800 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[57px] md:px-10 sm:px-5 top-[0] w-full">
              <Text
                className="mb-[158px] md:ml-[0] ml-[86px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsBold24"
              >
                Why Choose Us
              </Text>
            </div>
            <List
              className="absolute bottom-[0] sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] justify-center mx-auto w-[85%]"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-row gap-8 h-[217px] md:h-auto items-center justify-center sm:ml-[0] sm:px-5 px-8 py-16 shadow-bs3 w-96 sm:w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_truck.svg"
                  alt="truck"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-800 text-lg w-auto"
                    size="txtPoppinsBold18"
                  >
                    Free Delivery
                  </Text>
                  <Text
                    className="text-gray-500 text-lg"
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
              <div className="bg-white-A700 flex flex-row gap-8 h-[217px] md:h-auto items-center justify-center sm:ml-[0] sm:px-5 px-8 py-16 shadow-bs3 w-96 sm:w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_card.svg"
                  alt="card"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-800 text-lg w-auto"
                    size="txtPoppinsBold18"
                  >
                    Payment Method
                  </Text>
                  <Text
                    className="text-gray-500 text-lg"
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
              <div className="bg-white-A700 flex flex-row gap-8 h-[217px] md:h-auto items-center justify-center sm:ml-[0] sm:px-5 px-8 py-16 shadow-bs3 w-96 sm:w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_broken.svg"
                  alt="broken"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-800 text-lg w-auto"
                    size="txtPoppinsBold18"
                  >
                    Warranty
                  </Text>
                  <Text
                    className="text-gray-500 text-lg"
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
              <div className="bg-white-A700 flex flex-row gap-8 h-[217px] md:h-auto items-center justify-center sm:ml-[0] sm:px-5 px-8 py-16 shadow-bs3 w-96 sm:w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_support.svg"
                  alt="support"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-800 text-lg w-auto"
                    size="txtPoppinsBold18"
                  >
                    Customer Support{" "}
                  </Text>
                  <Text
                    className="text-gray-500 text-lg"
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
        </div>
        <div className="flex flex-col items-end mt-[103px] pl-36 md:px-5 w-full">
          <div className="flex flex-col gap-7 items-start justify-start w-full">
            <div className="h-[54px] relative w-[15%]">
              <Text
                className="m-auto text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Popular this Week
              </Text>
              <div className="absolute flex flex-col items-center justify-start left-[1%] top-[17%]">
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">View all</Text>
                </a>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Black Adventure
                      <br />
                      Boots
                    </>
                  </Text>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-28"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Black Formal
                      <br />
                      Highheels
                    </>
                  </Text>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-28"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Brown <br />
                      Casual Shoes
                    </>
                  </Text>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-28"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Gray <br />
                      Longpants
                    </>
                  </Text>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-28"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Green
                      <br />
                      Sport Jacket
                    </>
                  </Text>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-[111px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Blue Denim <br />
                      Skirt
                    </>
                  </Text>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-28"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
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
        <Img
          className="h-[68px] mt-[100px]"
          src="images/img_brand.svg"
          alt="brand"
        />
        <footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-center mb-[30px] mt-[62px] mx-auto w-[85%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex md:flex-1 flex-col gap-[46px] items-start justify-start w-[26%] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-[416px] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPoppinsBold24"
                    >
                      Contacts
                    </Text>
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
                  <div className="flex flex-col gap-8 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPoppinsBold24"
                    >
                      Social Media
                    </Text>
                    <div className="flex flex-row gap-6 items-start justify-start w-auto">
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
                <div className="flex flex-col gap-8 items-start justify-start w-[245px]">
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
                    <li>
                      <a href="javascript:" className="text-gray-500 text-lg">
                        <Text size="txtPoppinsRegular18">Discount</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-lg">
                        <Text size="txtPoppinsRegular18">Special Offer</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[172px] w-[245px]">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtPoppinsBold24"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
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
                        <Text size="txtPoppinsRegular18">Terms of service</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[170px] w-[24%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Join our Newsletter
                  </Text>
                  <Text
                    className="mt-[25px] text-gray-500 text-lg w-full"
                    size="txtPoppinsRegular18"
                  >
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <Input
                    name="form"
                    placeholder="Enter your email"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-100_87 sm:pl-5 text-blue_gray-100_87 text-center text-lg tracking-[0.36px] w-full"
                    wrapClassName="bg-gray-800 border border-solid border-white-A700 flex mt-[35px] pl-6 w-full"
                    type="email"
                    suffix={
                      <div className="h-[60px] ml-3 w-[60px] bg-white-A700 p-3.5 flex justify-center items-center">
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
            </div>
            <Text
              className="text-blue_gray-100 text-sm"
              size="txtPoppinsRegular14"
            >
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageVThreePage;
