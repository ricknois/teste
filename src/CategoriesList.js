import React, { Component } from 'react';
import * as api from './services/api';
import Loading from './Loading';
import Category from './Category';

export default class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      list: {},
      loading: false,
    };
  }

  async componentDidMount() {
    const { getCategories } = api;
    const category = await getCategories();
    this.setNewState(category);
  }

  setNewState(newState) {
    this.setState({
      list: newState,
      loading: true,
    });
  }

  render() {
    const { list, loading } = this.state;
    if (loading === false) return <Loading />;
    return (
      <ul>
        {list.map((eachCat) => (
          <li key={ eachCat.id }>
            <Category id={ eachCat.id } category={ eachCat.name } />
          </li>
        ))}
      </ul>
    );
  }
}
