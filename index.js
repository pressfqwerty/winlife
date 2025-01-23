import axios from "axios";

const url = "https://api-winlife.ru";

class WINLIFE {
    constructor({ apiKey }) {
        if (!apiKey) {
            return 'Parameter "apiKey" is required';
        }
        this.apiKey = apiKey;
    }

    async getBalance() {

            let result = null;
            await axios.post(`${url}/balance`, {
                apiKey: this.apiKey,
            }).then((response) => { result = response.data.balance }).catch((error) => { result = error.response.data.error });

            return result;
    }
    
    async sendTransfer({ toId, amount }) {

        if (!toId) {
            return 'Parameter "toId" is required';
        }
        if (!amount) {
            return 'Parameter "amount" is required';
        }

        let result = null;
        await axios.post(`${url}/transfer`, {
            apiKey: this.apiKey,
            toId: toId,
            amount: parseFloat(amount).toFixed(2)
        }).then((response) => { result = response.data.message }).catch((error) => { result = error.response.data.error });

        return result;
    }

    async getTransactions({ type } = {}) {

        let result = null;
        await axios.post(`${url}/transactions`, {
            apiKey: this.apiKey,
            type: type
        }).then((response) => { result = response.data.transactions }).catch((error) => { result = error.response.data.error });

        return result;
    }
}

export { WINLIFE };

export default WINLIFE;

if (typeof module !== "undefined") {
    module.exports = { WINLIFE };
}