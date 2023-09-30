import scene_menu from './scenes/menu.js';
import gameplay from './scenes/gameplay.js';
import {WIDTH_CANVAS, HEIGHT_CANVAS} from './globals.js';



document.addEventListener('DOMContentLoaded', function()
{
	const dom_container = document.getElementById('container');

	const game = new Phaser.Game({
		pixelArt: true,
		type: Phaser.AUTO,
		width: 800,   // New width in pixels
		height: 600,  // New height in pixels
		title: 'LD54',
		parent: dom_container,
		width: WIDTH_CANVAS/2,
		height: HEIGHT_CANVAS/2,
		resolution: 5,
		scene: [gameplay],
		fps: {
			target: 60,
			forceSetTimeOut: true // Force the game to use setTimeout for frame rendering
		},
		//0x073275
		backgroundColor: 0x202838,
		input: {
			gamepad: true
		},
	});

	function resize()
	{
		let w = window.innerWidth;
		let h = window.innerHeight;

		const r = HEIGHT_CANVAS/WIDTH_CANVAS;

		if(w*r > window.innerHeight)
			w = Math.min(w, Math.ceil(h/r), WIDTH_CANVAS);
		h = Math.floor(w*r);

		dom_container.style.width = game.canvas.style.width = `${w}px`;
		dom_container.style.height = game.canvas.style.height = `${h}px`;
		dom_container.style.top = `${Math.floor((window.innerHeight - h)/2)}px`;
		dom_container.style.left = `${Math.floor((window.innerWidth - w)/2)}px`;
	}

	window.addEventListener('resize', resize);
	resize();
});