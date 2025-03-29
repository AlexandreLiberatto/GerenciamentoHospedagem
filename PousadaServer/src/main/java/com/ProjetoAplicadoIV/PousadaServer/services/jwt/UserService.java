package com.ProjetoAplicadoIV.PousadaServer.services.jwt;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {

    UserDetailsService userDetailsService();
}
