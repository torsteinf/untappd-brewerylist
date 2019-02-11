import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { brewIds } from '../utils'

const API = '/data/'
const FILEEND = '.json'

export class BreweryList extends Component {
  constructor() {
    super();
    this.state = {
      brewery: [],
      beerlistnumber: 3
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({beerlistnumber: event.target.value})
  }
  
  componentDidMount() {
    brewIds.map(brewIds => fetch(API + brewIds + FILEEND)
     .then(res=>res.json())
     .then(obj=>{
      const brewery = obj.response.brewery
      
      this.setState({
        brewery: this.state.brewery.concat(brewery)
      })
     })
   )
  }

  render() {
    const beerlistnumber  = this.state.beerlistnumber
    return (
      <div>
        <br />
        <Form inline className="container">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="beerlistnumber">How many beers to be shown per brewery? (0-25)</Label>&nbsp;
            <Input type="number" name="beernumber" id="beerlistnumber" value={this.state.beerlistnumber} onChange={this.handleChange}></Input>
            
          </FormGroup>
        </Form>
        <br />
        {this.state.brewery.map(brewery=>
          <div key= {brewery.brewery_id} className="container">
            <h4><a href={'http://untappd.com' + brewery.brewery_page_url}> {brewery.brewery_name} </a></h4>
            <h5>{brewery.location.brewery_city}, {brewery.location.brewery_state}, { brewery.country_name }</h5>
            <div>
              Beer count: {brewery.beer_count}<br />
              Rating: <strong> {brewery.rating.rating_score} </strong> from {brewery.rating.count} checkins
            </div>
            <h5>Most checked-in beers:</h5>
            {brewery.beer_list.items.slice(0, beerlistnumber).map(beerlist => 
              
              <div>
              <Row key={beerlist.beer.bid} className="row-bordered">
                <Col className="col-4"><a href={'http://untappd.com/beer/' + beerlist.beer.bid}>{beerlist.beer.beer_name}</a></Col>
                <Col className="col-2">{beerlist.beer.beer_abv}%</Col>
                <Col className="col-3">{beerlist.beer.beer_style}</Col>
                <Col className="col-2"><strong>{beerlist.beer.rating_score}</strong> ({beerlist.beer.rating_count})</Col>
              </Row>
              <br />
              </div>
            )} 
          </div>
        )}
      </div>
    )
  }
}

export default BreweryList
