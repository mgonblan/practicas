import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductListPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header1 className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col items-start mt-[31px] md:px-10 px-36 sm:px-5 w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-[13%] md:w-full">
            <Text className="text-gray-500 text-lg" size="txtPoppinsMedium18">
              Home
            </Text>
            <Text
              className="text-blue_gray-100 text-lg"
              size="txtPoppinsMedium18Bluegray100"
            >
              <>&gt;</>
            </Text>
            <Text
              className="text-gray-800 text-lg"
              size="txtPoppinsMedium18Gray800"
            >
              Product List
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[39px] md:px-10 sm:px-5 px-[846px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
            size="txtPoppinsBold36"
          >
            Product List
          </Text>
        </div>
        <div className="h-[1732px] sm:h-[1792px] md:h-[2583px] mt-[63px] md:px-5 relative w-[93%] md:w-full">
          <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-1/5">
            <div className="flex flex-col gap-[31px] items-start justify-start w-[73%] md:w-full">
              <div className="flex flex-col gap-[29px] items-start justify-start w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18Gray800"
                >
                  Categories
                </Text>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_sweater_gray_500.svg"
                    alt="sweater"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Jacket
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_tshirt.svg"
                    alt="tshirt"
                  />
                  <Text
                    className="text-gray-800 text-lg w-auto"
                    size="txtPoppinsRegular18Gray800"
                  >
                    Shirt
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_pants_gray_500.svg"
                    alt="pants"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Pants
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_boot_gray_500.svg"
                    alt="boot"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Shoes
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_dress_gray_500.svg"
                    alt="dress"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Dress
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_belt_gray_500.svg"
                    alt="belt"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Accesories
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_skirt_gray_500.svg"
                    alt="skirt"
                  />
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Skirt
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <a
                    href="javascript:"
                    className="text-gray-500 text-lg w-auto"
                  >
                    <Text size="txtPoppinsRegular18">View more</Text>
                  </a>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-100 h-px mt-8 w-[73%]" />
            <div className="h-[234px] md:h-[263px] mt-8 relative w-[49%]">
              <Text
                className="absolute left-[0] text-gray-800 text-lg top-[0]"
                size="txtPoppinsMedium18Gray800"
              >
                Filter by Price
              </Text>
              <div className="absolute flex flex-col gap-6 h-max inset-[0] items-start justify-start m-auto w-auto">
                <CheckBox
                  className="leading-[normal] text-gray-500 text-left text-lg"
                  inputClassName="border-[3px] border-blue_gray-100 border-solid h-6 mr-[5px] w-6"
                  name="allprice"
                  id="allprice"
                  label="All Price"
                ></CheckBox>
                <div className="flex flex-row gap-4 items-end justify-start w-[87%] md:w-full">
                  <Img
                    className="h-0.5 mt-6"
                    src="images/img_checkedbox.svg"
                    alt="checkedbox"
                  />
                  <Text
                    className="text-gray-800 text-lg"
                    size="txtPoppinsRegular18Gray800"
                  >
                    $100 - $250
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-end justify-start w-[90%] md:w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px mt-[25px] w-[17%]"></div>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    $250 - $500
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-end justify-start w-[96%] md:w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px mt-[26px] w-[16%]"></div>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    $750 - $1.000
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-end justify-start w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px mt-[26px] w-[15%]"></div>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    $1000 - $1.500
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-100 h-px mt-[85px] w-[73%]" />
            <div className="h-[277px] md:h-[283px] mt-[31px] relative w-full">
              <Text
                className="text-gray-800 text-lg"
                size="txtPoppinsMedium18Gray800"
              >
                Filter by Rating
              </Text>
              <div className="absolute flex flex-col gap-4 h-full inset-[0] items-start justify-start m-auto w-auto">
                <div className="flex flex-row gap-[62px] items-center justify-start w-[26%] md:w-full">
                  <Line className="bg-blue_gray-100 h-6 w-px" />
                  <div className="flex flex-col items-start justify-start w-6">
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1.svg"
                      alt="starOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[21px] justify-start w-[45%] md:w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px w-px"></div>
                  <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[95px] w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1_24x24.svg"
                      alt="starOne_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star2.svg"
                      alt="starTwo"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] justify-start w-[63%] md:w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px w-px"></div>
                  <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[126px] w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1_1.svg"
                      alt="starOne_Two"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star2_24x24.svg"
                      alt="starTwo_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star3.svg"
                      alt="starThree"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1_2.svg"
                      alt="starOne_Three"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star2_1.svg"
                      alt="starTwo_Two"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star3_24x24.svg"
                      alt="starThree_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star5.svg"
                      alt="starFive"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] justify-start w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px w-px"></div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[188px] w-auto">
                    <RatingBar
                      className="flex justify-between w-[152px]"
                      value={5}
                      starCount={5}
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[30px] h-full inset-y-[0] items-start justify-start my-auto right-[0] w-[85%]">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[91%] md:w-full">
              <Text className="text-gray-500 text-lg" size="txtPoppinsMedium18">
                <span className="text-gray-500 font-poppins text-left font-medium">
                  Viewing{" "}
                </span>
                <span className="text-gray-800 font-inter text-left font-normal">
                  20 of 160
                </span>
                <span className="text-gray-500 font-poppins text-left font-medium">
                  {" "}
                  product
                </span>
              </Text>
              <SelectBox
                className="leading-[normal] text-gray-500 text-left text-lg w-[18%] sm:w-full"
                placeholderClassName="text-gray-500"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown_gray_800.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="sort"
                options={sortOptionsList}
                isSearchable={false}
                placeholder="Sort by: Newest Items"
              />
            </div>
            <div className="sm:h-[1645px] h-[1675px] md:h-[2463px] relative w-full">
              <div className="absolute bottom-[0] flex flex-row gap-6 items-center justify-center left-[35%] w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <div className="flex flex-row gap-[13px] h-[50px] items-center justify-center w-[50px]">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    1
                  </Text>
                  <div className="bg-gray-800 h-[50px] w-[64%]"></div>
                </div>
                <div className="flex flex-row gap-[27px] h-[51px] items-center justify-center w-[51px]">
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    2
                  </Text>
                  <div className="border-2 border-gray-500 border-solid h-[51px] w-[28%]"></div>
                </div>
                <div className="flex flex-row gap-8 h-[51px] items-center justify-center w-[51px]">
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    3
                  </Text>
                  <div className="border-2 border-gray-500 border-solid h-[51px] w-[18%]"></div>
                </div>
                <Img className="h-6 w-6" src="images/img_info.svg" alt="info" />
              </div>
              <div className="absolute flex flex-col gap-8 h-max inset-[0] items-start justify-center m-auto overflow-auto w-full">
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-[33px] grid md:grid-cols-1 grid-cols-2 w-[43%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-4 justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[2%] md:w-full">
                        <Img
                          className="h-[245px] md:h-auto object-cover w-full"
                          src="images/img_placeholder_245x6.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start ml-60 md:ml-[0] w-auto">
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
                    <div className="flex flex-col gap-4 justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[1%] md:w-full">
                        <Img
                          className="h-[245px] md:h-auto object-cover w-full"
                          src="images/img_placeholder_245x1.png"
                          alt="placeholder"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[242px] w-auto">
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
                  </List>
                  <div className="flex flex-col items-center justify-start w-[9%] md:w-full">
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
                  <div className="flex flex-col items-center justify-start w-[8%] md:w-full">
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
                  <div className="flex flex-col items-center justify-start w-[9%] md:w-full">
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
                </div>
                <div className="overflow-x-auto w-full">
                  <div className="h-[1245px] md:h-[1388px] sm:h-[445px] relative w-full">
                    <div className="absolute flex md:flex-col flex-row gap-8 h-max inset-y-[0] items-start justify-start left-[0] my-auto w-auto">
                      <div className="flex flex-col md:gap-10 gap-[228px] justify-start w-[27%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[2%] md:w-full">
                          <Img
                            className="h-[97px] md:h-auto object-cover w-full"
                            src="images/img_placeholder_97x6.png"
                            alt="placeholder"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start ml-60 md:ml-[0] w-auto">
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
                      <div className="flex flex-col md:gap-10 gap-[228px] justify-start w-1/4 md:w-full">
                        <div className="flex flex-col items-center justify-start w-[1%] md:w-full">
                          <Img
                            className="h-[97px] md:h-auto object-cover w-full"
                            src="images/img_placeholder_97x1.png"
                            alt="placeholder_One"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[243px] w-auto">
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
                      <div className="flex flex-col items-center justify-start w-[13%] md:w-full">
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
                      <div className="flex flex-col items-center justify-start w-[10%] md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            <>
                              Blue Denim <br />
                              Skirt
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
                    <div className="absolute flex md:flex-col flex-row gap-8 inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
                      <div className="flex flex-col md:gap-10 gap-[122px] justify-start w-[19%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[2%] md:w-full">
                          <Img
                            className="h-[171px] md:h-auto object-cover w-full"
                            src="images/img_placeholder_171x6.png"
                            alt="placeholder_Two"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[242px] w-auto">
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
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[21%] md:w-full">
                        <div className="flex flex-col items-center justify-start mb-[188px] w-[1%] md:w-full">
                          <Img
                            className="h-[166px] md:h-auto object-cover w-full"
                            src="images/img_placeholder_166x1.png"
                            alt="placeholder_Three"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[242px] md:mt-0 mt-[283px] w-auto">
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
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[966px] md:mt-0 mt-[283px] w-[36%] md:w-full">
                          <div className="flex flex-col gap-2 items-center justify-start w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-auto"
                              size="txtPoppinsMedium24"
                            >
                              Pink Jacket
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
                      <div className="flex flex-col gap-[15px] justify-start w-[14%] md:w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[244px] w-[1%] md:w-full">
                          <Img
                            className="h-[245px] md:h-auto object-cover w-full"
                            src="images/img_placeholder_8.png"
                            alt="placeholder_Four"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start mr-[105px] w-auto">
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
                      <div className="flex flex-col items-center justify-start w-[8%] md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            <>
                              Casual <br />
                              Grey Shoes
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
                    <div className="absolute bottom-[0] flex md:flex-col flex-row gap-8 items-start justify-start left-[0] w-auto">
                      <div className="flex flex-col md:gap-10 gap-[270px] justify-start w-[30%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[2%] md:w-full">
                          <Img
                            className="h-[68px] md:h-auto object-cover w-full"
                            src="images/img_placeholder_68x6.png"
                            alt="placeholder_Five"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[239px] w-auto">
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
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsMedium18"
                          >
                            $299
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[27%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[1%] md:w-full">
                          <Img
                            className="h-[68px] md:h-auto object-cover w-full"
                            src="images/img_placeholder_68x1.png"
                            alt="placeholder_Six"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[242px] md:mt-0 mt-[338px] w-auto">
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
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsMedium18"
                          >
                            $299
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[958px] md:mt-0 mt-[338px] w-[39%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-auto">
                            <div className="flex flex-col gap-2 justify-start w-full">
                              <Text
                                className="md:ml-[0] ml-[363px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                                size="txtPoppinsMedium24"
                              >
                                <>
                                  Green
                                  <br />
                                  Sport Jacket
                                </>
                              </Text>
                              <div className="flex flex-row items-center justify-between mr-[53px] w-[90%] md:w-full">
                                <Text
                                  className="text-gray-500 text-lg w-auto"
                                  size="txtPoppinsMedium18"
                                >
                                  $299
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
                      <div className="flex flex-col gap-4 justify-start w-[17%] md:w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[244px] w-[1%] md:w-full">
                          <Img
                            className="h-[245px] md:h-auto object-cover w-full"
                            src="images/img_placeholder_9.png"
                            alt="placeholder_Seven"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start mr-[79px] w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            <>
                              Brown <br />
                              Casual Shoes
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
                      <div className="flex flex-col items-center justify-start w-[5%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            <>
                              Gray <br />
                              Longpants
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[100px] w-full">
          <Footer className="bg-gray-800 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
