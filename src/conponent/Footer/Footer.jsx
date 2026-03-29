import React from "react";
import btnImage from "../../assets/Frame 11.png";
import NewsLatter from "../../assets/footer.png";

const Footer = () => {
  return (
    <div className="bg-[#06091A] relative flex-col mt-10 flex items-center justify-center">
      <div
        className="w-full 
       lg:w-[1292px] absolute -top-40 p-5 border-2 border-neutral/10 bg-white/10 rounded-2xl h-[344px] flex justify-center items-center mx-auto"
      >
        <div
          style={{
            backgroundImage: `url(${NewsLatter})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto bg-white rounded-2xl h-full w-full flex flex-col justify-center items-center"
        >
          <div className="px-2">
            <h1 className="text-2xl sm:text-[27px] md:text-3xl text-black font-bold mb-4">
              Subscribe to our Newsletter
            </h1>
            <p className="mb-4 text-[14px] text-black sm:text-base">
              Get the latest updates and news right in your inbox!
            </p>
          </div>
          <div className="px-2">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input md:w-80 focus:outline-none focus:ring-0 rounded-l-lg  input-bordered  font-bold "
              />
              <button
                style={{
                  backgroundImage: `url(${btnImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="btn rounded-r-xl  w-36   join-item"
              ></button>
            </form>
          </div>
        </div>
      </div>

      {/* footer  */}
      <footer className="footer mt-52 place-items-center sm:footer-horizontal bg-[#06091A] text-white p-10">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p className="link link-hover">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <ul className="list-disc">
            <li className="link link-hover">Home </li>
            <li className="link link-hover">Services </li>
            <li className="link link-hover">About </li>
            <li className="link link-hover">Contact </li>
          </ul>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
          <fieldset className="w-80">
            <label>
              Subscribe to our newsletter for the <br /> latest updates.
            </label>
            <div className="join mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="input  focus:outline-none focus:ring-0 rounded-l-lg input-bordered   font-bold join-item"
              />
              <button
                style={{
                  backgroundImage: `url(${btnImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="btn rounded-r-xl w-36 join-item text-white font-bold"
              ></button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="py-8">
        <p className="text-white text-base">
          <small>@2024 Your Company All Rights Reserved.</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
