import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Heading from "../../Components/Heading";
import "./Styles.scss"


const LoanAccounts = () => {
  const [urlData, setUrlData] = useState("0003109889")
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.

      breakpoint: { max: 4000, min: 3000 },

      items: 3,
    },

    desktop: {
      breakpoint: { max: 3000, min: 1024 },

      items: 3,
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },

      items: 2,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },

      items: 1,
    },
  };

  return (
    <>
      <div className="pt-3">
        <Heading name="Active Loans" />
      </div>

      <div className="loans">No Loans</div>

      <div className="pt-5">
        <Heading name="Close / Matured Loans" /> 
      </div>

      <div className="loans_carousel">
        <Carousel
          className="container carousel"
          responsive={responsive}
        //  showDots={true}
          swipeable={true}
          draggable={true}
          infinite={true}
         autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-margin-40-px"
        >
          <div className="carosuel_itemss corousel_1">
             <div className="loan_details_box">
                <h6>Variable Personal Loan</h6>
                <p>Loan Number: H40QWE123213</p>
                <div>
                    <small>Loan Amount (Rs.)</small>
                    <small>6,94,000</small>
                </div>
                <div>
                    <small>Tenor (Months)</small>
                    <small>30/30</small>
                </div>
                <div>
                    <small>Loan Ending Date</small>
                    <small>08 Apr 2022</small>
                </div>
                <Link to={`/loanaccountsdetails/${urlData}`}>View Details</Link>
             </div>
          </div>

          <div className="carosuel_itemss corousel_2">
          <div className="loan_details_box">
                <h6>Variable Home Loan</h6>
                <p>Loan Number: H40QWE123213</p>
                <div>
                    <small>Loan Amount (Rs.)</small>
                    <small>6,94,000</small>
                </div>
                <div>
                    <small>Tenor (Months)</small>
                    <small>30/30</small>
                </div>
                <div>
                    <small>Loan Ending Date</small>
                    <small>08 Apr 2022</small>
                </div>
                <Link>View Details</Link>
             </div>
          </div>

          <div className="carosuel_itemss corousel_3">
          <div className="loan_details_box">
                <h6>Variable Personal Loan</h6>
                <p>Loan Number: H40QWE123213</p>
                <div>
                    <small>Loan Amount (Rs.)</small>
                    <small>6,94,000</small>
                </div>
                <div>
                    <small>Tenor (Months)</small>
                    <small>30/30</small>
                </div>
                <div>
                    <small>Loan Ending Date</small>
                    <small>08 Apr 2022</small>
                </div>
                <Link>View Details</Link>
             </div>
          </div>

          <div className="carosuel_itemss corousel_4">
          <div className="loan_details_box">
                <h6>Variable Home Loan</h6>
                <p>Loan Number: H40QWE123213</p>
                <div>
                    <small>Loan Amount (Rs.)</small>
                    <small>6,94,000</small>
                </div>
                <div>
                    <small>Tenor (Months)</small>
                    <small>30/30</small>
                </div>
                <div>
                    <small>Loan Ending Date</small>
                    <small>08 Apr 2022</small>
                </div>
                <Link>View Details</Link>
             </div>
          </div>

          <div className="carosuel_itemss corousel_5">
          <div className="loan_details_box">
                <h6>Variable Personal Loan</h6>
                <p>Loan Number: H40QWE123213</p>
                <div>
                    <small>Loan Amount (Rs.)</small>
                    <small>6,94,000</small>
                </div>
                <div>
                    <small>Tenor (Months)</small>
                    <small>30/30</small>
                </div>
                <div>
                    <small>Loan Ending Date</small>
                    <small>08 Apr 2022</small>
                </div>
                <Link>View Details</Link>
             </div>
          </div>

          <div className="carosuel_itemss corousel_6">
          <div className="loan_details_box">
                <h6>Variable Home Loan</h6>
                <p>Loan Number: H40QWE123213</p>
                <div>
                    <small>Loan Amount (Rs.)</small>
                    <small>6,94,000</small>
                </div>
                <div>
                    <small>Tenor (Months)</small>
                    <small>30/30</small>
                </div>
                <div>
                    <small>Loan Ending Date</small>
                    <small>08 Apr 2022</small>
                </div>
                <Link>View Details</Link>
             </div>
          </div>

        </Carousel>
      </div>
    </>
  );
};

export default LoanAccounts;
