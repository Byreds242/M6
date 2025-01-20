//CLIENT
script.js sends JSON
script2.js sends FormData (POST) or URL-ENCODED (PUT,DELETE)
script3.js send JSON using XMLHttpRequest

//SERVER
api.php receives JSON (file_get_contents)
api2.php receives FormData (POST directly to $_POST) or URL-ENCODED (PUT,DELETE via parse_str&file_get_contents to user-defined $_PUT, $_DELETE)