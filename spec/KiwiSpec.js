describe('Kiwi.compose - %', function() {
	it('should return the empty string when input is empty',function() {
		var input = "";
		expect(Kiwi.compose(input)).toEqual(input);
	});

	it('should return the input string when array is null',function() {
		var input = "text without interpolation";
		expect(Kiwi.compose(input)).toEqual(input);
	});

	it('should return replace %s with text', function() {
		var input = "There are % apples";
		var result = "There are five apples";
		expect(Kiwi.compose(input, ["five"])).toEqual(result);
	});

	it('should return replace % with text when % is last', function() {
		var input = "There are five %";
		var result = "There are five apples";
		expect(Kiwi.compose(input, ["apples"])).toEqual(result);
	});

	it('should return replace % when input is %', function() {
		var input = "%";
		var result = "There are five apples";
		expect(Kiwi.compose(input, [result])).toEqual(result);
	});

	it('should return replace 2 %s when input has 2 %s', function() {
		var input = "There are % %";
		var result = "There are five apples";
		expect(Kiwi.compose(input, ["five", "apples"])).toEqual(result);
	});

	it('should return replace 2 %s when input has 2 %s', function() {
		var input = "% are % apples";
		var result = "There are five apples";
		expect(Kiwi.compose(input, ["There", "five"])).toEqual(result);
	});

	it('should return escaped %', function() {
		var input = "The % is 2.3`%";
		var result = "The rate is 2.3%";
		expect(Kiwi.compose(input, ["rate"])).toEqual(result);
	});

	it('should use an empty string when size of the array less fits the placeholders.', function() {
		var input = "The quick brown % jumps % the lazy %.";
		var result = "The quick brown fox jumps over the lazy .";
		expect(Kiwi.compose(input, ["fox", "over"])).toEqual(result);
	});
});

describe('Kiwi.compose - %{}', function() {
	it('should replace the variable defined in %{}',function() {
		var input = "The quick brown %{f} jumps over the lazy %{d}.";
		var dic = {"f": "fox", "d": "dog"};
		var output = "The quick brown fox jumps over the lazy dog.";
		expect(Kiwi.compose(input, dic)).toEqual(output);
	});

	it('should throw a syntax error.',function() {
		var input = "The quick brown %{f jumps over the lazy dog.";
		var dic = {"f": "fox", "d": "dog"};
		expect(function(){Kiwi.compose(input, dic)}).toThrow(Error("Syntax error."));
	});

	it('should ignore when the variable is not available',function() {
		var input = "The quick brown %{f} jumps over the lazy dog.";
		var dic = {"d": "dog"};
		var output = "The quick brown  jumps over the lazy dog.";
		expect(Kiwi.compose(input, dic)).toEqual(output);
	});
});