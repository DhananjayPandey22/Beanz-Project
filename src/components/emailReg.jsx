import React, { Component } from "react";

class EmailReg extends Component {
  state = {};
  render() {
    return (
      <div class="emailcontainer">
        <div class="textemail">
          <h1 class="emailtitle">{this.props.beanz["jcr:title"]}</h1>
          <form name="register" id="register" method="POST" class="emailform">
            <input
              type="text"
              placeholder="Email address (Required)"
              name="email"
              value=""
            />
            <button className="">Sign Up</button>
          </form>
        </div>

        <div class="emailsub">
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
    );
  }
}

export default EmailReg;
