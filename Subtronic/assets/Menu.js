
// You can write more code here

/* START OF COMPILED CODE */

class Menu extends Phaser.Scene {
	
	constructor() {
		super("Menu");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// background
		const background = this.add.tileSprite(288, 256, 288, 256, "background");
		background.scaleX = 4.075890006016809;
		background.scaleY = 2.736483904238448;
		
		// midground
		const midground = this.add.tileSprite(288, 256, 960, 512, "midground");
		midground.scaleX = 1.2929040415813702;
		midground.scaleY = 1.3635964369315612;
		
		// text_1
		const text_1 = this.add.text(412, 338, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.tintFill = true;
		text_1.text = "Press Space to Play!";
		text_1.setStyle({"align":"center","color":"#0b0b0bff","fontSize":"60px","fontStyle":"italic","stroke":"#242ca1ff","strokeThickness":3,"shadow.offsetX":1,"shadow.offsetY":1,"shadow.color":"#000000ff","shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
		text_1.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		
		// Avatar
		this.add.sprite(402, 189, "idle1");
		
		// text
		const text = this.add.text(215, 32, "", {});
		text.text = "Subtronic";
		text.setStyle({"color":"#e3e652ff","fixedHeight":90,"fontSize":"85px","fontStyle":"bold","stroke":"#080808ff","strokeThickness":15,"shadow.color":"#000000ff"});
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
