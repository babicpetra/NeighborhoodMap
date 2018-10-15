import React, {Component} from 'react'
import Map from './Map'
import SideMenu from './SideMenu'
import './Homepage.css'
import axios from 'axios'


export default class Homepage extends Component {

  state = {
    'venues': []
  };

  componentDidMount() {
    this.getVenues()
  }
  renderMap = () => {
      loadScript("https://maps.googleapis.com/maps/api/js?key=&callback=initMap");
    window.initMap = this.initMap
  };

  getVenues = () => {
      const endPoint = "https://api.foursquare.com/v2/venues/explore?";
      const parameters = {
        client_id: "UZY32QRUHLAWXGNAXWOOYCNEIUKQX4NMT5SZXFYGT0H52FUM",
        client_secret: "RPTAAHS54VLWG1VU1XQL31VCBS1XVJMJH0US01JDQ4FZXECM",
        query: "coffee",
        near: "Zurich",
        v: "20180805"
      };
      axios.get(endPoint + new URLSearchParams(parameters)).then(response => {
        this.setState({
          venues: [...this.state.venues, ...response.data.response.groups[0].items.map(item => item.venue)]
        }, this.renderMap())
      }).catch(error => {
        console.log("Ouups! Something is wrong!" + error)
      })
  };
  initMap = () => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 47.3769,
        lng: 8.5417
      },
      zoom: 13
    });

    var infowindow = new window.google.maps.InfoWindow();

    // display markers
    this.state.venues.forEach(venue => {
      var contentString = `${venue.name}`;

    //create markers
      var marker = new window.google.maps.Marker({
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        },
        map: map,
        title: venue.name
      });

      marker.addListener('click', function() {
        infowindow.setContent(contentString);
        infowindow.open(map, marker)
      })
    })
  };
    handleInputChange = (searchTerm, event) => {
        var updatedList = this.state.venues;
        updatedList = updatedList.filter(function(item){
            return item.search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            venues: updatedList
        })
    }
  render(){
      var handleInputChange  =   this.handleInputChange;
    return (
        <div className="homepage" id ="homepage">
          <SideMenu venues={ this.state.venues } handleInputChange = {handleInputChange.bind(this)}/>
          <Map />
        </div>
     )
  }
}
  function loadScript(url) {
  	var index = window.document.getElementsByTagName("script")[0];
  	var script = window.document.createElement("script");
  	script.src = url;
  	script.async = true;
  	script.defer = true;
  	index.parentNode.insertBefore(script,index)
  }
