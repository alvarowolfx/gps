// GPS library API. Source C API is defined at:
// [mgos_gps.h]

let GPS = {
  _get_location: ffi('char * mgos_get_location()'),

  // ## **`GPS.getLocation()`**
  // Get last location obtained
  getLocation: function() {
    let latlon = GPS._get_location();
    let jsonParsed = JSON.parse(latlon);
    if (
      jsonParsed.sp === 'nan' ||
      jsonParsed.lon === 'nan' ||
      jsonParsed.lat === 'nan'
    ) {
      return false;
    }
    return jsonParsed;
  }
};
