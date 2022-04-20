import React, { useEffect } from 'react';
import { DropdownButton, Dropdown, InputGroup, FormControl, Row, Button, FloatingLabel, Range } from 'react-bootstrap';
import './BikeFastSearch.css';
import Card from '../../modules/Card/Card';
import Form from 'react-bootstrap/Form'

import * as Datas from '../../../Assests/Data/Assest';
import OurSteps from '../OurSteps/OurSteps';
import * as animate from 'react-reveal/';
function BikeFastSearch(props) {


    const datas = {
        brand: ["Aprilia", "Bajaj", "Benelli"],
        model: ["model1", "model2", "model3"],
        year: ["year1", "year2", "year3"],
        cc: "",
        kms: "",
        location: "",
    }
    const initialdata = {
        defaultvalue: "Select the",
        allbrand: ["Aprilia", "Bajaj", "Benelli"],
        allmodeldata: "",
        allmodeldetailsdata: "",
        brand: "",
        allmodel: "",
        model: "",
        allyear: "",
        year: "",
        allcc: "",
        cc: "",
        kms: "",
        location: "",
        fromdate: new Date(),
        todate: new Date(),
        analysis: "",
        column: "",
        ismessage: false,
        message: null,
        isdatasubmited: false,
        cost: "",
        bikecondition: "",
        allRange: ["Fair", "Good", "Excellent"],
        range: 0,
        rangetext: '',
        insurance:false,
    };
    const [selecteddata, setSelecteddata] = React.useState(initialdata);

    const [allmodeldetailsdata, setAllmodeldetailsdata] = React.useState('');
    const handleBrandSelect = (val) => {

        console.log(val);
        let bikedata = [];
        let bikeModel = selecteddata.allmodeldata.map((props) => {
            // console.log(props.BikeBrand);
            if (val === props.BikeBrand) {
                console.log("propsprops.BikeModel2");
                // return props.BikeModel
                bikedata.push(props.BikeModel);
            }

        });
        setSelecteddata({
            ...selecteddata,
            allmodel: bikedata,
            brand: val,
            model: '',
            year: '',
            allyear: '',
            cc: '',
            allcc: '',
            isdatasubmited: false
        });

        console.log(bikedata);
    };

    const handleModelSelect = (val) => {
        console.log(val);
        let BikeYeardata = [];

        let bikeModel = allmodeldetailsdata.map((props) => {
            console.log(props);
            if (val === props.BikeModel) {
                console.log("propsprops.BikeModel4");
                // return props.BikeModel
                BikeYeardata.push(props.BikeYear);
            }

        });
        console.log("BikeYeardata");
        console.log(BikeYeardata);
        setSelecteddata({
            ...selecteddata,
            model: val,
            allyear: BikeYeardata,
            year: '',
            cc: '',
            allcc: '',
            isdatasubmited: false
        });

    }

    const handleYearSelect = (val) => {
        console.log(val);
        let BikeCCdata = [];

        let bikeModel = allmodeldetailsdata.map((props) => {
            console.log(props);
            if (val === props.BikeYear) {
                console.log("propsprops.year to cc");
                // return props.BikeModel
                BikeCCdata.push(props.BikeCC);
            }
        });
        console.log("BikeCCdata");
        console.log(BikeCCdata);
        setSelecteddata({
            ...selecteddata,
            year: val,
            allcc: BikeCCdata,
            cc: '',
            isdatasubmited: false
        });

    }

    const handleCCSelect = (val) => {

        setSelecteddata({
            ...selecteddata,
            cc: val,
            isdatasubmited: false
        });

    }

    const textKmsChange = (val) => {
        console.log(val.target.value);
        if (val.target.value.length !== 0) {
            setSelecteddata({
                ...selecteddata,
                kms: val.target.value,
                isdatasubmited: false
            });
        }

    }

    const textLocationChange = (val) => {
        console.log(val.target.value);
        if (val.target.value.length !== 0) {
            setSelecteddata({
                ...selecteddata,
                location: val.target.value,
                isdatasubmited: false
            });
        }

    }



    useEffect(() => {
        retrivedatas();
    }, [])
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    const retrivedatas = () => {
        fetch(Datas.retriveurl, {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                // we will pass our input data to server

            })

        })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log("responseJson1");
                console.log(responseJson);
                let modeldata = JSON.parse(responseJson);
                // console.log(modeldata);
                // let test1= [{"BikeBrand":"Honda","BikeModel":"Activa"},
                // {"BikeBrand":"Honda","BikeModel":"Activa"}];
                console.log(modeldata.BikeBrand);

                let bikebrand = modeldata.map((props) => {
                    // console.log("props");
                    // console.log(props.BikeBrand);
                    return props.BikeBrand
                });
                let bikeModel = modeldata.map((props) => {
                    // console.log("props");
                    // console.log(props.BikeBrand);
                    return props.BikeModel
                });
                // console.log("test1");
                // console.log(test1);
                // console.log("bikebrand");
                console.log(bikebrand);
                var uniquebikebrand = bikebrand.filter(onlyUnique);

                console.log(uniquebikebrand);
                setSelecteddata({
                    ...selecteddata,
                    allbrand: uniquebikebrand,
                    allmodeldata: modeldata,
                });
                retriveBikeDetailsdatas();
            })

            .catch((error) => {
                console.error(error);
            });
    }


    const retriveBikeDetailsdatas = () => {
        fetch(Datas.retriveBikeDetailUrl, {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                // we will pass our input data to server

            })

        })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log("responseJson1");
                console.log(responseJson);
                let modeldata = JSON.parse(responseJson);

                setAllmodeldetailsdata(modeldata);

            })
            .catch((error) => {
                console.error(error);
            });
    }


    const handleRange = (val) => {
        console.log(val.target.value);

        let rangetex = "";
        // allRange: ["Fair", "Good", "Excellent"],
        if (val.target.value == 0) {
            rangetex = "Fair";
        }
        if (val.target.value == 1) {
            rangetex = "Good";
        }
        if (val.target.value == 2) {
            rangetex = "Excellent";
        }
        console.log(rangetex);
        setSelecteddata({
            ...selecteddata,
            rangetext: rangetex,
            range: val.target.value

        });
    }
    const handleButton = () => {
        console.log("handleButton");
        console.log(selecteddata);
        if (selecteddata.brand === '' || selecteddata.model === '' || selecteddata.year === '' ||
            selecteddata.cc === '' || selecteddata.kms === '' || selecteddata.location === '') {
            console.log("not completed");
            alert("Please complete the form");
            return false;
        }
        let bikecost = '';
        let bikeModel = allmodeldetailsdata.map((props) => {
            console.log(props);
            if (selecteddata.brand === props.BikeBrand && selecteddata.year === props.BikeYear
                && selecteddata.model === props.BikeModel && selecteddata.cc === props.BikeCC) {
                console.log("propsprops.year to cc");
                // return props.BikeModel
                console.log("props.model", props.BikeOrgCost);
                bikecost = props.BikeOrgCost;
            }
        });
        setSelecteddata({
            ...selecteddata,
            isdatasubmited: true,
            cost: bikecost
        });

    }
    
    const handleInsurance = (val) => {
   
        console.log(val.target.checked);
        setSelecteddata({
            ...selecteddata,
            insurance: val.target.checked

        });
    }
    return (
        <>


            <div className=" card-style1">
                <OurSteps />
                <animate.Fade left delay={1100}>
                    <div className='Sell-bike-header'> Select the Bike Models</div>
                </animate.Fade>
                <animate.Fade right delay={1200}>
                    <Card className=" card-group">

                        <InputGroup >

                            <DropdownButton
                                variant="outline-secondary"
                                //title="Brand"
                                id="input-group-dropdown-1"
                                className="group1-style"
                                size="1px"
                                onSelect={handleBrandSelect}
                                title={selecteddata.brand == "" ? `${selecteddata.defaultvalue} Brand` : selecteddata.brand}
                            >
                                {/* {datas.brand.map((data, key) => ( */}
                                {selecteddata.allbrand.map((data, key) => (
                                    <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                ))}
                            </DropdownButton>

                            <DropdownButton
                                variant="outline-secondary"

                                id="input-group-dropdown-1"
                                onSelect={handleModelSelect}
                                title={selecteddata.model == "" ? `${selecteddata.defaultvalue} Model` : selecteddata.model}
                            >
                                {selecteddata.allmodel.length > 0 ? selecteddata.allmodel.map((data, key) => (

                                    <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                )) :
                                    <Dropdown.Item   >Select the Brand </Dropdown.Item>
                                    // <div>Select the brand</div>
                                }
                                {/* <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                            </DropdownButton>


                            <DropdownButton
                                variant="outline-secondary"

                                id="input-group-dropdown-1"
                                onSelect={handleYearSelect}
                                title={selecteddata.year == "" ? `${selecteddata.defaultvalue} Year` : selecteddata.year}
                            >
                                {selecteddata.allyear.length > 0 ? selecteddata.allyear.map((data, key) => (

                                    <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                )) : <Dropdown.Item   >Select the Model </Dropdown.Item>}
                            </DropdownButton>


                            <DropdownButton
                                variant="outline-secondary"

                                id="input-group-dropdown-1"
                                onSelect={handleCCSelect}
                                title={selecteddata.cc == "" ? `${selecteddata.defaultvalue} CC` : selecteddata.cc}

                            >
                                {selecteddata.allcc.length > 0 ? selecteddata.allcc.map((data, key) => (

                                    <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                )) : <Dropdown.Item   >Select the Year </Dropdown.Item>}
                            </DropdownButton>
                            <FloatingLabel
                                controlId="formBasicNumber"
                                label="Kms"
                            // className="mb-3"
                            >
                                <FormControl
                                    className="form-input-stype input-stype text-input-style"
                                    placeholder="Kms"
                                    aria-label="Kms"
                                    aria-describedby="basic-addon2"

                                    type="number"
                                    // keyboardType="phone-pad"
                                    onChange={(val) => textKmsChange(val)}
                                />


                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Location"
                            // className="mb-3"
                            >
                                <FormControl
                                    className="form-input-stype input-stype "
                                    placeholder="Location "
                                    aria-label="Location"
                                    aria-describedby="basic-addon2"
                                    // onChange={(val)=>textLocationChange(val)}  
                                    onChange={(val) => textLocationChange(val)}
                                />
                            </FloatingLabel>
                            <Button
                                placeholder='Submit'
                                className="button-input-stype gap-2 d-grid "
                                variant="secondary"
                                size="lg"
                                onClick={handleButton}
                            >
                                Submit
                            </Button>
                        </InputGroup>
                    </Card>
                </animate.Fade>
            </div>
            <div>
                {selecteddata.isdatasubmited ?

                    <animate.Flip top delay={1100}>
                        <Card className="card-styles ">

                            {/* <div>Data submited</div> */}
                            {/* <div>{selecteddata.brand}</div>
                            <div>{selecteddata.model}</div>
                            <div>{selecteddata.year}</div>
                            <div>{selecteddata.cc}</div> */}
                            {/* <FormControl
                                className="form-input-stype input-stype "
                                placeholder="Location "
                                aria-label="Location"
                                aria-describedby="basic-addon2"
                                type="range"
                            // onChange={(val)=>textLocationChange(val)}  
                            // onChange={(val) => textLocationChange(val)}
                            /> */}
                            <Form.Label className='inner-contant-style form-styles'>Bike Condition</Form.Label>
                            {/* <div className="form-input-stype input-stype control-text-style"> */}

                            <Form.Range
                                className="form-input-stype input-stype "
                                onChange={(val) => handleRange(val)}

                                min="0" max="2"
                                value={selecteddata.range}
                            // size={"100px"}
                            />

                            <div className="form-input-stype input-stype control-text-style">
                                <div >Fair </div>
                                <div className="range-text1">  Good </div>
                                <div  > Excellent</div>
                            </div>
                            {/* </div>   */}
                            {/* <div> {selecteddata.rangetext}</div> */}
                            <div className='inner-contant-style form-styles'> Insurance </div>
                           
                            <Form className='inner-contant-style form-styles form-spacing'>
                            
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Yes"
                                   onChange={(val) => handleInsurance(val)}
                                />
                            </Form>
                            
                            <Card className="card-styles inner-contant-style ">
                                <div>Rs: {selecteddata.cost}</div>
                            </Card>
                        </Card>
                    </animate.Flip>

                    : null}
            </div>

        </>
    );
}

export default BikeFastSearch;


