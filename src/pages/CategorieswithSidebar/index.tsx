import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Line,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import Header1 from "components/Header1";

const titleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titleOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CategorieswithSidebarPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header1 className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start mt-8 md:px-10 px-36 sm:px-5 w-full">
          <div className="flex flex-row gap-4 items-start justify-start w-[13%] md:w-full">
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
              className="mt-0.5 text-gray-800 text-lg"
              size="txtPoppinsMedium18Gray800"
            >
              Categories
            </Text>
          </div>
        </div>
        <Text
          className="mt-[42px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
          size="txtPoppinsBold36"
        >
          Categories
        </Text>
        <div className="h-[1080px] sm:h-[1151px] md:h-[2179px] max-w-[1632px] mt-[71px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[84%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-40 w-40"
                      src="images/img_sweater_gray_800.svg"
                      alt="sweater"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 w-auto"
                        size="txtPoppinsBold36"
                      >
                        Jacket
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                        size="txtPoppinsRegular36Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-40 w-40"
                      src="images/img_tshirt.svg"
                      alt="tshirt"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 w-auto"
                        size="txtPoppinsBold36"
                      >
                        Shirt
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                        size="txtPoppinsRegular36Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-40 w-40"
                      src="images/img_pants.svg"
                      alt="pants"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 w-auto"
                        size="txtPoppinsBold36"
                      >
                        Pants
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                        size="txtPoppinsRegular36Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-40 w-40"
                      src="images/img_skirt.svg"
                      alt="skirt"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 w-auto"
                        size="txtPoppinsBold36"
                      >
                        Skirt
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                        size="txtPoppinsRegular36Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <div className="bg-gray-50 flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-40 w-40"
                      src="images/img_dress.svg"
                      alt="dress"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 w-auto"
                        size="txtPoppinsBold36"
                      >
                        Dress
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                        size="txtPoppinsRegular36Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <div className="bg-gray-50 flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-40 w-40"
                      src="images/img_bra_gray_800.svg"
                      alt="bra"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 w-auto"
                        size="txtPoppinsBold36"
                      >
                        Underwear
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                        size="txtPoppinsRegular36Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <div className="bg-gray-50 flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-40 w-40"
                      src="images/img_boot_gray_800.svg"
                      alt="boot"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 w-auto"
                        size="txtPoppinsBold36"
                      >
                        Shoes
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                        size="txtPoppinsRegular36Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <div className="bg-gray-50 flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-40 w-40"
                      src="images/img_belt.svg"
                      alt="belt"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 w-auto"
                        size="txtPoppinsBold36"
                      >
                        Accesories
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                        size="txtPoppinsRegular36Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[21%]">
            <div className="md:h-[231px] h-[236px] relative w-[73%]">
              <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[0] my-auto w-auto">
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
              <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18Gray800"
                >
                  Filter by Price
                </Text>
                <Img
                  className="h-0.5"
                  src="images/img_arrowdown_gray_800.svg"
                  alt="chevrondown"
                />
              </div>
            </div>
            <Line className="bg-blue_gray-100 h-px mt-[85px] w-[73%]" />
            <div className="h-[278px] md:h-[283px] mt-[31px] relative w-full">
              <div className="absolute flex flex-col gap-4 h-full inset-[0] items-start justify-start m-auto w-auto">
                <div className="flex flex-row gap-[62px] items-center justify-start w-[26%] md:w-full">
                  <Line className="bg-blue_gray-100 h-6 w-px" />
                  <div className="flex flex-col items-start justify-start w-6">
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1_3.svg"
                      alt="starOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[21px] justify-start w-[45%] md:w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px w-px"></div>
                  <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[95px] w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1_4.svg"
                      alt="starOne_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star2_2.svg"
                      alt="starTwo"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] justify-start w-[64%] md:w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px w-px"></div>
                  <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[126px] w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1_5.svg"
                      alt="starOne_Two"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star2_3.svg"
                      alt="starTwo_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star3_1.svg"
                      alt="starThree"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1_6.svg"
                      alt="starOne_Three"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star2_4.svg"
                      alt="starTwo_Two"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star3_2.svg"
                      alt="starThree_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_star5_24x24.svg"
                      alt="starFive"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] justify-start w-full">
                  <div className="border-[3px] border-blue_gray-100 border-solid h-px w-px"></div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[187px] w-auto">
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
              <div className="absolute flex flex-col justify-start left-[0] top-[0] w-[73%]">
                <Img
                  className="h-px md:ml-[0] ml-[221px]"
                  src="images/img_arrowdown_gray_800.svg"
                  alt="chevrondown_One"
                />
                <Text
                  className="mr-[110px] text-gray-800 text-lg"
                  size="txtPoppinsMedium18Gray800"
                >
                  Filter by Rating
                </Text>
              </div>
            </div>
            <Line className="bg-blue_gray-100 h-px w-[73%]" />
            <SelectBox
              className="font-medium leading-[normal] mt-[33px] text-gray-800 text-left text-lg w-[73%] sm:w-full"
              placeholderClassName="text-gray-800"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_gray_800.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="title"
              options={titleOptionsList}
              isSearchable={false}
              placeholder="Filter by Brand"
            />
            <SelectBox
              className="font-medium leading-[normal] mt-[31px] text-gray-800 text-left text-lg w-[73%] sm:w-full"
              placeholderClassName="text-gray-800"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_gray_800.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="title_One"
              options={titleOneOptionsList}
              isSearchable={false}
              placeholder="Filter by Size"
            />
          </div>
        </div>
        <footer className="bg-gray-800 flex items-center justify-center mt-[85px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-center mb-[30px] mt-[62px] mx-auto w-[85%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-[109px] items-start justify-start w-[43%] md:w-full">
                  <Img
                    className="h-6 mt-1"
                    src="images/img_group19_1.svg"
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
                <div className="flex flex-col gap-8 items-start justify-start w-[245px]">
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
                        <Text size="txtPoppinsRegular18">Terms of service</Text>
                      </a>
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
      </div>
    </>
  );
};

export default CategorieswithSidebarPage;
