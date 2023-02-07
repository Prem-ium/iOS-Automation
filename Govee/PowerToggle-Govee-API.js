let key = "YOUR-API-KEY-HERE";

let device = "YOUR:MAC:HERE";
// replace model with your light model. (must be supported by Govee API)
let model = "H1699";


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
let cmd;
if (powerState == "on"){  
  cmd = {
        "name": "turn",
        "value": "off"
   };

} else{  
  cmd = {
        "name": "turn",
        "value": "on"
   };
}


req.body = JSON.stringify({
    "device": device,
    "model": model,
    "cmd": cmd
});

response = await req.loadJSON();
console.log(response);


Script.complete();

