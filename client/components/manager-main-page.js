import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropertyList from './property_list';

export default (props)=>(
    <React.Fragment>
            <Row>
                <div className="col">
                    <PropertyList />
                </div>
            </Row>
    </React.Fragment>
);