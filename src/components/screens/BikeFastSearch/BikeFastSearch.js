import React, { useEffect } from 'react';
import { DropdownButton, Dropdown, InputGroup, FormControl, Row, Button, FloatingLabel, Range } from 'react-bootstrap';
import './BikeFastSearch.css';
import Card from '../../modules/Card/Card';
import Form from 'react-bootstrap/Form'
import ReactWhatsapp from 'react-whatsapp';
import * as Datas from '../../../Assests/Data/Assest';
import OurSteps from '../OurSteps/OurSteps';
import * as animate from 'react-reveal/';
import { ImWhatsapp } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        orgcost: '',
        bikecondition: "",
        allRange: ["Fair", "Good", "Excellent"],
        range: 2,
        rangetext: 'Excellent',
        insurance: 0,
        tempcost: 0,
        phno: 0,
        username:'',
        count: 0,
        showsubmit: true,
    };
    let tempcost = 0;
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
                isdatasubmited: false,
                showsubmit: true
            });
        }

    }

    const textLocationChange = (val) => {
        console.log(val.target.value);
        if (val.target.value.length !== 0) {
            setSelecteddata({
                ...selecteddata,
                location: val.target.value,
                isdatasubmited: false,
                showsubmit: true
            });
        }

    }


    const textphnoChange = (val) => {
        console.log(val.target.value);
        if (val.target.value.length !== 0) {

            setSelecteddata({
                ...selecteddata,
                phno: val.target.value,
                showsubmit: true

            });
        }

    }
    const  phonenumber =(inputtxt) => {
        var phoneno = /^\d{10}$/;
        // alert(" Number"+inputtxt );
        if (inputtxt.match(phoneno) && inputtxt.length == 10) {
            // alert(" Number"+inputtxt );
            return true;
        }
        else {
            // alert("Invalid Number");
            notify('Phone Number','error');
            return false;
        }
    }
    const  name =(inputtxt) => {
        // alert(" name"+inputtxt.length );
        
        if (inputtxt.length > 1) {          
            return true;
        }
        else {
            // alert("Invalid Number");
            notify('Name','error');
            return false;
        }
    }
    useEffect(() => {
        retrivedatas();
    }, [])
    const onlyUnique =(value, index, self) =>{
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

        handleInsuranceRange(0, val);
    }
    const handleInsuranceRange = (opt, val) => {
        let tempfinalcost = selecteddata.orgcost;
        let count = selecteddata.count;
        let tempco = 0;
        if (opt === 0) {
            let beforanval = selecteddata.range;
            let rangetex = "";
            let tempins = selecteddata.insurance;
            if (val.target.value == 0) {
                rangetex = "Fair";
                tempcost = tempfinalcost * 0.90;
                count = 2;
                tempco = 2;
                // if(beforanval == 1)
                // {
                //     count =  count+1;   
                // }

                // else
                // {
                //     count = 2;   
                // }

            }
            if (val.target.value == 1) {
                rangetex = "Good";
                tempcost = tempfinalcost * 0.95;
                tempco = 1;
                // if(beforanval == 0)
                // {
                //     count =  count-1;   
                // }
                // if(beforanval == 2)
                // {
                //     count =  count+1;   
                // }

            }
            if (val.target.value == 2) {
                rangetex = "Excellent";
                tempcost = selecteddata.orgcost;
                tempco = 0;
            }
            if (!tempins) {

                tempco = tempco + 1;
            }

            if (selecteddata.kms > 50000) {
                tempco = tempco + 2;
            }
            tempcost = selecteddata.orgcost * ((100 - (tempco * 5)) * 0.01);
            console.log(rangetex + 'tempcost ' + tempcost + tempco);
            setSelecteddata({
                ...selecteddata,
                rangetext: rangetex,
                range: val.target.value,
                cost: tempcost,
                count: tempco,
                showsubmit: true
            });

        }
        if (opt === 1) {
            let temprange = selecteddata.range;
            console.log(temprange + ' temprange'+val.target.checked );
            let tempco = 0;
            if (!val.target.checked) {
                tempcost = selecteddata.orgcost * 0.95;
                count = count + 1;
                tempco = 1;
            }
            else {
                tempcost = selecteddata.orgcost;
                count = count - 1;
            }
            if (temprange == 0) {
                tempcost = tempcost * 0.90;
                count = count + 2;
                tempco = tempco + 2;
            }
            if (temprange == 1) {
                tempcost = tempcost * 0.95;
                count = count + 1;
                tempco = tempco + 1;
            }
            if (selecteddata.kms > 50000) {
                tempco = tempco + 2;
            }
            tempcost = selecteddata.orgcost * ((100 - (tempco * 5)) * 0.01);
            
            setSelecteddata({
                ...selecteddata,
                insurance: val.target.checked,
                cost: tempcost,
                count: tempco,
                showsubmit: true
                
            });
            console.log(temprange+ 'tempcost ' + tempcost + tempco + selecteddata.orgcost);
        }

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
        let bikecost = 0;
        let bikecost1 = 0, count = 0;
        let bikeModel = allmodeldetailsdata.map((props) => {
            console.log(props);
            if (selecteddata.brand === props.BikeBrand && selecteddata.year === props.BikeYear
                && selecteddata.model === props.BikeModel && selecteddata.cc === props.BikeCC) {
                console.log("propsprops.year to cc");
                // return props.BikeModel
                console.log("props.model", props.BikeOrgCost);
                bikecost = props.BikeOrgCost;
                if (selecteddata.kms > 50000) {
                    // bikecost = props.BikeOrgCost*0.90 ;
                    count = count + 2;
                    // alert('asd');
                }
                else {
                    // bikecost = props.BikeOrgCost ;    
                    // alert('asd1')               
                }
                // bikecost1 =bikecost*0.90;   // insurance    
                count = count + 1;
                bikecost1 = bikecost * ((100 - (count * 5)) * 0.01);
            }
        });

        setSelecteddata({
            ...selecteddata,
            isdatasubmited: true,
            cost: bikecost1,
            orgcost: bikecost,
            count: count,
            range: 2,
            showsubmit: true
        });

    }

    const handleInsurance = (val) => {

        console.log(val.target.checked);

        handleInsuranceRange(1, val);

    }

    const nameHandler = (val) => {
        console.log(val.target.value);
        if (val.target.value.length !== 0) {
            setSelecteddata({
                ...selecteddata,
                username: val.target.value,
                showsubmit: true
            });
        }

    }


    const handleSubmit = () => {
        console.log('submit');
       // clietRequestHandler();
        let checkname = name(selecteddata.username);
        let checknum = phonenumber(selecteddata.phno);
       if(checkname && checknum) 
       {
       
        clietRequestHandler();
       }
    }
    // 	Bike_Brand	Bike_Model	Bike_Year	Bike_CC	Bike_Cost	Insurance	Km	Location

    const clietRequestHandler = ()=>{
        console.log("clietRequestHandler");
        fetch(Datas.Form_Url, {
          method: 'post',
          header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            // we will pass our input data to server
            mobile:selecteddata.phno,
            name: selecteddata.username,
            brand: selecteddata.brand,  
            model:selecteddata.model,
            yr:selecteddata.year, 
            cc:selecteddata.cc, 
            km:selecteddata.kms,     
            cost:selecteddata.cost, 
            location:selecteddata.location,     
            insurance:selecteddata.insurance ==  0? 'No ': 'Yes',   
            condition:selecteddata.rangetext,     
          })
    
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(" responseJson");
            console.log(responseJson);
            //ToastAndroid.show(responseJson,ToastAndroid.LONG);
    
            if (responseJson !== "Added") 
            {
              console.log(" not Added");
              
            }
            else
            {
              console.log("Added");
              notify('Success','succ');
              setSelecteddata({
                ...selecteddata,
                showsubmit: false,
                
            });
              // alert("Thanks for your Interest, We will contact you As Soon As Possible.");
            //   setState({
            //     ...state,
            //     enteredUsername: '',
            //     enteredNumber: '',
            //     enteredEmailId: '',
            //     enteredDetails: '',
            //     errordetail: '',
            //     enteredDate:'',
               
            //   })
            }
            // notify('Success','succ');

          })  
          .catch((error) => {
            console.error(error);
          });
          
    
      }
    
      const notify = (errors,types) =>
      { 
        if(types==="error")
        {
          toast.error("Invalid "+errors,{    
            position: "top-center",
            // autoClose: 5000,
            // hideProgressBar: false,
            // closeOnClick: true,
            pauseOnHover: true,
            // draggable: true,
            // progress: undefined,        
        })
    
        }
        if(types==="succ")
        {
          // toast.success("Thanks for your Interest, We will contact you As Soon As Possible.",{    
            toast.success("Submited",{    
            position: "top-center",
            // autoClose: 5000,
            // hideProgressBar: false,
            // closeOnClick: true,
            pauseOnHover: true,
            // draggable: true,
            // progress: undefined,        
        })
    
        }
        
    };
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
                                 drop={selecteddata.isdatasubmited ? 'up' : 'down'}           
                                 variant="outline-secondary"
                                //title="Brand"
                                style={{ maxHeight: "28px" }}
                                // id="dropdown-size-small"
                                id="input-group-dropdown-1"
                                className="group1-style"
                                size="1px"
                                onSelect={handleBrandSelect}
                                title={selecteddata.brand === "" ? `${selecteddata.defaultvalue} Brand` : selecteddata.brand}
                            >
                                {/* {datas.brand.map((data, key) => ( */}
                                {selecteddata.allbrand.map((data, key) => (
                                    <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                ))}
                            </DropdownButton>

                            <DropdownButton
                                variant="outline-secondary"
                                drop={selecteddata.isdatasubmited ? 'up' : 'down'}  
                                id="input-group-dropdown-1"
                                onSelect={handleModelSelect}
                                title={selecteddata.model === "" ? `${selecteddata.defaultvalue} Model` : selecteddata.model}
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
                                drop={selecteddata.isdatasubmited ? 'up' : 'down'}  
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
                                drop={selecteddata.isdatasubmited ? 'up' : 'down'}  
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
                                Check
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
                            <Form.Label className='inner-contant-style form-styles card-title-styles'>Bike Condition</Form.Label>
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
                            <div className='inner-contant-style form-styles card-title-styles'> Live Insurance </div>

                            <Form className='inner-contant-style form-styles form-spacing'>

                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Yes"
                                    value={selecteddata.insurance}
                                    isValid='true'
                                    feedbackTooltip='true'
                                    onChange={(val) => handleInsurance(val)}
                                />

                            </Form>

                            <Card className="card-styles inner-contant-style cost-style ">
                                <div className='inner-contant-style form-styles card-title-styles ' > Cost </div>
                                <div className='inner-contant-style form-styles card-title-styles '>Rs: {selecteddata.cost.toFixed(2)}</div>
                            </Card>
                            <Card className="card-styles inner-contant-style cost-style ">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Your Name"
                          
                            >
                                <FormControl
                                    // className="form-input-stype input-stype "
                                    placeholder="Name "
                                    aria-label="Name"
                                    aria-describedby="basic-addon2"
                                    // onChange={(val)=>textLocationChange(val)}  
                                    onChange={(val) => nameHandler(val)}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="formBasicNumber"
                                label="Phone Number"
                            >
                                <FormControl
                                    // className="form-input-stype input-stype"
                                    placeholder="Phone Number"
                                    aria-label="Phone Number"
                                    aria-describedby="basic-addon2"
                                    type="number"
                                    onChange={(val) => textphnoChange(val)}
                                />


                            </FloatingLabel>
                            </Card>
                            <div className='inner-contant-style form-styles card-title-styles'>
                                { selecteddata.showsubmit ? 
                                <Button
                                    placeholder='Submit'
                                    className="button-input-stype gap-2 d-grid inner-contant-style "
                                    variant="success"
                                    size="lg"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                                : null }

                                <ReactWhatsapp
                                    number={Datas.whatsapp[0].phno}
                                    className="Whats-app-but-sty inner-contant-style"
                                    // number="918428952208"
                                    // message="Hello World!!!"
                                  message={`Bike Brand: ${selecteddata.brand}, Mode: ${selecteddata.model}, CC: ${selecteddata.cc}, Year: ${selecteddata.year}, Km: ${selecteddata.kms}, Location: ${selecteddata.location}, Condition: ${selecteddata.rangetext}, Live Insurance: ${selecteddata.insurance ==  0? 'No ': 'Yes'}`} 
                                >
                                    <ImWhatsapp size='30px' color='green' >
                                    </ImWhatsapp>
                                </ReactWhatsapp>


                            </div>
                        </Card>
                    </animate.Flip>

                    : null}
            </div>
            <ToastContainer />
        </>
    );
}

export default BikeFastSearch;


