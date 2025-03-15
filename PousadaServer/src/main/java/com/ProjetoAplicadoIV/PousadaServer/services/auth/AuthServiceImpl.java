package com.ProjetoAplicadoIV.PousadaServer.services.auth;

import com.ProjetoAplicadoIV.PousadaServer.dto.SignupRequest;
import com.ProjetoAplicadoIV.PousadaServer.dto.UserDto;
import com.ProjetoAplicadoIV.PousadaServer.entity.User;
import com.ProjetoAplicadoIV.PousadaServer.enun.UserRole;
import com.ProjetoAplicadoIV.PousadaServer.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    @PostConstruct
    public void createAnAdminAccount() {
        Optional<User> adminAccount = userRepository.findByUserRole(UserRole.ADMIN);
        if (adminAccount.isEmpty()) {
            User user = new User();
            user.setEmail("admin@test.com");
            user.setName("admin");
            user.setUserRole(UserRole.ADMIN);
            user.setPassword(new BCryptPasswordEncoder().encode("admin"));
            userRepository.save(user);
            System.out.println("Conta de administrador criada com sucesso!");
        } else {
            System.out.println("Esta conta de administrador já existe!");
        }
    }

    public UserDto createUser(SignupRequest signupRequest){
        if(userRepository.findFirstByEmail(signupRequest.getEmail()).isPresent()){
            throw new EntityExistsException("Já existe um usuário com este e-mail!" + signupRequest.getEmail());
        }

        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setName(signupRequest.getName());
        user.setUserRole(UserRole.CUSTOMER);
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        User createUser = userRepository.save(user);
        return createUser.getUserDto();
    }
}