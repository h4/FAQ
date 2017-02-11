import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import Aside from '../containers/aside';
import HeaderContent from '../layouts/header-content';
import UsecaseLayout from '../layouts/usecase-layout';
import {loadLayoutContainer} from '../../actions/header-actions';
import SearchInput, {createFilter} from 'react-search-input';

const mapStateToProps = function (store) {
    return {
        selected_section: store.contentState.selected_section,
        sections: store.contentState.sections
    };
};

class AnimationLayout extends Component {
    componentDidMount() {
        store.dispatch(loadLayoutContainer('animation'));
        // console.log(this.props);
    }


    render() {
        return (
            <section>
                <Aside items={this.props.sections}/>
                <HeaderContent title='Animation'
                               desc='The CSS properties that allow you to animate almost any other property'/>
                <div>
                    {this.props.sections.map((a) => {
                        return <UsecaseLayout key={a.title} name={a.title}/>
                    })
                    }
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps)(AnimationLayout);
