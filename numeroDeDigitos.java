import java.util.Scanner;

public class numeroDeDigitos {

    public static void main(String[] args) {

        Scanner cantidad = new Scanner(System.in);

        System.out.println("Escribe un número");
        int numero = cantidad.nextInt();

        int cifras = cuentaCifras(numero);

        System.out.println("Numero de cifras: " + cifras);

    }

    public static int cuentaCifras(int num) {

        int contador = 0;

        if (num == 0) {
            contador = 1;
        } else {

            for (int i = Math.abs(num); i > 0; i /= 10) {
                contador++;
            }

        }

        return contador;
    }

}