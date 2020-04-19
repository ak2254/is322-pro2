import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/nav.css';

import { Nav, NavItem, NavLink} from 'react-bootstrap';


class Pagetabs extends React.Component {

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }
    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <Nav>
                <Nav.Item>
                    <Nav.Link lassName={this.isActiveTab('grid')}
                              onClick={(e) => this.onTabClick(e, 'grid')} >Grid</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.isActiveTab('list')}
                              onClick={(e) => this.onTabClick(e, 'list')}>List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.isActiveTab('add')}
                              onClick={(e) => this.onTabClick(e, 'add')}>Add</Nav.Link>
                </Nav.Item>

            </Nav>
        )
};
}

export default Pagetabs;
