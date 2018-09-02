/**
 * Created by Daniel on 1/20/2016.
 */

import React from 'react';
import TabOptionA from './TabOptionA';
import TabOptionB from './TabOptionB';

class Container extends React.Component {

    constructor() {
      super();
      this.state = {option: ''};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({option: event.target.value});
    }

    render() {
      var tabOption;
      if (this.state.option === 'A') {
          tabOption = <TabOptionA />;
        } else if (this.state.option === 'B') {
          tabOption = <TabOptionB />;
        }
      return (
            <div>
                <div className="container">
                    <header><h3>React Test Bed</h3></header>
                    <label htmlFor="optionSelect">Select An Option </label>
                    <select id="optionSelect" name="options" onChange={this.handleChange}>
                        <option value="">&nbsp;</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                    </select>
                    {tabOption}
                    <footer>2016 dmhweb.org</footer>
                </div>
            </div>
        );
    }
}

export default Container;
