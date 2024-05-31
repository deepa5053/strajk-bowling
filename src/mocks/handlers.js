import { http, HttpResponse } from 'msw';


const bookings = [
    {
        "when":"2024-05-31T08:47",
        "lanes":"1",
        "people":"1",
        "shoes":["44"],
        "price":220,
        "id":"STR2658KTPT",
        "active":true
    },
]


export const handlers = [
    
    http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
      return HttpResponse.json({ success: true, message: 'message added' });
    }),
  ];