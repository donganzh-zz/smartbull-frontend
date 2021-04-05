import React from "react";
import { ContractOrderBook } from "../lib/conflux";

import ConfluxNetwork from "../components/ConfluxNetwork";
import ConfluxContract1 from "../components/contract/userRegister";
import ConfluxContract2 from "../components/contract/removeUser";
import ConfluxContract3 from "../components/contract/deposite";
import ConfluxContract4 from "../components/contract/withdraw";
import ConfluxContract5 from "../components/contract/getBalance";
import ConfluxContract6 from "../components/contract/checkBestOrders";


import { connect } from "react-redux";

class Dashboard extends React.Component {
  render() {
    const style ={
      maxHeight: '1300px',
      overflowY: 'auto'
    }
    return (
      <div className="container-fluid p-3" style={style}>
        <div className="row">
          <div className="col-md mb-3">
            <ConfluxNetwork />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <ConfluxContract1 {...ContractOrderBook} />{" "}
          </div>
          <div className="col-md-6 mb-3">
            <ConfluxContract2 {...ContractOrderBook} />{" "}
          </div>{" "}
        </div>{" "}
        <div className="row">
          <div className="col-md-6 mb-3">
            <ConfluxContract3 {...ContractOrderBook} />{" "}
          </div>
          <div className="col-md-6 mb-3">
            <ConfluxContract4 {...ContractOrderBook} />{" "}
          </div>{" "}
        </div>{" "}
        <div className="row">
          <div className="col-md-6 mb-3">
            <ConfluxContract5 {...ContractOrderBook} />{" "}
          </div>
          <div className="col-md-6 mb-3">
            <ConfluxContract6 {...ContractOrderBook} />{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    multi: state.searchReducer.multi,
  };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
