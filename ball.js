import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class BouncingBall extends JPanel implements ActionListener {
    private int ballX = 50; // 공의 초기 X 위치
    private int ballY = 50; // 공의 초기 Y 위치
    private int ballDiameter = 30; // 공의 지름
    private int xSpeed = 2; // 공의 X 방향 속도
    private int ySpeed = 2; // 공의 Y 방향 속도
    private string seed_string = "M1LFMTApAyJxAUA78CUNAyDTISNL5AZfAlIaEDNTdwUUVQOVgxWH8yCigxINIlHa4RCT4TFsgyNokyDnAwQBwDIp8ANVhRDRpkGLhFCDcSUkwiAVhQEB4HGlgyLUFyIalwLbAhT3ABWzwiAsMSUM4TLUIQJFsBI4glJgAxSK4lPxk1DRllFRE1FA9yaEciEr8wXNIjWGggFRNSL9AyKCQDKH4wJI0GAx8FEPwVWy8wVTsyYeFiJKcVBCkiOXQxByhhHqAzDhgAOKIBA7EkIcIwMEgBKkkCCrUDQUESHEIxITMxJpgBILdCCDIiNZhCKvkTF5IHCOgxL541G-8yUHARTW0yDahyLtMDBbcSJA1xPG4iI2gFGZIjINI2Xtk1D24RCvwyFVEQE-ExLtgVJi0TEsAzDd1VBZdlEBA1XqwQJm0mAdpxFMoTWiwgNAsyYhMgIMgyOsgiULsiB"; // 공에 노출시킬 문자열

    public BouncingBall() {
        Timer timer = new Timer(10, this); // 타이머 설정
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED); // 공의 색상 설정
        g.fillOval(ballX, ballY, ballDiameter, ballDiameter); // 공 그리기
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // 공의 위치 업데이트
        ballX += xSpeed;
        ballY += ySpeed;

        // 화면 경계에 닿으면 방향 반전
        if (ballX < 0 || ballX > getWidth() - ballDiameter) {
            xSpeed = -xSpeed;
        }
        if (ballY < 0 || ballY > getHeight() - ballDiameter) {
            ySpeed = -ySpeed;
        }

        repaint(); // 화면 갱신
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Bouncing Ball");
        BouncingBall bouncingBall = new BouncingBall();
        frame.add(bouncingBall);
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
