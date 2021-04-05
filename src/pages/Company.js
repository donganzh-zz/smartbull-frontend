import React from "react";
import { connect } from "react-redux";
import { ContractOrderBook } from "../lib/conflux";

import ConfluxContract1 from "../components/contract/issueStock";
import ConfluxContract2 from "../components/contract/removeStock";
import ConfluxContract3 from "../components/contract/modifyStockBalance";
import ConfluxContract4 from "../components/contract/checkStockInMarket";

class Company extends React.Component {
  default = this.props.multi;

  render() {
    return (
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-6 mb-3">
            <ConfluxContract1 {...ContractOrderBook} />
          </div>

          <div className="col-md-6 mb-3">
            <ConfluxContract2{...ContractOrderBook} />
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
)(Company);
