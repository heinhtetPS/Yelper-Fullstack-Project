import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import DollarsFilter from '../smallcomponents/dollars';
import OpenButton from '../smallcomponents/opennow';
import DeliveryButton from '../smallcomponents/delivery';
import TakeoutButton from '../smallcomponents/takeout';
import Bizmap from '../map';

class ResultsShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Dollars: {On:[],
                Off: [1, 2, 3, 4]},
      OpenNow: false,
      Delivery: false,
      Takeout: false
    }
    this.updateRenderables = this.updateRenderables.bind(this);
    this.returnToDefault = this.returnToDefault.bind(this);
  }

  componentDidMount() {
      this.props.updateFilter("searchterm", this.props.location.search.slice(1));
  }


  toggleDollars(number) {
    switch (number) {
      case 1:
          if (this.state.Dollars.On.includes(1)) {
            this.setState((prevState) => ({
              Dollars: { On: [],
                        Off: [...prevState.Dollars.Off, 1] }
                        }));
                        console.log("Dollars was on 1, Setting 1 as off. Is it On?:" + this.state.Dollars.On === [1]);
                        console.log(this.state.Dollars);
          } else {
            this.setState((prevState) => ({
              Dollars: { On: [1],
                        Off: prevState.Dollars.Off.filter((val, i) => val !== 1) }
                        }));
                        console.log("Setting 1 as On. Here's Off:" + this.state.Dollars.Off);
                        console.log(this.state.Dollars);
                        console.log("On is 1: " + this.state.Dollars.On.includes(1));
          }
        break;
      case 2:
          if (this.state.Dollars.On.includes(2)) {
            this.setState((prevState) => ({
              Dollars: { On: [],
                        Off: [...prevState.Dollars.Off, 2] }
                        }));
                        console.log("Dollars was on 2, Setting 2 as off. Is it On?:" + this.state.Dollars.On === [2]);
                        console.log(this.state.Dollars);
          } else {
            this.setState((prevState) => ({
              Dollars: { On: [2],
                        Off: prevState.Dollars.Off.filter((val, i) => val !== 2) }
                        }));
                        console.log("Setting 2 as On. Here's Off:" + this.state.Dollars.Off);
                        console.log(this.state.Dollars);
                        console.log("On is 2: " + this.state.Dollars.On.includes(2));
          }
        break;
      case 3:
          if (this.state.Dollars.On.includes(3)) {
            this.setState((prevState) => ({
              Dollars: { On: [],
                        Off: [...prevState.Dollars.Off, 3] }
                        }));
                        console.log("Dollars was on 3, Setting 3 as off. Is it On?:" + this.state.Dollars.On === [3]);
                        console.log(this.state.Dollars);
          } else {
            this.setState((prevState) => ({
              Dollars: { On: [3],
                        Off: prevState.Dollars.Off.filter((val, i) => val !== 3) }
                        }));
                        console.log("Setting 3 as On. Here's Off:" + this.state.Dollars.Off);
                        console.log(this.state.Dollars);
                        console.log("On is 3: " + this.state.Dollars.On.includes(3));
          }
        break;
      case 4:
          if (this.state.Dollars.On.includes(4)) {
            this.setState((prevState) => ({
              Dollars: { On: [],
                        Off: [...prevState.Dollars.Off, 4] }
                        }));
                        console.log("Dollars was on 4, Setting 4 as off. Is it On?:" + this.state.Dollars.On === [4]);
                        console.log(this.state.Dollars);
          } else {
            this.setState((prevState) => ({
              Dollars: { On: [4],
                        Off: prevState.Dollars.Off.filter((val, i) => val !== 4) }
                        }));
                        console.log("Setting 4 as On. Here's Off:" + this.state.Dollars.Off);
                        console.log(this.state.Dollars);
                        console.log("On is 4: " + this.state.Dollars.On.includes(4));
          }
        break;
      default:
    }
  }//end of dollars

  handleOpen() {
    if (this.state.OpenNow) {
      this.setState(function(prevState) {
        return {OpenNow: false};
      });
      this.props.updateFilter("OpenFilter", false);
    } else {
      this.setState(function(prevState) {
        return {OpenNow: true};
      });
      this.props.updateFilter("OpenFilter", true);
    }
  }

  handleTakeout() {
    if (this.state.Takeout) {
      this.setState(function(prevState) {
        return {Takeout: false};
      });
      this.props.updateFilter("TakeoutFilter", false);
    } else {
      this.setState(function(prevState) {
        return {Takeout: true};
      });
      this.props.updateFilter("TakeoutFilter", true);
    }
  }

  handleDelivery() {
    if (this.state.Delivery) {
      this.setState(function(prevState) {
        return {Delivery: false};
      });
      this.props.updateFilter("DeliveryFilter", false);
    } else {
      this.setState(function(prevState) {
        return {Delivery: true};
      });
      this.props.updateFilter("DeliveryFilter", true);
    }
  }

  updateRenderables(object) {
    if (object.length > 0) {
        object.forEach( (el) => {

            if (this.state.Dollars[1] && el.price != 1) {
              object.splice(object.indexOf(el), 1);
              console.log("removed " + el.name + " because price is " + el.price + " and not 1");
              console.log("Dollars1: " + this.state.Dollars[1]);
            }

            if (this.state.Dollars[2] && el.price != 2) {
              object.splice(object.indexOf(el), 1);
              console.log("removed " + el.name + " because price is " + el.price + " and not 2");
              console.log("Dollars2: " + this.state.Dollars[1]);
            }

            if (this.state.Dollars[3] && el.price != 3) {
              object.splice(object.indexOf(el), 1);
              console.log("removed " + el.name + " because price is " + el.price + " and not 3");
              console.log("Dollars3: " + this.state.Dollars[1]);
            }

            if (this.state.Dollars[4] && el.price != 4) {
              object.splice(object.indexOf(el), 1);
              console.log("removed " + el.name + " because price is " + el.price + " and not 4");
              console.log("Dollars4: " + this.state.Dollars[1]);
            }

            if (this.state.Takeout && !el.take_out) {
              object.splice(object.indexOf(el), 1);
            }

            if (this.state.Delivery && !el.delivery) {
              object.splice(object.indexOf(el), 1);
            }
        });
    }
    // console.log(object);
  }

  returnToDefault(renderobj) {
    renderobj = this.props.businesses;

    this.setState(function(prevState) {
      return {
        Dollars: {1: false,
                  2: false,
                  3: false,
                  4: false},
        OpenNow: false,
        Delivery: false,
        Takeout: false
      };
    });
  }


  render() {
    //vars populate when props come in
    let searchterm = this.props.location.search.slice(1);
    let msgbox = this.props.businesses.length === 0 ? "" : "hidden";

    let renderable = this.props.businesses
    this.updateRenderables(renderable)


    return (
      <div className="results-page-container">
        <div className="top-shelf-options">
          <div className="top-shelf-content">
            <h2>Best {searchterm}(s) in New York, NY</h2>

              <ul className="filters-row">
                    <DollarsFilter toggleDollars={this.toggleDollars.bind(this)}
                                    Dollars={this.state.Dollars}/>
                      <ul className="filters-row2">
                        <OpenButton handleOpen={this.handleOpen.bind(this)}
                                    OpenNow={this.state.OpenNow}/>
                        <DeliveryButton handleDelivery={this.handleDelivery.bind(this)}
                                    Delivery={this.state.Delivery}/>
                        <TakeoutButton handleTakeout={this.handleTakeout.bind(this)}
                                    Takeout={this.state.Takeout}/>
                      </ul>
              </ul>
          </div>
        </div>
        <div className="results-content">
            <div className="biz-index-container">
              <ul>
                <p className={msgbox}>Sorry, your search returned no results.</p>
                {renderable.map(
                  business => <BizIndexItem
                  key={business.id}
                  biz={business}     />)}
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
