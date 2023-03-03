let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
let pic = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zUyTkCYlaHkz1XaiQuiVqrgtwzFWHa7u8rXV6WrIU7JegDnJsjGotnEg3mTW8-dwiko&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4WvC5PYhh90XerR_RZXPr2mpyVzAB_f7jg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yseOK7ba0N6U8Uo3iQKt1MpFFWlUGHct5A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNikreL2sfwO_bXUSwV-CDu8X129UqWRnEw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_0mVTMBaGDrcqtmt-xkTolGRMoxjgt5zvQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvd0ZOVSlgwSE1XldJPB0oVTI-xL1jj1DMvg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcs47dV8dDC5LzqprQnsWKzYfNIjfPYA-DoA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6oxlkyUtAhlGBRA4BjzY-IES4NhUfi_IKA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96NaetlxPqnmGF8QDx0Ep050S6Zh7cIX9vZDDB5oJHf3owjCEclO7xp4scv3FzSORD84&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIb6pL5m_hsVk9UVX4jXIbm_aoufpzLJKvLQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHIbVz2yKlNo2GALZ0UEijFf3Yj5xeLhOGw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwW8vR7QBm7e_Vw2N_PlFlfHBd4u-eQ5BR7Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4yY0g4zU22ly9XaDVYA5I7xrl3CqI7yIZGQbHlwBrZVInq5HKv_T2rOPTFnGcDgZqSv8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqoeMMTMJcmC9CDSdDTk1oWcnKIq-TfDFfw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLevXDQ93cLO89ESiZ3hSzvv7GuL1wJCvBg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRDsdMLPWqEDhqhP9IRXdG0pwGp4JBoUWGg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFjPYkbnRyoncpw2acez0RQ0yMc1EZftLpQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9GudEFIEKUvE0ObvpJid9dLbVWwRI8H5jQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsNeLiGeOEw_T1hb3hv9TTUm9lLGTNj7ZwQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJidMhJgFo5Qz34PDG9CNLf9SatZ4D70C4-Kz975wuJ5NUNzdq3SrpXI5MjRX_JV5t0E&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OQBPVmTC0WiKNqKuoYYxF0pWkXIoI-oGug&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdf4JkwX20lUsuDhs5tfSToLg9Yc-M1_SGQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWLPwZFWBKAIPmgonSGCyH7ad6qvEHYXmww&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMeruzaj836sPtOiqxDoTu2-CnECx7ALH9A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0BpuUj8HhbgjId0TiN8NBfYRiPZv_5u8vzhztsBCnHgNaA5mbLBGknbZcRTB-D35Iy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpP57oB5EU-g0jH8DNlmh5iruGz5MyG18VexPyn5sLcslV2RKXVtTvM1w0nIcWmQy-sWo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gnH2GUi2FNydFAi_WnXiSZIzmanG46hmegx9RqkrmMFckzJy3xBBdFYg3oM4XnwfsCg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9o6gQslfPz3WXDB-hrqhiT_M7l7Z5TSBD1A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZLPBzSzJNSeWE5Y2PtvccYUwW3J8L7Yfac1fNBUQdCJAXEZ30n6NTSrZ_AJGf1zg_7g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD19cUDGoe4L65YGv1ucduuafeLWSJRmkVA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlO1hmHq4zaRqfctbxWqi0CbTghPR-B_9Sw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jaN_glwyu671ewSnhglbWTWks6SNL9vD_g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNqau0GIiAr60NtGuG8MwJZ2t0ztSlxvdCg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoITNmo3TkMlKnyKVJ0XO8DvZkroXlSFmN2A&usqp=CAU",
];
var openSite = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * pic.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = pic[randIdx];

    return link;
};
response.then((value) => {
    return value.json();
}).then((contest) => {
    console.log(contest);
    ihtml = "";
    for (item in contest) {
        let imageUrl = openSite();
        // console.log(contest[item]);
        ihtml += `
            <div class="card" style="    width: 22rem;
// margin-left: 17px;
margin-right: 17px;
/* margin-top: -1px; */
margin-bottom: 17px;">
            <img src="${imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p>Start at: ${contest[item].start_time}</p>
            <p>End at: ${contest[item].end_time}</p>
            <a href="${contest[item].url}" target="_blank" class="btn btn-primary">Visit Here</a>
            </div>
        </div>
        `
    }
    cardContainer.innerHTML = ihtml;
});