import React, { Component } from 'react';
import classnames from "classnames";
import Responsive from "react-responsive-decorator";
import Article from './components/Article';
import { Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  state = {
    isMobile: false
  }

  componentDidMount = () => {
    this.props.media({ minWidth: 320 }, () => {
      this.setState({
        isMobile: true
      })
    })

    this.props.media({ maxWidth: 2768 }, () => {
      this.setState({
        isMobile: false
      })
    })
  }
  render() {
    const { isMobile } = this.state;
    const { className, ...props} = this.props
    return (
      <div className={classnames("App", className)}>
      <div>
          {
            isMobile ? 
            <div>
              <Article />
            </div>
            :
            <div>
              <Article />
            </div>
          }
      </div>
      
      </div>
    );
  }
}

export default Responsive(App);
