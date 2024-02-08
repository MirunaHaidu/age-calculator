import { useState } from "react";
import './FormStyle.css';

const Form = ({ handleSubmit }) => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [yearError, setYearError] = useState('');
    const [monthError, setMonthError] = useState('');
    const [dayError, setDayError] = useState('');

    const validateDate = () => {
        const selectedYear = parseInt(year, 10);
        const selectedMonth = parseInt(month, 10);
        const selectedDay = parseInt(day, 10);
        const currentDate = new Date();
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

        setYearError('');
        setMonthError('');
        setDayError('');

        if (!year || !month || !day) {
            if (!year) setYearError('Please enter the year');
            if (!month) setMonthError('Please enter the month');
            if (!day) setDayError('Please enter the day');
            return false;
        }

        if (isNaN(selectedYear) || year.length !== 4) {
            setYearError('Must be a valid year');
            return false;
        }

        if (selectedYear > currentDate.getFullYear()) {
            setYearError('Must be in the past');
            return false;
        }

        if (selectedMonth < 1 || selectedMonth > 12) {
            setMonthError('Must be a valid month');
            return false;
        }

        if (selectedDay < 1 || selectedDay > daysInMonth) {
            setDayError('Must be a valid day');
            return false;
        }

        return true;
    };


    const handleInputChange = (event, setter, errorSetter) => {
        const { value } = event.target
        setter(value)
        errorSetter('')
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (validateDate()) {
            handleSubmit(`${year}-${month}-${day}`);
        }
    };



    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="inputs">
                    <div className="form-input">
                        <label htmlFor="day">DAY</label>
                        <input
                            type="text"
                            id="day"
                            value={day}
                            onChange={(e) => handleInputChange(e, setDay, setDayError)}
                            required
                            pattern="\d*"
                            maxLength="2"
                        />
                        {dayError && <div className="error">{dayError}</div>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="month">MONTH</label>
                        <input
                            type="text"
                            id="month"
                            value={month}
                            onChange={(e) => handleInputChange(e, setMonth, setMonthError)}
                            required
                            pattern="\d*"
                            maxLength="2"
                        />
                        {monthError && <div className="error">{monthError}</div>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="year">YEAR</label>
                        <input
                            type="text"
                            id="year"
                            value={year}
                            onChange={(e) => handleInputChange(e, setYear, setYearError)}
                            required
                            pattern="\d*"
                            maxLength="4"
                        />
                        {yearError && <div className="error">{yearError}</div>}
                    </div>
                </div>

                <div className="button-container">
                    <div className="line"></div>
                    <button className="button" type="submit">
                        <img src="src\assets\images\icon-arrow.svg" alt="Icon arrow" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
