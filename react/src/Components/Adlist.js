import React from 'react';
import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './adlist.css';




class Adlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            search: '',
            error: null,
        };
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

        this.setState({ search: event.target.value })
    }

    create() {
        this.state.data.forEach(element => {

            document.getElementById("tbody").insertAdjacentHTML
                ('afterbegin', '<tr><td>'+element.movie_id+'</td><td>'+element.movie_name+'</td><td>'+element.movie_synopsis+'</td> \
                <td><img src="'+element.movie_image+'" width=150></img></td><td>'+element.movie_hours+'</td><td><button>modifier</button><button>supprimer</button></td></tr>');
        });
    }

    render() {
        return (
            <div>
                {this.create()}
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
                    <tbody id="tbody"></tbody>
                </Table>
            </div>
        );
    }
};


export default Adlist;