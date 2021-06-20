const api_url ="https://api.wazirx.com/api/v2/tickers/btcinr/";
async function getapi(url) {
    let total=0;
    // Storing response
    let response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        total+=parseInt(data['ticker']['last'])*.01;
        document.getElementById('btcval').innerHTML='Rs: '+(data['ticker']['last']*.01).toFixed(1);
        document.getElementById("btcinr").innerHTML=data['ticker']['last'];
    }

    // response = await fetch('https://api.wazirx.com/api/v2/tickers/ethinr/');
    
    // // Storing data in form of JSON
    // var data = await response.json();
    // if (response) {
    //     total+=parseInt(data['ticker']['last'])*0;
    //     document.getElementById("ethinr").innerHTML=data['ticker']['last'];
    // }

    response = await fetch('https://api.wazirx.com/api/v2/tickers/xrpinr')
    var data = await response.json();
    if (response) {
        total+=parseInt(data['ticker']['last'])*161;
        document.getElementById('xrpval').innerHTML='Rs: '+(data['ticker']['last']*343).toFixed(1);
        document.getElementById("xrpinr").innerHTML=data['ticker']['last'];
    }

    response = await fetch('https://api.wazirx.com/api/v2/tickers/adainr')
    var data = await response.json();
    if (response) {
        
        total+=parseInt(data['ticker']['last'])*161.5;
        document.getElementById('adaval').innerHTML='Rs: '+(data['ticker']['last']*0).toFixed(1);
        document.getElementById("adainr").innerHTML=data['ticker']['last'];
    }

    // response=await fetch('https://api.wazirx.com/api/v2/tickers/bnbinr')
    // var data = await response.json();
    // if (response) {
    //     total+=parseInt(data['ticker']['last'])*0;
    //     document.getElementById("bnbinr").innerHTML=data['ticker']['last'];
    // }
    total+=0;
    document.getElementById("total").innerHTML='Rs: '+total.toFixed(1);
    // var newURL = "http://wazirx.com/";
    //             chrome.tabs.create({ url: newURL });

}
// Calling that async function
getapi(api_url);


document.addEventListener('DOMContentLoaded',function(){
    var eve=document.getElementById('refresh');
    
    eve.addEventListener('click',function(){
        var newURL = "http://wazirx.com/";
        chrome.tabs.create({ url: newURL });
    },false);
},false);


// function refresh()
// {
//     console.log("refresh");
//     document.getElementById("total").innerHTML='Rs: ';
// }
// document.getElementById('refresh').addEventListener('click', refresh);

let color = '#3aa757';
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });