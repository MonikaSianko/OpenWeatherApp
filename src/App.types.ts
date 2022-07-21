export interface IWheatherData {
    address: string,
    alerts: []
    currentContitions: ICurrentConditions,
    days: IDay[];
    description: string;
    latitude: number;
    longitude: number;
    queryCost: number;
    resolvedAddress: string;
    stations: IStations;
    timezone: string
    tzoffset: number
}

interface ICurrentConditions {
    cloudcover: number;
conditions: string;
datetime: string;
datetimeEpoch: number;
feelslike: number;
humidity: number;
icon: string;
moonphase: number;
precip: number;
precipprob: null;
preciptype: null;
pressure: number;
snow: number;
snowdepth: number;
solarenergy: number;
solarradiation: number;
stations: string[];
sunriseEpoch: number;
sunset: string;
sunsetEpoch: number;
temp: number;
uvindex: number;
visibility: number;
winddir: number;
windgust: null;
windspeed: number;
}

export interface IDay {
    cloudcover: number;
    conditions: string;
    datetime: string;
    datetimeEpoch:number;
    description: string;
    dew: number;
    feelslike: number;
    feelslikemax: number;
    feelslikemin: number;
    hours:IHours[];
    humidity: number;
    icon: string;
    moonphase: number;
    precip: number;
    precipcover: number;
    precipprob: number;
    preciptype: string[];
    pressure: number;
    severerisk: number;
    snow: number;
    snowdepth:number;
    solarenergy: number;
    solarradiation: number;
    source: string;
    stations: string[]
    sunrise:string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    temp: number;
    tempmax: number;
    tempmin: number;
    uvindex: number;
    visibility: number;
    winddir: number;
    windgust: number;
    windspeed: number;
}

export interface IHours {
    cloudcover:number
conditions: string
datetime: string;
datetimeEpoch: number;
dew: number;
feelslike: number;
humidity: number;
icon: string;
precip: number;
precipprob: number;
preciptype: null;
pressure: number;
severerisk: number;
snow: number;
snowdepth: number;
solarenergy: null
solarradiation: number;
source: string;
stations: string[];
temp: number;
uvindex: number;
visibility: number;
winddir: number;
windgust: number;
windspeed: number;
}

interface IStations {
    [stationType: string]: IStation
}

interface IStation{
    contribution: number;
distance: number;
id: string
latitude: number;
longitude: number;
name: string;
quality: number;
useCount: number;
}