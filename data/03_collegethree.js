/*
	College C3
*/

var C3 = (function(){

	var A_B_floor1 = [
		[18, 7, 8, 5, "CA1 A/B", undefined, "student"],
		[26, 7, 8, 5, "CA1 C/D", undefined, "student"],
		[34, 7, 8, 5, "CA1 E/F", undefined, "student"],
		[42, 7, 8, 5, "CA1 G/H", undefined, "student"],
		[48, 7, 2, 5, "CA1 Kitchen", ["CC1_k"], "kitchen"],

		[18, 14, 8, 5, "CA1 I/J", undefined, "student"],
		[26, 14, 8, 5, "CA1 K/L", undefined, "student"],
		[34, 14, 8, 5, "CA1 M/N", undefined, "student"],
		[42, 14, 8, 5, "CA1 O/P", undefined, "student"],
		[48, 14, 2, 5, "CA1 Stairs", ["CC1_s"], "stairs"],

		[18, 12, 34, 2, "CA1 Corridor", undefined, "cor"],

		[18, -19, 8, 5, "CB1 A/B", undefined, "student"],
		[26, -19, 8, 5, "CB1 C/D", undefined, "student"],
		[34, -19, 8, 5, "CB1 E/F", undefined, "student"],
		[42, -19, 8, 5, "CB1 G/H", undefined, "student"],
		[48, -19, 2, 5, "CB1 Kitchen", ["CD1_k"], "kitchen"],

		[18, -12, 8, 5, "CB1 I/J", undefined, "student"],
		[26, -12, 8, 5, "CB1 K/L", undefined, "student"],
		[34, -12, 8, 5, "CB1 M/N", undefined, "student"],
		[42, -12, 8, 5, "CB1 O/P", undefined, "student"],
		[48, -12, 2, 5, "CB1 Stairs", ["CD1_s"], "stairs"],

		[18, -14, 34, 2, "CB1 Corridor", undefined, "cor"]
	]; 

	var A_B_floor2 = [
		[18, 7, 8, 5, "CA2 A/B", undefined, "student"],
		[26, 7, 8, 5, "CA2 C/D", undefined, "student"],
		[34, 7, 8, 5, "CA2 E/F", undefined, "student"],
		[42, 7, 8, 5, "CA2 G/H", undefined, "student"],
		[48, 7, 2, 5, "CA2 Kitchen", undefined, "kitchen"],

		[18, 14, 8, 5, "CA2 I/J", undefined, "student"],
		[26, 14, 8, 5, "CA2 K/L", undefined, "student"],
		[34, 14, 8, 5, "CA2 M/N", undefined, "student"],
		[42, 14, 8, 5, "CA2 O/P", undefined, "student"],
		[48, 14, 2, 5, "CA2 Stairs", undefined, "stairs"],

		[18, 12, 34, 2, "CA2 Corridor", undefined, "cor"],

		[18, -19, 8, 5, "CB2 A/B", undefined, "student"],
		[26, -19, 8, 5, "CB2 C/D", undefined, "student"],
		[34, -19, 8, 5, "CB2 E/F", undefined, "student"],
		[42, -19, 8, 5, "CB2 G/H", undefined, "student"],
		[48, -19, 2, 5, "CB2 Kitchen", undefined, "kitchen"],

		[18, -12, 8, 5, "CB2 I/J", undefined, "student"],
		[26, -12, 8, 5, "CB2 K/L", undefined, "student"],
		[34, -12, 8, 5, "CB2 M/N", undefined, "student"],
		[42, -12, 8, 5, "CB2 O/P", undefined, "student"],
		[48, -12, 2, 5, "CB2 Stairs", undefined, "stairs"],

		[18, -14, 34, 2, "CB2 Corridor", undefined, "cor"]
	];

	var A_B_floor3 = [
		[18, 7, 8, 5, "CA3 A/B", undefined, "student"],
		[26, 7, 8, 5, "CA3 C/D", undefined, "student"],
		[34, 7, 8, 5, "CA3 E/F", undefined, "student"],
		[42, 7, 8, 5, "CA3 G/H", undefined, "student"],
		[48, 7, 2, 5, "CA3 Kitchen", undefined, "kitchen"],

		[18, 14, 8, 5, "CA3 I/J", undefined, "student"],
		[26, 14, 8, 5, "CA3 K/L", undefined, "student"],
		[34, 14, 8, 5, "CA3 M/N", undefined, "student"],
		[42, 14, 8, 5, "CA3 O/P", undefined, "student"],
		[48, 14, 2, 5, "CA3 Stairs", undefined, "stairs"],

		[18, 12, 34, 2, "CA3 Corridor", undefined, "cor"],

		[18, -19, 8, 5, "CB3 A/B", undefined, "student"],
		[26, -19, 8, 5, "CB3 C/D", undefined, "student"],
		[34, -19, 8, 5, "CB3 E/F", undefined, "student"],
		[42, -19, 8, 5, "CB3 G/H", undefined, "student"],
		[48, -19, 2, 5, "CB3 Kitchen", undefined, "kitchen"],

		[18, -12, 8, 5, "CB3 I/J", undefined, "student"],
		[26, -12, 8, 5, "CB3 K/L", undefined, "student"],
		[34, -12, 8, 5, "CB3 M/N", undefined, "student"],
		[42, -12, 8, 5, "CB3 O/P", undefined, "student"],
		[48, -12, 2, 5, "CB3 Stairs", undefined, "stairs"],

		[18, -14, 34, 2, "CB3 Corridor", undefined, "cor"]
	];

	var C_D_floor1 = [
		[18, 7, 8, 5, "CC 108/109", ["CC-108","CC-109"], "student"],
		[26, 7, 8, 5, "CC 112/113", ["CC-112","CC-113"], "student"],
		[34, 7, 8, 5, "CC 116/117", ["CC-116","CC-117"], "student"],
		[42, 7, 8, 5, "CC 120/121", ["CC-120","CC-121"], "student"],
		[48, 7, 2, 5, "CC1 Kitchen", ["CC1_k"], "kitchen"],

		[18, 14, 8, 5, "CC 136/137", ["CC-136","CC-137"], "student"],
		[26, 14, 8, 5, "CC 132/133", ["CC-132","CC-133"], "student"],
		[34, 14, 8, 5, "CC 128/129", ["CC-128","CC-129"], "student"],
		[42, 14, 8, 5, "CC 124/125", ["CC-124","CC-125"], "student"],
		[48, 14, 2, 5, "CC1 Stairs", ["CC1_s"], "stairs"],

		[18, 12, 34, 2, "CC1 Corridor", undefined, "cor"],

		[18, -19, 8, 5, "CD1 A/B", undefined, "student"],
		[26, -19, 8, 5, "CD1 C/D", undefined, "student"],
		[34, -19, 8, 5, "CD1 E/F", undefined, "student"],
		[42, -19, 8, 5, "CD1 G/H", undefined, "student"],
		[48, -19, 2, 5, "CD1 Kitchen", ["CD1_k"], "kitchen"],

		[18, -12, 8, 5, "CD1 I/J", undefined, "student"],
		[26, -12, 8, 5, "CD1 K/L", undefined, "student"],
		[34, -12, 8, 5, "CD1 M/N", undefined, "student"],
		[42, -12, 8, 5, "CD1 O/P", undefined, "student"],
		[48, -12, 2, 5, "CD1 Stairs", ["CD1_s"], "stairs"],

		[18, -14, 34, 2, "CD1 Corridor", undefined, "cor"]
	]; 

	var C_D_floor2 = [
		[18, 7, 8, 5, "CC 208/209", ["CC-208","CC-209"], "student"],
		[26, 7, 8, 5, "CC 212/213", ["CC-212","CC-213"], "student"],
		[34, 7, 8, 5, "CC 216/217", ["CC-216","CC-217"], "student"],
		[42, 7, 8, 5, "CC 220/221", ["CC-220","CC-221"], "student"],
		[48, 7, 2, 5, "CC2 Kitchen", ["CC2_k"], "kitchen"],

		[18, 14, 8, 5, "CC 236/237", ["CC-236","CC-237"], "student"],
		[26, 14, 8, 5, "CC 232/233", ["CC-232","CC-233"], "student"],
		[34, 14, 8, 5, "CC 228/229", ["CC-228","CC-229"], "student"],
		[42, 14, 8, 5, "CC 224/225", ["CC-224","CC-225"], "student"],
		[48, 14, 2, 5, "CC2 Stairs", ["CC2_s"], "stairs"],

		[18, 12, 34, 2, "CC2 Corridor", undefined, "cor"],

		[18, -19, 8, 5, "CD2 A/B", undefined, "student"],
		[26, -19, 8, 5, "CD2 C/D", undefined, "student"],
		[34, -19, 8, 5, "CD2 E/F", undefined, "student"],
		[42, -19, 8, 5, "CD2 G/H", undefined, "student"],
		[48, -19, 2, 5, "CD2 Kitchen", undefined, "kitchen"],

		[18, -12, 8, 5, "CD2 I/J", undefined, "student"],
		[26, -12, 8, 5, "CD2 K/L", undefined, "student"],
		[34, -12, 8, 5, "CD2 M/N", undefined, "student"],
		[42, -12, 8, 5, "CD2 O/P", undefined, "student"],
		[48, -12, 2, 5, "CD2 Stairs", undefined, "stairs"],

		[18, -14, 34, 2, "CD2 Corridor", undefined, "cor"]
	];

	var C_D_floor3 = [
		[18, 7, 8, 5, "CC 308/309", ["CC-308","CC-309"], "student"],
		[26, 7, 8, 5, "CC 312/313", ["CC-312","CC-313"], "student"],
		[34, 7, 8, 5, "CC 316/317", ["CC-316","CC-317"], "student"],
		[42, 7, 8, 5, "CC 320/321", ["CC-320","CC-321"], "student"],
		[48, 7, 2, 5, "CC3 Kitchen", ["CC3_k"], "kitchen"],

		[18, 14, 8, 5, "CC 336/137", ["CC-336","CC-337"], "student"],
		[26, 14, 8, 5, "CC 332/133", ["CC-332","CC-333"], "student"],
		[34, 14, 8, 5, "CC 328/129", ["CC-328","CC-329"], "student"],
		[42, 14, 8, 5, "CC 324/125", ["CC-324","CC-325"], "student"],
		[48, 14, 2, 5, "CC3 Stairs", ["CC3_s"], "stairs"],

		[18, 12, 34, 2, "CC3 Corridor", undefined, "cor"],

		[18, -19, 8, 5, "CD3 A/B", undefined, "student"],
		[26, -19, 8, 5, "CD3 C/D", undefined, "student"],
		[34, -19, 8, 5, "CD3 E/F", undefined, "student"],
		[42, -19, 8, 5, "CD3 G/H", undefined, "student"],
		[48, -19, 2, 5, "CD3 Kitchen", undefined, "kitchen"],

		[18, -12, 8, 5, "CD3 I/J", undefined, "student"],
		[26, -12, 8, 5, "CD3 K/L", undefined, "student"],
		[34, -12, 8, 5, "CD3 M/N", undefined, "student"],
		[42, -12, 8, 5, "CD3 O/P", undefined, "student"],
		[48, -12, 2, 5, "CD3 Stairs", undefined, "stairs"],

		[18, -14, 34, 2, "CD3 Corridor", undefined, "cor"]
	];

	return {
		"name": "College 3", 
		"machine_name": "c3", 
		"blocks": [
				{
					"name": "Block A+B", 
					"machine_name": "tstAB", 
					"floors": [
						{
							"rooms": A_B_floor1
						}, 
						{
							"rooms": A_B_floor2
						},
						{
							"rooms": A_B_floor3
						}
					]
				},
				{
					"name": "Block C+D", 
					"machine_name": "tstCD", 
					"floors": [
						{
							"rooms": C_D_floor1
						}, 
						{
							"rooms": C_D_floor2
						},
						{
							"rooms": C_D_floor3
						}
					]
				}
			]
	};
})(); 