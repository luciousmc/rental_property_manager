import React from 'react';
import { Container, Row } from 'reactstrap';
import AddUnit from './addUnit';

export default (props)=>(
    <React.Fragment>
        <Row>
            <div className="col">
                <AddUnit propertyID={props.match.params.id} />
            </div>
        </Row>
    </React.Fragment>
);