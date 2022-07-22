# OpenWeatherMap

Simple app that displays hourly weather prognosis for future five days for selected city.
Deployed app: https://open-wheather-app.netlify.app/

## Getting Started

1. To run project, install it locally using npm:
```
npm install
```

2. In order to connect with API, you will need an API_KEY:

Create an account at https://www.visualcrossing.com/ (it is free for  API usage applied in this app). 
An API key will be generated instantly after confirming your email. 
You can find it in Account -> Account details -> Key.

3. Create an .env file in dir and create an enviorment variable:
```
REACT_APP_API_KEY = [your-api-key]
```
4. Run project:
```
npm start
```

### Prerequisites

```
Node 14.0.0 or later version
```

## Built With

This app was initiated with [Create React App with Typescript](https://create-react-app.dev/docs/adding-typescript/).
[VisualCrossingAPI](https://www.visualcrossing.com/) was used for fetching the data.
 

