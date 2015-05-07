module.exports = {
	letterGrader: function (x) {
		var score = Math.floor(parseInt(x))
		if (90 <= score &&  score <= 100) { 
			return "A";
		}
		else if (80 <= score && score <= 89) {
			return "B";
		}
		else if (70 <= score && score <= 79) {
			return "C";
		}
		else if (60 <= score && score <= 69) {
			return "D";
		}
		else if (50 <= score && score <= 59) {
		 	return "F";
		}
	},

	averageScore: function(x) {
		// for(a in x) {
  // for(var i = 0; i < x.length - i; i++) {
  //   if ((x[i] > x[i+1]) === true) {
  //     var temp = x[i];
  //     x[i] = x[i+1];
  //     x[i+1] = temp;
  //   }
  // }
  // }
		sum = 0;
		for (var i = 0; i < x.length; i++) {
			sum += x[i];
		}
		return (sum/x.length);
	},

	medianScore: function(x) { 
		 if ((x.length % 2) === 0) {
			return ((x[(Math.floor(x.length/2) - 1)] + x[Math.floor(x.length/2)])/2);
		}
		else{
			return x[Math.floor(x.length/2)];
		}
	}
};

