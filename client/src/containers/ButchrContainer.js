import { useState, useEffect } from "react";
import {Router, Swtich, Route} from "react-router"
import HomePage from "../components/HomePage"
import MeatPage from "../components/meats/MeatPage";
import ProcessedPage from "../components/processeds/ProcessedPage";
import NonFoodPage from "../components/nonFoodItems/NonFoodPage";
import MeatDetails from "../components/meats/MeatDetails";
import NonFoodDetails from "../components/nonFoodItems/NonFoodDetails";
import ProcessedDetails from "../components/processeds/ProcessedDetails";

const ButchrContainer = function() {

    const [meatData, setMeatData] = useState([]);
    const [processedData, setProcessedData] = useState([]);
    const [nonFoodData, setNonFoodData] = useState([]);

    const [individualMeat, setIndividualMeat] = useState({});
    const [individualProcessed, setIndividualProcessed] = useState({});
    const [individualNonFoodItem, setIndivdualNonFoodItem] = useState({});

    console.log(individualMeat);
    const getMeatData = () => {
        fetch("http://localhost:8080/items/meat")
        .then(res => res.json())
        .then(returnedData => setMeatData(returnedData));
    }

    const getProcessedData = () => {
        fetch("http://localhost:8080/items/processed")
        .then(res => res.json())
        .then(returnedData => setProcessedData(returnedData));
    }

    const getNonFoodItemData = () => {
        fetch("http://localhost:8080/items/non_food_items")
        .then(res => res.json())
        .then(returnedData => setNonFoodData(returnedData));
    }

    useEffect(()=>{
        getMeatData();
        getProcessedData();
        getNonFoodItemData();
    }, [])

    return(
        <Router>
            <h1> Butchr Container </h1>
            <HomePage />
            <MeatPage meatData = {meatData} setIndividualMeat={setIndividualMeat} />
            <ProcessedPage processedData = {processedData} setIndividualProcessed={setIndividualProcessed} />
            <NonFoodPage nonFoodData={nonFoodData} setIndivdualNonFoodItem={setIndivdualNonFoodItem} />
            <MeatDetails individualMeat={individualMeat} />
            <NonFoodDetails individualNonFoodItem={individualNonFoodItem} />
            <ProcessedDetails individualProcessed={individualProcessed} />
            
        </Router>
    )
}

export default ButchrContainer;