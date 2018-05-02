import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import DollarsFilter from '../smallcomponents/dollars';
import OpenButton from '../smallcomponents/cashonly';
import DeliveryButton from '../smallcomponents/delivery';
import TakeoutButton from '../smallcomponents/takeout';
import GeneralButton from '../smallcomponents/generalButton';
import Bizmap from '../map';

class ResultsShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Dollars: [],
      CashOnly: false,
      Delivery: false,
      Takeout: false,
      FilteredBiz: []
    }
    this.updateRenderables = this.updateRenderables.bind(this);
    this.analyzeBiz = this.analyzeBiz.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
  }

  componentDidMount() {
      this.props.updateFilter("searchterm", this.props.location.search.slice(1));
      this.updateRenderables();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("updating renderables...");
    this.updateRenderables();
  }


  toggleDollars(number) {
    switch (number) {
      //you pressed $1 button
      case 1:
          if (this.state.Dollars.includes(1)) {
            //if dollars is already on, turn it off
            // console.log("turning off 1");
            this.setState(prevState => {
              return {Dollars: prevState.Dollars.filter((val, i) => val !== 1)}
                        });
          } else {
            // console.log("adding 1 to state");
            this.setState(prevState => {
              return {Dollars: [...prevState.Dollars, 1]}
                        });
          }
          this.updateRenderables();
          // console.log(this.state);
        break;
      case 2:
        if (this.state.Dollars.includes(2)) {
          //if dollars is already on, turn it off
          // console.log("turning off 2");
          this.setState(prevState => {
            return {Dollars: prevState.Dollars.filter((val, i) => val !== 2)}
                      });
        } else {
          // console.log("adding 2 to state");
          this.setState(prevState => {
            return {Dollars: [...prevState.Dollars, 2]}
                      });
        }
        this.updateRenderables();
        // console.log(this.state);
        break;
      case 3:
        if (this.state.Dollars.includes(3)) {
          //if dollars is already on, turn it off
          // console.log("turning off 3");
          this.setState(prevState => {
            return {Dollars: prevState.Dollars.filter((val, i) => val !== 3)}
                      });
        } else {
          // console.log("adding 3 to state");
          this.setState(prevState => {
            return {Dollars: [...prevState.Dollars, 3]}
                      });
        }
        this.updateRenderables();
        // console.log(this.state);
        break;
      case 4:
        if (this.state.Dollars.includes(4)) {
          //if dollars is already on, turn it off
          // console.log("turning off 4");
          this.setState(prevState => {
            return {Dollars: prevState.Dollars.filter((val, i) => val !== 4)}
                      });
        } else {
          // console.log("adding 4 to state");
          this.setState(prevState => {
            return {Dollars: [...prevState.Dollars, 4]}
                      });
        }
        this.updateRenderables();
        // console.log(this.state);
        break;
      default:
      this.updateRenderables();
    }
  }//end of dollars

  handleCash() {
    this.setState(prevState => {
      return {CashOnly: !this.state.CashOnly}
    });
    this.updateRenderables();
    // console.log(this.state);
  }

  handleTakeout() {
    this.setState(prevState => ({
      Takeout: !prevState.Takeout
    }));
    this.updateRenderables();
    // console.log(this.state);
  }

  handleDelivery() {
    this.setState(prevState => ({
      Delivery: !prevState.Delivery
    }));
    this.updateRenderables();
    // console.log(this.state);
  }

  handleRandom() {
    this.props.history.push('/search?random!');
    window.location.reload();
  }

  analyzeBiz(biz) {
    //due to state mismatch in the milliseconds between setstate and render, going to reverse every bool in here
    //so that they match with the render logic

    //if no filters are on, return true
    // console.log(this.state);
    if (!this.state.CashOnly && !this.state.Takeout && !this.state.Delivery) {
      // console.log('no filters on');
      return true;
    } else {
      //if a filter is on, run the test

      // //CashOnly filter: test biz.accepts_credit_cards against this.state.CashOnly
      if (this.state.CashOnly && !biz.accepts_credit_cards) {
        // console.log("removing " + biz.name + " because Cashonly is " + biz.accepts_credit_cards);
        return false;
      }

      // //Takeout filter: test biz.take_out against this.state.Takeout
      if (this.state.Takeout && !biz.take_out) {
        // console.log("removing " + biz.name + " because takeout is " + biz.take_out);
        return false;
      }


      //Delivery Filter: test biz.delivery against this.state.Delivery
      if (this.state.Delivery && !biz.delivery) {
        // console.log("removing " + biz.name + " because takeout is " + biz.take_out);
        return false;
      }

    }

    //Dollars filter: test biz.price against this.state.Dollars
    let pricefilter = this.state.Dollars[0];
    if (biz.price != pricefilter && pricefilter !== undefined) {
      // console.log("price: " + pricefilter);
      // console.log("removing " + biz.name + "because price is " + biz.price);
      return false;
    }

    //if filters ARE on but it passes all the tests
    // console.log('i got here, which means all tests were skipped');
    return true;

  }

  updateRenderables() {

    let renderables = this.props.businesses.filter(this.analyzeBiz);
    this.setState({FilteredBiz: renderables});
    renderables.forEach( (biz) => {
      // console.log(biz.name);
    });

  }

  render() {
    //vars populate when props come in
    let searchterm = this.props.location.search.slice(1);
    if (searchterm === "random!")
    searchterm = "random";
    let msgbox = this.props.businesses.length === 0 ? "" : "hidden";

    return (
      <div className="results-page-container">
        <div className="top-shelf-options">
          <div className="top-shelf-content">
            <h2 className="result-text">Best {searchterm}(s) in New York, NY</h2>
            <h2>Feeling Lucky? Try a random place!</h2>

              <ul className="filters-row">
                    <DollarsFilter toggleDollars={this.toggleDollars.bind(this)}
                                    Dollars={this.state.Dollars}/>
                      <ul className="filters-row2">
                        <OpenButton handleCash={this.handleCash.bind(this)}
                                    CashOnly={this.state.CashOnly || false}/>
                        <DeliveryButton handleDelivery={this.handleDelivery.bind(this)}
                                    Delivery={this.state.Delivery || false}/>
                        <TakeoutButton handleTakeout={this.handleTakeout.bind(this)}
                                    Takeout={this.state.Takeout || false}/>
                      </ul>

                      <GeneralButton handleRandom={this.handleRandom} />
              </ul>
          </div>
        </div>
        <div className="results-content">
            <div className="biz-index-container">
              <ul>
                <p className={msgbox}>Sorry, your search returned no results.</p>
                {this.state.FilteredBiz.map(
                  business => <BizIndexItem
                  biz={business}
                  key={business.id}     />)}
              </ul>
            </div>
            <div className="map-column-container">
              <div className="results-map-container">
                <div className="results-map-header">

                </div>
                <Bizmap
                  businesses={this.props.businesses}
                  singleBiz={false}
                  fetchBusinesses={this.props.fetchBusinesses}
                  updateFilter = {this.props.updateFilter}
                  />
              </div>
              <div className="create-question">
                <h2 className="Redh2">Not here? Tell us what we're missing.</h2>
                <p>If the business you're looking for isn't here, add it!</p>
                <Link to="/addbusiness"className="new-biz-button">Add a Business</Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}


export default ResultsShow;
