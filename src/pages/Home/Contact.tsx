import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Container from "@/components/Container";

const Contact = () => {
  return (
    <Container className="my-2  text-center">
      <div>
        <p className="text-center text-red-400">--Keep In Touch--</p>
        <h1 className="text-4xl text-center m-2 text-teal-500 font-semibold ">
          Contact Us
        </h1>

        <h3 className="text-xl flex gap-2 items-center text-purple-500 justify-center">
          <FaPhoneAlt className="text-teal-500 border-2 border-teal-500 rounded"></FaPhoneAlt>{" "}
          Phone: +8801911415134
        </h3>
        <h3 className="text-xl flex gap-2 items-center text-purple-500 text-center justify-center">
          <BiMailSend className="text-teal-500 border-2 border-teal-500 rounded "></BiMailSend>
          Email: abcd@gmail.com
        </h3>
        <h3 className="text-xl flex gap-2 items-center text-purple-500 justify-center">
          <FaLocationArrow className="text-teal-500 border-2 border-teal-500 rounded"></FaLocationArrow>{" "}
          Address: Dhaka,Bangladesh
        </h3>
        <h2 className="text-3xl bold mb-2 text-teal-500">Message Here</h2>
      </div>

      <form>
        <div>
          <input
            className="input input-bordered input-accent w-full  mb-2"
            type="text"
            name="user_name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            className="input input-bordered input-accent w-full mb-2"
            type="email"
            name="user_email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-accent w-full"
            name="message"
            placeholder="Your Message"
          />
        </div>

        <input
          className="bg-slate-600 w-full rounded p-2 text-white hover:bg-teal-500"
          type="submit"
          value="Send Message"
        />
      </form>
    </Container>
  );
};

export default Contact;
