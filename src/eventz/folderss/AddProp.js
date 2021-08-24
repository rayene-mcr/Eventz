import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {
    Container,
    Button,
    
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,

    Row,
    Col,
} from 'reactstrap';
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";
import TagsInput from "components/TagsInput/TagsInput.js";
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default class CreateProp extends Component {
    constructor(props) {
        super(props);

        var ran=Math.random(6);

        this.onChangeTitre = this.onChangeTitre.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeCate = this.onChangeCate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            titre: '',
            description: '',
            from: new Date(),
            to: new Date(),
            cates: '',
            cate: [],
            color:''
        }




    }



    componentDidMount() {
        var ran=Math.random(6);
        axios.get('http://localhost:3001/cate/')
            .then(response => {
                if (response.data.length > 0) {
                    var r=Math.round(Math.random()*response.data.length)
                    console.log(r);
                    console.log(response.data.length);
                    this.setState({
                        
                        cate: response.data.map(catee => catee.desc),
                        cates :response.data[0].desc,
                        color :response.data[r].color,
                        
                      


                    });
                }
            })

            .catch((error) => {
                console.log(error);
                
            })
    }
    


    onChangeCate(e) {
        this.setState({
            cates: e.target.value,
            
        });
    }

    onChangeTitre(e) {
        this.setState({
            titre: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeFrom(date) {
        this.setState({
            from: date
        });
    }

    onChangeTo(date) {
        this.setState({
            to: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const prop = {

            titre: this.state.titre,
            description: this.state.description,
            from: this.state.from,
            to: this.state.to,
            cates: this.state.cates,
            color:this.state.color,
        };

        console.log(prop);
        console.log(prop.color);
        axios.post('http://localhost:3001/prop/add', prop)
            .then(res => console.log(res.data));

        // window.location = '/ListProp';
    }

    render() {
        return (
            <>
                <DangerNavbar />
                <div className="main">
                    <div className="section">
                        <Container>
                            <h3>Add Product</h3>
                            <div>
                                <Row>
                                    <Col md="5" sm="5">
                                        <form onSubmit={this.onSubmit}>
                                            <FormGroup>
                                                <h6>
                                                    Name <span className="icon-danger">*</span>
                                                </h6>

                                                <input ref="userInput"
                                                    required
                                                    className="form-control"
                                                    value={this.state.titre}
                                                    onChange={this.onChangeTitre}>

                                                </input>


                                            </FormGroup>
                                            <FormGroup>
                                                <h6>
                                                    Description <span className="icon-danger">*</span>
                                                </h6>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.description}
                                                    onChange={this.onChangeDescription}
                                                />

                                            </FormGroup>
                                            <Row className="price-row">
                                                <Col md="6">
                                                    <h6>
                                                        FROM <span className="icon-danger">*</span>
                                                    </h6>
                                                    <InputGroup className="border-input">
                                                        <div>
                                                            <DatePicker
                                                                selected={this.state.from}
                                                                onChange={this.onChangeFrom}
                                                            />
                                                        </div>

                                                    </InputGroup>
                                                </Col>

                                            </Row>
                                            <Row className="price-row">
                                                <Col md="6">
                                                    <h6>
                                                        TO <span className="icon-danger">*</span>
                                                    </h6>
                                                    <InputGroup className="border-input">
                                                        <div>
                                                            <DatePicker
                                                                selected={this.state.to}
                                                                onChange={this.onChangeTo}
                                                            />
                                                        </div>

                                                    </InputGroup>
                                                </Col>

                                            </Row>
                                            <br />
                                            <row>
                                                <div className="form-group">
                                                    <h6>
                                                        category <span className="icon-danger">*</span>
                                                    </h6>
                                                    <select ref="userInput"
                                                        required
                                                        className="form-control"
                                                        value={this.state.cates}
                                                        onChange={this.onChangeCate}>
                                                        {
                                                            this.state.cate.map(function (catee) {
                                                                return <option
                                                                   key={catee}
                                                                    value={catee}>{catee}
                                                                   
                                                                </option>;
                                                                
                                                            })
                                                        }

                                                    </select>
                                                </div>
                                            </row>
                                            <row>
                                                <div className="container">
                                                    <div className="form-group">
                                                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                                                    </div>
                                                </div>
                                            </row>



                                        </form>
                                    </Col>
                                </Row>

                            </div>
                        </Container>
                    </div>
                </div>
                <FooterBlack />
            </>
        );
    }

}