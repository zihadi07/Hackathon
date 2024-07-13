import {
  faMortarBoard,
  faShare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sideImage from "../../images/sideImage.png";
import computer from "../../images/computer.png";
import js from "../../images/js.png";
import gear from "../../images/gear.png";
import tic from "../../images/tic.png";
import cross from "../../images/cross.png";
import edit from "../../assets/edit.jfif";

const Featured = ({ label }) => {
  return (
    <div className="p-2 w-[100%] rounded-3xl bg-[#2E2F31] h-[151px] mt-4 ">
      <div className="text-center mt-8 m-auto text-white text-6xl">
        <h2>{label}</h2>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="w-[95%] flex justify-between m-auto mt-4">
      <div className="w-[30%] bg-[#198bb8] rounded-3xl p-2 text-white">
        <img style={{ width: "100px" }} src={computer} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
          dolores illum doloribus nesciunt repellat neque doloremque accusamus
          soluta? Omnis sit natus voluptate facilis iure non dolorum soluta
          explicabo doloremque autem.
        </p>
      </div>
      <div className="w-[30%] bg-[#198bb8] rounded-3xl p-2 text-white">
        <img style={{ width: "100px" }} src={js} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          molestiae nam explicabo labore mollitia dolorum veniam, voluptas alias
          iure, omnis, repellendus vitae iusto veritatis voluptatum dignissimos
          eligendi tempore architecto! Beatae?
        </p>
      </div>
      <div className="w-[30%] bg-[#198bb8] rounded-3xl p-2 text-white">
        <img style={{ width: "100px" }} src={gear} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident
          ipsa quaerat, magnam harum perspiciatis reprehenderit fugit nemo rem
          dolores nobis eum temporibus accusantium doloremque exercitationem
          sapiente optio similique explicabo.
        </p>
      </div>
    </div>
  );
};

const EduPackages = () => {
  return (
    <div className="w-[95%] flex justify-between m-auto mt-4">
      <div className="w-[30%] bg-[#198bb8] rounded-3xl p-4 ">
        <div>
          <h2
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Free
          </h2>

          <h1
            style={{
              textAlign: "center",
              color: "#aed6ff",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            00.0/month
          </h1>
          <br />
          <br />
          <p style={{ textAlign: "center", color: "white" }}>
            price descriptions Free plan
          </p>
          <br />
          <hr />
          <ul className="mt-4 mb-6">
            <li className="flex justify-center m-auto">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>Time Flexible </span>
            </li>
            <li className="flex justify-center ">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>Daily Quizzes</span>
            </li>
            <li className="flex justify-center">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>Resources</span>
            </li>
            <li className="flex justify-center">
              <img style={{ width: "33px" }} src={cross} alt="" />
              <span style={{ fontSize: "20px" }}>One to one sessions</span>
            </li>
          </ul>
          <br />
          <br />
          <div className="mt-2 m-auto w-[115px] ">
            <button
              className="w-[100%] p-2 rounded-3xl text-black bg-white hover:bg-[#bfbfbf] hover:text-white"
              style={{ fontWeight: "bold" }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-[30%] bg-[#198bb8] rounded-3xl p-4 ">
        <div>
          <h2
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Silver Plan
          </h2>

          <h1
            style={{
              textAlign: "center",
              color: "#aed6ff",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            68.0/month
          </h1>
          <br />
          <br />
          <p style={{ textAlign: "center", color: "white" }}>
            price descriptions Free plan
          </p>
          <br />
          <hr />
          <ul className="mt-4 mb-6">
            <li className="flex justify-center m-auto">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>Time Flexible </span>
            </li>
            <li className="flex justify-center ">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>Daily Quizzes</span>
            </li>
            <li className="flex justify-center">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>Resources</span>
            </li>
            <li className="flex justify-center">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>One to one sessions</span>
            </li>
          </ul>
          <br />
          <br />
          <div className="mt-2 m-auto w-[115px] ">
            <button
              className="w-[100%] p-2 rounded-3xl text-black bg-white hover:bg-[#bfbfbf] hover:text-white"
              style={{ fontWeight: "bold" }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-[30%] bg-[#198bb8] rounded-3xl p-4 ">
        <div>
          <h2
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Gold Plan
          </h2>

          <h1
            style={{
              textAlign: "center",
              color: "#aed6ff",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            99.0/month
          </h1>
          <br />
          <br />
          <p style={{ textAlign: "center", color: "white" }}>
            price descriptions Free plan
          </p>
          <br />
          <hr />
          <ul className="mt-4 mb-6">
            <li className="flex justify-center m-auto">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>Time Flexible </span>
            </li>
            <li className="flex justify-center ">
              <img style={{ width: "33px" }} src={tic} alt="" />
              <span style={{ fontSize: "20px" }}>Daily Quizzes</span>
            </li>
            <li className="flex justify-center">
              <img style={{ width: "33px" }} src={cross} alt="" />
              <span style={{ fontSize: "20px" }}>Resources</span>
            </li>
            <li className="flex justify-center">
              <img style={{ width: "33px" }} src={cross} alt="" />
              <span style={{ fontSize: "20px" }}>One to one sessions</span>
            </li>
          </ul>
          <br />
          <br />
          <div className="mt-2 m-auto w-[115px] ">
            <button
              className="w-[100%] p-2 rounded-3xl text-black bg-white hover:bg-[#bfbfbf] hover:text-white"
              style={{ fontWeight: "bold" }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="py-4 px-4 w-[95%] rounded-3xl bg-[#00A3FF] flex justify-between mt-4 mx-8">
        <div className="m-auto">
          <div className="w-full h-full p-4">
            <h1 className="text-white text-6xl font-bold">
              Discover and Learn
            </h1>
            <p className="text-white text-2xl">
              Learning seems fun when done with peers.
            </p>
          </div>
          <div className="p-2 w-full rounded-3xl bg-[#EEEEEE] flex justify-between h-full">
            <ul className="flex justify-items-between m-auto">
              <li className="flex w-32 h-[60px] text-3xl text-white m-auto">
                <div className="m-auto text-black">
                  <FontAwesomeIcon icon={faUserGroup} />
                </div>
                <div className="m-auto ">
                  <p className="text-sm text-black">
                    69k+ <br />
                    Students
                  </p>
                </div>
              </li>
              <li className="flex w-32 h-[60px] text-3xl text-white m-auto">
                <div className="m-auto text-black">
                  <FontAwesomeIcon icon={faMortarBoard} />
                </div>
                <div className="m-auto">
                  <p className="text-sm text-black">
                    200+ <br />
                    Courses
                  </p>
                </div>
              </li>
              <li className="flex w-32 h-[60px] text-3xl text-white m-auto">
                <div className="m-auto text-black">
                  <FontAwesomeIcon icon={faShare} />
                </div>
                <div className="m-auto">
                  <p className="text-sm text-black">
                    108k+ <br />
                    Community
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-2 w-2/5 rounded-3xl bg-[#78CCEE] flex justify-between h-[533px] mt-4">
          <div className="m-auto w-full h-full ">
            <img src={sideImage} alt="" />
          </div>
        </div>
      </div>
      <Featured label={"Featured Courses"} />
      <Courses />
      <Featured label={"Pricing"} />
      <EduPackages />
    </>
  );
};

export default Home;
