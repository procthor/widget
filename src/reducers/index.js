import { combineReducers } from 'redux';
import data from '../inputData/inputData.json';

const incomesReducer = () => {
    return data.incomes
};

const expendituresReducer = (expenditures = [], action) => {

    switch (action.type) {
        case 'SPENDINGS_CHANGE':
            var myVal = expenditures.slice();
            if (action.id === "M0") myVal[0].amount = action.payload;
            if (action.id === "B0") myVal[1].amount = action.payload;
            if (action.id === "G0") myVal[2].amount = action.payload;
            return myVal;
        default:
            return data.expenditures;
    }
}




export default combineReducers({
    incomes: incomesReducer,
    expenditures: expendituresReducer
})