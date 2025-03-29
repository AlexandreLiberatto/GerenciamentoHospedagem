package com.ProjetoAplicadoIV.PousadaServer.dto;

import com.ProjetoAplicadoIV.PousadaServer.enun.UserRole;
import lombok.Data;

@Data
public class UserDto {

    private Long id;

    private String email;

    private String name;

    private UserRole userRole;
}
