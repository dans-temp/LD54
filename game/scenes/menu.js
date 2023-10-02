import {WIDTH_CANVAS, PADDING_CANVAS, HEIGHT_CANVAS, FONT_DEFAULT, FONT_TITLE} from "../globals.js";

const guy = {};
export default new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function()
	{
		Phaser.Scene.call(this, {key: 'menu'});
	},
	preload: function()
	{
		this.load.audio("theme", "assets/music/theme.wav");
		this.load.spritesheet("idle_title",
		"assets/sprites/idle.png",
		{frameWidth: 42, frameHeight: 64}
	);
		
	},
	create: function()
	{

		this.anims.create({
            key: "idle_title",
            frames: this.anims.generateFrameNumbers("idle_title", {start: 0, end: 12}),
            frameRate: 10,
            repeat: -1
        });

		guy.sprite = this.add.sprite(WIDTH_CANVAS/2, HEIGHT_CANVAS/2, "idle_title").setDisplaySize(420, 640).setDepth(2);
		guy.sprite.play("idle_title", true);

		this.music = this.sound.add("theme", {volume: 0.5});
		this.music.loop = true;
		this.music.play()
		



		const start_game_text = this.add.text(WIDTH_CANVAS/2, HEIGHT_CANVAS/2 - 300, "SPACE LOOPS", {fontFamily: FONT_DEFAULT, color: "white", fontSize: "128px"}).setOrigin(0.5).setDepth(2);
		const start = this.add.text(WIDTH_CANVAS/2, HEIGHT_CANVAS/2 + 400, "HIT SPACE TO START", {fontFamily: FONT_DEFAULT, color: "white", fontSize: "64px"}).setOrigin(0.5).setDepth(2);


		this.cursors = this.input.keyboard.addKeys("ENTER,SPACE");
	},
	update()
	{
		if(this.cursors.ENTER.isDown || this.cursors.SPACE.isDown)
		{
			// this.music.stop();
			this.scene.start("gameplay");
		}
	}
});