import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all'
    }
  }

  onFilterChange = (e) => {
    const value = e.currentTarget.getAttribute('data-filter');
    this.setState({
      filter: value,
    })

    this.props.onFilterChange(value);
  }

  render() {
    return (
      <div className="btn-group">
        <button className={this.state.filter === 'all' ? 'btn btn-light' : 'btn btn-outline-light'} type="button" data-filter="all" onClick={this.onFilterChange}>
          Все сотрудники
        </button>
        <button className={this.state.filter === 'rise' ? 'btn btn-light' : 'btn btn-outline-light'} type="button" data-filter="rise" onClick={this.onFilterChange}>
          На повышение
        </button>
        <button className={this.state.filter === '>1000$' ? 'btn btn-light' : 'btn btn-outline-light'} type="button" data-filter=">1000$" onClick={this.onFilterChange}>
          З/П больше 1000$
        </button>
      </div>
    );
  }
};

export default AppFilter;
