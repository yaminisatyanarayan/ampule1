import React, { useState, useEffect } from 'react';
import axios from 'axios';

import referenceImage from './ReferenceIMG.jpg'; // Correct path to the image
import './App.css';

export default function Card() {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState(null);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/result'); // Replace with your API endpoint
            const data = response.data;

            // Process data to convert dimensions from strings to numbers for comparison
            const processedData = Object.entries(data)
                .map(([key, value]) => ({
                    dimension: key,
                    color: value.color,
                    actualValue: parseFloat(value.dimension),
                    normalValue: getNormalValue(key), // Assume you have a function to get the normal value for each dimension
                }))
                .sort((a, b) => sortOrder.indexOf(a.dimension) - sortOrder.indexOf(b.dimension));

            setApiData(processedData);
        } catch (err) {
            setError(err.message);
        }
    };

    // Function to get the normal value based on the dimension key
    const getNormalValue = (key) => {
        const normalValues = {
            D1: 12.27,
            D2: 10.38,
            D3: 11.25,
            H1: 51.89,
            H2: 45.27,
        };
        return normalValues[key] || 0;
    };

    const sortOrder = ['H1', 'H2', 'D1', 'D2', 'D3', 'result'];

    // Fetch data when the component mounts and set interval to fetch data periodically
    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Check if there was an error and display the error message
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Display a loading message while waiting for the data
    if (!apiData.length) {
        return <div>Loading...</div>;
    }

    // Get the current date and time
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    // Render the page with the specified sections and the cards
    return (
        <div className="app">
            {/* Display the hard-coded sections */}
            <div className="dashboard">
                <div className="section">2ml Ampule</div>
                <div className="section">M/C No :</div>
                <div className="section">Operator Name :</div>
                <div className="section">Date: {currentDate}</div>
                <div className="section">Time: {currentTime}</div>
                
            </div><br></br><br></br>

            <div style={{ display: 'flex' }}>
                {/* Left side: Display the reference image and live video stream side by side */}
                <div style={{ flex: '1', marginRight: '20px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h3>Reference Image</h3>
                            <img
                                src={referenceImage}
                                alt="Reference"
                                style={{
                                    width: '250px', // Set the desired width
                                    height: '330px', // Set the desired height
                                    objectFit: 'cover' // Optionally control how the image fits within the specified dimensions
                                }}
                            />
                        </div>
                        
                        <div>
                            <h3>Live Image</h3>
                            <iframe
                                src="http://127.0.0.1:5000/video_feed"
                                style={{
                                    width: '400px', // Set the desired width
                                    height: '330px', // Set the desired height
                                    objectFit: 'cover' // Optionally control how the image fits within the specified dimensions
                                }}
                                title="Live Video Feed"
                            ></iframe>
                        </div>
                    </div>
                    <div style={{ marginTop: '50px', textAlign: 'left', display:'flex'}}>
                        <p>H1 - Total height</p>
                        <p>H2 - Base constriction</p>
                        <p>D1 - Body diameter</p>
                        <p>D2 - Constriction diameter</p>
                        <p>D3 - Bulb diameter</p>
                    </div>
                </div>

                {/* Right side: Display the cards */}
                
                <div className='cards'>
                   
                    {apiData.map((item, index) => (
                        <div key={index} className='box'>
                            <div>
                                <p className='title'>Dimension: {item.dimension}</p>
                               
                                <p>Normal Value: {item.normalValue} mm</p>
                                <p>Actual Value: {item.actualValue} mm</p>
                                <p>Test: {item.actualValue === item.normalValue ? 'Pass' : 'Fail'}</p>
                            </div>
                            <div className='circle' style={{ backgroundColor: item.actualValue === item.normalValue ? 'green' : 'red' }} />
                        </div>
                    
                    ))}
                    
                    <div className='glass'>
                        <div className='test'>
                        Glass Particle Test
                        </div>
                        <div className='ctest'> </div>
                        </div>
                        <div className='glass' >

                        <div className='test'>
                            Ring Test</div>
                        <div className='ctest'></div>
                            </div>
                </div>
            </div>
        </div>
    );
}