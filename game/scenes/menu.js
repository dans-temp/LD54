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
		this.load.audio("title_theme", "assets/music/title_theme.mp3");
	},
	create: function()
	{
		// TODO
		this.music = this.sound.add("title_theme", {volume: 0.7});
		this.music.loop = true;
		this.music.play()
		const start_game_text = this.add.text(WIDTH_CANVAS/4, HEIGHT_CANVAS/4, "PLAY GAME", {fontFamily: FONT_DEFAULT, color: "white", fontSize: "48px"}).setOrigin(0.5).setDepth(2);

		this.cursors = this.input.keyboard.addKeys("ENTER,SPACE");
	},
	update()
	{
		if(this.cursors.ENTER.isDown || this.cursors.SPACE.isDown)
		{
			this.music.stop();
			this.scene.start("gameplay");
		}
	}
});