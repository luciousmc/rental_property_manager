import React from 'react';
import {Col, Row, Button, Form, FormGroup, Label, Input, CustomInput, Card, CardImg} from 'reactstrap';
import {NavLink, Link } from 'react-router-dom';
// import { Link } from '.react-router';

export default class AddImage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            imageFile: null,
            uploading: false
        };
       this.addImage = this.addImage.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        if (e.target.files[0] !== undefined) {
            this.setState({ imageFile: e.target.files[0], uploading: true });
        } else {
            this.setState({ imageFile: '', uploading: false });
        }
    }
    addImage(e){
        e.preventDefault();
        let formData = new FormData(this.state.imageFile);//e.target.files[0]);
        this.props ? console.log(this.props.propId) : console.log('hit');
        formData.append('property_id', this.props.propId);
        console.log(formData);
        fetch('/api/image_upload.php',{
            method: 'POST',
            headers: {'Content-Type':'multipart/form-data'},
            body: formData
        })
        .then((res) => {
            res.json();
            console.log(res);
        })
    }

    render(){
        return(
            <form>
                <Col className="col-sm-auto offset-sm-1">
                    <Card className="mr-auto" style={{ width: '18rem' }}>
                        <CardImg width="100%" src="https://bolde.in/uploads/business_imageFile/default_business.jpg"/>
                    </Card>
                </Col>
                <Col className="offset-1" md={5}>
                    <FormGroup onSubmit={this.addImage} enctype={"multipart/form-data"}>
                        <Label for="imageToUpload">{this.state.imageFile ? this.state.imageFile.name : "Add Image"}</Label>
                            <CustomInput type="file" name="imageToUpload" id="imageToUpload" onChange={this.handleChange}/>
                            <Button type="submit" color="info" name="submit" value="uploadFile">
                                Upload
                                {/*<NavLink to="manager-main" style={{color: "white"}} >Uploads</NavLink>*/}
                            </Button>
                    </FormGroup>
                </Col>
            </form>
        );
    }
}