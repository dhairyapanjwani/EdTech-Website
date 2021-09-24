console.log("Hello. This message was sent from scripts/inject.js");

function search(keyword){
		if(document.evaluate(`(//div[@class="g"])[1]/div/div/div/a/h3`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue!=null){
		
		console.log(keyword,"$$$$$$$$$$$$$$$$$$")
		for (let i=1;i<=document.getElementsByClassName('g').length;i++){
			if(document.evaluate(`(//div[@class="g"])[${i}]/div/div/div/a/h3`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue!=null){
				if(document.evaluate(`(//div[@class="g"])[${i}]/div/div/div/a/h3`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML.toLowerCase().includes(`${keyword}`)){
				console.log(document.evaluate(`(//div[@class="g"])[${i}]/div/div/div/a/h3`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML)    
			}
			else{
				document.evaluate(`(//div[@class="g"])[${i}]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.display="none"
			}
			}
			
			}
		
		}
	}

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){


if(request.message=="invalid"){
	console.log("Internal server error");
}
else if (request.message=="valid"){
	const keyword=request.keyword;
	console.log(keyword)
search(keyword);
}

	}
	)