package aPong;

import java.awt.*;
import java.awt.event.*;
import java.io.File;
import java.io.IOException;
import java.util.*;

import javax.imageio.ImageIO;
import javax.swing.*;

public class Score extends Rectangle {
	
	static int GAME_WIDTH;
	static int GAME_HEIGHT;
	int player1;
	int player2;
	
	Score(int GAME_WIDTH, int GAME_HEIGHT) {
		Score.GAME_WIDTH = GAME_WIDTH;
		Score.GAME_HEIGHT = GAME_HEIGHT;
	}
	
	public void draw (Graphics g)  {
		
	if (player1 <=1 ) {	
		g.setColor(Color.white);
		g.setFont(new Font("Consolas", Font.PLAIN, 60));
		
		g.drawLine(GAME_WIDTH/2, 0, GAME_WIDTH /2, GAME_HEIGHT);
		g.drawString(String.valueOf(player1/10)+String.valueOf(player1%10), (GAME_WIDTH/2) -80, 50);
		g.drawString(String.valueOf(player2/10)+String.valueOf(player2%10), (GAME_WIDTH/2) +20, 50);
		
	} 
	
//	else {
//		try {
//		Image img = ImageIO.read(new File("yup/den.jpg"));
//		g.drawImage(img, 0, 0, GAME_WIDTH, GAME_HEIGHT, 10, 10, GAME_WIDTH, GAME_HEIGHT, null);
//		Image img2 = ImageIO.read(new File("yup/lana.jpg"));
//		g.drawImage(img2, 400, 0, GAME_WIDTH, GAME_HEIGHT, 10, 10, GAME_WIDTH, GAME_HEIGHT, null);
//		} catch (IOException e) {
//			
//			
//	    }
//	}
		
		
	}

}
