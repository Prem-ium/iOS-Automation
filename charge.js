TRIGGER="";

new Request("https://www.virtualsmarthome.xyz/url_routine_trigger/activate.php?trigger=" + TRIGGER + "&response=json").load();
Script.complete();
