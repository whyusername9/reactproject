import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello !</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Supervisor</p>
              <span className="font-bold text-title">5</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-male fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Times of clients</p>
              <span className="font-bold text-title">246</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-building-o fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Vendors</p>
              <span className="font-bold text-title">34</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-sitemap  fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Sites</p>
              <span className="font-bold text-title">64</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                
              </div>
              <i className="fa fa-money " aria-hidden="true"></i>
            </div>
            {/*  <Chart />*/}
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Management</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Contractor</h1>
              </div>

              <div className="card3">
                <h1>Contracts</h1>
              </div>

              <div className="card4">
                <h1>Inventory</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
