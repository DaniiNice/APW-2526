function randomNum() {
    let num;
    let window = open();
    num = Math.random()*3; 
    num = parseInt(num); 
    if (num == 0)
        window.location = 'http://www.outlook.com';
    else if (num == 1)
        window.location = 'http://www.gmail.com';
    else if (num == 2)
        window.location = 'http://www.yahoo.com';
}