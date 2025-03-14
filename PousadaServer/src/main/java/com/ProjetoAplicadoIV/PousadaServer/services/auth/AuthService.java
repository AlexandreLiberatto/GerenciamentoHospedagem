package com.ProjetoAplicadoIV.PousadaServer.services.auth;

import com.ProjetoAplicadoIV.PousadaServer.dto.SignupRequest;
import com.ProjetoAplicadoIV.PousadaServer.dto.UserDto;

public interface AuthService {

    UserDto createUser(SignupRequest signupRequest);
}
