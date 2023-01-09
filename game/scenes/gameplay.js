import {WIDTH_CANVAS, PADDING_CANVAS, HEIGHT_CANVAS, FONT_DEFAULT, FONT_TITLE} from "../globals.js";

const LEVELS = 
[
	{
		level: 1,
		width: 100,
		height: 20,
		medals: [20,30,40],
		tiles: 
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		],
		crops:
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 0, 2, 0, 0, 3, 0, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
	},
	{
		level: 2,
		width: 100,
		height: 20,
		tiles: 
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		],
		crops:
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
	},
]

const CROP_ABILITIES = ["doublejump","dash", "rose", "walljump","slam"];
const CROP_NAMES = ["raspberry", "rice", "rose", "wallnut", "potato"]
const TILE_MAP = ["rock", "grass","spike_up","spike_right","spike_left","spike_down"];
const tile_images = [];
const crop_sprites = [];
const swoosh_sprites = [];
let regeneration_list = [];
let backup_crops = [];

// PHYSICS
const RUN_ACCEL = 0.1;
const RUN_DECEL = 0.05;
const MAX_SPEED = 2;
const JUMPSPEED = 3.4;
const DASHSPEED = 15;
const DASH_DECEL = 2;
const GRAVITY = 0.15;
const PLANT_REGEN = 3000

// TILES
const TILE_SIZE = 16;
const EPSILON = 0.00000000001;

const dude = {
    xvel: 0,
    yvel: 0,
    width: 10,
    height: 14,
    hp_max: 5,
    hp_current: 5,
	falling: true,
	facing_right: true,
	attack_range: 2,
	attack_cooldown: 250,
	ability_cooldown: 300,
	ability: "none",
	ability2: "none",
    level: 0
};

let next_attack = dude.attack_cooldown;
let next_abiility = dude.ability_cooldown;
let reload_crops = false;
let level_complete = false;
let hol_up_a_min = false;
let slamming = false;
let timer;
let game_start_time;
let ability_image;
let ability_image2;
let swap_cooldown = 200;
let next_swap = 500;

