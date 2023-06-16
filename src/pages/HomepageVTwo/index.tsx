import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";

const HomepageVTwoPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto overflow-auto pb-[45px] w-full">
        <div className="flex flex-col items-center pr-[90px] md:px-5 w-full">
          <header className="bg-white-A700 flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-6 mx-auto w-[85%]">
              <div className="flex flex-row gap-2 items-start justify-start md:mt-0 mt-[7px] w-[7%] md:w-full">
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
              <div className="bg-white-A700 border-2 border-gray-50 border-solid flex flex-row sm:gap-10 items-center justify-between mb-[5px] md:ml-[0] ml-[411px] sm:pl-5 pl-8 w-[36%] md:w-full">
                <Text
                  className="text-center text-gray-500_87 text-lg"
                  size="txtPoppinsRegular18Gray50087"
                >
                  Search here
                </Text>
                <div className="bg-gray-800 flex flex-col h-12 md:h-auto items-center justify-center p-4 w-12">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[304px] md:mt-0 mt-3 w-auto">
                <Img className="h-6 w-6" src="images/img_cart.svg" alt="cart" />
                <Img
                  className="h-6 w-6"
                  src="images/img_email_gray_800.svg"
                  alt="email"
                />
              </div>
              <Button className="bg-gray-800 cursor-pointer font-bold leading-[normal] ml-8 md:ml-[0] py-4 text-center text-sm text-white-A700 w-[107px]">
                Login
              </Button>
            </div>
            <Line className="bg-gray-50 h-px mt-[19px] mx-auto w-[85%]" />
            <ul className="flex md:flex-col flex-row gap-20 md:hidden items-start justify-start mx-auto my-[21px] w-auto common-row-list">
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
              <li>
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsRegular18Gray800">Discount</Text>
                </a>
              </li>
            </ul>
          </header>
        </div>
        <div className="flex flex-col items-end md:px-5 w-full">
          <div className="h-[750px] relative w-full">
            <div className="h-[750px] m-auto w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                paddingRight={69.32999999999993}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00] absolute"
                ref={sliderRef}
                className="m-auto w-full"
                items={[...Array(18)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-center justify-start mx-2.5">
                      <div className="h-[750px] relative w-full">
                        <Img
                          className="h-[750px] m-auto object-cover w-full"
                          src="images/img_image1.png"
                          alt="imageOne"
                        />
                        <div className="absolute bg-black-900_68 flex flex-col md:gap-10 gap-[148px] h-full inset-[0] items-start justify-center m-auto p-8 sm:px-5 w-full">
                          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start md:ml-[0] ml-[104px] mt-[84px] w-[44%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                size="txtPoppinsMedium24WhiteA700"
                              >
                                50% Off Limited Offer
                              </Text>
                              <Text
                                className="leading-[128.00px] md:text-5xl text-9xl text-white-A700"
                                size="txtPlayfairDisplayBold128"
                              >
                                <>
                                  Summer <br />
                                  Collection
                                </>
                              </Text>
                            </div>
                            <Button
                              className="bg-gray-800 cursor-pointer flex h-[60px] items-center justify-center px-[26px] py-1.5 w-[232px]"
                              rightIcon={
                                <Img
                                  className="h-12 ml-2.5"
                                  src="images/img_arrowright.svg"
                                  alt="arrow_right"
                                />
                              }
                            >
                              <div className="font-medium leading-[normal] md:text-[22px] sm:px-5 sm:text-xl text-2xl text-left text-white-A700">
                                Shop Now
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3 relative" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="absolute bottom-[4%] flex gap-2 h-3 left-[7%] w-28"
                count={6}
                activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3 relative"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="absolute bottom-[4%] flex md:flex-col flex-row gap-4 items-center justify-center right-[0] shadow-bs w-auto">
              <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-14 w-14"
                    src="images/img_sweater.svg"
                    alt="sweater"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Jacket
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-[18px] h-40 items-center justify-between w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-14 w-14"
                      src="images/img_tshirt.svg"
                      alt="tshirt"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Shirt
                    </Text>
                  </div>
                  <div className="bg-white-A700 h-40 w-[54%]"></div>
                </div>
                <div className="flex flex-row gap-[51px] h-40 items-center justify-center w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-14 w-14"
                      src="images/img_pants.svg"
                      alt="pants"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Pants
                    </Text>
                  </div>
                  <div className="bg-white-A700 h-40 w-[33%]"></div>
                </div>
                <div className="flex flex-row h-40 items-center justify-between w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-14 w-14"
                      src="images/img_boot.svg"
                      alt="boot"
                    />
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Shoes
                    </Text>
                  </div>
                  <div className="bg-gray-800 h-40 w-[24%]"></div>
                </div>
              </List>
              <div className="flex flex-row gap-[74px] items-center justify-center w-[159px] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-14 w-14"
                    src="images/img_dress.svg"
                    alt="dress"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Dress
                  </Text>
                </div>
                <div className="bg-white-A700 h-40 w-[19%]"></div>
              </div>
              <div className="flex flex-col h-40 items-start justify-end sm:pr-5 pr-[30px] py-[30px] w-40">
                <div className="flex flex-col gap-4 items-center justify-start w-[98px]">
                  <Img
                    className="h-14 w-14"
                    src="images/img_belt.svg"
                    alt="belt"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Accesories
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-center mt-[100px] pr-[90px] md:px-5 w-full">
          <Img
            className="h-[100px] w-[1078px]"
            src="images/img_brands.svg"
            alt="brands"
          />
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start w-[86%] md:w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-[49%] md:w-full">
              <div className="h-[400px] relative w-full">
                <Img
                  className="h-[400px] m-auto object-cover w-full"
                  src="images/img_placeholder.png"
                  alt="placeholder"
                />
                <Text
                  className="absolute h-max inset-y-[0] left-[10%] my-auto text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
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
              <div className="h-[400px] relative w-full">
                <Img
                  className="h-[400px] m-auto object-cover w-full"
                  src="images/img_placeholder_400x800.png"
                  alt="placeholder_One"
                />
                <Text
                  className="absolute h-max inset-y-[0] left-[11%] my-auto text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                  size="txtPoppinsRegular36Gray800"
                >
                  <span className="text-gray-800 font-inter text-left font-normal">
                    <>
                      Summer <br />
                    </>
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-gray-800 font-playfairdisplay text-left text-5xl font-bold">
                    Collection
                  </span>
                </Text>
              </div>
            </div>
            <div className="h-[832px] relative w-1/2 md:w-full">
              <Img
                className="h-[832px] m-auto object-cover w-full"
                src="images/img_placeholder_832x801.png"
                alt="placeholder_Two"
              />
              <Text
                className="absolute left-[10%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 top-[36%]"
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
          <div className="flex flex-col gap-[31px] items-center justify-start w-[85%] md:w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Featured
              </Text>
              <div className="flex flex-row gap-[9px] items-center justify-between w-[7%]">
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">View all</Text>
                </a>
                <Img
                  className="h-[31px] w-[31px]"
                  src="images/img_menu.svg"
                  alt="menu"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full">
                <div className="h-[761px] relative w-full">
                  <Img
                    className="h-[761px] m-auto object-cover w-full"
                    src="images/img_placeholder_761x523.png"
                    alt="placeholder_Three"
                  />
                  <Text
                    className="absolute inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 top-[7%]"
                    size="txtPoppinsRegular36Gray800"
                  >
                    <span className="text-gray-800 font-poppins font-normal">
                      <>
                        Discover Our <br />
                      </>
                    </span>
                    <span className="text-gray-800 font-poppins font-bold">
                      Featured Product
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
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
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_maskgroup_245x245.png"
                      alt="maskgroup"
                    />
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
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_maskgroup_1.png"
                      alt="maskgroup"
                    />
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
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_maskgroup_2.png"
                      alt="maskgroup"
                    />
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
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_maskgroup_3.png"
                      alt="maskgroup"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Casual <br />
                          Pink Shirt
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
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_maskgroup_4.png"
                      alt="maskgroup"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-auto"
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
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_maskgroup_5.png"
                      alt="maskgroup"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Purple <br />
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
                  <div className="flex flex-1 flex-col gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_maskgroup_3.png"
                      alt="maskgroup"
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
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[1556px] sm:h-[435px] h-[579px] relative w-full">
            <div className="absolute bg-gray-800 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[43px] md:px-10 sm:px-5 top-[0] w-full">
              <Text
                className="mb-[271px] md:ml-[0] ml-[100px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtPoppinsBold36WhiteA700"
              >
                Limited Offer
              </Text>
            </div>
            <List
              className="absolute bottom-[0] sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 inset-x-[0] justify-center mx-auto w-[85%]"
              orientation="horizontal"
            >
              <div className="bg-gray-50 flex md:flex-col flex-row gap-12 items-center justify-start sm:ml-[0] p-8 sm:px-5 shadow-bs1 w-full">
                <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[38%] md:w-full">
                  <div className="flex flex-col h-[279px] items-center justify-start w-[279px]">
                    <Img
                      className="h-[279px] md:h-auto object-cover w-[279px]"
                      src="images/img_rectangle45.png"
                      alt="rectangleFortyFive"
                    />
                  </div>
                  <Button className="bg-gray-800 cursor-pointer font-bold h-[60px] leading-[normal] py-4 text-center text-lg text-white-A700 w-[200px]">
                    Add to Cart
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsRegular24"
                    >
                      Limited Deals
                    </Text>
                    <div className="flex flex-row gap-8 items-center justify-between mt-[25px] w-full">
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-[17px] w-[107px]">
                        <div className="flex flex-col gap-2 items-center justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            08
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18Gray800"
                          >
                            Hours
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-[17px] w-[107px]">
                        <div className="flex flex-col gap-2 h-[71px] items-center justify-start w-[71px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            58
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18Gray800"
                          >
                            Minutes
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-3.5 w-[107px]">
                        <div className="flex flex-col gap-2 items-center justify-start my-[3px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            18
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18Gray800"
                          >
                            Seconds
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mt-[23px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsBold24Gray800"
                    >
                      Black Warm Jacket{" "}
                    </Text>
                    <div className="flex flex-row gap-6 items-center justify-start mt-4 w-[36%] md:w-full">
                      <Text
                        className="line-through text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                        size="txtPoppinsRegular24Gray500"
                      >
                        $299
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        $199
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex md:flex-col flex-row gap-12 items-center justify-start sm:ml-[0] p-8 sm:px-5 shadow-bs1 w-full">
                <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[38%] md:w-full">
                  <div className="flex flex-col h-[279px] items-center justify-start w-[279px]">
                    <Img
                      className="h-[279px] md:h-auto object-cover w-[279px]"
                      src="images/img_rectangle45_279x279.png"
                      alt="rectangleFortyFive"
                    />
                  </div>
                  <Button className="bg-gray-800 cursor-pointer font-bold h-[60px] leading-[normal] py-4 text-center text-lg text-white-A700 w-[200px]">
                    Add to Cart
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsRegular24"
                    >
                      Limited Deals
                    </Text>
                    <div className="flex flex-row gap-8 items-center justify-between mt-[25px] w-full">
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-[17px] w-[107px]">
                        <div className="flex flex-col gap-2 items-center justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            08
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18Gray800"
                          >
                            Hours
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-[17px] w-[107px]">
                        <div className="flex flex-col gap-2 h-[71px] items-center justify-start w-[71px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            58
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18Gray800"
                          >
                            Minutes
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-3.5 w-[107px]">
                        <div className="flex flex-col gap-2 items-center justify-start my-[3px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            18
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18Gray800"
                          >
                            Seconds
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mt-[26px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsBold24Gray800"
                    >
                      Casual Grey Shoes
                    </Text>
                    <div className="flex flex-row gap-[23px] items-center justify-start mt-[13px] w-[36%] md:w-full">
                      <Text
                        className="line-through text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                        size="txtPoppinsRegular24Gray500"
                      >
                        $399
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        $199
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-[86%] md:w-full">
            <div className="flex flex-col gap-[33px] items-start justify-start w-1/2 md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                New Arrival
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                        <Img
                          className="h-[83px] md:h-auto object-cover w-[83px]"
                          src="images/img_placeholder_83x83.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                            size="txtPoppinsMedium24"
                          >
                            Checkered Jacket
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Gray500"
                          >
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                        <Img
                          className="h-[83px] md:h-auto object-cover w-[83px]"
                          src="images/img_placeholder_1.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                            size="txtPoppinsMedium24"
                          >
                            Blue Woman Denim
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Gray500"
                          >
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                        <Img
                          className="h-[83px] md:h-auto object-cover w-[83px]"
                          src="images/img_placeholder_2.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                            size="txtPoppinsMedium24"
                          >
                            Orange Jeans
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Gray500"
                          >
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                        <Img
                          className="h-[83px] md:h-auto object-cover w-[83px]"
                          src="images/img_placeholder_3.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                            size="txtPoppinsMedium24"
                          >
                            Classic Watch
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Gray500"
                          >
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[9px] items-center justify-center md:ml-[0] ml-[346px] w-[14%] md:w-full">
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">View all</Text>
                </a>
                <Img
                  className="h-[31px] w-[31px]"
                  src="images/img_menu.svg"
                  alt="menu_One"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-1/2 md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Popular This Week
              </Text>
              <div className="flex flex-col items-center justify-start mt-7 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                        <Img
                          className="h-[83px] md:h-auto object-cover w-[83px]"
                          src="images/img_placeholder_4.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                            size="txtPoppinsMedium24"
                          >
                            Blue Jeans
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Gray500"
                          >
                            $299
                          </Text>
                        </div>
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
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                        <Img
                          className="h-[83px] md:h-auto object-cover w-[83px]"
                          src="images/img_placeholder_5.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                            size="txtPoppinsMedium24"
                          >
                            Wristwatch
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Gray500"
                          >
                            $299
                          </Text>
                        </div>
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
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                        <Img
                          className="h-[83px] md:h-auto object-cover w-[83px]"
                          src="images/img_placeholder_6.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                            size="txtPoppinsMedium24"
                          >
                            Elegant Jacket
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Gray500"
                          >
                            $299
                          </Text>
                        </div>
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
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                        <Img
                          className="h-[83px] md:h-auto object-cover w-[83px]"
                          src="images/img_placeholder_7.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                            size="txtPoppinsMedium24"
                          >
                            Gray Watch
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Gray500"
                          >
                            $299
                          </Text>
                        </div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[9px] items-center justify-center md:ml-[0] ml-[346px] mt-8 w-[14%] md:w-full">
                <a href="javascript:" className="text-gray-800 text-lg">
                  <Text size="txtPoppinsMedium18Gray800">View all</Text>
                </a>
                <Img
                  className="h-[31px] w-[31px]"
                  src="images/img_menu.svg"
                  alt="menu_Two"
                />
              </div>
            </div>
          </div>
          <List
            className="bg-gray-50 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:px-10 px-36 sm:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
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
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
              <Img className="h-12 w-12" src="images/img_card.svg" alt="card" />
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
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
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
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
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
          <footer className="bg-gray-800 flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center mb-[26px] mt-14 mx-auto w-[85%]">
              <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-[108px] items-start justify-start w-[42%] md:w-full">
                      <Img
                        className="h-6 mt-1"
                        src="images/img_group19_white_a700.svg"
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

export default HomepageVTwoPage;
