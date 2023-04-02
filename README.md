# Introduction:
The project is a dynamic and static data visualization tool developed using React.js, node.js, express.js, and other frontend/backend technologies. It features a bar chart that dynamically updates its data through a custom API, with the ability to add or delete data using Axios library for GET, POST, and DELETE requests, accompanied by real-time alerts to confirm success or failure of the operations.

The bar chart is built with the help of the Apexcharts library, and the project also includes a Line Chart demonstrating the use of the Apexcharts library for creating line charts with static data. Navigation is made easy with the use of React Router v6, allowing users to switch between pages such as Home, Add coin, Delete coin, Bar Chart page, and Line Chart page.

## Demo

https://dynamic-charts.vercel.app/


## API Endpoint:

### Get all coin data:

* Method: GET
* Endpoint: https://crypto-coins-ath.onrender.com/coin-data
* Response: Returns a JSON object containing the coin names and their all-time high prices.

### Add new coin data:

Method: POST
* Endpoint: https://crypto-coins-ath.onrender.com/coin-data
* Request Body: JSON object containing the coin name and its all-time high price.
* Response: Returns a JSON object confirming the addition of the new coin data.

### Delete coin data:

* Method: DELETE
* Endpoint: https://crypto-coins-ath.onrender.com/coin-data/[COIN_NAME]
* Response: Returns a JSON object confirming the deletion of the coin data.

## Data Format:
The coin data is stored in the following format:

{
"coin_name": "",
"all_time_high": ""
}

## Note:

- The all-time high price should be a numerical value.
- The coin name should be unique.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Sidc29/Dynamic-Charts-React
```

Go to the project directory

```bash
  cd Dynamic-Charts-React
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
