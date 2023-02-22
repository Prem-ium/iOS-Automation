let key = "GOVER-API-KEY";

let device = "MAC:ADD:ADDY";
let model = "MODEL-HERE";


let req = new Request("https://developer-api.govee.com/v1/devices/state?device=" + device + "&model=" + model);
req.method = "GET";

let headers = {
  "Govee-API-Key":key,
  "Content-Type":"application/json",
  "device": device
};

req.headers = headers;
let response = await req.loadJSON();
console.log(response);

const powerState = response.data.properties.find(property => property.hasOwnProperty("powerState")).powerState;

req = new Request("https://developer-api.govee.com/v1/devices/control");
req.method = "PUT";
req.headers = {
    "Govee-API-Key": key,
    "Content-Type": "application/json",
};

let cmd = {
  name: "turn",
  value: (powerState === "on") ? "off" : "on"
};
console.log(cmd);
req.body = JSON.stringify({
    "device": device,
    "model": model,
    "cmd": cmd
});

response = await req.loadJSON();
console.log(response);


Script.complete();

