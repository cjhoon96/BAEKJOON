public class String_Character {

	public static void main(java.lang.String[] args) {
		System.out.println("Hello World");					// String
//		System.out.println('Hello World');					// ''�� Character Ÿ���̱� ������ �ϳ��� ���ڸ� ����.
		System.out.println('H');							// Character
		System.out.println("H");							// String
		
		//new line
		System.out.println("new\nline");					// \n �� new line�� ���ڷ� ���� �ٲ��ش�.
		
		//escape
		System.out.println("Hello \"World\"");				// \ �� �ӹ��� �ִ� ������ �ӹ��� �Ͻ������� �ع��Ų��. 
		
		//length
		System.out.println("Hello \"World\"".length());
		
		//replace
		System.out.println("Hello, [[[name]]]".replace("[[[name]]]", "jihoon"));
	}

}
