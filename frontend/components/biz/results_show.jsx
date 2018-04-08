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
      Takeout: false,
      FilteredBiz: []
    }
    this.updateRenderables = this.updateRenderables.bind(this);
    this.analyzeBiz = this.analyzeBiz.bind(this);
  }

  componentDidMount() {
      this.props.updateFilter("searchterm", this.props.location.search.slice(1));
      //here state is available to use
      // console.log(this.state);
      this.updateRenderables();
  }

  componentWillReceiveProps(nextProps) {
    console.log("updating renderables...");
    this.updateRenderables();
  }


  toggleDollars(number) {
    switch (number) {
      case 1:
          if (this.state.Dollars.On.includes(1)) {
            this.setState(prevState => ({
              Dollars: { On: [],
                        Off: [...prevState.Dollars.Off, 1] }
                        }));
          } else {
            this.setState(prevState => ({
              Dollars: { On: [1],
                        Off: prevState.Dollars.Off.filter((val, i) => val !== 1) }
                        }));
          }
          this.updateRenderables();
        break;
      case 2:
          if (this.state.Dollars.On.includes(2)) {
            this.setState(prevState => ({
              Dollars: { On: [],
                        Off: [...prevState.Dollars.Off, 2] }
                        }));
          } else {
            this.setState(prevState => ({
              Dollars: { On: [2],
                        Off: prevState.Dollars.Off.filter((val, i) => val !== 2) }
                        }));
          }
          this.updateRenderables();
        break;
      case 3:
          if (this.state.Dollars.On.includes(3)) {
            this.setState(prevState => ({
              Dollars: { On: [],
                        Off: [...prevState.Dollars.Off, 3] }
                        }));
          } else {
            this.setState(prevState => ({
              Dollars: { On: [3],
                        Off: prevState.Dollars.Off.filter((val, i) => val !== 3) }
                        }));
          }
          this.updateRenderables();
        break;
      case 4:
          if (this.state.Dollars.On.includes(4)) {
            this.setState(prevState => ({
              Dollars: { On: [],
                        Off: [...prevState.Dollars.Off, 4] }
                        }));
          } else {
            this.setState(prevState => ({
              Dollars: { On: [4],
                        Off: prevState.Dollars.Off.filter((val, i) => val !== 4) }
                        }));
          }
          this.updateRenderables();
        break;
      default:
      this.updateRenderables();
    }
  }//end of dollars

  handleOpen() {
    this.setState(prevState => ({
      OpenNow: !prevState.OpenNow
    }));
    this.updateRenderables();
    // console.log(this.state);
  }

  handleTakeout() {
    this.setState(prevState => ({
      Takeout: !prevState.Takeout
    }));
    this.updateRenderables();
    console.log(this.state);
  }

  handleDelivery() {
    this.setState(prevState => ({
      Delivery: !prevState.Delivery
    }));
    this.updateRenderables();
    // console.log(this.state);
  }

  analyzeBiz(biz) {
    //if no filters are on, return true
    // console.log(this.state);
    if (!this.state.OpenNow && !this.state.Takeout && !this.state.Delivery) {
      return true;

    } else {
      //if a filter is on, run the test


      // //Takeout filter: test biz.take_out against this.state.Takeout
      if (biz.take_out != this.state.Takeout) {
        console.log("removing " + biz.name + "because takeout is " + biz.take_out);
        return false;
      }


      //Delivery Filter: test biz.delivery against this.state.Delivery
      // if (biz.delivery != this.state.Delivery)
      // return false;

    }

    //Dollars filter: test biz.price against this.state.Dollars.On
    // let pricefilter = this.state.Dollars.On;
    // console.log("price: " + pricefilter);
    // if (biz.price != pricefilter)
    // return false;


    //if filters ARE on but it passes all the tests
    return true;

  }

  updateRenderables() {

    let renderables = this.props.businesses.filter(this.analyzeBiz);
    this.setState({FilteredBiz: renderables});
    console.log("re-rendering with: " + renderables);

  }

  render() {
    //vars populate when props come in
    let searchterm = this.props.location.search.slice(1);
    let msgbox = this.props.businesses.length === 0 ? "" : "hidden";

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
                {this.state.FilteredBiz.map(
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
