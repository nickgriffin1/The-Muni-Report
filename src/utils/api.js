const baseURL = 'http://webservices.nextbus.com/service/publicJSONFeed?'

export function getAllMuniLines() {
  return fetch(baseURL + 'command=routeList&a=sf-muni')
    .then(res => res.json())
    .then(data => {
      return data.route
    })
    .catch((e) => {
      console.log('Error in getAllMuniLines', e)
    })
}

export function getMuniLine(line) {
  return fetch(baseURL + 'command=routeConfig&a=sf-muni&r=' + line)
    .then(res => res.json())
    .then(data => {
      return data.route
    })
    .catch((e) => {
      console.log('Error in getMuniLine', e)
    })
}

export function getLineLocations(line) {
  // create timestamp in Epoch time
  var ts = Math.round((new Date()).getTime() / 1000);
  return fetch(baseURL + 'command=vehicleLocations&a=sf-muni&r=' + line + '&t=' + ts)
    .then(res => res.json())
    .then(data => {
      return data.vehicle
    })
    .catch((e) => {
      console.log('Error in getLineLocations', e)
    })
}
