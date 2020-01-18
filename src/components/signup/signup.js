import React from "react";

import "./Singup.css";

function Signup() {
  return (
    <div className="container" id="wrap">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form
            action="r"
            method="post"
            acceptCharset="utf-8"
            className="form"
            role="form"
          >
            {" "}
            <legend>Sign Up</legend>
            <h4>It's free and always will be.</h4>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <input
                  type="text"
                  name="firstname"
                  defaultValue
                  className="form-control input-lg"
                  placeholder="First Name"
                />{" "}
              </div>
              <div className="col-xs-6 col-md-6">
                <input
                  type="text"
                  name="lastname"
                  defaultValue
                  className="form-control input-lg"
                  placeholder="Last Name"
                />{" "}
              </div>
            </div>
            <input
              type="text"
              name="email"
              defaultValue
              className="form-control input-lg"
              placeholder="Your Email"
            />
            <input
              type="password"
              name="password"
              defaultValue
              className="form-control input-lg"
              placeholder="Password"
            />
            <input
              type="password"
              name="confirm_password"
              defaultValue
              className="form-control input-lg"
              placeholder="Confirm Password"
            />{" "}
            <label>Birth Date</label>{" "}
            <div className="row">
              <div className="col-xs-4 col-md-4">
                <select name="month" className="form-control input-lg">
                  <option value={1}>Jan</option>
                  <option value={2}>Feb</option>
                  <option value={3}>Mar</option>
                  <option value={4}>Apr</option>
                  <option value={5}>May</option>
                  <option value={6}>Jun</option>
                  <option value={7}>Jul</option>
                  <option value={8}>Aug</option>
                  <option value={9}>Sep</option>
                  <option value={1}>Oct</option>
                  <option value={11}>Nov</option>
                  <option value={12}>Dec</option>
                </select>{" "}
              </div>
              <div className="col-xs-4 col-md-4">
                <select name="day" className="form-control input-lg">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={1}>1</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={2}>2</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  <option value={25}>25</option>
                  <option value={26}>26</option>
                  <option value={27}>27</option>
                  <option value={28}>28</option>
                  <option value={29}>29</option>
                  <option value={3}>3</option>
                  <option value={31}>31</option>
                </select>{" "}
              </div>
              <div className="col-xs-4 col-md-4">
                <select name="year" className="form-control input-lg">
                  <option value={1935}>1935</option>
                  <option value={1936}>1936</option>
                  <option value={1937}>1937</option>
                  <option value={1938}>1938</option>
                  <option value={1939}>1939</option>
                  <option value={194}>194</option>
                  <option value={1941}>1941</option>
                  <option value={1942}>1942</option>
                  <option value={1943}>1943</option>
                  <option value={1944}>1944</option>
                  <option value={1945}>1945</option>
                  <option value={1946}>1946</option>
                  <option value={1947}>1947</option>
                  <option value={1948}>1948</option>
                  <option value={1949}>1949</option>
                  <option value={195}>195</option>
                  <option value={1951}>1951</option>
                  <option value={1952}>1952</option>
                  <option value={1953}>1953</option>
                  <option value={1954}>1954</option>
                  <option value={1955}>1955</option>
                  <option value={1956}>1956</option>
                  <option value={1957}>1957</option>
                  <option value={1958}>1958</option>
                  <option value={1959}>1959</option>
                  <option value={196}>196</option>
                  <option value={1961}>1961</option>
                  <option value={1962}>1962</option>
                  <option value={1963}>1963</option>
                  <option value={1964}>1964</option>
                  <option value={1965}>1965</option>
                  <option value={1966}>1966</option>
                  <option value={1967}>1967</option>
                  <option value={1968}>1968</option>
                  <option value={1969}>1969</option>
                  <option value={197}>197</option>
                  <option value={1971}>1971</option>
                  <option value={1972}>1972</option>
                  <option value={1973}>1973</option>
                  <option value={1974}>1974</option>
                  <option value={1975}>1975</option>
                  <option value={1976}>1976</option>
                  <option value={1977}>1977</option>
                  <option value={1978}>1978</option>
                  <option value={1979}>1979</option>
                  <option value={198}>198</option>
                  <option value={1981}>1981</option>
                  <option value={1982}>1982</option>
                  <option value={1983}>1983</option>
                  <option value={1984}>1984</option>
                  <option value={1985}>1985</option>
                  <option value={1986}>1986</option>
                  <option value={1987}>1987</option>
                  <option value={1988}>1988</option>
                  <option value={1989}>1989</option>
                  <option value={199}>199</option>
                  <option value={1991}>1991</option>
                  <option value={1992}>1992</option>
                  <option value={1993}>1993</option>
                  <option value={1994}>1994</option>
                  <option value={1995}>1995</option>
                  <option value={1996}>1996</option>
                  <option value={1997}>1997</option>
                  <option value={1998}>1998</option>
                  <option value={1999}>1999</option>
                  <option value={2}>2</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  <option value={25}>25</option>
                  <option value={26}>26</option>
                  <option value={27}>27</option>
                  <option value={28}>28</option>
                  <option value={29}>29</option>
                  <option value={21}>21</option>
                  <option value={211}>211</option>
                  <option value={212}>212</option>
                  <option value={213}>213</option>
                </select>{" "}
              </div>
            </div>
            <label>Gender : </label>{" "}
            <label className="radio-inline">
              <input type="radio" name="gender" defaultValue="M" id="male" />{" "}
              Male
            </label>
            <label className="radio-inline">
              <input type="radio" name="gender" defaultValue="F" id="female" />{" "}
              Female
            </label>
            <br />
            <span className="help-block">
              By clicking Create my account, you agree to our Terms and that you
              have read our Data Use Policy, including our Cookie Use.
            </span>
            <button
              className="btn btn-lg btn-primary btn-block signup-btn"
              type="submit"
            >
              Create my account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
