import axios from "axios";

const BACKEND_URL = 'https://rn-basics-35a02-default-rtdb.firebaseio.com';

export function storeExpense(expenseData) 
{
  axios.post(
    BACKEND_URL + '/expenses.json',
      expenseData
);
}

export async function fetchExpense()
{
    const response = await axios.get(BACKEND_URL + '/expenses.json');
    console.log(response.data);

    const expenses = [];

    for (const key in response.data)
    {
        const expenseOb = {
            id: key,
            amount: response.data[key].amount,
            date: response.data[key].date,
            desc: response.data[key].description
        }
        expenses.push(expenseOb);
    }
    return expenses;
}


export function updateExpense(id, expenseData)
{
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id)
{
    return axios.delete(BACKEND_URL +  `/expenses/${id}.json`)
}