var Kiwi = (function ($) {
	var TRANSPOSE_CHAR = '%';

	var interpolate = function(text, array){
		var stringToReturn = ""
		 	,length = text.length
		 	,index = 0;

		for(var i = 0; i < length; i++){
			var currentChar = text[i];
			var nextChar = null;
			if(i + 1 < length) nextChar = text[i+1];

			if(currentChar === '`' && nextChar === TRANSPOSE_CHAR){
				stringToReturn += TRANSPOSE_CHAR;
				i += 1;
			}else{
				if(currentChar === TRANSPOSE_CHAR){
					stringToReturn += array[index++];
				}
				else{
					stringToReturn += currentChar;
				}
			}
		}
		return stringToReturn;
	};

	return {
		"compose": interpolate
	};

}(Kiwi));