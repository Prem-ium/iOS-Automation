let trigger = "";
let token = "";

req = new Request("https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=" + trigger + "&token=" + token + "&response=smartphone");

req.load();
Script.complete();
