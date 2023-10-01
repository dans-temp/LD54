import {WIDTH_CANVAS, PADDING_CANVAS, HEIGHT_CANVAS, FONT_DEFAULT, FONT_TITLE} from "../globals.js";

const LEVELS = 
[
	{

			level: 1,
			buttons: 2,
			width: 40,
			height: 20,
			spawnx: 50,
			spawny: 50,
			button_sprites: [],
			portal_sprite: [],
			tiles: 
			[
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

			],
			things:
			[
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			]
	}
]

// PHYSICS
const RUN_ACCEL = 0.4;
const RUN_DECEL = 0.5;
const MAX_SPEED = 8;
const JUMPSPEED = 16;
const GRAVITY = 0.90;
const TILE_SIZE = 64;
const EPSILON = 0.00000000001;

const game = {
	ghosts: [],
	sprites: [],
	stored_actions: [],
	frame_counter: 500
}

const dude = {
    xvel: 0,
    yvel: 0,
	width: 64,
	height: 200,
    size_width: 168,
    size_height: 256,
	falling: true,
	facing_right: true,
	spawn_y : 800,
	level: 0,
	pressing_button_at: [],
	buttons_pressed: 0
};


export default new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function()
	{
		Phaser.Scene.call(this, {key: 'gameplay'});
	},
	preload: function()
	{
		this.load.spritesheet('idle',
			'assets/sprites/idle.png',
			{frameWidth: 42, frameHeight: 64}
		);
		this.load.spritesheet('run',
			'assets/sprites/run.png',
			{frameWidth: 42, frameHeight: 64}
		);
		this.load.spritesheet('jump',
			'assets/sprites/jump.png',
			{frameWidth: 42, frameHeight: 64}
		);
		this.load.spritesheet('falling',
			'assets/sprites/falling.png',
			{frameWidth: 42, frameHeight: 64}
		);

		this.load.image("platform-mid", "assets/sprites/platform-mid.png");
		this.load.image("platform-left", "assets/sprites/platform-left.png");
		this.load.image("platform-right", "assets/sprites/platform-right.png");
		this.load.image("button-up", "assets/sprites/button-up.png");
		this.load.image("button-down", "assets/sprites/button-down.png");
		this.load.image("portal-off", "assets/sprites/portal-off.png");
		this.load.image("portal-on", "assets/sprites/portal-on.png");
	},
		
	create: function()
	{
		//build level
		for(let i = 0; i < LEVELS[dude.level].tiles.length; i++)
		{
			for(let j = 0; j < LEVELS[dude.level].tiles[i].length; j++)
			{
				const tile_value = LEVELS[dude.level].tiles[i][j];
				if(tile_value != 0)
				{
					if(tile_value === 1)
						this.add.image(j*TILE_SIZE, i*TILE_SIZE, 'platform-mid').setScale(4).setOrigin(0,0);
					else if (tile_value === 2)
					{
						this.add.image(j*TILE_SIZE, i*TILE_SIZE, 'platform-left').setScale(4).setOrigin(0,0);
					}
						
					else if (tile_value === 3)
						this.add.image(j*TILE_SIZE, i*TILE_SIZE, 'platform-right').setScale(4).setOrigin(0,0);
				}
			}
		}
		//build buttons and portals
		for(let i = 0; i < LEVELS[dude.level].things.length; i++)
		{
			for(let j = 0; j < LEVELS[dude.level].things[i].length; j++)
			{
				const tile_value = LEVELS[dude.level].things[i][j];
				if(tile_value != 0)
				{
					if(tile_value === 1)
					{
						LEVELS[dude.level].button_sprites.push({
							image: this.add.image(j*TILE_SIZE, i*TILE_SIZE, 'button-up').setScale(4).setOrigin(0,0.9).setDepth(8),
							id: [i, j]
						})	
					}
					if(tile_value === 2)
					{
						LEVELS[dude.level].portal_sprite.push({
							image: this.add.image(j*TILE_SIZE, i*TILE_SIZE, 'portal-off').setScale(4).setOrigin(0,1).setDepth(8),
							id: [i, j]
						})	
						
					}
						
				}
			}
		}
		//animations
		this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("idle", {start: 0, end: 35}),
            frameRate: 20,
            repeat: -1
        });
		this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("run", {start: 0, end: 12}),
            frameRate: 15,
            repeat: -1
        });
		this.anims.create({
            key: "jump",
            frames: this.anims.generateFrameNumbers("jump", {start: 0, end: 8}),
            frameRate: 15,
            repeat: -1
        });
		this.anims.create({
            key: "falling",
            frames: this.anims.generateFrameNumbers("falling", {start: 0, end: 5}),
            frameRate: 15,
            repeat: -1
        });

		this.input.gamepad.start();
		this.cursors = this.input.keyboard.addKeys("UP,LEFT,DOWN,RIGHT,N,W,A,S,D,M,ENTER,SPACE");

		dude.sprite = this.add.sprite(300, dude.spawn_y, 'idle').setDisplaySize(dude.size_width, dude.size_height).setOrigin(0.5, 1).setDepth(4);
		this.cameras.main.startFollow(dude.sprite);
		this.cameras.main.setBounds(0, 0, WIDTH_CANVAS, HEIGHT_CANVAS);
		this.cameras.main.setZoom(1);
		dude.sprite.play("idle");

	},
	update()
	{

		const gamepad = this.input.gamepad.gamepads[0];

		const left = this.cursors.A.isDown || this.cursors.LEFT.isDown  || (gamepad && (gamepad.left || gamepad.leftStick.x < -0.1));
		const right = this.cursors.D.isDown || this.cursors.RIGHT.isDown || (gamepad && (gamepad.right || gamepad.leftStick.x > 0.1));
		const jump = this.cursors.W.isDown || this.cursors.UP.isDown || this.cursors.SPACE.isDown ||  (gamepad && gamepad.A);
		const down = this.cursors.S.isDown
		const restart = this.cursors.ENTER.isDown;


	// if(game.frame_counter % 10 === 0)
	{
		game.stored_actions.push(
			{
				x: dude.sprite.x,
				y: dude.sprite.y,
				xvel: dude.xvel,
				yvel: dude.yvel,
				animation: dude.sprite.anims.currentAnim.key
			}
		);
	}





		if( (!left && !right) || (left && right))
		{
			if (dude.sprite.anims.currentAnim.key !== "idle" && !dude.falling)
				dude.sprite.play("idle");
			if(dude.xvel > 0)
				dude.xvel = Math.max(0, dude.xvel - RUN_DECEL);
			else
				dude.xvel = Math.min(0, dude.xvel + RUN_DECEL);
		}

		if (left && !right)
		{
			if(!dude.falling)
			{
				dude.sprite.anims.play("run", true);
			}
			if(Math.max(-MAX_SPEED, dude.xvel - RUN_ACCEL) < dude.xvel)
				dude.xvel = Math.max(-MAX_SPEED, dude.xvel - RUN_ACCEL);
			dude.facing_right = false;
			dude.sprite.flipX = true;
		}
		else if(right && !left)
		{
			if(!dude.falling)
			{
				dude.sprite.anims.play("run", true);
			}
			if(Math.min(MAX_SPEED, dude.xvel + RUN_ACCEL) > dude.xvel)
				dude.xvel = Math.min(MAX_SPEED, dude.xvel + RUN_ACCEL);
			dude.facing_right = true;
			dude.sprite.flipX = false;
		}


		dude.x_old = dude.sprite.x;
		dude.y_old = dude.sprite.y;

		if(dude.falling)
			dude.yvel += GRAVITY;


		if(jump && !dude.falling)
		{
			dude.yvel = -JUMPSPEED;
			dude.falling = true;
		}

		dude.sprite.x += dude.xvel;
		dude.sprite.y += dude.yvel;

		
		//handle character moving out of the defined level
		// else if(dude.sprite.x > LEVELS[dude.level].width*TILE_SIZE - dude.width/2)
		// {
		// 	dude.sprite.x = LEVELS[dude.level].width*TILE_SIZE - dude.width/2 - EPSILON;
		// 	dude.xvel = 0;
		// }


		//land at the bottom untill we get tiles for collision
	
		if(dude.sprite.x < dude.width/2)
		{
			dude.sprite.x = dude.width/2;
			dude.xvel = 0;
		}
		if(dude.sprite.x > WIDTH_CANVAS - dude.width/2)
		{
			dude.sprite.x = WIDTH_CANVAS - dude.width/2;
			dude.xvel = 0;
		}

		// if(game.frame_counter % 10 === 0)
		{
			moveGhosts(this);
		}

		if(dude.sprite.y > HEIGHT_CANVAS)
		{
			dude.falling = false;
			dude.sprite.y = HEIGHT_CANVAS;
			dude.yvel = 0;
		}



		handleCollision(this);


			
		// player coordinates
		const index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
		const index_col = Math.floor(dude.sprite.x/TILE_SIZE);
		const index_col_left = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
		const index_col_right = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);

		if(index_row + 1 >= LEVELS[dude.level].height)
		{	
			//game over
			//player hit bottom
			console.log('game over')
		}

		//check if the player does not have a tile bellow them
		else if(!LEVELS[dude.level]?.tiles[index_row + 1][index_col_left] && !LEVELS[dude.level]?.tiles[index_row + 1][index_col_right])
		{
			dude.falling = true;
		}
		//if they do have a tile bellow them check if it is a button
		if(LEVELS[dude.level].things[index_row + 1][index_col_left] === 1 || LEVELS[dude.level].things[index_row + 1][index_col_right] === 1)
		{
			//store the index of the button being pressed
			if(LEVELS[dude.level].things[index_row + 1][index_col_left] === 1)
				dude.pressing_button_at = [index_row + 1,index_col_left];
			else
				dude.pressing_button_at = [index_row + 1,index_col_right];

			// console.log(dude.pressing_button_at[0] === LEVELS[dude.level].button_sprites[0].id[0] && dude.pressing_button_at[1] === LEVELS[dude.level].button_sprites[0].id[1])
			for(const level_button of LEVELS[dude.level].button_sprites)
			{
				if(dude.pressing_button_at[0] === level_button.id[0] && dude.pressing_button_at[1] === level_button.id[1])
				{
					if(level_button.image.texture.key !== 'button-down')
					{
						level_button.image.setTexture('button-down');
						dude.buttons_pressed ++;
						if(dude.buttons_pressed === LEVELS[dude.level].button_sprites.length)
						{
							LEVELS[dude.level].portal_sprite[0].image.setTexture('portal-on');
						}
					}
						
				}
			}
		}
		//if player leaves the button unpress it
		else if (dude.pressing_button_at != [])
		{

			for(const level_button of LEVELS[dude.level].button_sprites)
			{
				if(dude.pressing_button_at[0] === level_button.id[0] && dude.pressing_button_at[1] === level_button.id[1])
				{
					if(level_button.image.texture.key !== 'button-up')
					{
						level_button.image.setTexture('button-up');
						dude.buttons_pressed --;
						LEVELS[dude.level].portal_sprite[0].image.setTexture('portal-off');
					}	
				}
			}
			dude.pressing_button_at = [];
		}

		// console.log(dude.pressing_button_at)


		collideGhosts();
		handleCollision(this);

		// animate between falling and jumping
		if(dude.falling)
		{
			if(dude.yvel > 0 && dude.sprite.anims.currentAnim.key != "falling")
			{
				dude.sprite.play("falling");
			}
			else if (dude.sprite.anims.currentAnim.key != "jump" && dude.sprite.anims.currentAnim.key != "falling")
				dude.sprite.play("jump");
		}
		console.log(dude.buttons_pressed);
		timer();
	}
});


