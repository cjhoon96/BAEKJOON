public class Casting {

	public static void main(String[] args) {
		double a = 1.1;
//		int b = 1.1;					// ������ ����. 1.1�� int�� �ϴ� ��� ������ �ս��� �Ͼ�� ������ �ڵ����� int�� casting ������ �ʴ´�.
		int b = (int) 1.1;				// ���� int��� ��������� ǥ���� �ش�.
		System.out.println("a = " + a);
		System.out.println("b = " + b);
		
		// int to String
		String f = Integer.toString(b);
		System.out.println("f = " + f);
		
		//.getClass() ������ ������ Ÿ���� �ҷ��´�.
		System.out.println(f.getClass()); //int double���� ���� ��?	Cannot invoke getClass() on the primitive type int
	}

}
