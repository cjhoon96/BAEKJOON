import java.io.FileNotFoundException; //파일이 없을시 (예외 상황)
import java.io.IOException;
import java.io.PrintWriter;

import javax.swing.JOptionPane;
public class InstanceApp {

	public static void main(String[] args) throws IOException {//파일이 없을시 (예외 상황) 아직 모름
		PrintWriter p1 = new PrintWriter("result1.txt");
		p1.write(JOptionPane.showInputDialog("input about txt"));
		p1.close();
//		
//		PrintWriter.write("result1.txt", "Hello 1");
//		PrintWriter.write("result2.txt", "Hello 2");
//		PrintWriter.write("result3.txt", "Hello 3");
//		PrintWriter.write("result4.txt", "Hello 4");
//		PrintWriter.write("result5.txt", "Hello 5");
		// 위 과정과의 차이는 new를 통해 instance를 만들어 변수마다 각자의 상태를 내장하고 있다
		// 괄호안의 constructor 가 instance p1이 된다.
		// math 같은 경우 constructor가 없다.
		
	}

}
