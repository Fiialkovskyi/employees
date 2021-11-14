import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "John M.",
          salary: 800,
          increase: false,
          rise: false,
          id: uuidv4(),
        },
        {
          name: "Alex K.",
          salary: 1500,
          increase: true,
          rise: false,
          id: uuidv4(),
        },
        {
          name: "David R.",
          salary: 3000,
          increase: false,
          rise: true,
          id: uuidv4(),
        },
      ],
      term : '',
      filter: 'all'
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onAdd = (item) => {
    const newItem = { ...item, increase: false, rise: false, id: uuidv4() };

    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        } else {
          return item;
        }
      }),
    }));
  };

  search = (term, items) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onTermChange = (term) => {
    this.setState({
      term: term
    })
  }

  filterData = (filter, data) => {
    switch (filter) {
      case 'all': 
        return data;
      case 'rise': 
        return data.filter(item => item.rise);
      case '>1000$':
        return data.filter(item => item.salary >= 1000);
      default:
        return data;
    }
  }

  onFilterChange = (filterValue) => {
    this.setState({
      filter: filterValue
    })
  }

  render() {
    const {data, term, filter} = this.state;
    const totalEmployees = data.length;
    const willIncrease = data.filter(item => item.increase).length;
    const visibleData = this.filterData(filter, this.search(term, data));

    return (
      <div className="app">
        <AppInfo totalEmployees={totalEmployees} willIncrease={willIncrease}/>
        <div className="search-panel">
          <SearchPanel onTermChange={this.onTermChange}/>
          <AppFilter onFilterChange={this.onFilterChange}/>
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.onDelete}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
