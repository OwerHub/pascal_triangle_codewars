function loadpage() {

let flat = 6
let n= flat; 		// Ezt csak azért, hogy n-el lehessen dolgozni, mint a példában.
let triangle = [];

for (let row = 0; row < n; row++) {
	if ( row === 0) {
		triangle.push([1]); 							// ha a sor 1 : row = [1], add hozzá. 
	} else if (row === 1) {
		triangle.push([1,1])						// ha a sor 2 : row = [1,1], add hozzá
	} else if (row === 2) {
		triangle.push([1,2,1])					// ha a sor 3 : row = [1,2,1, add hozzá]
	} else {
			//console.log("Lekértem: " + triangle[row-1]);
			let temp = [];
			let temp2 = 0;
			for (let i = 0; i < triangle[row-1].length+1; i++) {			//// kérd le a row - 1 (tehát egyel hátrébb) -1 (mert 0 indulunk) i sort
				if (i===0) {
					temp.push(1)
				} else if (i === triangle[row-1].length){
					temp.push(1)
				} else {
					temp2 =(triangle[row-1][i-1]) + (triangle[row-1][i]);
					temp.push(temp2)
				}
			}
			//console.log("temp" +temp)
			triangle.push(temp)
	}
} //forEnd

			let solution = triangle.flat();
			console.log(solution)

			} // end


window.addEventListener ("load" , loadpage)

//vázlat
			// ha a sor 4+  sor _=row
	
	//adj hozzá a hosszához egyet, mert hosszabbat akarsz legyen ez újhossz
	// iteráld végig az újhosszt
		// ha első, legyen 1
		// ha utolsó, akkor is legyen 1
		// ha egyik sem
			// 2 érték legyen = az fenti 1. és 2 értékének összegével 
				// tehát n = a fenti n-1 és n összegével

			//console.log(triangle)