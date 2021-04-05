import React from "react";
import { connect } from "react-redux";
import { ContractOrderBook } from "../lib/conflux";
import ConfluxContract1 from "../components/contract/checkStockInMarket";
import ConfluxContract2 from "../components/contract/getStockArray";
import ConfluxContract3 from "../components/contract/getProperty";
import ConfluxContract4 from "../components/contract/getUsers";


class Financials extends React.Component {
  default = this.props.multi;

  render() {
    return (
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-6 mb-3">
            <ConfluxContract1 {...ContractOrderBook} />
          </div>
          <div className="col-md-6 mb-3">
            <ConfluxContract2 {...ContractOrderBook} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <ConfluxContract3 {...ContractOrderBook} />
          </div>
          <div className="col-md-6 mb-3">
            <ConfluxContract4 {...ContractOrderBook} />
          </div>
        </div>
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
)(Financials);
