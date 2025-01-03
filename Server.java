import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) {
        try {
            // O servidor irá escutar na porta 12345
            ServerSocket serverSocket = new ServerSocket(12345);
            System.out.println("Servidor aguardando conexões na porta 12345...");

            // Aguarda a conexão de um cliente
            Socket socket = serverSocket.accept();
            System.out.println("Cliente conectado: " + socket.getInetAddress());

            // Fluxo de entrada e saída de dados
            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

            String message;
            while ((message = input.readLine()) != null) {
                System.out.println("Mensagem recebida: " + message);
                // Responde ao cliente
                output.println("Mensagem recebida: " + message);
            }

            // Fecha a conexão
            socket.close();
            serverSocket.close();
        } catch (IOException e) {
            System.err.println("Erro ao iniciar o servidor: " + e.getMessage());
        }
    }
}
