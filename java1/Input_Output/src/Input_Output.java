import javax.swing.JOptionPane;

public class Input_Output {

	public static void main(String[] args) {
		String name = JOptionPane.showInputDialog("Input name");
		int math = Integer.parseInt(JOptionPane.showInputDialog("Input math score"));
		int sci = Integer.parseInt(JOptionPane.showInputDialog("Input math score"));
		double average = (double)(math + sci)/2;
		System.out.println(name + "\nmath" + math + "\nscience" + sci + "\naverage" + average);
		
	}

}
