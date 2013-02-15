describe('Kiwi.compose', function() {
    it('should return the input string',function() {
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
});