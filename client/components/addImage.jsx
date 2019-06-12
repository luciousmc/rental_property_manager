import React from 'react';
import {Col, Row, Button, Form, FormGroup, Label, Input, CustomInput, Card, CardImg} from 'reactstrap';
import axios from 'axios';
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
        // e.preventDefault();
        // console.log(e.target.files[0]);
        if (e.target.files[0] !== undefined) {
            this.setState({ imageFile: e.target.files[0], uploading: true });
        } else {
            this.setState({ imageFile: '', uploading: false });
        }
    }
    addImage(event){
        event.preventDefault();
        //console.log(event);

        let formData = new FormData();
        formData.append('imageToUpload', this.state.imageFile, this.state.imageFile.name);
        formData.append('property_id', this.props.propId);
        // for (var value of formData.values()) {
        //     console.log(value);
        // }


        axios.post('/api/image_upload.php', formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
               res.json();
            });
        //event.preventDefault();
        //console.log('add image call',  this.state.imageFile);
        // let formData = new FormData(event.target);
        // this.props ? console.log(this.props.propId) : console.log('hit');
        //formData.append('property_id', this.props.propId);
        // console.log(formData.property_id);
        // fetch('/api/image_upload.php',{
        //     method: 'POST',
        //     //headers: {'Content-Type':'multipart/form-data'},
        //     body: formData
        // })
        // .then((res) => {
        //     res.json();
        //     console.log(res);
        // })
    }

    render(){
        return(
            <form onSubmit={this.addImage} encType={"multipart/form-data"} method="POST">
                <Col className="col-sm-auto offset-sm-1">
                    <Card className="mr-auto" style={{ width: '18rem' }}>
                        <CardImg width="100%" src="/images/business_default_image.jpg"/>
                    </Card>
                </Col>
                <Col className="offset-1" md={5}>
                    <FormGroup >
                        <Label for="imageToUpload">{this.state.imageFile ? this.state.imageFile.name : "Add Image"}</Label>
                            <CustomInput type="file" name="imageToUpload" id="imageToUpload" onChange={this.handleChange}/>
                            <input type = "hidden" name = "upload" value = "true"/>
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