import React from 'react';
import { Row, Container, Nav, NavItem, NavLink } from 'reactstrap';

export default class TenantMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tenantInfo: []
        };
        this.getTenantInfo = this.getTenantInfo.bind(this);
    }
    componentDidMount(){
        this.getTenantInfo();
    }
    getTenantInfo(){
        // Dummy Tenant List 
        const dummyList = 
        [{
            "id": 1,
            "unit_id": 1,
            "business_name": "Nick Inc.",
            "contact_name": "Mike Gordon",
            "tenant_phone": 5555555555,
            "tenant_email": "mike@nickinc.com",
            "move_in_date": "03/01/19",
            "lease_end_date": "03/04/20",
            "rent_due_date": "04/01/19"
        }]
          this.setState({ tenantInfo: dummyList });

        // fetch('/api/property/property_list.php')
        // .then(response=>response.json())
        // .then(tenantList=>{
        //     this.setState({ tenantInfo: tenantList });
        // })
    }
    render(){
        console.log(this.state.tenantInfo);
        return(
            <div>
                <Row>
                    <h1 className="mx-auto mb-4">Your Tenant Info</h1>
                </Row>
                <Row>
                    <Container>
                        <Row className="col-8 offset-2">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#">Property Summary</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Unit Info</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Maintenance Providers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Request Repairs</NavLink>
                                </NavItem>
                            </Nav>
                        </Row>
                        <Row>
                            <div>
                                {/* {this.state.tenantInfo} */}
                            </div>
                            {/* {this.state.tenantInfo ? this.state.tenantInfo['business_name'] : null} */}
                        </Row>
                    </Container>
                </Row>
            </div>
        );
    }
}
