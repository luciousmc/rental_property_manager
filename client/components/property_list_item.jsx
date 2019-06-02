import React from 'react';

function PropertyListItem(props){
    if (props.properties.length < 1){
        return(
            <Container>
                <Row>
                    <h3>No properties to display</h3>
                    <h3>Click "Add" above to add a property</h3>
                </Row>
            </Container>
        );
    }
    
}

export default PropertyListItem;