import axios from "axios"

const URL = 'http://api.nbp.pl/api/exchangerates/tables/A/'

export const fetchCurrencies = async() => {
    const { data } = await axios.get(URL)
    return data[0].rates
}