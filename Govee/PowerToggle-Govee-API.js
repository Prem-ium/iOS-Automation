const key = "GOVER-API-KEY";
const device = "MAC:ADD:ADDY";
const model = "MODEL-HERE";

const fetchDeviceState = async () => {
  const url = `https://developer-api.govee.com/v1/devices/state?device=${device}&model=${model}`;
  const headers = {
    "Govee-API-Key": key,
    "Content-Type": "application/json",
    "device": device
  };

  const req = new Request(url);
  req.method = "GET";
  req.headers = headers;

  const response = await req.loadJSON();
  console.log(response);

  return response;
};

const toggleDevicePower = async () => {
  const currentState = await fetchDeviceState();
  const powerState = currentState.data.properties.find(property => property.hasOwnProperty("powerState")).powerState;
  const newPowerState = powerState === "on" ? "off" : "on";

  const url = "https://developer-api.govee.com/v1/devices/control";
  const headers = {
    "Govee-API-Key": key,
    "Content-Type": "application/json"
  };

  const req = new Request(url);
  req.method = "PUT";
  req.headers = headers;

  const cmd = {
    name: "turn",
    value: newPowerState
  };
  console.log(cmd);

  const requestBody = {
    device,
    model,
    cmd
  };
  req.body = JSON.stringify(requestBody);

  const response = await req.loadJSON();
  console.log(response);
};

toggleDevicePower();

Script.complete();
