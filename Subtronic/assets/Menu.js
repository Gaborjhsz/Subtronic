
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
		
		// far
		const far = this.add.image(403, 306, "far");
		far.scaleX = 3.8357821504361636;
		far.scaleY = 3.1953116100128063;
		
		// sand
		const sand = this.add.image(384, 280, "sand");
		sand.scaleX = 4.20020492094463;
		sand.scaleY = 3.44001967577543;
		
		// foregound_merged
		const foregound_merged = this.add.image(403, 298, "foregound-merged");
		foregound_merged.scaleX = 2.3162658745400493;
		foregound_merged.scaleY = 3.278645022432025;
		
		// Avatar
		this.add.sprite(402, 226, "idle1");
		
		// text
		const text = this.add.text(215, 32, "", {});
		text.text = "Subtronic";
		text.setStyle({"color":"#e3e652ff","fixedHeight":90,"fontSize":"85px","fontStyle":"bold","stroke":"#080808ff","strokeThickness":15,"shadow.color":"#000000ff"});
		
		// text_1
		const text_1 = this.add.text(412, 338, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.tintFill = true;
		text_1.text = "Press Space to Play!";
		text_1.setStyle({"align":"center","color":"#0b0b0bff","fontSize":"60px","fontStyle":"italic","stroke":"#242ca1ff","strokeThickness":3,"shadow.offsetX":1,"shadow.offsetY":1,"shadow.color":"#000000ff","shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
		text_1.setPadding({"left":10,"top":10,"right":10,"bottom":10});
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
