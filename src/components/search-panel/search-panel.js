import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  onInputChange = (e) => {
    let term = e.target.value;
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onInputChange}
      />
    );
  }
};

export default SearchPanel;
