import React from 'react';
import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './adlist.css';




class Adlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            movie_id: '',
            error: null,
        };
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('/films')
            .then((response) => response.json())
            .then((findresponse) => {
                console.log(findresponse)
                this.setState({
                    data: findresponse
                })
            })
            .catch(error => console.log('erreurs me voilàà', error))
    }

    update(event) {
        console.log('toto');

        this.setState({ movie_id: event.target.value })
    }

    delete(event) {
        event.preventDefault();
        var test = event.target.getAttribute('data-id');
        console.log(test);

        this.state.movie_id = test;
        fetch('/deletefilms', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            data: JSON.stringify(this.state)
        }).then(function (response) {
            if (response.status >= 400) {
                console.log(response);
                throw new Error("bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
            if (data === "success") {
                this.setState({msg: "GOOD"});
            }
        }).catch(function (err) {
            console.log(err)
        });
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Film</th>
                            <th>Synopsis</th>
                            <th>Image</th>
                            <th>Hour</th>
                            <th>gestion</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">{this.state.data.map(element =>
                        <tr key={element.movie_id}>
                            <td>{element.movie_id}</td>
                            <td>{element.movie_name}</td>
                            <td>{element.movie_synopsis}</td>
                            <td>
                                <img src={element.movie_image} width="150"></img>
                            </td>
                            <td>{element.movie_hours}</td>
                            <td>
                                <button>modifier</button>
                                <form>
                                    <input type="submit" data-id={element.movie_id} value="supprimer" onClick={this.delete} />
                                </form>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        );
    }
};


export default Adlist;