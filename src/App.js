import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import { fetchData, filterByComments } from './actions';
import './App.css';

import Card from './components/Card';
import Filter from './components/Filter';

class App extends Component {
    componentWillMount() {
        this.props.fetchData();
    }

    showLoading() {
        return (
            <div className="loading">
                <h2 className="text-muted">LOADING...</h2>
            </div>
        )
    }

    renderCards() {
        return this.props.cards.map((card) => {
            return (
                card.data.num_comments >= this.props.minCommentsQty ?
                    <li key={card.data.id} className="card-wrapper">
                        <Card
                            image={card.data.thumbnail}
                            title={card.data.title}
                            comments={card.data.num_comments}
                            link={'https://www.reddit.com/' + card.data.permalink}
                        />
                    </li>
                    : ''
            );
        });
    }

    render() {
        let maxComments = this.props.cards.length > 0 ? this.props.cards[0].data.num_comments : 0;

        return (
            <div className="App">
                <div className="container">
                    <Filter title="Top commented"
                            min={0}
                            max={maxComments}
                            onChange={this.props.filterByComments}
                    />

                    <Masonry elementType={'ul'}
                             className={'cards-list'}
                             options={{transitionDuration: 0}}
                    >
                        {this.props.cards.length > 0 ? this.renderCards() : this.showLoading()}
                    </Masonry>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards.data,
        minCommentsQty: state.cards.minCommentsQty
    };
}

export default connect(mapStateToProps, { fetchData, filterByComments })(App);
