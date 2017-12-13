/*
 * High level GPS Functions
 *
 *
 */

#ifndef _mgos_gps_h_
#define _mgos_gps_h_

/*
 * Get last location data
 * Returns: 
 *  json object with format {lat: \"%f\", lon: \"%f\", sp: \"%f\"}
 */
void mgos_gps_get_location();

/**
 * @brief MGOS lib init
 */
bool mgos_gps_init(void);

#endif