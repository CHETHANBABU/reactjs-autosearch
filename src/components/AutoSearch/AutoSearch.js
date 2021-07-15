import React, { Component } from 'react';
import './AutoSearch.css'
export class AutoSearch extends Component {
    render() {
        return (
            <div id="autoSearch" className="dropdown-content">
                <input type="text" name="search" value={this.props.suggestions}
                    onChange={E => this.props.onChange(E.target.value)} />
                {this.props.searchedResults.map(C =>
                    <span id="selectedSuggestion" key={C}
                        onClick={() => this.onSelectHandler(C)} >{C}
                    </span>)}
            </div>
        );
    }

    onSelectHandler = (S) => {
        this.props.onChange(S);
        this.props.completeMethod();
    }
}