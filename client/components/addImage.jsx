import React from 'react';
import {Col, Button, FormGroup, Label, CustomInput, Card, CardImg} from 'reactstrap';
import axios from 'axios';

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
    addImage(event){
        event.preventDefault();

        let formData = new FormData();
        formData.append('imageToUpload', this.state.imageFile, this.state.imageFile.name);
        formData.append('property_id', this.props.propId);

        axios.post('/api/image_upload.php', formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
               res.json();
            });
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
                            </Button>
                    </FormGroup>
                </Col>
            </form>
        );
    }
}