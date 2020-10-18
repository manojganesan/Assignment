module.exports = {
	counter:function(input) { 
let count =[];
  input.match(/\b(\w+)\b/g).forEach(function(word) {
	  count[word] ?  count[word]++: count[word] = 1;
    });
  var output = Object.keys(count).map(function(key) {
	  return [key, count[key]];
	});
  output.sort(function(first, second) {
	  return second[1] - first[1];
	});
  output = output.filter((items,idx) => idx <10 )
  return output; 
},
sorting:function (textResult,apiResult){
	let currentWord={};
	if(apiResult.def.length!=0){
		currentWord.word=apiResult.def[0].text;
		var wordOutput ={};
		wordOutput.pos =apiResult.def[0].pos;
		wordOutput.occurence = textResult[i][1];
		let currentSynonym = [];
		for(j=0;j<apiResult.def[0].tr.length;j++){
		  if(apiResult.def[0].tr[j].hasOwnProperty('syn')){
			for(k=0;k<apiResult.def[0].tr[j].syn.length;k++)
			currentSynonym.push(apiResult.def[0].tr[j].syn[k]);
		  }
		}
		wordOutput.synonym = currentSynonym;
		currentWord.output = wordOutput;
	}else{
		currentWord.word = textResult[i][0];
		var wordOutput ={};
		wordOutput.pos = null;
		wordOutput.occurence = textResult[i][1];
		wordOutput.synonym =null;
		currentWord.output = wordOutput;
	}
	return currentWord;
}
};