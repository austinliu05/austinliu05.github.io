import React, { useRef, useEffect, useState } from 'react';
import pcursor from '../assets/DigitRec/pcursor.png';
import ecursor from '../assets/DigitRec/ecursor.png';
import pencil from '../assets/DigitRec/pencil.png';
import eraser from '../assets/DigitRec/eraser.png';
// import { ref, set, onValue, off, update } from 'firebase/database';
// import {database} from '../firebaseConfig'

import './Drawing.css'
function Drawing() {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isPencil, setIsPencil] = useState(true);
    const [prediction, setPrediction] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const [counter, setCounter] = useState(0);
    const [type, setType] = useState(-1);
    // Use a larger canvas for easier interaction
    const displaySize = 280; // For example, 280x280 pixels

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = displaySize;
        canvas.height = displaySize;
        canvas.style.width = `${displaySize}px`;
        canvas.style.height = `${displaySize}px`;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "white";
        context.lineWidth = 5; // Adjust for larger canvas

        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        contextRef.current = context;
    }, [displaySize]);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        context.fillStyle = "black"; // Assuming white is the desired background color
        context.fillRect(0, 0, canvas.width, canvas.height);
    };
    const setPencil = () => {
        const context = contextRef.current;
        context.lineCap = "round";
        context.strokeStyle = "white";
        context.lineWidth = 5; // Adjust for larger canvas
        setIsPencil(true)
    };
    const setEraser = () => {
        const context = contextRef.current;
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 15; // Adjust for larger canvas
        setIsPencil(false)
    };
    // Function to get the drawing scaled down to 28x28 pixels
    const getSmallDrawing = () => {
        console.log("Saved IMG")
        // img url
        const base64Image = canvasRef.current.toDataURL();
        
        // img name
        const nm = counter + "_" + type
        console.log(counter + 1 , "hi")
        setCounter(counter + 1); // Use functional update to ensure correct previous state
        // updateCounter(counter + 1)

        sendData({ image: base64Image.split(',')[1] , name: nm}); // Split to remove the Data URL prefix
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000); // Reset after 3 seconds
    };
    const [data, setData] = useState([{}])
    const sendData = (data) => {
        fetch("http://127.0.0.1:5000/recognize-digit", {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(
                //parse json response
                res => res.json())
            .then(responseData => {
                console.log("Server Response:", responseData);
                setPrediction(responseData["prediction"])
            })
            .catch(error => {
                console.error("Error sending data:", error);
            });
    };
    // useEffect(() => {
    //     const recordRef = ref(database, 'DigitRec/Counter');

    //     const unsubscribe = onValue(recordRef, (snapshot) => {
    //         if (snapshot.exists()) {
    //             setCounter(snapshot.val());
    //             console.log(counter)
    //         } else {
    //             // handle the case where there is no data at the 'Record' node
    //             console.log("No data available at Counter path");
    //         }
    //     }, (error) => {
    //         // handle error
    //         console.error(error);
    //     });
    //     // Clean up the listener when the component unmounts
    //     return () => off(recordRef);
    // }, []);
    // function updateCounter(num) {
    //     const recordRef = ref(database, 'DigitRec/Counter');
    //     set(recordRef, num).then(() => {
    //       console.log('Counter updated successfully');
    //     }).catch((error) => {
    //       console.error('Error updating record: ', error);
    //     });
    //   }
    return (
        <div className='drawing'>
            <div className='bd'>
                <canvas
                    onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                    style={{ cursor: `url(${isPencil ? pcursor : ecursor}) 3 28, auto` }}
                />
            </div>
            <div className='funcs'>
                <button onClick={setPencil}>
                    <img alt="" src={pencil}></img>
                </button>
                <button onClick={setEraser}>
                    <img alt="" src={eraser}></img>
                </button>
                <button onClick={clearCanvas}>Clear</button>
                <button onClick={getSmallDrawing}>{isSaved ? 'Saved!' : 'Save'}</button>
            </div>
            <div className='prediction'>
                <h1>Identification: {prediction}</h1>
            </div>
            {/* <div>
                <button onClick={() =>setType(0)}>0</button>
                <button onClick={() =>setType(1)}>1</button>
                <button onClick={() =>setType(2)}>2</button>
                <button onClick={() =>setType(3)}>3</button>
                <button onClick={() =>setType(4)}>4</button>
                <button onClick={() =>setType(5)}>5</button>
                <button onClick={() =>setType(6)}>6</button>
                <button onClick={() =>setType(7)}>7</button>
                <button onClick={() =>setType(8)}>8</button>
                <button onClick={() =>setType(9)}>9</button>
            </div>
            <h1>{counter}</h1> */}
        </div>
    );
}

export default Drawing;
