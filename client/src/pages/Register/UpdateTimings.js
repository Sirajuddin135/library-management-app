import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const UpdateTimings = (props) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    function handleHourChange(e) {
        setHours(parseInt(e.target.value));
    }

    function handleMinuteChange(e) {
        setMinutes(parseInt(e.target.value));
    }


    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    console.log(props.masjidData);

    const [masjidData, setMasjidData] = useState({
        masjid_name: "Madinah",
        street_name: '',
        area: '',
        city: '',
        state: '',
        country: '',
        location: '',
        registered_date: '',
        updated_date: ''
    });

    // set masjid data
    const setInputValue = (e) => {
        const { name, value } = e.target;
        setMasjidData({ ...masjidData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const { masjid_name, street_name, area, city, state, country, location, registered_date, updated_date } = masjidData;

        axios.post('http://localhost:4000/api/masjid', { masjidData, userData })
            .then(res => {
                toast.success('Masjid registered successfully.');
                props.onHide();
                window.location.href = '/myMasajid';
            })
            .catch(error => {
                toast.error('User already registered');
            });
    }

    return (
        <Modal show={true} onHide={props.onHide} >
            <Modal.Header closeButton>
                <Modal.Title>Add Masjid</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <label>Hours:</label>
                    <input type="number" min="0" max="23" value={hours} onChange={handleHourChange} />
                    <label>Minutes:</label>
                    <input type="number" min="0" max="59" value={minutes} onChange={handleMinuteChange} />
                    <p>Selected time: {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}</p>

                    <Form.Group>
                        <Form.Label>Masjid Name</Form.Label>
                        <Form.Control
                            type="text"
                            id='masjid_name'
                            name='masjid_name'
                            value={masjidData.masjid_name}
                            placeholder="Enter masjid name"
                            onChange={setInputValue}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Street Name</Form.Label>
                        <Form.Control
                            type="text"
                            id='street_name'
                            name='street_name'
                            value={masjidData.street_name}
                            placeholder="Enter street name"
                            onChange={setInputValue}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            type="text"
                            id='area'
                            name='area'
                            value={masjidData.area}
                            placeholder="Enter area name"
                            onChange={setInputValue}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            id='city'
                            name='city'
                            value={masjidData.city}
                            placeholder="Enter city name"
                            onChange={setInputValue}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            id='state'
                            name='state'
                            value={masjidData.state}
                            placeholder="Enter state name"
                            onChange={setInputValue}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            id='country'
                            name='country'
                            value={masjidData.country}
                            placeholder="Enter country name"
                            onChange={setInputValue}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Masjid Location</Form.Label>
                        <Form.Control
                            type="text"
                            id='location'
                            name='location'
                            value={masjidData.location}
                            placeholder="Enter location name"
                            onChange={setInputValue}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Add
                    </Button>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default UpdateTimings;
