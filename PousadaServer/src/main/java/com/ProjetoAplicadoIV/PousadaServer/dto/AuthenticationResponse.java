package com.ProjetoAplicadoIV.PousadaServer.dto;

import com.ProjetoAplicadoIV.PousadaServer.enun.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {

    private String jwt;

    private Long userId;

    private UserRole userRole;
}
