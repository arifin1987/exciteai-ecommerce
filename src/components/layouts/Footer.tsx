import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Container from "../Container";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <Container className="bg-slate-900">
      <div className="md:flex justify-between  p-8 gap-4">
        <div>
          <h1 className="text-2xl text-white mb-4 ">Support</h1>
          <button className="border-2 p-4 w-[300px] rounded-full">
            <div className="flex gap-2 items-center">
              <div className="text-white text-2xl">
                <BsTelephone />
              </div>
              <div className="mx-4 text-left">
                <small className="text-white">10AM - 7PM</small> <br />
                <span className="text-orange-500  text-2xl font-bold">
                  16793
                </span>
              </div>
            </div>
          </button>
          <button className="border-2 p-4 w-[300px] rounded-full my-4">
            <div className="flex gap-2 items-center">
              <div className="text-white text-2xl">
                <FaLocationDot />
              </div>
              <div className="mx-4 text-left">
                <small className="text-white">Store Locator</small> <br />
                <span className="text-orange-500 text-2xl font-bold ">
                  Find Our Stores
                </span>
              </div>
            </div>
          </button>
        </div>
        {/* About us section */}
        <div>
          <h1 className="text-2xl text-white mb-4 ">About Us</h1>
          <div className="flex gap-4 text-slate-400">
            <div>
              <p>EMI Terms</p>
              <p>Privacy Policy</p>
              <p>Star Point Policy</p>
              <p>Brands</p>
            </div>
            <div>
              <p>About Us</p>
              <p>Terms and Conditions</p>
              <p>Blog</p>
            </div>
            <div>
              <p>Online Policy</p>
              <p>Refund and Return Policy</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        {/* Stay connected  */}
        <div className="text-slate-400">
          <h1 className="text-2xl text-white mb-4 ">Stay Connected</h1>
          <p>Star Tech Ltd</p>
          <p>
            Head Office: 28 Kazi Nazrul Islam <br />
            Ave,Navana Zohura Square, Dhaka 1000
          </p>
          <p>
            Email: <br />
            <span className="text-orange-500">webteam@startechbd.com</span>
          </p>
        </div>
      </div>
      <div>
        <hr className="text-white" />
        <div className="flex justify-between items-center my-4">
          <div>
            <small className="text-white">
              Experience Star Tech App on your mobile
            </small>
          </div>

          <div className="flex text-white gap-2 text-2xl">
            <FaFacebook />
            <SiYoutubemusic />
            <AiFillTwitterCircle />
          </div>
        </div>

        <hr className="text-white" />
        <div className="flex justify-between my-4">
          <div className="flex gap-2 text-white">
            <LiaCopyrightSolid />
            <small className="text-white mb-4">
              Star Tech ltd | All Rights Reserved
            </small>
          </div>

          <small className="text-white">Powered By</small>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
