
(function(){

var searchAPI;
var nowPage = 1;
var addButton = $('moreButton');
var searchText ;

moreButton.addEventListener('click', nextPage);

function nextPage(){
	nowPage=nowPage+1;
	searchAPI = 'http://apis.daum.net/search/web?apikey=e519ec54d7e9852d7b3c5acfdafe9475&q='+searchText+'&output=json&pageno='+ nowPage;
	jsonp();
};

function search(){
	searchText = searchBar.value;
	searchBar.value = '';
	searchAPI = 'http://apis.daum.net/search/web?apikey=e519ec54d7e9852d7b3c5acfdafe9475&q='+searchText+'&output=json&pageno='+ nowPage;
	jsonp();
};

searchButton.addEventListener('click', search);



function jsonp(){

var listTemplate = $('listTemplate').innerHTML;
var searchBar = $('searchBar');
var searchButton = $('searchButton');


console.log(listTemplate);
getJSON(DaumAPI , function(DaumData){

  console.log(DaumData.channel.item)

  var html = tmpl(listTemplate, {list: DaumData.channel.item});

  $('wrap').innerHTML += html;

});

};


