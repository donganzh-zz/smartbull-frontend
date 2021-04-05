import React from "react";
import { connect } from "react-redux";
import { ContractOrderBook } from "../lib/conflux";
import ConfluxContract1 from "../components/contract/saveOrder";
import ConfluxContract2 from "../components/contract/removeOrder";
import ConfluxContract3 from "../components/contract/fillOrder";
import ConfluxContract4 from "../components/contract/fillAskOrder";
import ConfluxContract5 from "../components/contract/transfer";
import ConfluxContract6 from "../components/contract/userOrders";
import ConfluxContract7 from "../components/contract/getStockOrders";
import ConfluxContract8 from "../components/contract/getOrderData";
import ConfluxContract9 from "../components/contract/getBetterOrder";
class Chart extends React.Component {
  render() {
    return (
      <div className="container-fluid p-3">
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
        <div className="row">
          <div className="col-md-6 mb-3">
            <ConfluxContract7 {...ContractOrderBook} />{" "}
          </div>
          <div className="col-md-6 mb-3">
            <ConfluxContract8 {...ContractOrderBook} />{" "}
          </div>{" "}
        </div>{" "}
        <div className="row">
          <div className="col-md-6 mb-3">
            <ConfluxContract9 {...ContractOrderBook} />{" "}
          </div>
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
)(Chart);
