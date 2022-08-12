import React, { Component } from "react";

class EmailReg extends Component {
  state = {};
  render() {
    return (
      <div className="emailcontainer ">
        <div className="container">
          <div className="textemail">
            <h1 className="emailtitle">{this.props.beanz["jcr:title"]}</h1>
            <form
              name="register"
              id="register"
              method="POST"
              className="emailform"
            >
              <input
                type="text"
                placeholder="Email address (Required)"
                name="email"
                value=""
                className="border-0"
              />
              <button className="btn btn-primary m-2">Sign Up</button>
            </form>
          </div>

          <div className="emailsub">
            <p>
              {this.props.beanz["jcr:subtitle"]}
              <a
                style={{ color: "black !important;" }}
                href="https://www.breville.com/us/en/legal/privacy-policy.html"
              >
                &nbsp;Privacy Policy
              </a>{" "}
              and{" "}
              <a
                style={{ color: "black !important;" }}
                href="https://www.beanz.com/us/en/legal/terms-of-use.html"
              >
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailReg;
