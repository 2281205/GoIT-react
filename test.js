const obj1 = {
    name: 'oleg',
age: 22
}

//console.log(`hello git!`, obj1);
//console(`hello git!`, obj1);
console.log(myUrl1.href); // https://javascript.info/profile/admin

let myUrl1 = new URL(document.location.href);
!myUrl1.searchParams.get('lang') && myUrl1.searchParams.set('lang', 'RU');
let lang = myUrl1.searchParams.get('lang')
let btn = document.querySelector('#lang');

btn.innerHTML=`<button id="lang">${myUrl1.searchParams.get('lang')}</button>`
console.log(btn); // https://javascript.info/profile/admin
btn.addEventListener(`click`, e=>{
    e.preventDefault();
    console.log(myUrl1.href); // https://javascript.info/profile/admin
    console.log(`______`)
    console.log(`bilo: ${myUrl1}`)
    myUrl1.searchParams.get('lang') === 'RU' ? myUrl1.searchParams.set('lang', 'EU') : myUrl1.searchParams.set('lang', 'RU')
    btn.innerHTML=`<button id="lang">${myUrl1.searchParams.get('lang')}</button>`
    console.log(`stalo: ${myUrl1}`)
})


//myUrl1.searchParams.set('lang', 'EU');
//!myUrl1.searchParams.get('lang') && myUrl1.searchParams.set('lang', 'RU')
// //let url2 = new URL('')
// console.log(myUrl1); // https://javascript.info/profile/admin
//console.log(lang); // https://javascript.info/profile/admin
//myUrl1.searchParams.set('lang', prompt(`lang`, 'ad'));
//console.log(`____________`)
//console.log(myUrl1.searchParams.get('lang')); // https://javascript.info/profile/admin

// url = new URL("http://foo.bar/?x=1&y=2");

// If your expected result is "http://foo.bar/?x=1&y=2&x=42"
// url.searchParams.append('x', 42);

// If your expected result is "http://foo.bar/?x=42&y=2"
//url.searchParams.set('x', 42);


