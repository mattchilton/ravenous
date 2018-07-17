import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };

    renderSortByOptions(sortByOptions) {
      return Object.keys(this.sortByOptions).map(sortByOption => {
        let sortByOptionValue = this.sortByOptions[sortByOption];
        return (
          <li key={sortByOptionValue}>{sortByOption}</li>
        );
      });
    }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            { this.renderSortByOptions() }
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
    );
  }
}


export default SearchBar;
