import java.io.FileNotFoundException; //������ ������ (���� ��Ȳ)
import java.io.IOException;
import java.io.PrintWriter;

import javax.swing.JOptionPane;
public class InstanceApp {

	public static void main(String[] args) throws IOException {//������ ������ (���� ��Ȳ) ���� ��
		PrintWriter p1 = new PrintWriter("result1.txt");
		p1.write(JOptionPane.showInputDialog("input about txt"));
		p1.close();
//		
//		PrintWriter.write("result1.txt", "Hello 1");
//		PrintWriter.write("result2.txt", "Hello 2");
//		PrintWriter.write("result3.txt", "Hello 3");
//		PrintWriter.write("result4.txt", "Hello 4");
//		PrintWriter.write("result5.txt", "Hello 5");
		// �� �������� ���̴� new�� ���� instance�� ����� �������� ������ ���¸� �����ϰ� �ִ�
		// ��ȣ���� constructor �� instance p1�� �ȴ�.
		// math ���� ��� constructor�� ����.
		
	}

}
