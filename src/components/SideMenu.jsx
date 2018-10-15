import React, {Component} from 'react';
import List from './List';
import './SideMenu.css'


class SideMenu extends Component {
    state = {
        query: '',
    }


    render(){
        var handleInputChange  =   this.props.handleInputChange;

        return (
            <div className="side-menu">
                <div className="searchBar">
                    <form>
                        <input
                            onChange={this.handleInputChange}
                            type="search"
                            name="search"
                            ref={input => this.search = input}
                            placeholder="Search"
                        >
                        </input>
                        <span className="fa fa-search search-icon" onClick={() => handleInputChange(this.state.query)}></span>
                        <p>{this.state.query}</p>
                    </form>
                    { this.props.venues.length && <List venues = {this.props.venues}/>}
                </div>
            </div>
        )
    }

}

export default SideMenu;