export default new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function()
	{
		Phaser.Scene.call(this, {key: 'gameplay'});
	},
	preload: function()
	{
		// TODO
		this.load.spritesheet("dude",
			"assets/sprites/dude3.png",
			{frameWidth: 20, frameHeight: 16}
		);
		this.load.spritesheet('idle',
			'assets/sprites/idle.png',
			{frameWidth: 20, frameHeight: 16}
		);
		this.load.spritesheet('run',
			'assets/sprites/run.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('attack',
			'assets/sprites/attack.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('jump',
			'assets/sprites/jump.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('falling',
			'assets/sprites/falling.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('slam',
			'assets/sprites/slam.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('swoosh',
			'assets/sprites/swoosh.png',
			{frameWidth: 16, frameHeight: 16}
		);

		this.load.spritesheet('raspberry',
			'assets/sprites/raspberry.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('bw_raspberry',
			'assets/sprites/bw_raspberry.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('rice',
			'assets/sprites/rice.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('bw_rice',
			'assets/sprites/bw_rice.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('wallnut',
			'assets/sprites/wallnut.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('bw_wallnut',
			'assets/sprites/bw_wallnut.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('potato',
			'assets/sprites/potato.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('bw_potato',
			'assets/sprites/bw_potato.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('rose',
			'assets/sprites/rose.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.spritesheet('mound',
			'assets/sprites/mound.png',
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.image("rock", "assets/sprites/rock.png");
		this.load.image("grass", "assets/sprites/grass.png");
		this.load.image("spike_up", "assets/sprites/spike_up.png");
		this.load.image('leaf', 'assets/sprites/leaf.png');
		this.load.image('dirt', 'assets/sprites/dirt.png');
		this.load.image('blood', 'assets/sprites/blood.png');
		this.load.image('background', 'assets/background.png');

		//audio
		this.load.audio("game_theme", "assets/music/game_theme2.mp3");

		this.load.audio("attack", "assets/soundfx/attack.mp3");
		this.load.audio("wall_hit", "assets/soundfx/wall_hit.wav");
		this.load.audio("plant_hit", "assets/soundfx/plant_hit.mp3");
		this.load.audio("game_over", "assets/soundfx/game_over.mp3");
		this.load.audio("level_complete", "assets/soundfx/level_complete.mp3");
		this.load.audio("dash", "assets/soundfx/dash.mp3");
		this.load.audio("slam", "assets/soundfx/land.mp3");


	},
	create: function()
	{
		//animations
		this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("idle", {start: 0, end: 12}),
            frameRate: 10,
            repeat: -1
        });

		this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("run", {start: 0, end: 4}),
            frameRate: 10,
            repeat: -1
        });

		this.anims.create({
            key: "attack",
            frames: this.anims.generateFrameNumbers("attack", {start: 0, end: 3}),
            frameRate: 20
        });

		this.anims.create({
            key: "jump",
            frames: this.anims.generateFrameNumbers("jump", {start: 0, end: 2}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "falling",
            frames: this.anims.generateFrameNumbers("falling", {start: 0, end: 2}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "slam",
            frames: this.anims.generateFrameNumbers("slam", {start: 0, end: 5}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "swoosh",
            frames: this.anims.generateFrameNumbers("swoosh", {start: 0, end: 5}),
            frameRate: 70,
        });

		this.anims.create({
            key: "raspberry",
            frames: this.anims.generateFrameNumbers("raspberry", {start: 0, end: 6}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "bw_raspberry",
            frames: this.anims.generateFrameNumbers("bw_raspberry", {start: 0, end: 6}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "rice",
            frames: this.anims.generateFrameNumbers("rice", {start: 0, end: 4}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "bw_rice",
            frames: this.anims.generateFrameNumbers("bw_rice", {start: 0, end: 3}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "wallnut",
            frames: this.anims.generateFrameNumbers("wallnut", {start: 0, end: 2}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "bw_wallnut",
            frames: this.anims.generateFrameNumbers("bw_wallnut", {start: 0, end: 2}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "potato",
            frames: this.anims.generateFrameNumbers("potato", {start: 0, end: 2}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "bw_potato",
            frames: this.anims.generateFrameNumbers("bw_potato", {start: 0, end: 2}),
            frameRate: 8,
			repeat: -1
        });

		this.anims.create({
            key: "rose",
            frames: this.anims.generateFrameNumbers("rose", {start: 0, end: 3}),
            frameRate: 3,
			repeat: -1
        });

		this.anims.create({
            key: "mound",
            frames: this.anims.generateFrameNumbers("mound", {start: 0, end: 0}),
            frameRate: 8,
			repeat: -1
        });

		this.leaf_particles = this.add.particles("leaf");
		this.emitter_leaf = this.leaf_particles.createEmitter({
			speed: {min: 20, max: 50},
			angle: {min: 180, max: 360},
			alpha: {start: 1, end: 0},
			scale: 0.5,
			blendMode: "NORMAL",
			on: false,
			lifespan: 1000,
			gravityY: 30
		});

		this.dirt_particles = this.add.particles("dirt");
		this.emitter_dirt = this.dirt_particles.createEmitter({
			speed: {min: 5, max: 25},
			angle: {min: 160, max: 340},
			alpha: {start: 1, end: 0},
			scale:0.5,
			blendMode: "NORMAL",
			on: false,
			lifespan: 1000,
			gravityY: 20
		});
		this.blood_particles = this.add.particles("blood");
		this.emitter_blood = this.blood_particles.createEmitter({
			speed: {min: 20, max: 80},
			angle: {min: 200, max: 300},
			alpha: {start: 1, end: 0},
			scale: 2,
			blendMode: "NORMAL",
			on: false,
			lifespan: 1000,
			gravityY: 200
		});

		this.slam_particles = this.add.particles("dirt");
		this.emitter_slam = this.slam_particles.createEmitter({
			speed: {min: 5, max: 140},
			angle: {min: 160, max: 340},
			alpha: {start: 1, end: 0},
			scale:0.5,
			blendMode: "NORMAL",
			on: false,
			lifespan: 500,
			gravityY: 20
		});

		this.music = this.sound.add("game_theme", {volume: 0.4});
		this.music.loop = true;
		this.music.play()

		//generate level
		generateLevel(this);
		//crops
		loadCrops(this);

		game_start_time = this.time.now;
		timer = this.time.now -game_start_time;

		this.add.image(400, 300, 'background').setScrollFactor(0).setDepth(-2).setScale(2.1);
		this.cursors = this.input.keyboard.addKeys("UP,LEFT,DOWN,RIGHT,Q,W,A,S,D,E,ESC,SPACE");
		this.ui = {
			top_hud_bg: this.add.graphics().fillStyle(0x000000, 0.7).fillRect(0, 0, WIDTH_CANVAS, 20).setPosition(0, 200),
            text_timer: this.add.text(300, 206, 1000 + "TIME: "+Math.floor(timer/1000), {fontSize: "10px", fill: "white"}),
            text_level: this.add.text(450, 206, "LEVEL: " + (dude.level + 1), {fontSize: "10px", fill: "white"}),
			gold_outline: this.add.graphics().fillStyle(0x705711, 1).fillRect(375, 0, 20, 20).setPosition(0, 200),
			current_power: this.add.graphics().fillStyle(0x000000, 1).fillRect(375, 0, 18, 18).setPosition(1, 201),
			second_power: this.add.graphics().fillStyle(0x000000, 1).fillRect(400, 0, 20, 20).setPosition(0, 200),
			
        };

		for(const key_object in this.ui)
			this.ui[key_object].setScrollFactor(0).setDepth(4);

		dude.sprite = this.add.sprite(50, 50, 'dude').setDisplaySize(20, 16).setOrigin(0.5, 1).setDepth(4);
		this.cameras.main.startFollow(dude.sprite);
		this.cameras.main.setBounds(0, 0, LEVELS[dude.level].width*TILE_SIZE, LEVELS[dude.level].height*TILE_SIZE - 2*TILE_SIZE);
		this.cameras.main.setZoom(3);
		dude.sprite.play("idle");

		backup_crops = LEVELS[dude.level].crops.slice();
		console.log(backup_crops);
	},
	update()
	{
		if(hol_up_a_min == true)
		{
			return;
		}

		if(level_complete == true)
		{
			hol_up_a_min = true;
			nextLevel(this);
			return;
		}
			
		timer = this.time.now - game_start_time;
		this.ui.text_timer.setText("TIME: "+ Math.floor(timer/1000));

		if(reload_crops)
		{
			loadCrops(this);
			reload_crops = false;
		}

		const left = this.cursors.A.isDown || this.cursors.LEFT.isDown;
		const right = this.cursors.D.isDown || this.cursors.RIGHT.isDown;
		const jump = this.cursors.W.isDown || this.cursors.UP.isDown;
		const down = this.cursors.S.isDown || this.cursors.DOWN.isDown;
		const use_ability = this.cursors.E.isDown;
		const attack = this.cursors.SPACE.isDown;
		const restart = this.cursors.ESC.isDown;
		const swap = this.cursors.Q.isDown;

		if(restart && this.time.now > next_swap)
		{
			slamming = false
			next_swap = this.time.now + swap_cooldown;
			game_start_time = this.time.now;
			regeneration_list = [];
			LEVELS[dude.level].crops = backup_crops.slice() ;
			for(let j = 0; j < crop_sprites.length; j++)
			{
				crop_sprites[j].sprite.destroy();
			}
			reload_crops = true;
			ability_image?.destroy();
			ability_image2?.destroy();
			dude.ability = "none";
			dude.ability2 = "none";
			dude.sprite.x = 100;
			dude.sprite.y = 200;
			
		}

		if(swap && this.time.now > next_swap)
		{
			swapAbilities(this);
			next_swap = this.time.now + swap_cooldown;
		}

		if( (!left && !right) || (left && right))
		{
			if (dude.sprite.anims.currentAnim.key !== "idle" && !dude.falling && this.time.now > next_attack)
				dude.sprite.play("idle");
			if(dude.xvel > 0)
				dude.xvel = Math.max(0, dude.xvel - RUN_DECEL);
			else
				dude.xvel = Math.min(0, dude.xvel + RUN_DECEL);
		}

		if (left && !right)
		{
			if(dude.xvel > 0 && !dude.falling)
				this.emitter_dirt.emitParticle(1, dude.sprite.x, dude.sprite.y);
			if(!dude.falling && this.time.now > next_attack)
				dude.sprite.anims.play("run", true);
			if(Math.max(-MAX_SPEED, dude.xvel - RUN_ACCEL) < dude.xvel)
				dude.xvel = Math.max(-MAX_SPEED, dude.xvel - RUN_ACCEL);
			dude.facing_right = false;
			dude.sprite.flipX = true;
		}
		else if(right && !left)
		{
			if(dude.xvel < 0 && !dude.falling)
				this.emitter_dirt.emitParticle(1, dude.sprite.x, dude.sprite.y);
			if(!dude.falling && this.time.now > next_attack)
				dude.sprite.anims.play("run", true);
			if(Math.min(MAX_SPEED, dude.xvel + RUN_ACCEL) > dude.xvel)
				dude.xvel = Math.min(MAX_SPEED, dude.xvel + RUN_ACCEL);
			dude.facing_right = true;
			dude.sprite.flipX = false;
		}

		//dash decel
		if(Math.abs(dude.xvel) > MAX_SPEED)
		{
			if(!dude.falling)
				this.emitter_dirt.explode(80, dude.sprite.x, dude.sprite.y);
			if(dude.xvel > 0)
				dude.xvel -= DASH_DECEL;
			else
				dude.xvel += DASH_DECEL;
		}
		
		dude.x_old = dude.sprite.x;
		dude.y_old = dude.sprite.y;

		if(dude.falling && dude.xvel <= MAX_SPEED)
			dude.yvel += GRAVITY;


		if(jump && !dude.falling)
		{
			dude.yvel = -JUMPSPEED;
			dude.falling = true;
			this.emitter_dirt.explode(20, dude.sprite.x, dude.sprite.y);
		}

		if(attack && this.time.now > next_attack)
		{
			attacks(this);
			next_attack = this.time.now + dude.attack_cooldown;
		}

		if(use_ability && dude.ability != "none" && this.time.now > next_abiility)
		{
			ability(this);
			next_abiility = this.time.now + dude.ability_cooldown;
		}

		dude.sprite.x += dude.xvel;
		dude.sprite.y += dude.yvel;

		if(dude.sprite.y < dude.height)
		{
			dude.sprite.y = dude.height;
			dude.yvel = 0;
		}

		if(dude.sprite.x < dude.width/2)
		{
			dude.sprite.x = dude.width/2;
			dude.xvel = 0;
		}
		else if(dude.sprite.x > LEVELS[dude.level].width*TILE_SIZE - dude.width/2)
		{
			dude.sprite.x = LEVELS[dude.level].width*TILE_SIZE - dude.width/2 - EPSILON;
			dude.xvel = 0;
		}

		//dash attack
		if(Math.abs(dude.xvel) > MAX_SPEED)
		{
			let max_range_x, min_range_x
			if(dude.x_old < dude.sprite.x)
			{
				min_range_x = Math.floor(dude.x_old/ TILE_SIZE);
				max_range_x = Math.floor(dude.sprite.x/ TILE_SIZE);
			}
			else
			{
				min_range_x = Math.floor(dude.sprite.x/ TILE_SIZE);
				max_range_x = Math.floor(dude.x_old/ TILE_SIZE);
			}
			for(let i = 0; i < max_range_x - min_range_x; i++)
			{
				const crop_index = LEVELS[dude.level].crops[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i]
				if(crop_index)
				{
					if(crop_index < 0)
					{
						crop_index = Math.abs(crop_index);
						if(dude.ability == CROP_ABILITIES[crop_index-1] || dude.ability2 == CROP_ABILITIES[crop_index-1])
						{
							game.sound.play("plant_hit", {volume: 0.4});
							game.emitter_leaf.explode(30, (min_range_x + i)*TILE_SIZE + dude.width/2, Math.floor((dude.sprite.y-(dude.height/2))));
							return;
						}
					}
					if(dude.ability == "none" && CROP_NAMES[crop_index - 1] != "rose")
					{
						dude.ability = CROP_ABILITIES[crop_index - 1];
						ability_image = this.add.image(385, 210, CROP_NAMES[[crop_index - 1]]).setScale(1).setScrollFactor(0).setDepth(5);
					}
					else if (CROP_NAMES[crop_index - 1] != "rose")
					{
						if(dude.ability2 != "none")
							ability_image2.destroy();
						dude.ability2 = CROP_ABILITIES[crop_index - 1]
						ability_image2 =(this.add.image(410, 210, CROP_NAMES[[crop_index - 1]]).setScale(1).setScrollFactor(0).setDepth(5));
					}

					const index_row = Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)
					const index_col = min_range_x + i;
					regeneration_list.push({
						regeneration_time: this.time.now + PLANT_REGEN,
						index_row: index_row,
						index_col: index_col,
						value: LEVELS[dude.level].crops[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i]
					});
					//rose killed
					if(CROP_NAMES[(LEVELS[dude.level].crops[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i])-1] == 'rose')
					{
						level_complete = true;
					}
					LEVELS[dude.level].crops[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i] = 0;
					for(let j = 0; j < crop_sprites.length; j++)
					{
						if(crop_sprites[j].index == Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE) + '-' + (min_range_x + i))
						{
							crop_sprites[j].sprite.destroy();
							crop_sprites.push({
								sprite: this.add.sprite( index_col* TILE_SIZE, index_row* TILE_SIZE).setScale(1).setOrigin(0,0),
								index: ((min_range_x + i)*TILE_SIZE)+'-'+Math.floor((dude.sprite.y-(dude.height/2)))*TILE_SIZE
							});
							crop_sprites[crop_sprites.length-1].sprite.play("mound");
						}
					}
					this.emitter_leaf.explode(30, (min_range_x + i)*TILE_SIZE + dude.width/2, Math.floor((dude.sprite.y-(dude.height/2))));
				}
			}
		}

		for(let i = 0; i < regeneration_list.length; i++)
		{
			const index_row = regeneration_list[i].index_row;
			const index_col = regeneration_list[i].index_col;
			if(this.time.now > regeneration_list[i].regeneration_time)
			{
				LEVELS[dude.level].crops[index_row][index_col] = -Math.abs(regeneration_list[i].value);
				crop_sprites.push({
					sprite: this.add.sprite(index_col*TILE_SIZE, index_row*TILE_SIZE).setScale(1).setOrigin(0,0),
					index: index_row+'-'+index_col
				});
				const crop_name = CROP_NAMES[Math.abs(LEVELS[dude.level].crops[index_row][index_col])- 1];
				crop_sprites[crop_sprites.length-1].sprite.play("bw_"+crop_name);

				regeneration_list.splice(i,1);
			}
		}

		handleCollision(this);

		if(dude.falling && slamming)
		{
			dude.yvel = 7;
		}
		if(slamming && !dude.falling)
		{
			this.emitter_slam.emitParticle(50, dude.sprite.x, dude.sprite.y);
			this.sound.play("slam", {volume: 0.5});
			dude.yvel = -4;
			slamming = false;
		}
			
		// player coordinates
		const index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
		const index_col = Math.floor(dude.sprite.x/TILE_SIZE);
		const index_col_left = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
		const index_col_right = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);

		if(index_row + 1 >= LEVELS[dude.level].height)
		{	
			hol_up_a_min = true;
			gameOver(this);
			//game over
			//player hit bottom
		}
		else if(!LEVELS[dude.level].tiles[index_row + 1][index_col_left] && !LEVELS[dude.level].tiles[index_row + 1][index_col_right])
		{
			dude.falling = true;
		}
		else if(TILE_MAP[LEVELS[dude.level].tiles[index_row+1][index_col_left]-1]?.includes("spike") || TILE_MAP[LEVELS[dude.level].tiles[index_row+1][index_col_right]-1]?.includes("spike") )
		{
			death(this);
		}
		if(dude.falling)
		{
			if(dude.yvel > 0 && dude.sprite.anims.currentAnim.key != "falling" && dude.sprite.anims.currentAnim.key != "attack" && dude.sprite.anims.currentAnim.key != "slam")
			{
				dude.sprite.play("falling");
			}
			else if (dude.sprite.anims.currentAnim.key != "jump" && dude.sprite.anims.currentAnim.key != "falling" && dude.sprite.anims.currentAnim.key != "attack")
				dude.sprite.play("jump");
		}
	}
});

function attacks(game)
{
	if(dude.sprite.y > ((LEVELS[dude.level].height)*TILE_SIZE))
		return;
	//x range
	let min_range_x;
	let max_range_x;
	if(dude.facing_right)
	{
		min_range_x = Math.floor((dude.sprite.x)/TILE_SIZE);
		max_range_x = Math.floor((dude.sprite.x)/TILE_SIZE) + dude.attack_range;
		swoosh_sprites.push(game.add.sprite(dude.sprite.x + dude.width, dude.sprite.y - dude.height).setScale(1).setOrigin(0,0));
	}
	else
	{
		min_range_x = Math.floor((dude.sprite.x)/TILE_SIZE) - dude.attack_range;
		max_range_x = Math.floor((dude.sprite.x + dude.width)/TILE_SIZE);
		swoosh_sprites.push(game.add.sprite(dude.sprite.x - 25, dude.sprite.y - dude.height).setScale(1).setOrigin(0,0));
		swoosh_sprites[swoosh_sprites.length-1].flipX = true;
	}

	swoosh_sprites[swoosh_sprites.length-1].play("swoosh");
	for(let k = 0; k < swoosh_sprites.length; k++)
	{
		if(!swoosh_sprites[k].anims.isPlaying)
		{
			swoosh_sprites[k].destroy();
			swoosh_sprites.splice(k,1);
		}
	}
	//check for hit
	for(let i = 0; i < max_range_x - min_range_x; i ++)
	{
		// wall hit
		if(LEVELS[dude.level].tiles[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i])
		{
			game.sound.play("wall_hit", {volume: 1});
			if(dude.facing_right)
				dude.xvel -= MAX_SPEED;
				
			else
				dude.xvel += MAX_SPEED;
		}
		let crop_index = LEVELS[dude.level].crops[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i];
		if(crop_index)
		{
			if(crop_index < 0)
			{
				crop_index = Math.abs(crop_index);
				if(dude.ability == CROP_ABILITIES[crop_index-1] || dude.ability2 == CROP_ABILITIES[crop_index-1])
				{
					game.sound.play("plant_hit", {volume: 0.4});
					game.emitter_leaf.explode(30, (min_range_x + i)*TILE_SIZE + dude.width/2, Math.floor((dude.sprite.y-(dude.height/2))));
					return;
				}
			}
			if(dude.ability == "none" && CROP_NAMES[crop_index - 1] != "rose")
			{
				dude.ability = CROP_ABILITIES[crop_index - 1];
				ability_image = game.add.image(385, 210, CROP_NAMES[[crop_index - 1]]).setScale(1).setScrollFactor(0).setDepth(5);
			}
			else if (CROP_NAMES[crop_index - 1] != "rose")
			{
				if(dude.ability2 != "none")
					ability_image2.destroy();
				dude.ability2 = CROP_ABILITIES[crop_index - 1]
				ability_image2 =(game.add.image(410, 210, CROP_NAMES[[crop_index - 1]]).setScale(1).setScrollFactor(0).setDepth(5));
			}
				
			const index_col = min_range_x + i;
			const index_row = Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE);
			regeneration_list.push({
				regeneration_time: game.time.now + PLANT_REGEN,
				index_row: index_row,
				index_col: index_col,
				value: LEVELS[dude.level].crops[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i]
			});
			//rose killed
			if(CROP_NAMES[(LEVELS[dude.level].crops[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i])-1] == 'rose')
			{
				level_complete = true;
			}
			LEVELS[dude.level].crops[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][min_range_x + i] = 0;
			for(let j = 0; j < crop_sprites.length; j++)
			{
				if(crop_sprites[j].index == Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE) + '-' + (min_range_x + i))
				{
					crop_sprites[j].sprite.destroy();
					crop_sprites.push({
						sprite: game.add.sprite( index_col* TILE_SIZE, index_row* TILE_SIZE).setScale(1).setOrigin(0,0),
						index: ((min_range_x + i)*TILE_SIZE)+'-'+Math.floor((dude.sprite.y-(dude.height/2)))*TILE_SIZE
					});
					crop_sprites[crop_sprites.length-1].sprite.play("mound");
				}
			}
			game.sound.play("plant_hit", {volume: 0.4});
			game.emitter_leaf.explode(30, (min_range_x + i)*TILE_SIZE + dude.width/2, Math.floor((dude.sprite.y-(dude.height/2))));
		}
	}
	game.sound.play("attack", {volume: 1});
	dude.sprite.play("attack");
};

function ability(game)
{
	if(dude.sprite.y > ((LEVELS[dude.level].height)*TILE_SIZE))
		return;
		
	if(dude.ability == "doublejump")
	{
		dude.yvel = -JUMPSPEED;
		dude.falling = true;
		dude.sprite.play("jump");
	}
	else if(dude.ability == "dash")
	{
		game.sound.play("dash", {volume: 0.2});
		if(dude.facing_right)
		{
			dude.xvel += DASHSPEED;
		}
		else
		{
			dude.xvel -= DASHSPEED;
		}
	}

	
	if(dude.ability == "walljump")
	{
		// wall-left
		if(LEVELS[dude.level].tiles[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][Math.floor(dude.sprite.x/TILE_SIZE) - 1])
		{
			dude.xvel = 4;
			dude.yvel = -4;
		}
		//wall right
		else if(LEVELS[dude.level].tiles[Math.floor((dude.sprite.y-(dude.height/2))/TILE_SIZE)][Math.floor(dude.sprite.x/TILE_SIZE) + 1])
		{
			dude.xvel = -4;
			dude.yvel = -4;
		}
		else
			return;
	}

	if(dude.ability == "slam")
	{
		if(dude.falling)
		{
			slamming = true;
			dude.sprite.play("slam");
		}
		else
			return;
	}

	ability_image.destroy();
	if(dude.ability2 != "none")
	{
		dude.ability = "none";
		swapAbilities(game);
	}
	else
	{
		dude.ability = "none";
	}
}

function handleCollision(game)
{
	if(dude.sprite.y > ((LEVELS[dude.level].height)*TILE_SIZE))
		return;

	function collideTile(index_row, index_col)
	{

		if(TILE_MAP[LEVELS[dude.level].tiles[index_row][index_col]-1]?.includes("spike"))
		{
			death(game);
			return;
		}
		const y_top = index_row*TILE_SIZE;
		const y_bottom = y_top + TILE_SIZE;
		const x_left = index_col*TILE_SIZE;
		const x_right = x_left + TILE_SIZE;


		//down
		if(dude.sprite.y - EPSILON > y_top && dude.y_old - EPSILON <= y_top)
		{
			dude.sprite.y = y_top;
			dude.yvel = 0;
			dude.falling = false;
			game.emitter_dirt.explode(20, dude.sprite.x, dude.sprite.y);
			return;
		}

		//right
		if(dude.sprite.x + dude.width/2 - EPSILON > x_left && dude.x_old + dude.width/2 - EPSILON <= x_left)
		{
			dude.xvel = 0;
			dude.sprite.x = x_left - dude.width/2;
			return;
		}

		//left
		if(dude.sprite.x - dude.width/2 < x_right && dude.x_old - dude.width/2 >= x_right)
		{
			dude.xvel = 0;
			dude.sprite.x = x_right + dude.width/2;
			return;
		}

		//top
		if(dude.sprite.y - dude.height + EPSILON < y_bottom && dude.y_old - dude.height >= y_bottom)
		{
			dude.yvel = 0;
			dude.sprite.y = y_bottom + dude.height;
			return;
		}
	}

	let index_row, index_col;

	// top left
	index_row = Math.floor((dude.sprite.y - dude.height)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// top right
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom left
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom right
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// top left again
	index_row = Math.floor((dude.sprite.y - dude.height)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom left again
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// top right again
	index_row = Math.floor((dude.sprite.y - dude.height)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom right again
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);
}

function loadCrops(game)
{
	for(let i = 0; i < LEVELS[dude.level].crops.length; i++)
	{
		for(let j = 0; j < LEVELS[dude.level].crops[i].length; j++)
		{
			if(LEVELS[dude.level].crops[i][j] != 0)
			{
				crop_sprites.push({
					sprite: game.add.sprite(j*TILE_SIZE, i*TILE_SIZE).setScale(1).setOrigin(0,0),
					index: i+'-'+j
				});

				const crop_name = CROP_NAMES[Math.abs(LEVELS[dude.level].crops[i][j]) - 1];
				crop_sprites[crop_sprites.length-1].sprite.play(crop_name);
			}
		}
	}
}

function generateLevel(game)
{
	for(let i = 0; i < LEVELS[dude.level].tiles.length; i++)
	{
		for(let j = 0; j < LEVELS[dude.level].tiles[i].length; j++)
		{
			if(LEVELS[dude.level].tiles[i][j] != 0)
			{
				console.log(LEVELS[dude.level].tiles[i][j]-1)
				tile_images.push(game.add.image(j*TILE_SIZE, i*TILE_SIZE, TILE_MAP[(LEVELS[dude.level].tiles[i][j])-1]).setScale(1).setOrigin(0,0));
			}
		}
	}
}

function nextLevel(game)
{
	game.music.stop();
	game.sound.play("level_complete", {volume: 0.5});
	const level_done_text = game.add.text(400,300, "LEVEL COMPLETE", {fontFamily: FONT_TITLE, color: "white", fontSize: "24px"}).setOrigin(0.5).setScrollFactor(0).setDepth(4);

	// dude.sprite.x = dude.x_old;
	// dude.sprite.y = dude.y_old;
	setTimeout(function(){
		level_done_text.setText("");
		regeneration_list = [];
		for(let i = 0; i < tile_images.length; i++)
		{
			tile_images[i].destroy();
		}
		for(let j = 0; j < crop_sprites.length; j++)
		{
			crop_sprites[j].sprite.destroy();
		}
		ability_image?.destroy();
		ability_image2?.destroy();
		dude.ability = "none";
		dude.ability2 = "none";
		dude.level ++;
		generateLevel(game);
		loadCrops(game);
		dude.sprite.x = 100;
		dude.sprite.y = 200;
		backup_crops = LEVELS[dude.level].crops.slice();
		game.ui.text_level.setText("LEVEL: " + (dude.level + 1));
		game_start_time = game.time.now;
		level_complete = false;
		hol_up_a_min = false;
		game.music.loop = true;
		game.music.play();
	},2000);
}

function gameOver(game)
{
	game.sound.play("game_over", {volume: 0.5});
	dude.sprite.x = dude.x_old;
	slamming = false;
	let game_over_text = game.add.text(400,300, "DEATH", {fontFamily: FONT_TITLE, color: "white", fontSize: "24px"}).setOrigin(0.5).setScrollFactor(0).setDepth(4);
	// 
	setTimeout(function(){
		game_over_text.setText("");
		regeneration_list = [];
		LEVELS[dude.level].crops = backup_crops.slice();
		for(let j = 0; j < crop_sprites.length; j++)
		{
			crop_sprites[j].sprite.destroy();
		}
		ability_image?.destroy();
		ability_image2?.destroy();
		dude.ability = "none";
		dude.ability2 = "none";
		reload_crops = true;
		dude.sprite.x = 100;
		dude.sprite.y = 200;
		game_start_time = game.time.now;
		hol_up_a_min = false;
	},1000);
}

function swapAbilities(game)
{
	if(dude.ability2 == "none")
	{
		return;
	}
	let temp_ability = dude.ability;
	dude.ability = dude.ability2;
	dude.ability2 = temp_ability;

	ability_image.destroy();
	ability_image2.destroy();
	
	for(let i = 0; i < CROP_ABILITIES.length; i++)
	{
		if(CROP_ABILITIES[i] == dude.ability)
			ability_image = game.add.image(385, 210, CROP_NAMES[[i]]).setScale(1).setScrollFactor(0).setDepth(5);
		
		if(CROP_ABILITIES[i] == dude.ability2)
			ability_image2 = game.add.image(410, 210, CROP_NAMES[[i]]).setScale(1).setScrollFactor(0).setDepth(5);
			
	}
}


function death(game)
{
	hol_up_a_min = true;
	game.emitter_blood.explode(20, dude.sprite.x, dude.sprite.y);
	console.log('death');
	gameOver(game);
}