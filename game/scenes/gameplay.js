import {WIDTH_CANVAS, PADDING_CANVAS, HEIGHT_CANVAS, FONT_DEFAULT, FONT_TITLE} from "../globals.js";

const LEVELS = 
[
	{
		level: 1,
		width: 30,
		tiles: 
		[
			2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		]
	}
]


// PHYSICS
const RUN_ACCEL = 0.3;
const RUN_DECEL = 0.2;
const MAX_SPEED = 6;

// TILES
const TILE_SIZE = 8;
const EPSILON = 0.00000000001;

const dude = {
    xvel: 0,
    yvel: 0,
    width: 64,
    height: 64,
    hp_max: 5,
    hp_current: 5,
    level: 1
};

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
			{frameWidth: 16, frameHeight: 16}
		);

		this.load.atlas("tiles", "assets/dungeon_tiles.png", "assets/dungeon_tiles.json");
	},
	create: function()
	{
		//generate level
		let tile_offset_x = 0;
		let tile_offset_y = 0
		for(let i = 0; i < LEVELS[0].tiles.length; i++)
		{
			if(LEVELS[0].tiles[i] != 0)
			{
				this.add.image(tile_offset_x*TILE_SIZE, tile_offset_y*TILE_SIZE, "tiles", "floor-1").setScale(4).setOrigin(0);
			}

			if ((i+1) % LEVELS[0].width == 0)
			{
				tile_offset_x = 0;
				tile_offset_y = tile_offset_y + TILE_SIZE;
			}
			else
			{
				tile_offset_x = tile_offset_x + TILE_SIZE;
			}
		}
		const start_game_text = this.add.text(WIDTH_CANVAS/2, HEIGHT_CANVAS/2, "IN GAME", {fontFamily: FONT_DEFAULT, color: "white", fontSize: "48px"}).setOrigin(0.5).setDepth(2);

		this.cursors = this.input.keyboard.addKeys("UP,LEFT,DOWN,RIGHT,W,A,S,D,R,SPACE");

		dude.sprite = this.add.sprite(WIDTH_CANVAS/2, HEIGHT_CANVAS/2, 'dude').setDisplaySize(dude.width, dude.height).setDepth(4);
	},
	update()
	{
		const left = this.cursors.A.isDown || this.cursors.LEFT.isDown;
		const right = this.cursors.D.isDown || this.cursors.RIGHT.isDown;
		const up = this.cursors.W.isDown || this.cursors.UP.isDown;
		const down = this.cursors.S.isDown || this.cursors.DOWN.isDown;

		if( (!left && !right) || (left && right))
		{
			if(dude.xvel > 0)
				dude.xvel = Math.max(0, dude.xvel - RUN_DECEL);
			else
				dude.xvel = Math.min(0, dude.xvel + RUN_DECEL);
		
			dude.sprite.x += dude.xvel;
		}

		if(up === down)
		{
			if(dude.yvel > 0)
				dude.yvel = Math.max(0, dude.yvel - RUN_DECEL);
			else
				dude.yvel = Math.min(0, dude.yvel + RUN_DECEL);

			dude.sprite.y += dude.yvel;
		}

		if (left && !right)
		{
			dude.xvel = Math.max(-MAX_SPEED, dude.xvel - RUN_ACCEL);
			dude.sprite.x += dude.xvel;  
		}
		else if (right && !left)
		{
			dude.xvel = Math.min(MAX_SPEED, dude.xvel + RUN_ACCEL);
			dude.sprite.x += dude.xvel;
		}
		if(up)
		{
			dude.yvel = Math.max(-MAX_SPEED, dude.yvel - RUN_ACCEL);
			dude.sprite.y += dude.yvel;
		}
		else if (down)
		{
			dude.yvel = Math.min(MAX_SPEED, dude.yvel + RUN_ACCEL);
			dude.sprite.y += dude.yvel;
		}

	}
});