public class String_Character {

	public static void main(java.lang.String[] args) {
		System.out.println("Hello World");					// String
//		System.out.println('Hello World');					// ''는 Character 타입이기 때문에 하나의 문자만 들어간다.
		System.out.println('H');							// Character
		System.out.println("H");							// String
		
		//new line
		System.out.println("new\nline");					// \n 은 new line의 약자로 줄을 바꿔준다.
		
		//escape
		System.out.println("Hello \"World\"");				// \ 는 임무가 있는 문자의 임무를 일시적으로 해방시킨다. 
		
		//length
		System.out.println("Hello \"World\"".length());
		
		//replace
		System.out.println("Hello, [[[name]]]".replace("[[[name]]]", "jihoon"));
	}

}
