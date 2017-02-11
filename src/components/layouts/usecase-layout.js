/**
 * Created by user on 11.02.2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import {usecaseContainer} from '../../actions/usecase-action';

const mapStateToProps = function (store) {
  return {
    use_cases: store.usecaseState.use_cases
  };
};

class UsecaseLayout extends Component {
  componentDidMount() {
    store.dispatch(usecaseContainer(this.props.name));
  }

  render() {
    return (
      <div>
        {this.props.use_cases.map((a) => {
          return (
            <div key={a.usecase_value}>
              <div>{a.usecase_value}</div>
              <div>{a.usecase_description}</div>
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(UsecaseLayout);

