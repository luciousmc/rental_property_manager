import React from 'react';
import { Container, Row } from 'reactstrap';
import AddUnit from './addUnit';

export default (props)=>(
    <React.Fragment>
        <Row>
            <div className="form-container col-8 offset-2">
                <AddUnit propertyID={props.match.params.id} />
            </div>
        </Row>
    </React.Fragment>
);