var s3Url = "https://apis.ticketplus.com.tw/config/api/v1/getS3";
var apiUrl = "https://apis.ticketplus.com.tw/config/api/v1";
var eventId = window.location.pathname.match(/[^\/]+/g)[1];
var ticketAreas, ticketAreaId, products, productId, params = {};
var res = await axios.get(`${s3Url}?path=event/${eventId}/ticketAreas.json`);
ticketAreas = res.data.ticketAreas;
ticketAreaId = ticketAreas.map(x => x.ticketAreaId);
params.ticketAreaId = ticketAreaId.join(",");

res = await axios.get(`${s3Url}?path=event/${eventId}/products.json`);
products = res.data.products;
productId = products.map(x => x.productId);
params.productId = productId.join(",");

params._ = Date.now();

res = await axios.get(`${apiUrl}/get?${new URLSearchParams(params).toString()}`);
productsStatus = res.data.result.ticketArea;
availableProducts = productsStatus.filter(x => x.count > 0);
availableProducts = availableProducts.map(x => {
    let obj = {};
    obj.ticketAreaName = x.ticketAreaName;
    obj.price = x.price;
    obj.count = x.count;
    return obj
});
console.table(availableProducts);


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