function handleCollision(state)
{
	if(dude.sprite.y > ((LEVELS[dude.level].height)*TILE_SIZE))
		return;

	function collideTile(index_row, index_col)
	{
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
			// state.emitter_dirt.explode(20, dude.sprite.x, dude.sprite.y);
			return;
		}

		//right
		if(dude.sprite.x + dude.width/2 - EPSILON > x_left  && dude.x_old + dude.width/2 - EPSILON  <= x_left)
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

const tint_colors = [0x018275, 0x9e9e05, 0x259104, 0xa10606]

function moveGhosts(state)
{  	

	let index = 0;
    for(const ghost of game.ghosts)
    {
		//only save every 10th ghost.
		// if(game.frame_counter % 10 !== 0)
		// {
		// 	game.sprites[game.sprites.length-1].old_x = game.sprites[game.sprites.length-1].sprite.x;
		// 	game.sprites[game.sprites.length-1].sprite.x = 5000;
		// }
		{
			game.sprites.push({
				sprite: state.add.sprite(ghost.actions[0].x, ghost.actions[0].y, 'idle').setOrigin(0.5, 1).setDisplaySize(dude.size_width, dude.size_height).setDepth(1)
			});
			game.sprites[game.sprites.length-1].sprite.tint = tint_colors[index];
		}
		index ++;



		// add flipx

		
        // if(ghost.actions[0].animation !== ghost.sprite.anims.currentAnim.key)
        // {
        //     ghost.sprite.play(ghost.actions[0].animation);
        // }

        ghost.actions.push(ghost.actions.shift());
    }
}


function timer()
{
	game.frame_counter--
	if(game.frame_counter === 0)
	{
		game.ghosts.push({
			actions: game.stored_actions.slice()
		});
		game.frame_counter = 500; // reset
		for(const sprite of game.sprites)
		{
			sprite.sprite.destroy();
		}
		game.sprites = [];
		game.stored_actions = [];
		dude.spawn_y -= 200;
		dude.sprite.x = 500;
		dude.sprite.y = dude.spawn_y;
		dude.buttons_pressed = 0;
		//unpress ghost buttons
		for(const level_button of LEVELS[dude.level].button_sprites)
		{
			if(level_button.image.texture.key !== 'button-up')
				level_button.image.setTexture('button-up');
		}
		LEVELS[dude.level].portal_sprite[0].image.setTexture('portal-off');
		
	}
}

//check for collision with all the past ghosts 


function collideGhosts()
{
	let standing_on_ghost = false;
	const dude_left = dude.sprite.x - dude.width/2;
	const dude_right = dude.sprite.x + dude.width/2;
	const dude_top = dude.sprite.y - dude.height;
	const dude_bottom = dude.sprite.y;

	for(const ghost_position of game.sprites)
	{
		const ghost_left = ghost_position.sprite.x - dude.width/2;
		const ghost_right = ghost_position.sprite.x + dude.width/2;
		const ghost_top = ghost_position.sprite.y - dude.height;
		const ghost_bottom = ghost_position.sprite.y;


		
		//collision with top of ghost
		//check if the bottom of the player is inside the the ghost
		if(dude_bottom >= ghost_top &&
			dude_bottom < ghost_bottom)
		{
			//check right foot & left foot
			if(((dude_right >= ghost_left &&
			   dude_right <= ghost_right) ||
			   (dude_left >= ghost_left &&
			   dude_left <= ghost_right)) &&
				dude.y_old <= ghost_top)
				{
					standing_on_ghost = true
					dude.sprite.y = ghost_top;
					dude.yvel = 0;
				}
		}
		//right side of the player
		if(dude_right > ghost_left && 
		   dude_right < ghost_right &&
		   dude.x_old <= ghost_left &&
		   dude_bottom > ghost_top &&
		   dude_top < ghost_bottom)
		{
			dude.sprite.x = ghost_left - dude.width/2;
			dude.xvel = 0
		}

		//left side of the player
		if(dude_left < ghost_right && 
			dude_left > ghost_left &&
			dude.x_old >= ghost_right &&
			dude_bottom > ghost_top &&
			dude_top < ghost_bottom)
		 {
			 dude.sprite.x = ghost_right + dude.width/2;
			 dude.xvel = 0
		 }



		//check if a ghost is above
		if(dude_top >= ghost_bottom && 
		   dude_bottom < ghost_bottom)
		{
			if((dude_right >= ghost_left &&
				dude_right <= ghost_right) ||
				(dude_left >= ghost_right &&
				dude_left <= ghost_right) &&
				dude.y_old >= ghost_bottom)
		   {
				dude.sprite.y = ghost_bottom - dude.height
		   }
		}

		const index_row = Math.floor((ghost_bottom - EPSILON)/TILE_SIZE);
		const index_col_left = Math.floor((ghost_left)/TILE_SIZE);
		const index_col_right = Math.floor((ghost_right - EPSILON)/TILE_SIZE);
		//check if a ghost is pressing a button
		if(LEVELS[dude.level].things[index_row + 1][index_col_left] === 1 || LEVELS[dude.level].things[index_row + 1][index_col_right] === 1)
		{
			let ghost_pressing_button_at = [];
			if(LEVELS[dude.level].things[index_row + 1][index_col_left] === 1)
				ghost_pressing_button_at = [index_row + 1,index_col_left];
			else
				ghost_pressing_button_at = [index_row + 1,index_col_right];
			for(const level_button of LEVELS[dude.level].button_sprites)
			{
				if(ghost_pressing_button_at[0] === level_button.id[0] && ghost_pressing_button_at[1] === level_button.id[1])
				{
					if(level_button.image.texture.key !== 'button-down')
					{
						level_button.image.setTexture('button-down');
						dude.buttons_pressed ++;
						if(dude.buttons_pressed === LEVELS[dude.level].button_sprites.length)
						{
							LEVELS[dude.level].portal_sprite[0].image.setTexture('portal-on');
						}
					}
						
				}
			}
			
		}
	}

	if(standing_on_ghost)
		dude.falling = false;
}




