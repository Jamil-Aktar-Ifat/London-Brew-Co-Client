import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <div
        className=" py-20 "
        style={{
          backgroundImage: "url(https://i.ibb.co/zZd6BGp/13.jpg)",
        }}
      >
        <div className="md:flex items-center justify-around ">
          {/* left side  */}
          <div className="space-y-4">
            <img
              className="w-20"
              src="../../../public/images/more/logo1.png"
              alt=""
            />
            <h2 className="text-[#331A15] text-rancho text-4xl ">
              London Brew Co.
            </h2>
            <p className="text-raleway">
              Always ready to be your friend. Come & Contact with us to share
              your <br /> memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-2 text-4xl ">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
            </div>
            <h2 className="text-[#331A15] text-rancho text-4xl ">
              Get in touch
            </h2>
            <div className="space-y-2 text-raleway">
              <div className="flex items-center gap-3">
                <FaPhoneAlt></FaPhoneAlt>
                <p>+440 7899877890</p>
              </div>
              <div className="flex items-center gap-3">
                <MdLocalPostOffice></MdLocalPostOffice>
                <p>lonbrew@hotmail.co.uk</p>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationDot></FaLocationDot>
                <p>72, Wall street, King Road, London</p>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div>
            <h2 className="text-[#331A15] text-rancho text-4xl my-3">
              Connect with us
            </h2>
            <form className="grid space-y-4 text-raleway">
              <input
                type="text"
                placeholder="Name"
                className="border pl-4 pr-36 py-2"
              />
              <input
                type="text"
                placeholder="Email"
                className="border pl-4 pr-36 py-2"
              />
              <textarea
                placeholder="Message"
                className=" pl-4 pt-2 pb-24 border w-full "
              ></textarea>
              <input
                className="w-32 border rounded-full py-2 bg-none hover:bg-[#E3B577] hover:text-black text-rancho text-lg"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
      <p className="py-2 text-white text-rancho bg-black text-center text-xl">
        Copyright London Brew Co. ! All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
