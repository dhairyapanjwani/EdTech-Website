// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     fetch("../../data.txt")
//         .then(response=>response.json())
//         .then(data=>{
//   	chrome.pageAction.show(sender.tab.id);
//     sendResponse();
//         })
//   });



fetch("../../data.txt")
.then(response=>response.json())
.then(data=>{
  console.log(data)
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (tab.active && tab.url.toLowerCase().includes('google')) {
chrome.tabs.getSelected(null,function(tab){
  chrome.tabs.sendMessage(tab.id,{'keyword':`${data.keyword}`,'message':'valid'})
 })
}
})
})