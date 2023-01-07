import {WIDTH_CANVAS, PADDING_CANVAS, HEIGHT_CANVAS, FONT_DEFAULT, FONT_TITLE} from "../globals.js";

export default new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function()
	{
		Phaser.Scene.call(this, {key: 'menu'});
	},
	preload: function()
	{
		// TODO
	},
	create: function()
	{
		// TODO
		const start_game_text = this.add.text(WIDTH_CANVAS/2, HEIGHT_CANVAS/2, "PLAY GAME", {fontFamily: FONT_DEFAULT, color: "white", fontSize: "48px"}).setOrigin(0.5).setDepth(2);

		this.cursors = this.input.keyboard.addKeys("ENTER,SPACE");
	},
	update()
	{
		if(this.cursors.ENTER.isDown || this.cursors.SPACE.isDown)
		{
			this.scene.start("gameplay");
		}
	}
});