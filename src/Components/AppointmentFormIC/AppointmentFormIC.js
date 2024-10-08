import React, { useState } from 'react';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
        if (!appointmentDate) newErrors.appointmentDate = 'Date is required';
        if (!selectedSlot) newErrors.selectedSlot = 'Time slot is required';
        return newErrors;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            const appointmentData = { name, phoneNumber, appointmentDate, selectedSlot };
            onSubmit(appointmentData);
            setName('');
            setPhoneNumber('');
            setAppointmentDate('');
            setSelectedSlot('');
            setErrors({});
            const doctorData = { name: doctorName, speciality: doctorSpeciality };
        localStorage.setItem('doctorData', JSON.stringify(doctorData));
        localStorage.setItem(doctorName, JSON.stringify(appointmentData));
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="appointmentDate">Date of Appointment:</label>
                <input
                    type="date"
                    id="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                />
                {errors.appointmentDate && <span className="error">{errors.appointmentDate}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="timeSlot">Book Time Slot:</label>
                <select
                    id="timeSlot"
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    required
                >
                    <option value="">Select a time slot</option>
                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                </select>
                {errors.selectedSlot && <span className="error">{errors.selectedSlot}</span>}
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentFormIC;
