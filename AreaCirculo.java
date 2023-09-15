import java.util.Scanner;
/**
 *
 * @author User
 */
public class AreaCirculo {
    public static void main(String[] args) {
        int Radio;
        System.out.println("Escribe el radio:");
        Scanner radio = new Scanner(System.in);
        Radio = radio.nextInt();
        double Area = Math.PI * Math.pow(Radio, 2);
        System.out.println("El area del cículo es:" + Area);
    }

}
