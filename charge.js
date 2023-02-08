let key = "KEY-HERE";

req = new Request("https://maker.ifttt.com/trigger/ch/with/key/" + key);

req.load();
Script.complete();
