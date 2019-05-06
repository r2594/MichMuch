import React from 'react';
import Actors from './Actors';
import {Table} from 'react-bootstrap';
import './films.css';

function Seances() {
  return (
    <div className="App container">
      <h3 className="title-page">Séances:</h3>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
            <th>Dimanche</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12h34</td>
            <td>14h34</td>
            <td>17h34</td>
            <td>20h34</td>
            <td>21h34</td>
            <td>23h</td>
            <td>01h34</td>

          </tr>
          <tr>
            <td>12h34</td>
            <td>14h34</td>
            <td>17h34</td>
            <td>20h34</td>
            <td>22h34</td>
            <td>23h</td>
            <td>01h34</td>

          </tr>

          <tr>
            <td>12h34</td>
            <td>14h34</td>
            <td>17h34</td>
            <td>20h34</td>
            <td>22h34</td>
            <td>23h</td>
            <td>01h34</td>

          </tr>
          
         
        </tbody>
      </Table>
      <Actors/>

    </div>
  );
}

export default Seances;
