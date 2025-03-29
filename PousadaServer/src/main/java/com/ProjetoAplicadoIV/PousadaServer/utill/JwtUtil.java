package com.ProjetoAplicadoIV.PousadaServer.utill;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    // Método para gerar o token JWT
    public String generateToken(Map<String, Object> extraClaims, UserDetails details) {
        return Jwts.builder()
                .claims(extraClaims) // Define os claims (informações adicionais)
                .subject(details.getUsername()) // Define o assunto (normalmente o nome de usuário)
                .issuedAt(new Date(System.currentTimeMillis())) // Define a data de emissão
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // Define a data de expiração (24 horas)
                .signWith(getSigningKey()) // Assina o token com a chave
                .compact(); // Converte o token em uma string
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String userName = extractUserName(token);
        return (userName.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Método para obter a chave de assinatura
    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode("413F4428472B64B6250655368566D5970637336793979244226425948404D6351");
        return Keys.hmacShaKeyFor(keyBytes); // Retorna a chave HMAC
    }
}