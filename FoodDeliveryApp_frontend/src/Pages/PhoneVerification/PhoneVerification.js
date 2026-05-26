import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { assets } from "../../assets/assets";
import "./PhoneVerification.css";
import { useNavigate } from "react-router-dom";
import {
  phonegenerateOtpApi,
  phoneverificationOtpApi,
} from "../../Services/allApi";
import toast from "react-hot-toast";

const PhoneVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [userPhone] = useState(() =>
    JSON.parse(sessionStorage.getItem("phone"))
  );
  console.log(userPhone);
  const [otpGenerated, setOtpGenerated] = useState(false);
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    // Check if OTP is valid
    if (otp.length !== 6) {
      return toast.error("Invalid OTP. OTP should be 6 digits long.", {
        position: "top-right",
      });
    }
    try {
      const userData = {
        phone: userPhone,
        otp,
      };
      const result = await phoneverificationOtpApi(userData);

      if (result.status === 200) {
        toast.success("Phone Verification Successful", {
          position: "top-center",
        });

        navigate("/");
      } else {
        console.log(result);
        toast.error("Verification Failed! Try Again", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error during verification:", error);
      toast.error(
        "An error occurred during verification. Please try again later.",
        { position: "top-right" }
      );
    }
  };

  const handlePhone = async () => {
    if (!userPhone) {
      toast.error("User Phone Number is not available.", {
        position: "top-right",
      });
      toast.error("YOU NEED TO REGISTER FIRST", { position: "top-right" });
      navigate("/");
      return;
    }

    if (otpGenerated) {
      toast.error("OTP has already been generated.", { position: "top-right" });
      return;
    }

    try {
      const result = await phonegenerateOtpApi({ phone: userPhone });

      if (result.status === 200) {
        toast.success("OTP Successfully Generated", { position: "top-center" });
        setOtpGenerated(true);
      }
    } catch (err) {
      console.error("OTP generation failed", err);
      toast.error(
        "An error occurred during OTP generation. Please try again later.",
        { position: "top-right" }
      );
    }
  };

  return (
    <div>
                  <div className='logo-container'>
      <h2>
              <div className="d-flex justify-content-center  gap-1">
                <i
                  class="fa-solid fa-burger fa-xs fs-1 mt-3 "
                  style={{ color: "#FFC801" }}
                ></i>
                <div>
                  <span  style={{ color: "#FFC801" }}>
                    {" "}
                    <b>B</b>ite
                  </span>
                  <span
                    className="text-gray-700 "
                    style={{ fontWeight: "500" }}
                  >
                    Box
                  </span>
                </div>
              </div>
            </h2>{" "}

      </div>

      <>
        <Container>
          <div className="text-center">
            {" "}
            <div className="d-flex justify-content-center ">
              <img src={assets.foodreg}  alt="" />
            </div>{" "}
            <h2 className="mb-2 emq">Verify Your Phone Number</h2>
            <p className="emv">
              We have sent an OTP to your Phone Number. <br />
              Please enter OTP to complete verification
            </p>
            <input
              className="p-3"
              id="otpInput"
              type=""
              placeholder="Enter The OTP Here"
              style={{ borderRadius: "5px" }}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            <br />
            <button
              className="btn btn-danger "
              id="embtn"
              onClick={handleOtpSubmit}
            >
              Submit OTP
            </button>
            {
              <button
                className="btn btn-outline-dark mt-3 "
                id="rsndbtn"
                style={{ marginLeft: "5px" }}
                onClick={handlePhone}
              >
                Resend OTP
              </button>
            }
          </div>
        </Container>
      </>
    </div>
  );
};

export default PhoneVerification;
