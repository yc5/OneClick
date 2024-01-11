javascript:
var s3Url = "https://apis.ticketplus.com.tw/config/api/v1/getS3";
var apiUrl = "https://apis.ticketplus.com.tw/config/api/v1";

async function getavailableProducts() {
    let currentUrlMatch = window.location.pathname.match(/[^\/]+/g);
    let eventId = currentUrlMatch[1];
    let sessionId = currentUrlMatch[2];
    let ticketAreas, ticketAreaId, products, productId, params = {};
    let res = await axios.get(`${s3Url}?path=event/${eventId}/ticketAreas.json`);
    ticketAreas = res.data.ticketAreas.filter(x => x.sessionId === sessionId);
    ticketAreaId = ticketAreas.map(x => x.ticketAreaId);
    params.ticketAreaId = ticketAreaId.join(",");

    res = await axios.get(`${s3Url}?path=event/${eventId}/products.json`);
    products = res.data.products.filter(x => x.sessionId === sessionId);;
    productId = products.map(x => x.productId);
    params.productId = productId.join(",");

    res = await axios.get(`${apiUrl}/get?${new URLSearchParams(params).toString()}`);
    ticketAreas = res.data.result.ticketArea;
    if (ticketAreas.every(x => x.status === "pending")) {
        let d = new Date();
        console.warn(`Tickets Pending ${d.toLocaleTimeString()}`);
        window.location.reload();
    } else if (ticketAreas.every(x => x.status === "soldout")) {
        let d = new Date();
        console.warn(`Tickets Soldout ${d.toLocaleTimeString()}`);
        window.location.reload();

    } else {
        ticketAreas = ticketAreas.filter(x => x.count > 0);
        ticketAreas = ticketAreas.map(x => {
            let obj = {};
            obj.ticketAreaName = x.ticketAreaName;
            obj.price = x.price;
            obj.count = x.count;
            return obj
        });
        console.table(ticketAreas);

    }
}
getavailableProducts();


var payload = {
    "products": [
        {
            "productId": "p000000000",
            "count": 2
        }
    ],
    "captcha": {
        "key": document.cookie.match(/fetix\.\d+/)[0],
        "ans": "captcha"
    },
    "reserveSeats": true,
    "consecutiveSeats": true,
    "finalizedSeats": true
}